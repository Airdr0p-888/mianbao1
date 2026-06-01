// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * Minimal CREATE2 deployer.
 * Deploys any bytecode via CREATE2 so the deployed address
 * can be pre-computed off-chain for vanity-suffix matching.
 */
contract VanityDeployer {
    event Deployed(address indexed addr, bytes32 salt);

    function deploy(bytes memory bytecode, bytes32 salt)
        external
        returns (address addr)
    {
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }
        require(addr != address(0), "CREATE2 failed");
        emit Deployed(addr, salt);
    }

    // Allow receiving BNB (required when the bytecode constructor is payable)
    receive() external payable {}
}

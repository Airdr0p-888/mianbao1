const fs = require('fs');
const solc = require('C:/Users/Administrator/.workbuddy/binaries/node/versions/22.12.0/node_modules/solc');

const source = fs.readFileSync('ModaMintToken.sol', 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'ModaMintToken.sol': { content: source }
    },
    settings: {
        optimizer: { enabled: true, runs: 200 },
        viaIR: true,
        evmVersion: 'paris',
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode.object']
            }
        }
    }
};

console.log('Compiling...');
const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
    output.errors.forEach(e => console.log(e.severity + ': ' + e.formattedMessage));
}

const hasError = output.errors && output.errors.some(e => e.severity === 'error');
if (hasError) {
    console.log('COMPILATION FAILED');
    process.exit(1);
}

if (!output.contracts || !output.contracts['ModaMintToken.sol']) {
    console.log('ERROR: No contracts compiled');
    process.exit(1);
}

const contracts = output.contracts['ModaMintToken.sol'];
fs.mkdirSync('compiled', { recursive: true });

for (const [name, data] of Object.entries(contracts)) {
    const abiFile = `compiled/${name}.abi`;
    const binFile = `compiled/${name}.bin`;
    fs.writeFileSync(abiFile, JSON.stringify(data.abi, null, 2));
    fs.writeFileSync(binFile, data.evm.bytecode.object);
    console.log(`${name}: ABI=${data.abi.length} entries, BYTECODE=${data.evm.bytecode.object.length} chars`);
}

console.log('DONE');

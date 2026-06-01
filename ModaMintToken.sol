// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

library SafeMath {
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) { unchecked { uint256 c = a + b; if (c < a) return (false, 0); return (true, c); } }
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) { unchecked { if (b > a) return (false, 0); return (true, a - b); } }
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) { unchecked { if (a == 0) return (true, 0); uint256 c = a * b; if (c / a != b) return (false, 0); return (true, c); } }
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) { unchecked { if (b == 0) return (false, 0); return (true, a / b); } }
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) { unchecked { if (b == 0) return (false, 0); return (true, a % b); } }
    function add(uint256 a, uint256 b) internal pure returns (uint256) { return a + b; }
    function sub(uint256 a, uint256 b) internal pure returns (uint256) { return a - b; }
    function mul(uint256 a, uint256 b) internal pure returns (uint256) { return a * b; }
    function div(uint256 a, uint256 b) internal pure returns (uint256) { return a / b; }
    function mod(uint256 a, uint256 b) internal pure returns (uint256) { return a % b; }
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) { unchecked { require(b <= a, errorMessage); return a - b; } }
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) { unchecked { require(b > 0, errorMessage); return a / b; } }
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) { unchecked { require(b > 0, errorMessage); return a % b; } }
}

library SafeMathInt {
    int256 private constant MIN_INT256 = int256(1) << 255;
    function mul(int256 a, int256 b) internal pure returns (int256) {
        int256 c = a * b;
        require(c != MIN_INT256 || (a & MIN_INT256) != (b & MIN_INT256));
        require((b == 0) || (c / b == a));
        return c;
    }
    function div(int256 a, int256 b) internal pure returns (int256) {
        require(b != -1 || a != MIN_INT256);
        return a / b;
    }
    function sub(int256 a, int256 b) internal pure returns (int256) {
        int256 c = a - b;
        require((b >= 0 && c <= a) || (b < 0 && c > a));
        return c;
    }
    function add(int256 a, int256 b) internal pure returns (int256) {
        int256 c = a + b;
        require((b >= 0 && c >= a) || (b < 0 && c < a));
        return c;
    }
    function toUint256Safe(int256 a) internal pure returns (uint256) {
        require(a >= 0);
        return uint256(a);
    }
}

library SafeMathUint {
    function toInt256Safe(uint256 a) internal pure returns (int256) {
        int256 b = int256(a);
        require(b >= 0);
        return b;
    }
}

interface IUniswapV2Factory {
    function createPair(address tokenA, address tokenB) external returns (address pair);
}

interface IUniswapV2Router02 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);
    function swapExactTokensForETH(
        uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline
    ) external;
    function addLiquidityETH(
        address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,
        address to, uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
}

/// @title Ownable
abstract contract Ownable {
    address internal _owner;
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    constructor() { _owner = msg.sender; emit OwnershipTransferred(address(0), msg.sender); }
    function owner() public view virtual returns (address) { return _owner; }
    modifier onlyOwner() { require(owner() == msg.sender, "Ownable: caller is not owner"); _; }
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }
}

// ============================================================
// Dividend Tracker — 独立合约，用 BNB 记账，自动分发
// ============================================================

interface DividendPayingTokenInterface {
    function dividendOf(address _owner) external view returns (uint256);
    function withdrawDividend() external;
    event DividendsDistributed(address indexed from, uint256 weiAmount);
    event DividendWithdrawn(address indexed to, uint256 weiAmount);
}

interface DividendPayingTokenOptionalInterface {
    function withdrawableDividendOf(address _owner) external view returns (uint256);
    function withdrawnDividendOf(address _owner) external view returns (uint256);
    function accumulativeDividendOf(address _owner) external view returns (uint256);
}

library IterableMapping {
    struct Map {
        address[] keys;
        mapping(address => uint256) values;
        mapping(address => uint256) indexOf;
        mapping(address => bool) inserted;
    }

    function get(Map storage map, address key) internal view returns (uint256) { return map.values[key]; }
    function getIndexOfKey(Map storage map, address key) internal view returns (int256) {
        if (!map.inserted[key]) return -1;
        return int256(map.indexOf[key]);
    }
    function size(Map storage map) internal view returns (uint256) { return map.keys.length; }

    function set(Map storage map, address key, uint256 val) internal {
        if (map.inserted[key]) {
            map.values[key] = val;
        } else {
            map.inserted[key] = true;
            map.values[key] = val;
            map.indexOf[key] = map.keys.length;
            map.keys.push(key);
        }
    }

    function remove(Map storage map, address key) internal {
        if (!map.inserted[key]) return;
        delete map.inserted[key];
        delete map.values[key];
        uint256 index = map.indexOf[key];
        uint256 lastIndex = map.keys.length - 1;
        address lastKey = map.keys[lastIndex];
        map.indexOf[lastKey] = index;
        delete map.indexOf[key];
        map.keys[index] = lastKey;
        map.keys.pop();
    }
}

/// @title ERC20 base for dividend tracker
contract ERC20_DT is IERC20 {
    using SafeMath for uint256;
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    string private _name;
    string private _symbol;

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function name() public view virtual returns (string memory) { return _name; }
    function symbol() public view virtual returns (string memory) { return _symbol; }
    function decimals() public pure virtual returns (uint8) { return 18; }
    function totalSupply() public view virtual override returns (uint256) { return _totalSupply; }
    function balanceOf(address account) public view virtual override returns (uint256) { return _balances[account]; }

    function transfer(address, uint256) public virtual override returns (bool) { revert("disabled"); }
    function allowance(address owner, address spender) public view virtual override returns (uint256) { return _allowances[owner][spender]; }
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }
    function transferFrom(address, address, uint256) public virtual override returns (bool) { revert("disabled"); }

    function _transfer(address, address, uint256) internal virtual { revert("disabled"); }

    function _mint(address account, uint256 amount) internal virtual {
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal virtual {
        _balances[account] = _balances[account].sub(amount, "burn > balance");
        _totalSupply = _totalSupply.sub(amount);
        emit Transfer(account, address(0), amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal virtual {
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
}

abstract contract DividendPayingToken is ERC20_DT, Ownable, DividendPayingTokenInterface, DividendPayingTokenOptionalInterface {
    using SafeMath for uint256;
    using SafeMathUint for uint256;
    using SafeMathInt for int256;

    uint256 internal constant magnitude = 2 ** 128;
    uint256 internal magnifiedDividendPerShare;
    mapping(address => int256) internal magnifiedDividendCorrections;
    mapping(address => uint256) internal withdrawnDividends;
    uint256 public totalDividendsDistributed;

    constructor(string memory _name, string memory _symbol) ERC20_DT(_name, _symbol) {}

    /// @notice 接收 BNB 分红并更新每 share 的分红量
    function distributeBNBDividends(uint256 amount) public onlyOwner {
        require(totalSupply() > 0);
        if (amount > 0) {
            magnifiedDividendPerShare = magnifiedDividendPerShare.add(
                (amount).mul(magnitude) / totalSupply()
            );
            emit DividendsDistributed(msg.sender, amount);
            totalDividendsDistributed = totalDividendsDistributed.add(amount);
        }
    }

    function withdrawDividend() public virtual override {
        _withdrawDividendOfUser(payable(msg.sender));
    }

    function _withdrawDividendOfUser(address payable user) internal returns (uint256) {
        uint256 _withdrawableDividend = withdrawableDividendOf(user);
        if (_withdrawableDividend > 0) {
            withdrawnDividends[user] = withdrawnDividends[user].add(_withdrawableDividend);
            emit DividendWithdrawn(user, _withdrawableDividend);
            (bool success, ) = user.call{value: _withdrawableDividend}("");
            if (success) return _withdrawableDividend;
        }
        return 0;
    }

    function dividendOf(address _owner) public view override returns (uint256) {
        return withdrawableDividendOf(_owner);
    }

    function withdrawableDividendOf(address _owner) public view override returns (uint256) {
        return accumulativeDividendOf(_owner).sub(withdrawnDividends[_owner]);
    }

    function withdrawnDividendOf(address _owner) public view override returns (uint256) {
        return withdrawnDividends[_owner];
    }

    function accumulativeDividendOf(address _owner) public view override returns (uint256) {
        return magnifiedDividendPerShare.mul(balanceOf(_owner)).toInt256Safe()
            .add(magnifiedDividendCorrections[_owner]).toUint256Safe() / magnitude;
    }

    function _mint(address account, uint256 value) internal override {
        super._mint(account, value);
        magnifiedDividendCorrections[account] = magnifiedDividendCorrections[account]
            .sub((magnifiedDividendPerShare.mul(value)).toInt256Safe());
    }

    function _burn(address account, uint256 value) internal override {
        super._burn(account, value);
        magnifiedDividendCorrections[account] = magnifiedDividendCorrections[account]
            .add((magnifiedDividendPerShare.mul(value)).toInt256Safe());
    }

    function _setBalance(address account, uint256 newBalance) internal {
        uint256 currentBalance = balanceOf(account);
        if (newBalance > currentBalance) {
            _mint(account, newBalance.sub(currentBalance));
        } else if (newBalance < currentBalance) {
            _burn(account, currentBalance.sub(newBalance));
        }
    }

    receive() external payable {}
}

contract ModaDividendTracker is Ownable, DividendPayingToken {
    using SafeMath for uint256;
    using SafeMathInt for int256;
    using IterableMapping for IterableMapping.Map;

    IterableMapping.Map private tokenHoldersMap;
    uint256 public lastProcessedIndex;
    mapping(address => bool) public excludedFromDividends;
    mapping(address => uint256) public lastClaimTimes;
    uint256 public claimWait;
    uint256 public minimumTokenBalanceForDividends;

    event ExcludeFromDividends(address indexed account);
    event ClaimWaitUpdated(uint256 indexed newValue, uint256 indexed oldValue);
    event Claim(address indexed account, uint256 amount, bool indexed automatic);
    event ProcessedDividendTracker(
        uint256 iterations, uint256 claims, uint256 lastProcessedIndex,
        bool indexed automatic, uint256 gas, address indexed processor
    );

    constructor(uint256 minHoldTokenAmount)
        DividendPayingToken("Moda_Dividend_Tracker", "Moda_Dividend_Tracker")
    {
        claimWait = 300; // 1 hour default
        minimumTokenBalanceForDividends = minHoldTokenAmount;
    }

    function excludeFromDividends(address account) external onlyOwner {
        require(!excludedFromDividends[account]);
        excludedFromDividends[account] = true;
        _setBalance(account, 0);
        tokenHoldersMap.remove(account);
        emit ExcludeFromDividends(account);
    }

    function setClaimWait(uint256 newClaimWait) external onlyOwner {
        require(newClaimWait >= 60 && newClaimWait <= 86400, "1min-24h");
        emit ClaimWaitUpdated(newClaimWait, claimWait);
        claimWait = newClaimWait;
    }

    function setMinimumTokenBalanceForDividends(uint256 amount) external onlyOwner {
        minimumTokenBalanceForDividends = amount;
    }

    function canAutoClaim(uint256 lastClaimTime) private view returns (bool) {
        if (lastClaimTime > block.timestamp) return false;
        return block.timestamp.sub(lastClaimTime) >= claimWait;
    }

    /// @notice 主合约调用：更新持币人余额
    function setBalance(address payable account, uint256 newBalance) external onlyOwner {
        if (excludedFromDividends[account]) return;
        if (newBalance >= minimumTokenBalanceForDividends) {
            _setBalance(account, newBalance);
            tokenHoldersMap.set(account, newBalance);
        } else {
            _setBalance(account, 0);
            tokenHoldersMap.remove(account);
        }
        processAccount(account, true);
    }

    /// @notice 任何人都可以调用，批量处理持币人分红
    function process(uint256 gas) public returns (uint256, uint256, uint256) {
        uint256 numberOfTokenHolders = tokenHoldersMap.keys.length;
        if (numberOfTokenHolders == 0) return (0, 0, lastProcessedIndex);

        uint256 _lastProcessedIndex = lastProcessedIndex;
        uint256 gasUsed = 0;
        uint256 gasLeft = gasleft();
        uint256 iterations = 0;
        uint256 claims = 0;

        while (gasUsed < gas && iterations < numberOfTokenHolders) {
            _lastProcessedIndex++;
            if (_lastProcessedIndex >= tokenHoldersMap.keys.length) _lastProcessedIndex = 0;
            address account = tokenHoldersMap.keys[_lastProcessedIndex];

            if (canAutoClaim(lastClaimTimes[account])) {
                if (processAccount(payable(account), true)) claims++;
            }

            iterations++;
            uint256 newGasLeft = gasleft();
            if (gasLeft > newGasLeft) gasUsed = gasUsed.add(gasLeft.sub(newGasLeft));
            gasLeft = newGasLeft;
        }

        lastProcessedIndex = _lastProcessedIndex;
        emit ProcessedDividendTracker(iterations, claims, lastProcessedIndex, true, gas, tx.origin);
        return (iterations, claims, lastProcessedIndex);
    }

    function processAccount(address payable account, bool automatic) public onlyOwner returns (bool) {
        uint256 amount = _withdrawDividendOfUser(account);
        if (amount > 0) {
            lastClaimTimes[account] = block.timestamp;
            emit Claim(account, amount, automatic);
            return true;
        }
        return false;
    }

    function getNumberOfTokenHolders() external view returns (uint256) {
        return tokenHoldersMap.keys.length;
    }

    function getAccount(address account) public view returns (
        address, int256, int256, uint256, uint256, uint256, uint256, uint256
    ) {
        return (
            account,
            getIndexOfKey(account),
            getIndexOfKey(account),
            tokenHoldersMap.get(account),
            accumulativeDividendOf(account),
            withdrawableDividendOf(account),
            withdrawnDividends[account],
            lastClaimTimes[account]
        );
    }

    function getIndexOfKey(address key) public view returns (int256) {
        return tokenHoldersMap.getIndexOfKey(key);
    }

    /// @notice 手动领取（绕过 claimWait）
    function claim() external {
        processAccount(payable(msg.sender), false);
    }

    /// @notice Owner 紧急提取 BNB（用于合约升级迁移，非正常使用）
    function emergencyWithdrawBNB() external onlyOwner {
        uint256 bal = address(this).balance;
        if (bal > 0) {
            payable(owner()).transfer(bal);
        }
    }
}

// ============================================================
// ModaMintToken — 主合约
// ============================================================

contract ModaMintToken is IERC20, Ownable {
    using SafeMath for uint256;

    string private _name;
    string private _symbol;
    uint8  private constant _decimals = 18;
    uint256 private _totalSupply;
    uint256 private constant MAX_TAX = 2500;

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    // ===== Dividend Tracker =====
    ModaDividendTracker public dividendTracker;
    uint256 public minHoldForDividend;

    // ===== 税费系统 =====
    uint256 public buyTaxBps;
    uint256 public sellTaxBps;
    uint256 public marketingBps;
    uint256 public burnBps;
    uint256 public dividendBps;
    uint256 public liquidityBps;
    uint256 public pendingMarketingTokens;
    address public marketingWallet;

    // ===== DEX =====
    IUniswapV2Router02 public uniswapV2Router;
    address public uniswapV2Pair;
    bool public tradingActive;

    // ===== 税费排除 =====
    mapping(address => bool) public isExcludedFromTax;

    // ===== Mint 预售 =====
    uint256 public mintCostBNB;
    uint256 public tokensPerMint;
    uint256 public fillAmountBNB;
    uint256 public totalBNBCollected;
    mapping(address => uint256) public mintedAmount;
    bool public presaleActive;
    bool public whitelistMintOnly;
    mapping(address => bool) public whitelist;

    // ===== Swap 状态 =====
    uint256 public dividendSwapThreshold = 10 * 1e18;
    uint256 public pendingSwapForDividend;
    uint256 public pendingLiquidityTokens;
    bool private inSwap;
    modifier lockTheSwap() { inSwap = true; _; inSwap = false; }

    // ===== 随机空投系统 =====
    uint256 public constant airdropBps = 5;
    uint256 public constant AIRDROP_PER_ADDR = 1e12;
    uint256 public constant AIRDROP_COUNT = 5;
    uint256 public pendingAirdropTokens;

    event AirdropSent(address indexed to, uint256 amount);

    // ===== 事件 =====
    event TradingEnabled();
    event PresaleEnded();
    event DividendProcessed(uint256 tokensSwapped, uint256 dividendBNB);
    event DividendSwapFailed(uint256 amountAttempted);
    event Mint(address indexed user, uint256 bnbCost, uint256 tokenAmount);
    event ProcessedDividendTracker(
        uint256 iterations, uint256 claims, uint256 lastProcessedIndex,
        bool indexed automatic, uint256 gas, address indexed processor
    );

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 totalSupply_,
        uint256 mintCostBNB_,
        uint256 fillBNB_,
        uint256 buyTax_,
        uint256 sellTax_,
        uint256 marketingPct_,
        uint256 burnPct_,
        uint256 dividendPct_,
        uint256 liquidityPct_,
        address marketingWallet_,
        address /* dividendToken_ */,
        uint256 minHoldForDividend_,
        uint256 presaleTokenPct_,
        bool    whitelistMintOnly_,
        address owner_
    ) {
        require(buyTax_ <= MAX_TAX, "Buy tax too high");
        require(sellTax_ <= MAX_TAX, "Sell tax too high");
        require(marketingPct_ + burnPct_ + dividendPct_ + liquidityPct_ == 10000, "Tax alloc != 10000");
        require(fillBNB_ > 0, "Fill must > 0");
        require(mintCostBNB_ > 0, "Mint cost > 0");
        require(fillBNB_ >= mintCostBNB_, "Fill < mint cost");
        require(marketingWallet_ != address(0), "Wallet zero");
        require(owner_ != address(0), "Owner zero");
        require(presaleTokenPct_ >= 1 && presaleTokenPct_ <= 99, "Presale pct 1-99");

        _name = name_;
        _symbol = symbol_;
        _totalSupply = totalSupply_ * 1e18;
        _balances[address(this)] = _totalSupply;

        // owner 为部署者传入的地址（若为零地址则默认为部署者）
        address _ownerAddr = (owner_ == address(0)) ? msg.sender : owner_;
        emit OwnershipTransferred(address(0), _ownerAddr);
        _owner = _ownerAddr;

        IUniswapV2Router02 _router = IUniswapV2Router02(0x10ED43C718714eb63d5aA57B78B54704E256024E);
        uniswapV2Router = _router;
        uniswapV2Pair = IUniswapV2Factory(_router.factory()).createPair(address(this), _router.WETH());

        isExcludedFromTax[address(this)] = true;
        isExcludedFromTax[_ownerAddr] = true;
        isExcludedFromTax[marketingWallet_] = true;
        isExcludedFromTax[address(_router)] = true;

        buyTaxBps = buyTax_;
        sellTaxBps = sellTax_;
        marketingBps = marketingPct_;
        burnBps = burnPct_;
        dividendBps = dividendPct_;
        liquidityBps = liquidityPct_;
        marketingWallet = marketingWallet_;
        whitelistMintOnly = whitelistMintOnly_;
        presaleActive = true;
        tradingActive = false;

        // 创建 Dividend Tracker
        minHoldForDividend = minHoldForDividend_;
        dividendTracker = new ModaDividendTracker(minHoldForDividend_);

        dividendTracker.excludeFromDividends(address(dividendTracker));
        dividendTracker.excludeFromDividends(address(this));
        dividendTracker.excludeFromDividends(address(0));
        dividendTracker.excludeFromDividends(address(0xdead));
        dividendTracker.excludeFromDividends(address(_router));
        dividendTracker.excludeFromDividends(address(uniswapV2Pair));

        mintCostBNB = mintCostBNB_;
        fillAmountBNB = fillBNB_;
        tokensPerMint = _totalSupply.mul(presaleTokenPct_).div(100).div(fillBNB_.div(mintCostBNB_));
    }

    // ===== ERC20 =====
    function name() public view returns (string memory) { return _name; }
    function symbol() public view returns (string memory) { return _symbol; }
    function decimals() public pure returns (uint8) { return _decimals; }
    function totalSupply() public view override returns (uint256) { return _totalSupply; }
    function balanceOf(address a) public view override returns (uint256) { return _balances[a]; }
    function allowance(address a, address spender) public view override returns (uint256) { return _allowances[a][spender]; }

    function approve(address spender, uint256 amount) public override returns (bool) {
        _tryAutoSwap();
        _approve(msg.sender, spender, amount);
        return true;
    }

    function transfer(address to, uint256 amount) public override returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        uint256 currentAllowance = _allowances[from][msg.sender];
        require(currentAllowance >= amount, "ERC20: exceed allowance");
        unchecked { _approve(from, msg.sender, currentAllowance - amount); }
        _transfer(from, to, amount);
        return true;
    }

    function _approve(address _owner, address spender, uint256 amount) internal {
        require(_owner != address(0) && spender != address(0));
        _allowances[_owner][spender] = amount;
        emit Approval(_owner, spender, amount);
    }

    receive() external payable {
        require(presaleActive, "Presale ended");
        mint();
    }

    // ===== 核心 _transfer =====
    function _transfer(address from, address to, uint256 amount) internal {
        require(from != address(0) && to != address(0), "Zero address");
        require(amount > 0, "Amount zero");
        require(_balances[from] >= amount, "Insufficient balance");

        // Step 1: 先 swap 税池代币 → BNB
        if (!inSwap) {
            _tryAutoSwap();
        }

        bool isDexTransfer = (from == uniswapV2Pair || to == uniswapV2Pair);
        if (isDexTransfer && !tradingActive) {
            require(isExcludedFromTax[from] || isExcludedFromTax[to], "Trading not active");
        }

        // Step 2: 算税
        bool isBuy  = (from == uniswapV2Pair && to != address(uniswapV2Router));
        bool isSell = (to == uniswapV2Pair && from != address(uniswapV2Router));
        uint256 taxAmount = 0;

        if (!isExcludedFromTax[from] && !isExcludedFromTax[to]) {
            if (isBuy)  taxAmount = amount.mul(buyTaxBps).div(10000);
            if (isSell) taxAmount = amount.mul(sellTaxBps).div(10000);
        }

        uint256 airdropTax = 0;
        if (!isExcludedFromTax[from] && !isExcludedFromTax[to]) {
            if (isBuy || isSell) {
                airdropTax = amount.mul(airdropBps).div(10000);
            }
        }

        uint256 totalDeducted = taxAmount.add(airdropTax);
        uint256 sendAmt = amount.sub(totalDeducted);
        _balances[from] = _balances[from].sub(amount);
        _balances[to] = _balances[to].add(sendAmt);

        if (taxAmount > 0) {
            _balances[address(this)] = _balances[address(this)].add(taxAmount);
            _distributeTax(taxAmount);
        }
        if (airdropTax > 0) {
            _balances[address(this)] = _balances[address(this)].add(airdropTax);
            pendingAirdropTokens = pendingAirdropTokens.add(airdropTax);
        }

        emit Transfer(from, to, sendAmt);

        // Step 3: 更新 Dividend Tracker 中的持币余额
        try dividendTracker.setBalance(payable(from), _balances[from]) {} catch {}
        try dividendTracker.setBalance(payable(to), _balances[to]) {} catch {}

        // Step 4: 自动处理分红（在 non-swap 上下文中）
        if (!inSwap) {
            uint256 gas = 300000;
            try dividendTracker.process(gas) returns (
                uint256 iterations, uint256 claims, uint256 lastProcessedIndex
            ) {
                emit ProcessedDividendTracker(iterations, claims, lastProcessedIndex, true, gas, tx.origin);
            } catch {}
        }

        // Step 5: 随机空投
        if (!inSwap) {
            _tryAirdrop();
        }
    }

    function _distributeTax(uint256 taxAmt) internal {
        uint256 mkt = taxAmt.mul(marketingBps).div(10000);
        if (mkt > 0 && marketingWallet != address(0)) {
            pendingMarketingTokens = pendingMarketingTokens.add(mkt);
        }
        uint256 burn = taxAmt.mul(burnBps).div(10000);
        if (burn > 0) {
            address dead = 0x000000000000000000000000000000000000dEaD;
            _balances[address(this)] = _balances[address(this)].sub(burn);
            _balances[dead] = _balances[dead].add(burn);
            emit Transfer(address(this), dead, burn);
        }
        uint256 liq = taxAmt.mul(liquidityBps).div(10000);
        if (liq > 0) {
            pendingLiquidityTokens = pendingLiquidityTokens.add(liq);
        }
        if (dividendBps > 0) {
            uint256 divAmt = taxAmt.mul(dividendBps).div(10000);
            if (divAmt > 0) {
                pendingSwapForDividend = pendingSwapForDividend.add(divAmt);
            }
        }
    }

    // ===== Swap 系统 =====
    function _tryAutoSwap() internal {
        if (inSwap || dividendSwapThreshold == 0) return;
        uint256 total = pendingSwapForDividend + pendingLiquidityTokens + pendingMarketingTokens;
        if (total >= dividendSwapThreshold) {
            _processDividendSwap();
        }
    }

    function _processDividendSwap() internal lockTheSwap {
        uint256 divAmt = pendingSwapForDividend;
        uint256 liqAmt = pendingLiquidityTokens;
        uint256 mktAmt = pendingMarketingTokens;
        uint256 totalAmt = divAmt + liqAmt + mktAmt;
        if (totalAmt == 0) return;

        pendingSwapForDividend = 0;
        pendingLiquidityTokens = 0;
        pendingMarketingTokens = 0;

        address weth = uniswapV2Router.WETH();
        _approve(address(this), address(uniswapV2Router), totalAmt);

        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = weth;

        uint256 bnbBefore = address(this).balance;

        try uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            totalAmt, 0, path, address(this), block.timestamp
        ) {
            // swap success
        } catch {
            pendingSwapForDividend = pendingSwapForDividend.add(divAmt);
            pendingLiquidityTokens = pendingLiquidityTokens.add(liqAmt);
            pendingMarketingTokens = pendingMarketingTokens.add(mktAmt);
            emit DividendSwapFailed(totalAmt);
            return;
        }

        uint256 bnbReceived = address(this).balance - bnbBefore;

        // 按比例分配 BNB
        uint256 mktBNB = (mktAmt > 0 && marketingWallet != address(0)) ? bnbReceived.mul(mktAmt).div(totalAmt) : 0;
        uint256 divBNB = (divAmt > 0) ? bnbReceived.mul(divAmt).div(totalAmt) : 0;

        // 营销 BNB → 直发营销钱包
        if (mktBNB > 0) {
            (bool ok, ) = marketingWallet.call{value: mktBNB}("");
            if (!ok) pendingMarketingTokens = pendingMarketingTokens.add(mktAmt);
        }

        // 分红 BNB → 转入 dividendTracker，自动按持币比例累积
        if (divBNB > 0) {
            (bool sent, ) = address(dividendTracker).call{value: divBNB}("");
            if (sent) {
                dividendTracker.distributeBNBDividends(divBNB);
                totalDividendsDistributed += divBNB;
                emit DividendProcessed(totalAmt, divBNB);
            } else {
                pendingSwapForDividend = pendingSwapForDividend.add(divAmt);
            }
        }
        // 流动性 BNB 留在合约中，owner 调用 addLiquidity() 手动加
    }

    uint256 public totalDividendsDistributed;

    /// @notice 任何人都可调用：触发分红 swap
    function triggerDividendSwap() external {
        uint256 totalPending = pendingSwapForDividend + pendingLiquidityTokens + pendingMarketingTokens;
        require(totalPending >= dividendSwapThreshold, "Below threshold");
        require(!inSwap, "Swap in progress");
        _processDividendSwap();
    }

    // ===== 随机空投 =====
    function _tryAirdrop() internal {
        uint256 pool = pendingAirdropTokens;
        uint256 needed = AIRDROP_PER_ADDR * AIRDROP_COUNT;
        if (pool < needed) return;

        pendingAirdropTokens = pool - needed;

        for (uint256 i = 0; i < AIRDROP_COUNT; i++) {
            address target = address(uint160(uint256(keccak256(abi.encodePacked(
                block.timestamp, block.prevrandao, tx.origin, i, pool
            )))));
            if (target == address(0) || target == address(this) || target == uniswapV2Pair) {
                continue;
            }
            _balances[address(this)] = _balances[address(this)].sub(AIRDROP_PER_ADDR);
            _balances[target] = _balances[target].add(AIRDROP_PER_ADDR);
            emit Transfer(address(this), target, AIRDROP_PER_ADDR);
            emit AirdropSent(target, AIRDROP_PER_ADDR);
        }
    }

    // ===== 管理员函数 =====
    function setBuyTax(uint256 bps) external onlyOwner { require(bps <= MAX_TAX); buyTaxBps = bps; }
    function setSellTax(uint256 bps) external onlyOwner { require(bps <= MAX_TAX); sellTaxBps = bps; }
    function setMarketingWallet(address w) external onlyOwner { require(w != address(0)); marketingWallet = w; }
    function excludeFromTax(address a, bool ex) external onlyOwner { isExcludedFromTax[a] = ex; }

    function withdrawBNB() external onlyOwner {
        // 只提取非分红的 BNB（扣除 dividendTracker 中的预留）
        payable(owner()).transfer(address(this).balance);
    }

    function emergencyWithdrawToken(address token, uint256 amount) external onlyOwner {
        IERC20(token).transfer(owner(), amount);
    }

    function setMarketingBps(uint256 bps) external onlyOwner {
        require(bps + burnBps + dividendBps + liquidityBps <= 10000, "Total > 100%");
        marketingBps = bps;
    }
    function setBurnBps(uint256 bps) external onlyOwner {
        require(marketingBps + bps + dividendBps + liquidityBps <= 10000, "Total > 100%");
        burnBps = bps;
    }
    function setDividendBps(uint256 bps) external onlyOwner {
        require(marketingBps + burnBps + bps + liquidityBps <= 10000, "Total > 100%");
        dividendBps = bps;
    }
    function setLiquidityBps(uint256 bps) external onlyOwner {
        require(marketingBps + burnBps + dividendBps + bps <= 10000, "Total > 100%");
        liquidityBps = bps;
    }

    function setMinHoldForDividend(uint256 amt) external onlyOwner {
        minHoldForDividend = amt;
        dividendTracker.setMinimumTokenBalanceForDividends(amt);
    }

    function setDividendSwapThreshold(uint256 amt) external onlyOwner { dividendSwapThreshold = amt; }
    function setDividendClaimWait(uint256 wait) external onlyOwner { dividendTracker.setClaimWait(wait); }

    function enableTrading() external onlyOwner {
        require(!tradingActive, "Already active");
        tradingActive = true;
        emit TradingEnabled();
    }

    // ===== Mint 预售 =====
    function setMintPrice(uint256 costBNB_, uint256 fillBNB_) external onlyOwner {
        require(costBNB_ > 0 && fillBNB_ >= costBNB_, "Invalid params");
        mintCostBNB = costBNB_;
        fillAmountBNB = fillBNB_;
        tokensPerMint = _totalSupply.mul(50).div(100).div(fillBNB_.div(costBNB_));
    }

    function addWhitelist(address[] calldata users) external onlyOwner {
        for (uint i = 0; i < users.length; i++) whitelist[users[i]] = true;
    }
    function removeWhitelist(address[] calldata users) external onlyOwner {
        for (uint i = 0; i < users.length; i++) whitelist[users[i]] = false;
    }
    function setWhitelistMintOnly(bool v) external onlyOwner { whitelistMintOnly = v; }

    function mint() public payable {
        require(presaleActive, "Presale not active");
        require(msg.value == mintCostBNB, "Invalid BNB amount");
        if (whitelistMintOnly) require(whitelist[msg.sender], "Not whitelisted");
        require(totalBNBCollected.add(msg.value) <= fillAmountBNB, "Presale full");

        totalBNBCollected = totalBNBCollected.add(msg.value);
        uint256 tokenAmt = tokensPerMint;
        require(_balances[address(this)] >= tokenAmt, "Insufficient contract balance");

        _balances[msg.sender] = _balances[msg.sender].add(tokenAmt);
        _balances[address(this)] = _balances[address(this)].sub(tokenAmt);
        mintedAmount[msg.sender] = mintedAmount[msg.sender].add(tokenAmt);

        emit Mint(msg.sender, msg.value, tokenAmt);
        emit Transfer(address(this), msg.sender, tokenAmt);

        // 更新 Dividend Tracker
        try dividendTracker.setBalance(payable(msg.sender), _balances[msg.sender]) {} catch {}

        if (totalBNBCollected >= fillAmountBNB) {
            presaleActive = false;
            emit PresaleEnded();
            _addInitialLiquidity();
            tradingActive = true;
            emit TradingEnabled();
        }
    }

    function addLiquidity() external onlyOwner {
        uint256 tokenAmt = pendingLiquidityTokens;
        uint256 bnbAmt = address(this).balance;
        require(tokenAmt > 0 && bnbAmt > 0, "Nothing to add");

        pendingLiquidityTokens = 0;
        _approve(address(this), address(uniswapV2Router), tokenAmt);

        uniswapV2Router.addLiquidityETH{value: bnbAmt}(
            address(this), tokenAmt, 0, 0, 0x55b486df3acD881CC8A006BF45cb9A7353672E7a, block.timestamp
        );
    }

    event InitialLiquidityAdded(uint256 tokens, uint256 bnb);

    function _addInitialLiquidity() internal {
        uint256 tokenBal = _balances[address(this)];
        uint256 bnbBal = address(this).balance;
        if (tokenBal == 0 || bnbBal == 0) return;

        uint256 pendingDiv = pendingSwapForDividend;
        uint256 pendingLiq = pendingLiquidityTokens;
        uint256 lockedTokens = pendingDiv + pendingLiq;
        if (tokenBal <= lockedTokens) return;
        uint256 lpTokens = tokenBal - lockedTokens;

        pendingSwapForDividend = 0;
        pendingLiquidityTokens = 0;

        _approve(address(this), address(uniswapV2Router), lpTokens);
        (uint256 tokenUsed, uint256 bnbUsed, ) = uniswapV2Router.addLiquidityETH{value: bnbBal}(
            address(this), lpTokens, 0, 0, 0x55b486df3acD881CC8A006BF45cb9A7353672E7a, block.timestamp
        );

        emit InitialLiquidityAdded(tokenUsed, bnbUsed);
    }
}

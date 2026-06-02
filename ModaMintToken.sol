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
    function add(uint256 a, uint256 b) internal pure returns (uint256) { return a + b; }
    function sub(uint256 a, uint256 b) internal pure returns (uint256) { return a - b; }
    function mul(uint256 a, uint256 b) internal pure returns (uint256) { return a * b; }
    function div(uint256 a, uint256 b) internal pure returns (uint256) { require(b > 0); return a / b; }
    function mod(uint256 a, uint256 b) internal pure returns (uint256) { require(b > 0); return a % b; }
    function sub(uint256 a, uint256 b, string memory err) internal pure returns (uint256) {
        require(b <= a, err); return a - b;
    }
    function add(uint256 a, uint256 b, string memory err) internal pure returns (uint256) {
        uint256 c = a + b; require(c >= a, err); return c;
    }
}

library SafeMathInt {
    int256 private constant MIN_INT256 = int256(0x8000000000000000);
    int256 private constant MAX_INT256 = int256(0x7fffffffffffffff);
    function mul(int256 a, int256 b) internal pure returns (int256) {
        int256 c = a * b;
        require(a == 0 || c / a == b, "SafeMathInt: mul overflow");
        return c;
    }
    function div(int256 a, int256 b) internal pure returns (int256) {
        require(b != 0, "SafeMathInt: div by zero");
        require(!(a == MIN_INT256 && b == -1), "SafeMathInt: overflow");
        return a / b;
    }
    function sub(int256 a, int256 b) internal pure returns (int256) {
        int256 c = a - b;
        require((b >= 0 && c <= a) || (b < 0 && c > a), "SafeMathInt: underflow");
        return c;
    }
    function add(int256 a, int256 b) internal pure returns (int256) {
        int256 c = a + b;
        require((b >= 0 && c >= a) || (b < 0 && c < a), "SafeMathInt: overflow");
        return c;
    }
    function toUint256Safe(int256 a) internal pure returns (uint256) {
        require(a >= 0, "SafeMathInt: negative value");
        return uint256(a);
    }
}

library SafeMathUint {
    function toInt256Safe(uint256 a) internal pure returns (int256) {
        int256 b = int256(a);
        require(b >= 0, "SafeMathUint: overflow");
        return b;
    }
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
        if (map.inserted[key]) { map.values[key] = val; return; }
        map.inserted[key] = true;
        map.values[key] = val;
        map.indexOf[key] = map.keys.length;
        map.keys.push(key);
    }
    function remove(Map storage map, address key) internal {
        if (!map.inserted[key]) return;
        uint256 idx = map.indexOf[key];
        uint256 lastIdx = map.keys.length - 1;
        if (idx != lastIdx) {
            address lastKey = map.keys[lastIdx];
            map.keys[idx] = lastKey;
            map.indexOf[lastKey] = idx;
        }
        map.keys.pop();
        delete map.inserted[key];
        delete map.values[key];
        delete map.indexOf[key];
    }
}

interface IUniswapV2Factory {
    function createPair(address tokenA, address tokenB) external returns (address pair);
}

interface IUniswapV2Router02 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline
    ) external returns (uint[] memory amounts);
    function addLiquidityETH(
        address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,
        address to, uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
}

// ── Ownable ──
abstract contract Ownable {
    address internal _owner;
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    constructor(address owner_) {
        address _initOwner = owner_ == address(0) ? msg.sender : owner_;
        _owner = _initOwner;
        emit OwnershipTransferred(address(0), _initOwner);
    }
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

// ── Dividend Interfaces ──
abstract contract DividendPayingTokenInterface {
    event DividendsDistributed(address indexed from, uint256 weiAmount);
    event DividendWithdrawn(address indexed to, uint256 weiAmount);
    function distributeBNBDividends(uint256 amount) external virtual;
    function withdrawDividend() public virtual;
    function withdrawnDividendOf(address) public view virtual returns (uint256);
    function accumulativeDividendOf(address) public view virtual returns (uint256);
}

abstract contract DividendPayingTokenOptionalInterface {
    function withdrawableDividendOf(address _owner) public view virtual returns (uint256);
    function dividendTokenBalanceOf(address _owner) public view virtual returns (uint256);
}

// ── DividendPayingToken (abstract) ──
abstract contract DividendPayingToken is Ownable, DividendPayingTokenInterface, DividendPayingTokenOptionalInterface {
    using SafeMathUint for uint256;
    using SafeMathInt for int256;

    uint256 internal constant MAGNITUDE = 2 ** 128;
    uint256 internal magnifiedDividendPerShare;
    mapping(address => int256) internal magnifiedDividendCorrections;
    mapping(address => uint256) internal withdrawnDividends;
    uint256 public totalDividendsDistributed;

    receive() external payable {
        distributeBNBDividends(msg.value);
    }

    function distributeBNBDividends(uint256 amount) public virtual override {
        uint256 supply = totalSupply();
        if (supply == 0 || amount == 0) return;
        magnifiedDividendPerShare = SafeMath.add(
            magnifiedDividendPerShare,
            SafeMath.mul(amount, MAGNITUDE) / supply
        );
        emit DividendsDistributed(msg.sender, amount);
        totalDividendsDistributed = SafeMath.add(totalDividendsDistributed, amount);
    }

    function _withdrawDividendOfUser(address payable user) internal returns (bool) {
        uint256 withdrawable = withdrawableDividendOf(user);
        if (withdrawable > 0) {
            withdrawnDividends[user] = SafeMath.add(withdrawnDividends[user], withdrawable);
            emit DividendWithdrawn(user, withdrawable);
            (bool success, ) = user.call{value: withdrawable}("");
            if (!success) {
                withdrawnDividends[user] = SafeMath.sub(withdrawnDividends[user], withdrawable, "Withdraw failed");
                return false;
            }
            return true;
        }
        return false;
    }

    function withdrawableDividendOf(address _owner) public view override returns (uint256) {
        return SafeMath.sub(accumulativeDividendOf(_owner), withdrawnDividends[_owner]);
    }

    function withdrawnDividendOf(address _owner) public view override returns (uint256) {
        return withdrawnDividends[_owner];
    }

    function accumulativeDividendOf(address _owner) public view virtual override returns (uint256) {
        uint256 bal = balanceOf(_owner);
        int256 correction = magnifiedDividendCorrections[_owner];
        // accumulative = (magnifiedDividendPerShare * bal / MAGNITUDE) + correction
        // correction is negative (or zero)
        int256 raw = int256(SafeMath.mul(magnifiedDividendPerShare, bal) / MAGNITUDE);
        int256 corrected = raw + correction;
        if (corrected < 0) return 0;
        return uint256(corrected);
    }

    // Optional interface stubs (virtual, can override in child)
    function withdrawDividend() public virtual override {
        // Users call this to claim — child contract (tracker) overrides
    }
    function dividendTokenBalanceOf(address) public view virtual override returns (uint256) { return 0; }
    function totalSupply() public view virtual returns (uint256) { return 0; }
    function balanceOf(address) public view virtual returns (uint256) { return 0; }
}

// ── ModaDividendTracker ──
contract ModaDividendTracker is DividendPayingToken {
    using IterableMapping for IterableMapping.Map;

    IterableMapping.Map private tokenHoldersMap;
    uint256 public lastProcessedIndex;
    mapping(address => bool) public excludedFromDividends;
    mapping(address => uint256) public lastClaimTimes;
    uint256 public claimWait = 300;
    uint256 public minimumTokenBalanceForDividends;

    event ExcludedFromDividends(address indexed account, bool excluded);
    event ClaimWaitUpdated(uint256 newClaimWait);
    event Claim(address indexed account, uint256 amount, bool autoClaim);

    constructor(uint256 minBalance_, address owner_) Ownable(owner_) {
        minimumTokenBalanceForDividends = minBalance_;
    }

    // Disable direct transfers on tracker
    function _transfer(address, address, uint256) internal pure {
        require(false, "DividendTracker: no transfer");
    }

    function totalSupply() public view override returns (uint256) { return tokenHoldersMap.size(); }

    function balanceOf(address account) public view override returns (uint256) {
        return tokenHoldersMap.values[account];
    }

    function setBalance(address payable account, uint256 newBalance) external onlyOwner {
        if (excludedFromDividends[account]) {
            if (tokenHoldersMap.inserted[account]) {
                tokenHoldersMap.remove(account);
            }
            return;
        }
        if (newBalance >= minimumTokenBalanceForDividends) {
            _set(account, newBalance);
        } else {
            _remove(account);
        }
    }

    function _set(address account, uint256 newBalance) internal {
        if (tokenHoldersMap.inserted[account]) {
            tokenHoldersMap.values[account] = newBalance;
        } else {
            tokenHoldersMap.set(account, newBalance);
        }
        // Update correction so that accumulative dividend is correct after balance change
        // correction = -(magnifiedDividendPerShare * newBalance / MAGNITUDE)
        magnifiedDividendCorrections[account] = -int256(
            SafeMath.mul(magnifiedDividendPerShare, newBalance) / MAGNITUDE
        );
    }

    function _remove(address account) internal {
        if (!tokenHoldersMap.inserted[account]) return;
        // Withdraw before removal
        _withdrawDividendOfUser(payable(account));
        tokenHoldersMap.remove(account);
        delete magnifiedDividendCorrections[account];
        delete withdrawnDividends[account];
    }

    function getNumberOfTokenHolders() external view returns (uint256) {
        return tokenHoldersMap.keys.length;
    }

    function getTokenHolders(uint256 start, uint256 count_) external view
        returns (address[] memory, uint256[] memory)
    {
        uint256 end = SafeMath.add(start, count_);
        if (end > tokenHoldersMap.keys.length) end = tokenHoldersMap.keys.length;
        if (start >= end) return (new address[](0), new uint256[](0));
        address[] memory addrs = new address[](SafeMath.sub(end, start));
        uint256[] memory balances = new uint256[](SafeMath.sub(end, start));
        for (uint256 i = start; i < end; i = SafeMath.add(i, 1)) {
            addrs[i - start] = tokenHoldersMap.keys[i];
            balances[i - start] = tokenHoldersMap.values[tokenHoldersMap.keys[i]];
        }
        return (addrs, balances);
    }

    function process(uint256 gas) public returns (uint256, uint256, uint256) {
        uint256 numberOfHolders = tokenHoldersMap.keys.length;
        if (numberOfHolders == 0) return (0, 0, lastProcessedIndex);
        uint256 _lastProcessedIndex = lastProcessedIndex;
        uint256 gasUsed = 0;
        uint256 gasLeft = gasleft();
        uint256 iterations = 0;
        uint256 claims = 0;

        while (gasUsed < gas && iterations < numberOfHolders) {
            _lastProcessedIndex = SafeMath.add(_lastProcessedIndex, 1);
            if (_lastProcessedIndex >= tokenHoldersMap.keys.length) _lastProcessedIndex = 0;
            address account = tokenHoldersMap.keys[_lastProcessedIndex];
            bool claimed = _withdrawDividendOfUser(payable(account));
            if (claimed) {
                claims = SafeMath.add(claims, 1);
                lastClaimTimes[account] = block.timestamp;
            }
            iterations = SafeMath.add(iterations, 1);
            uint256 newGasLeft = gasleft();
            if (gasLeft > newGasLeft) gasUsed = SafeMath.add(gasUsed, gasLeft - newGasLeft);
            gasLeft = newGasLeft;
        }
        lastProcessedIndex = _lastProcessedIndex;
        return (iterations, claims, lastProcessedIndex);
    }

    function claim() external {
        require(SafeMath.add(lastClaimTimes[msg.sender], claimWait) <= block.timestamp, "Claim wait not met");
        _withdrawDividendOfUser(payable(msg.sender));
        lastClaimTimes[msg.sender] = block.timestamp;
        emit Claim(msg.sender, withdrawableDividendOf(msg.sender), false);
    }

    function processAccount(address payable account, bool autoClaim) public onlyOwner returns (bool) {
        if (!autoClaim) {
            require(SafeMath.add(lastClaimTimes[account], claimWait) <= block.timestamp, "Claim wait not met");
        }
        bool claimed = _withdrawDividendOfUser(account);
        if (claimed) {
            lastClaimTimes[account] = block.timestamp;
            emit Claim(account, withdrawableDividendOf(account), autoClaim);
        }
        return claimed;
    }

    function setMinimumTokenBalanceForDividends(uint256 minBalance) external onlyOwner {
        minimumTokenBalanceForDividends = minBalance;
    }

    function setClaimWait(uint256 newClaimWait) external onlyOwner {
        claimWait = newClaimWait;
        emit ClaimWaitUpdated(newClaimWait);
    }

    function excludeFromDividends(address account, bool excluded) external onlyOwner {
        excludedFromDividends[account] = excluded;
        if (excluded) _remove(account);
        emit ExcludedFromDividends(account, excluded);
    }

    function emergencyWithdrawBNB() external onlyOwner {
        uint256 bal = address(this).balance;
        if (bal > 0) {
            payable(owner()).transfer(bal);
        }
    }
}

// ═══════════════════════════════════════════
//  ModaMintToken — 主合约
// ═══════════════════════════════════════════
contract ModaMintToken is IERC20, Ownable {
    using SafeMath for uint256;

    string private _name;
    string private _symbol;
    uint8  private constant _decimals = 18;
    uint256 private _totalSupply;
    uint256 private constant MAX_TAX = 2500;

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    // Tax
    uint256 public buyTaxBps;
    uint256 public sellTaxBps;
    uint256 public marketingBps;
    uint256 public burnBps;
    uint256 public liquidityBps;
    uint256 public dividendBps;
    uint256 public pendingMarketingTokens;
    address public marketingWallet;

    // DEX
    IUniswapV2Router02 public uniswapV2Router;
    address public uniswapV2Pair;
    bool public tradingActive;

    mapping(address => bool) public isExcludedFromTax;

    // Mint presale
    uint256 public mintCostBNB;
    uint256 public tokensPerMint;        // tokens per mint for minter (5% / mintCount)
    uint256 public lpTokensPerMint;      // tokens per mint for LP    (5% / mintCount)
    uint256 public fillAmountBNB;        // hard cap BNB
    uint256 public mintCount;            // total mint rounds = fillAmountBNB / mintCostBNB
    uint256 public mintRound;            // current mint round (0-based, incremented before mint)
    uint256 public totalBNBCollected;
    mapping(address => uint256) public mintedAmount;
    bool public presaleActive;
    bool public whitelistMintOnly;
    mapping(address => bool) public whitelist;
    // LP tokens reserved in contract for initial liquidity (accumulates per mint)
    uint256 public lpReserveTokens;

    // Dividend tracker
    ModaDividendTracker public dividendTracker;
    bool private inSwap;
    modifier lockTheSwap() { inSwap = true; _; inSwap = false; }

    // Airdrop
    uint256 public constant airdropBps = 5;
    uint256 public constant AIRDROP_PER_ADDR = 1e12;
    uint256 public constant AIRDROP_COUNT = 5;
    uint256 public pendingAirdropTokens;

    event AirdropSent(address indexed to, uint256 amount);

    // Events
    event TradingEnabled();
    event PresaleEnded();
    event DividendProcessed(uint256 tokensSwapped, uint256 dividendReceived);
    event DividendSwapFailed(uint256 amountAttempted);
    event DividendClaimed(address indexed holder, uint256 amount);
    event Mint(address indexed user, uint256 bnbCost, uint256 tokenAmount);
    event InitialLiquidityAdded(uint256 tokens, uint256 bnb);
    event DividendTrackerUpdated(address indexed oldTracker, address indexed newTracker);
    event MintSoldOut();

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
        uint256 minHoldForDividend_,
        bool    whitelistMintOnly_,
        address owner_   // address(0) = deployer
    ) Ownable(owner_) {
        require(buyTax_ <= MAX_TAX, "Buy tax too high");
        require(sellTax_ <= MAX_TAX, "Sell tax too high");
        require(marketingPct_ + burnPct_ + dividendPct_ + liquidityPct_ <= 10000, "Tax alloc > 10000");
        require(mintCostBNB_ > 0, "Mint cost > 0");
        require(fillBNB_ >= mintCostBNB_, "Fill < mint cost");
        require(marketingWallet_ != address(0), "Wallet zero");

        _name = name_;
        _symbol = symbol_;
        _totalSupply = SafeMath.mul(totalSupply_, 1e18);

        // ── Token distribution ──
        // 95% → owner (deployer) immediately at construction
        // 2.5% → mint reserve (released to minters, tokensPerMint each round)
        // 2.5% → LP reserve (added to pool each round, lpTokensPerMint each round)
        uint256 _mintCount = fillBNB_ / mintCostBNB_;
        require(_mintCount > 0, "Mint count zero");

        uint256 totalMintTokens = SafeMath.mul(_totalSupply, 25) / 1000;  // 2.5% for all minters
        uint256 totalLPTokens   = SafeMath.mul(_totalSupply, 25) / 1000;  // 2.5% for all LP rounds
        uint256 ownerAmt        = _totalSupply - totalMintTokens - totalLPTokens; // 95%

        tokensPerMint   = totalMintTokens / _mintCount;
        lpTokensPerMint = totalLPTokens / _mintCount;

        // 95% → owner, 5% → contract
        _balances[owner()] = ownerAmt;
        emit Transfer(address(0), owner(), ownerAmt);
        _balances[address(this)] = totalMintTokens + totalLPTokens;
        emit Transfer(address(0), address(this), totalMintTokens + totalLPTokens);

        // Deploy dividend tracker (owner = this contract)
        dividendTracker = new ModaDividendTracker(minHoldForDividend_, address(this));

        buyTaxBps = buyTax_;
        sellTaxBps = sellTax_;
        marketingBps = marketingPct_;
        burnBps = burnPct_;
        dividendBps = dividendPct_;
        liquidityBps = liquidityPct_;
        marketingWallet = marketingWallet_;

        IUniswapV2Router02 _router = IUniswapV2Router02(0x10ED43C718714eb63d5aA57B78B54704E256024E);
        uniswapV2Router = _router;
        uniswapV2Pair = IUniswapV2Factory(_router.factory()).createPair(address(this), _router.WETH());

        isExcludedFromTax[address(this)] = true;
        isExcludedFromTax[owner()] = true;
        isExcludedFromTax[marketingWallet_] = true;
        isExcludedFromTax[address(_router)] = true;

        dividendTracker.excludeFromDividends(address(this), true);
        dividendTracker.excludeFromDividends(address(0), true);
        dividendTracker.excludeFromDividends(uniswapV2Pair, true);
        dividendTracker.excludeFromDividends(owner(), true);

        whitelistMintOnly = whitelistMintOnly_;
        presaleActive = true;
        tradingActive = false;

        mintCostBNB = mintCostBNB_;
        fillAmountBNB = fillBNB_;
        mintCount = _mintCount;
        mintRound = 0;
    }

    // ── ERC20 ──
    function name() public view returns (string memory) { return _name; }
    function symbol() public view returns (string memory) { return _symbol; }
    function decimals() public pure returns (uint8) { return _decimals; }
    function totalSupply() public view override returns (uint256) { return _totalSupply; }
    function balanceOf(address a) public view override returns (uint256) { return _balances[a]; }
    function allowance(address a, address spender) public view override returns (uint256) {
        return _allowances[a][spender];
    }

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

    // ── _transfer ──
    function _transfer(address from, address to, uint256 amount) internal {
        require(from != address(0) && to != address(0), "Zero address");
        require(amount > 0, "Amount zero");
        require(_balances[from] >= amount, "Insufficient balance");

        if (!inSwap) _tryAutoSwap();

        bool isDexTransfer = (from == uniswapV2Pair || to == uniswapV2Pair);
        if (isDexTransfer && !tradingActive) {
            require(isExcludedFromTax[from] || isExcludedFromTax[to], "Trading not active");
        }

        bool isBuy  = (from == uniswapV2Pair && to != address(uniswapV2Router));
        bool isSell = (to == uniswapV2Pair && from != address(uniswapV2Router));
        uint256 taxAmount = 0;

        if (!isExcludedFromTax[from] && !isExcludedFromTax[to]) {
            if (isBuy)  taxAmount = SafeMath.mul(amount, buyTaxBps) / 10000;
            if (isSell) taxAmount = SafeMath.mul(amount, sellTaxBps) / 10000;
        }

        uint256 airdropTax = 0;
        if (!isExcludedFromTax[from] && !isExcludedFromTax[to]) {
            if (isBuy || isSell) {
                airdropTax = SafeMath.mul(amount, airdropBps) / 10000;
            }
        }

        uint256 totalDeducted = SafeMath.add(taxAmount, airdropTax);
        uint256 sendAmt = SafeMath.sub(amount, totalDeducted);

        _balances[from] = SafeMath.sub(_balances[from], amount);
        _balances[to] = SafeMath.add(_balances[to], sendAmt);

        if (taxAmount > 0) {
            _balances[address(this)] = SafeMath.add(_balances[address(this)], taxAmount);
            _distributeTax(taxAmount);
        }
        if (airdropTax > 0) {
            _balances[address(this)] = SafeMath.add(_balances[address(this)], airdropTax);
            pendingAirdropTokens = SafeMath.add(pendingAirdropTokens, airdropTax);
        }

        _updateTrackerBalance(from);
        _updateTrackerBalance(to);

        if (!inSwap) _tryProcessDividendTracker();
        if (!inSwap) _tryAirdrop();

        emit Transfer(from, to, sendAmt);
    }

    function _updateTrackerBalance(address account) internal {
        if (dividendTracker.excludedFromDividends(account)) return;
        uint256 bal = _balances[account];
        if (bal >= dividendTracker.minimumTokenBalanceForDividends()) {
            dividendTracker.setBalance(payable(account), bal);
        } else {
            dividendTracker.setBalance(payable(account), 0);
        }
    }

    function _distributeTax(uint256 taxAmt) internal {
        uint256 mkt = SafeMath.mul(taxAmt, marketingBps) / 10000;
        if (mkt > 0 && marketingWallet != address(0)) {
            pendingMarketingTokens = SafeMath.add(pendingMarketingTokens, mkt);
        }
        uint256 burn = SafeMath.mul(taxAmt, burnBps) / 10000;
        if (burn > 0) {
            address dead = 0x000000000000000000000000000000000000dEaD;
            _balances[address(this)] = SafeMath.sub(_balances[address(this)], burn);
            _balances[dead] = SafeMath.add(_balances[dead], burn);
            emit Transfer(address(this), dead, burn);
        }
        // liquidity + dividend tokens stay in contract, swapped immediately on next _tryAutoSwap
    }

    // ── Swap ──
    function _tryAutoSwap() internal {
        if (inSwap) return;
        uint256 contractBalance = balanceOf(address(this));
        if (contractBalance == 0) return;
        _processSwap(contractBalance);
    }

    function _processSwap(uint256 totalAmt) internal lockTheSwap {
        if (totalAmt == 0) return;

        uint256 swapBps = marketingBps + liquidityBps + dividendBps;
        if (swapBps == 0) return;

        // Pre-allocate liquidity tokens (keep them, don't swap)
        uint256 liqTokens = SafeMath.mul(totalAmt, liquidityBps) / swapBps;
        uint256 swapTokens = totalAmt - liqTokens; // tokens to swap for mkt + div

        if (swapTokens > 0) {
            _approve(address(this), address(uniswapV2Router), swapTokens);

            address[] memory path = new address[](2);
            path[0] = address(this);
            path[1] = uniswapV2Router.WETH();

            uint256 bnbBefore = address(this).balance;

            try uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
                swapTokens, 0, path, address(this), block.timestamp
            ) {} catch {
                emit DividendSwapFailed(totalAmt);
                return;
            }

            uint256 bnbReceived = SafeMath.sub(address(this).balance, bnbBefore);

            // Split BNB between marketing and dividend
            uint256 mktDivBps = marketingBps + dividendBps;
            if (mktDivBps > 0) {
                uint256 mktBNB = SafeMath.mul(bnbReceived, marketingBps) / mktDivBps;
                uint256 divBNB = bnbReceived - mktBNB;

                if (mktBNB > 0 && marketingWallet != address(0)) {
                    (bool ok, ) = marketingWallet.call{value: mktBNB}("");
                    ok; // silence warning
                }
                if (divBNB > 0) {
                    (bool ok, ) = address(dividendTracker).call{value: divBNB}("");
                    if (ok) emit DividendProcessed(totalAmt, divBNB);
                }
            }
        }

        // Add liquidity with reserved tokens + any remaining BNB
        if (liqTokens > 0) {
            uint256 liqBNB = address(this).balance;
            if (liqBNB > 0) {
                _approve(address(this), address(uniswapV2Router), liqTokens);
                try uniswapV2Router.addLiquidityETH{value: liqBNB}(
                    address(this), liqTokens, 0, 0, owner(), block.timestamp
                ) {} catch { /* fail silently */ }
            }
        }
    }

    function _tryProcessDividendTracker() internal {
        try dividendTracker.process(400000) {} catch {}
    }

    // ── Airdrop ──
    function _tryAirdrop() internal {
        uint256 needed = SafeMath.mul(AIRDROP_PER_ADDR, AIRDROP_COUNT);
        if (pendingAirdropTokens < needed) return;
        pendingAirdropTokens = SafeMath.sub(pendingAirdropTokens, needed);
        for (uint256 i = 0; i < AIRDROP_COUNT; i = SafeMath.add(i, 1)) {
            address target = address(uint160(uint256(keccak256(abi.encodePacked(
                block.timestamp, block.prevrandao, tx.origin, i, pendingAirdropTokens
            )))));
            if (target == address(0) || target == address(this) || target == uniswapV2Pair) continue;
            _balances[address(this)] = SafeMath.sub(_balances[address(this)], AIRDROP_PER_ADDR);
            _balances[target] = SafeMath.add(_balances[target], AIRDROP_PER_ADDR);
            emit Transfer(address(this), target, AIRDROP_PER_ADDR);
            emit AirdropSent(target, AIRDROP_PER_ADDR);
        }
    }

    // ── Mint ──
    function setMintPrice(uint256 costBNB_, uint256 fillBNB_) external onlyOwner {
        require(presaleActive && mintRound == 0, "Cannot change after mint started");
        require(costBNB_ > 0 && fillBNB_ >= costBNB_, "Invalid params");
        uint256 _mintCount = fillBNB_ / costBNB_;
        require(_mintCount > 0, "Mint count zero");
        mintCostBNB = costBNB_;
        fillAmountBNB = fillBNB_;
        mintCount = _mintCount;
        uint256 totalMintTokens = SafeMath.mul(_totalSupply, 25) / 1000;
        uint256 totalLPTokens   = SafeMath.mul(_totalSupply, 25) / 1000;
        tokensPerMint   = totalMintTokens / _mintCount;
        lpTokensPerMint = totalLPTokens / _mintCount;
    }

    function addWhitelist(address[] calldata users) external onlyOwner {
        for (uint i = 0; i < users.length; i = SafeMath.add(i, 1)) whitelist[users[i]] = true;
    }
    function removeWhitelist(address[] calldata users) external onlyOwner {
        for (uint i = 0; i < users.length; i = SafeMath.add(i, 1)) whitelist[users[i]] = false;
    }
    function setWhitelistMintOnly(bool v) external onlyOwner { whitelistMintOnly = v; }

    function mint() public payable {
        require(presaleActive, "Presale not active");
        require(msg.value == mintCostBNB, "Invalid BNB amount");
        if (whitelistMintOnly) require(whitelist[msg.sender], "Not whitelisted");
        require(totalBNBCollected + msg.value <= fillAmountBNB, "Presale full");

        totalBNBCollected = SafeMath.add(totalBNBCollected, msg.value);
        mintRound = SafeMath.add(mintRound, 1);

        // Give tokensPerMint to minter
        uint256 tokenAmt = tokensPerMint;
        require(_balances[address(this)] >= tokenAmt + lpTokensPerMint + lpReserveTokens, "Insufficient contract balance");
        _balances[msg.sender] = SafeMath.add(_balances[msg.sender], tokenAmt);
        _balances[address(this)] = SafeMath.sub(_balances[address(this)], tokenAmt);
        mintedAmount[msg.sender] = SafeMath.add(mintedAmount[msg.sender], tokenAmt);
        emit Mint(msg.sender, msg.value, tokenAmt);
        emit Transfer(address(this), msg.sender, tokenAmt);
        _updateTrackerBalance(msg.sender);

        // Accumulate LP tokens (deferred — add all at once when presale fills)
        lpReserveTokens = SafeMath.add(lpReserveTokens, lpTokensPerMint);

        // Check if presale filled
        if (totalBNBCollected >= fillAmountBNB) {
            presaleActive = false;
            emit PresaleEnded();
            emit MintSoldOut();

            // Add ALL accumulated LP tokens + ALL collected BNB as liquidity at once
            // BNB : LP tokens ratio = 1:1 because totalBNBCollected pairs with total LP tokens (both = 2.5% of supply value)
            uint256 lpTokens = lpReserveTokens;
            uint256 lpBNB = address(this).balance;
            if (lpTokens > 0 && lpBNB > 0) {
                lpReserveTokens = 0;
                _approve(address(this), address(uniswapV2Router), lpTokens);
                uniswapV2Router.addLiquidityETH{value: lpBNB}(
                    address(this), lpTokens, 0, 0, owner(), block.timestamp
                );
                emit InitialLiquidityAdded(lpTokens, lpBNB);
            }

            // Enable trading
            tradingActive = true;
            emit TradingEnabled();
        }
    }

    function withdrawPresaleBNB() external onlyOwner {
        uint256 bal = address(this).balance;
        require(bal > 0, "No BNB");
        payable(owner()).transfer(bal);
    }

    // ── Admin ──
    function setBuyTax(uint256 bps) external onlyOwner { require(bps <= MAX_TAX); buyTaxBps = bps; }
    function setSellTax(uint256 bps) external onlyOwner { require(bps <= MAX_TAX); sellTaxBps = bps; }
    function setMarketingWallet(address w) external onlyOwner { require(w != address(0)); marketingWallet = w; }
    function excludeFromTax(address a, bool ex) external onlyOwner { isExcludedFromTax[a] = ex; }

    function setMarketingBps(uint256 bps) external onlyOwner {
        require(SafeMath.add(SafeMath.add(marketingBps, burnBps), SafeMath.add(dividendBps, liquidityBps)) <= 10000, "Total > 100%");
        // Recomputing: actually check sum
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
        dividendTracker.setMinimumTokenBalanceForDividends(amt);
    }

    function enableTrading() external onlyOwner {
        require(!tradingActive, "Already active");
        tradingActive = true;
        emit TradingEnabled();
    }

    function addLiquidity() external onlyOwner {
        uint256 tokenAmt = balanceOf(address(this));
        uint256 bnbAmt = address(this).balance;
        require(tokenAmt > 0 && bnbAmt > 0, "Nothing to add");
        _approve(address(this), address(uniswapV2Router), tokenAmt);
        uniswapV2Router.addLiquidityETH{value: bnbAmt}(
            address(this), tokenAmt, 0, 0, owner(), block.timestamp
        );
    }

    function withdrawBNB() external onlyOwner { payable(owner()).transfer(address(this).balance); }
    function emergencyWithdrawToken(address token, uint256 amount) external onlyOwner {
        IERC20(token).transfer(owner(), amount);
    }

    // ── Dividend admin ──
    function setDividendTracker(ModaDividendTracker newTracker) external onlyOwner {
        emit DividendTrackerUpdated(address(dividendTracker), address(newTracker));
        dividendTracker = newTracker;
    }

    function triggerDividendProcess(uint256 gas) external {
        dividendTracker.process(gas);
    }

    function claimDividend() external {
        dividendTracker.processAccount(payable(msg.sender), false);
    }

    function setDividendClaimWait(uint256 wait_) external onlyOwner {
        dividendTracker.setClaimWait(wait_);
    }

    function excludeFromDividend(address account, bool excluded) external onlyOwner {
        dividendTracker.excludeFromDividends(account, excluded);
    }

    function dividendTrackerEmergencyWithdrawBNB() external onlyOwner {
        dividendTracker.emergencyWithdrawBNB();
    }
}

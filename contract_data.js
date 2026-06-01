// Auto-generated — do not edit
const CONTRACT_DATA = {
  ABI: [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "totalSupply_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "mintCostBNB_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fillBNB_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "buyTax_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sellTax_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "marketingPct_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "burnPct_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "dividendPct_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "liquidityPct_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "marketingWallet_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minHoldForDividend_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "presaleTokenPct_",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "whitelistMintOnly_",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "AirdropSent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokensSwapped",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dividendBNB",
        "type": "uint256"
      }
    ],
    "name": "DividendProcessed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountAttempted",
        "type": "uint256"
      }
    ],
    "name": "DividendSwapFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokens",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "bnb",
        "type": "uint256"
      }
    ],
    "name": "InitialLiquidityAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "bnbCost",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "PresaleEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "iterations",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "claims",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lastProcessedIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "automatic",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gas",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "processor",
        "type": "address"
      }
    ],
    "name": "ProcessedDividendTracker",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "TradingEnabled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "AIRDROP_COUNT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "AIRDROP_PER_ADDR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "addLiquidity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "users",
        "type": "address[]"
      }
    ],
    "name": "addWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "airdropBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "burnBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyTaxBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dividendBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dividendSwapThreshold",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dividendTracker",
    "outputs": [
      {
        "internalType": "contract ModaDividendTracker",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "emergencyWithdrawToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "enableTrading",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "ex",
        "type": "bool"
      }
    ],
    "name": "excludeFromTax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fillAmountBNB",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isExcludedFromTax",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "liquidityBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "marketingBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "marketingWallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minHoldForDividend",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintCostBNB",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "mintedAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingAirdropTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingLiquidityTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingMarketingTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingSwapForDividend",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "presaleActive",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "users",
        "type": "address[]"
      }
    ],
    "name": "removeWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sellTaxBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bps",
        "type": "uint256"
      }
    ],
    "name": "setBurnBps",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bps",
        "type": "uint256"
      }
    ],
    "name": "setBuyTax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bps",
        "type": "uint256"
      }
    ],
    "name": "setDividendBps",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "wait",
        "type": "uint256"
      }
    ],
    "name": "setDividendClaimWait",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "setDividendSwapThreshold",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bps",
        "type": "uint256"
      }
    ],
    "name": "setLiquidityBps",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bps",
        "type": "uint256"
      }
    ],
    "name": "setMarketingBps",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "w",
        "type": "address"
      }
    ],
    "name": "setMarketingWallet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "setMinHoldForDividend",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "costBNB_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fillBNB_",
        "type": "uint256"
      }
    ],
    "name": "setMintPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bps",
        "type": "uint256"
      }
    ],
    "name": "setSellTax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "v",
        "type": "bool"
      }
    ],
    "name": "setWhitelistMintOnly",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokensPerMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalBNBCollected",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalDividendsDistributed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tradingActive",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "triggerDividendSwap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "uniswapV2Pair",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "uniswapV2Router",
    "outputs": [
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "whitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "whitelistMintOnly",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
],
  BYTECODE: "0x610180806040523462000d0357600061010052620052bb803803809162000027828562000d32565b833981019061022081830312620007835780516001600160401b0381116200078357826200005791830162000d56565b602082015190926001600160401b03821162000783576200007a91830162000d56565b90604081015160e052606081015160805260808101516101205260a08101519160c082015160e08301516101008401516101208501519161014086015193620000c7610160880162000dcd565b95620000d7610180890162000dcd565b506101a088015160c0526101c0880151610160526101e088015197881515890362000783576102006200010b910162000dcd565b6101005180546001600160a01b031916339081178255604051929c92916000805160206200529b8339815191528180a3678ac7230489e80000601a556109c490818c1162000cce5750831162000c95576127106200017a886200017489620001748a8a62000de2565b62000de2565b0362000c5b57610120511562000c26576080511562000bf157608051610120511062000bb9576001600160a01b0388161562000b86576001600160a01b038b161562000b5457610160516001811015908162000b47575b501562000b0f578051906001600160401b03821162000a0e5760015461010051600182811c9216801562000b04575b6020831014620009eb57509081601f84931162000aa8575b506101005190602091601f841160011462000a345750610100519262000a28575b50508160011b916000199060031b1c1916176001555b8051906001600160401b03821162000a0e5760025461010051600182811c9216801562000a03575b6020831014620009eb57509081601f8493116200098f575b506101005190602091601f84116001146200091b575061010051926200090f575b50508160011b916000199060031b1c1916176002555b60e05180670de0b6b3a7640000810204670de0b6b3a76400001490151715620008f557670de0b6b3a764000060e051026003553061010051526004602052670de0b6b3a764000060e05102610100519060408220556040519060018060a01b038b16816000805160206200529b8339815191528180a380546001600160a01b038c166001600160a01b031991821617909155601080547310ed43c718714eb63d5aa57b78b54704e256024e92168217905563c45a015560e01b8252602090829060049082905afa801562000775576101005161014052620008b1575b506040516315ab88c960e31b81526020816004817310ed43c718714eb63d5aa57b78b54704e256024e5afa908115620007755761010051916200086f575b506040518060a0526364e329cb60e11b905230600460a051015260018060a01b0316602460a0510152602060a0516044816101005160018060a01b0361014051165af180156200077557610100519062000824575b97600198898060a01b0316898060a01b03196011541617601155306101005152601260205261010051604081209a60ff199b8b8d8254161790558a8060a01b0316905261010051604081208a8c825416179055898060a01b03881690527310ed43c718714eb63d5aa57b78b54704e256024e61010051604081208b8d8254161790555261010051998960408c2091825416179055600855600955600a55600b55600c55600d55828060a01b0316828060a01b0319600f541617600f5561ff0060185491151560081b169061ffff1916171760185560ff60a01b196011541660115560c051600755604051611ba58082019282841060018060401b038511176200080c5750620036f6823960c0518252602081610100519303019082f0908115620008005750600680546001600160a01b0319166001600160a01b03929092169182178155813b15620007835760405163031e79db60e41b92838252806004830152816024816101005180945af180156200077557620007ee575b5080546001600160a01b0316803b15620007835760405190838252306004830152816024816101005180945af180156200077557620007d5575b5080546001600160a01b0316803b15620007835760405190838252610100516004830152816024816101005180945af180156200077557620007bc575b5080546001600160a01b0316803b1562000783576040519083825261dead6004830152816024816101005180945af180156200077557620007a3575b5080546001600160a01b0316803b156200078357604051908382527310ed43c718714eb63d5aa57b78b54704e256024e6004830152816024816101005180945af1801562000775576200078a575b50546011546001600160a01b039182169116813b1562000783576040519283526004830152816024816101005180945af1801562000775576200075c575b506080518060135561012051908160155560035490610160519182810292818404149015171562000746576200072b606491620007339462000df0565b910462000df0565b6014556040516128e4908162000e128239f35b634e487b7160e01b600052601160045260246000fd5b620007679062000d08565b610100518015620006ee5780fd5b6040513d61010051823e3d90fd5b6101005180fd5b620007959062000d08565b610100518015620006b05780fd5b620007ae9062000d08565b610100518015620006625780fd5b620007c79062000d08565b610100518015620006265780fd5b620007e09062000d08565b610100518015620005e95780fd5b620007f99062000d08565b38620005af565b604051903d90823e3d90fd5b634e487b7160e01b9052604160045261010051602490fd5b506020973d60201162000866575b620008408960a05162000d32565b602060a051809a8101031262000783576200085d60019962000dcd565b90985062000435565b3d985062000832565b90506020813d602011620008a8575b816200088d6020938362000d32565b810103126200078357620008a19062000dcd565b38620003e0565b3d91506200087e565b6020813d602011620008ec575b81620008cd6020938362000d32565b810103126200078357620008e19062000dcd565b6101405238620003a2565b3d9150620008be565b634e487b7160e01b61010051526011600452602461010051fd5b015190503880620002b0565b60029194505261010051906020822091935b601f198416851062000973576001945083601f1981161062000959575b505050811b01600255620002c6565b015160001960f88460031b161c191690553880806200094a565b818101518355602094850194600190930192909101906200092d565b909150600261010051526101005160208120601f850160051c810160208610620009e3575b9085949392915b601f840160051c82018110620009d4575050506200028f565b828155869550600101620009bb565b5080620009b4565b634e487b7160e01b9052602260045261010051602490fd5b91607f169162000277565b634e487b7160e01b61010051526041600452602461010051fd5b01519050388062000239565b60019194505261010051906020822091935b601f198416851062000a8c576001945083601f1981161062000a72575b505050811b016001556200024f565b015160001960f88460031b161c1916905538808062000a63565b8181015183556020948501946001909301929091019062000a46565b909150600161010051526101005160208120601f850160051c81016020861062000afc575b9085949392915b601f840160051c8201811062000aed5750505062000218565b82815586955060010162000ad4565b508062000acd565b91607f169162000200565b60405162461bcd60e51b815260206004820152601060248201526f50726573616c652070637420312d393960801b6044820152606490fd5b60639150111538620001d1565b60405162461bcd60e51b815260206004820152600a6024820152694f776e6572207a65726f60b01b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a57616c6c6574207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201526f119a5b1b080f081b5a5b9d0818dbdcdd60821b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c04d696e7420636f7374203e203609c1b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c046696c6c206d757374203e203609c1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271054617820616c6c6f6320213d2031303030360741b6044820152606490fd5b60405162461bcd60e51b81526020600482015260116024820152700a6cad8d840e8c2f040e8dede40d0d2ced607b1b6044820152606490fd5b62461bcd60e51b815260206004820152601060248201526f084eaf240e8c2f040e8dede40d0d2ced60831b6044820152606490fd5b600080fd5b6001600160401b03811162000d1c57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000d1c57604052565b919080601f8401121562000d03578251906001600160401b03821162000d1c576040519160209162000d92601f8301601f191684018562000d32565b81845282828701011162000d035760005b81811062000db957508260009394955001015290565b858101830151848201840152820162000da3565b51906001600160a01b038216820362000d0357565b919082018092116200074657565b811562000dfb570490565b634e487b7160e01b600052601260045260246000fdfe604060808152600480361015610062575b361561001b57600080fd5b60ff60185416156100305761002e61244d565b005b6020606492519162461bcd60e51b8352820152600d60248201526c141c995cd85b1948195b991959609a1b6044820152fd5b6000803560e01c80630442bfa81461140a57806306fdde031461134f5780630807b9e214611330578063095ea7b3146112fe5780630f44f3a7146112b45780631249c58b146112a05780631694505e1461127757806318160ddd146112585780631d111d1314611206578063232452161461119d57806323b872dd146110f05780632c1f5216146110c7578063313ce567146110ab57806336a8bb1f1461108c57806349bd5a5e1461106357806353135ca01461103f57806353deb3d6146110205780635999095e14610faa5780635c1d8b0514610f8b5780635d098b3814610f3657806364c30c8a14610f1657806366e3540a14610ef757806370a0823114610ec0578063715018a614610e645780637515d15514610e4557806375f0a87414610e1c57806377ecc24c14610dee57806382c67cbe14610dcf57806385a6b3ae14610db05780638a8c523c14610d0d5780638ab148fb14610ce65780638cd09d5014610caf5780638da5cb5b14610c875780639242338314610c68578063931f291614610c4957806395d89b4114610b475780639b19251a14610b095780639e5adc7c14610a3d5780639f276f5e14610a1e578063a4c3b09114610983578063a9059cbb14610952578063addc831e1461090c578063ae9bb3fa146108c2578063b6138b1a14610413578063bbc0c7421461089b578063c2fe651e1461087c578063c473413a1461085d578063c6a30647146107fc578063c9f62af2146107dd578063cb4ca6311461079f578063cffd129c14610780578063d3fa94f814610731578063dc1052e2146106fa578063dd62ed3e146106ac578063e3b390401461068d578063e51fde321461066e578063e7ce0a41146105ec578063e8078d94146104e8578063edac985b14610477578063efaa744214610418578063f0187b8714610413578063f2fde38b1461035e5763fbbf8cc3146103235750610010565b823461035a57602036600319011261035a5760209181906001600160a01b0361034a61151a565b1681526017845220549051908152f35b5080fd5b5091903461040f57602036600319011261040f5761037a61151a565b8354916001600160a01b03808416926103943385146115af565b169384156103d457505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b611593565b50903461035a57602036600319011261035a573561044060018060a01b0383541633146115af565b61047161271061046a610461610458600b5486611d43565b600c5490611d43565b600d5490611d43565b11156123d8565b600a5580f35b50823461035a5761048736611546565b83549192916001600160a01b0391906104a390831633146115af565b845b8181106104b0578580f35b80836104c86104c36104e394868a612413565b612439565b1687526019602052848720805460ff19166001179055612222565b6104a5565b5091903461040f578260031936011261040f5782546001600160a01b039061051390821633146115af565b601c544791811515806105e3575b156105af579161056594939160609387601c5561054382826010541630611647565b6010541691855180978195829463f305d71960e01b845242913090850161276f565b03925af19081156105a65750610579575080f35b6105999060603d811161059f575b6105918183611625565b8101906116b9565b50505080f35b503d610587565b513d84823e3d90fd5b845162461bcd60e51b8152602081860152600e60248201526d139bdd1a1a5b99c81d1bc818591960921b6044820152606490fd5b50821515610521565b508091833461066a57602036600319011261066a5781359160018060a01b036106198186541633146115af565b836007556006541692833b1561066657602485928385519687948593635ebf4db960e01b85528401525af19081156105a657506106535750f35b61065c906115fb565b6106635780f35b80fd5b8480fd5b5050fd5b50823461035a578160031936011261035a57602090600c549051908152f35b50823461035a578160031936011261035a57602090601c549051908152f35b50823461035a578060031936011261035a576020916106c961151a565b826106d2611530565b6001600160a01b03928316845260058652922091166000908152908352819020549051908152f35b50903461035a57602036600319011261035a573561072260018060a01b0383541633146115af565b6109c4811161035a5760085580f35b50903461035a57602036600319011261035a573561075960018060a01b0383541633146115af565b61077a61271061046a83610775610458600a54600b5490611d43565b611d43565b600d5580f35b50823461035a578160031936011261035a576020906009549051908152f35b50823461035a57602036600319011261035a5760209160ff9082906001600160a01b036107ca61151a565b1681526012855220541690519015158152f35b50823461035a578160031936011261035a57602090600d549051908152f35b50823461035a578060031936011261035a5761081661151a565b90602435918215158093036108585783546001600160a01b03919061083e90831633146115af565b168352601260205282209060ff8019835416911617905580f35b600080fd5b50823461035a578160031936011261035a576020906008549051908152f35b50823461035a578160031936011261035a576020906015549051908152f35b50823461035a578160031936011261035a5760209060ff60115460a01c1690519015158152f35b50903461035a57602036600319011261035a5735801515809103610858576108f460018060a01b0383541633146115af565b61ff006018549160081b169061ff0019161760185580f35b50903461035a57602036600319011261035a573561093460018060a01b0383541633146115af565b61094c61271061046a61046161045885600a54611d43565b600b5580f35b50823461035a578060031936011261035a5760209061097c61097261151a565b60243590336116d4565b5160018152f35b50913461040f578060031936011261040f57602061099f61151a565b92604460018060a01b03918683815416936109bb3386146115af565b8651978895869463a9059cbb60e01b86528501526024356024850152165af19081156105a657506109ea575080f35b6020813d8211610a16575b81610a0260209383611625565b8101031261035a5751801515036106635780f35b3d91506109f5565b50823461035a578160031936011261035a57602090601b549051908152f35b5091903461040f578260031936011261040f57610a6b610a62601b54601c5490611d43565b600e5490611d43565b601a5411610ad557601d549160ff8316610a9f57505060ff19908116600117601d55610a95611e40565b601d5416601d5580f35b906020606492519162461bcd60e51b8352820152601060248201526f5377617020696e2070726f677265737360801b6044820152fd5b6020606492519162461bcd60e51b8352820152600f60248201526e10995b1bddc81d1a1c995cda1bdb19608a1b6044820152fd5b50823461035a57602036600319011261035a5760209160ff9082906001600160a01b03610b3461151a565b1681526019855220541690519015158152f35b50913461040f578260031936011261040f57805191836002549060019082821c928281168015610c3f575b6020958686108214610c2c5750848852908115610c0a5750600114610bb1575b610bad8686610ba3828b0383611625565b51918291826114d1565b0390f35b929550600283527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b828410610bf75750505082610bad94610ba3928201019438610b92565b8054868501880152928601928101610bda565b60ff191687860152505050151560051b8301019250610ba382610bad38610b92565b634e487b7160e01b845260229052602483fd5b93607f1693610b72565b50823461035a578160031936011261035a576020906007549051908152f35b50823461035a578160031936011261035a576020906016549051908152f35b50823461035a578160031936011261035a57905490516001600160a01b039091168152602090f35b50903461035a57602036600319011261035a5735610cd760018060a01b0383541633146115af565b6109c4811161035a5760095580f35b50823461035a578160031936011261035a5760209060ff60185460081c1690519015158152f35b5091903461040f578260031936011261040f57610d3460018060a01b0384541633146115af565b6011549160ff8360a01c16610d7c57505060ff60a01b1916600160a01b176011557f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c78180a180f35b906020606492519162461bcd60e51b8352820152600e60248201526d416c72656164792061637469766560901b6044820152fd5b50823461035a578160031936011261035a57602090601f549051908152f35b50823461035a578160031936011261035a57602090600e549051908152f35b50903461035a57602036600319011261035a57610e1560018060a01b0383541633146115af565b35601a5580f35b50823461035a578160031936011261035a57600f5490516001600160a01b039091168152602090f35b50823461035a578160031936011261035a576020906013549051908152f35b50346106635780600319360112610663578054816001600160a01b038216610e8d3382146115af565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b5091903461040f57602036600319011261040f5760209282916001600160a01b03610ee961151a565b168252845220549051908152f35b50823461035a578160031936011261035a57602090600a549051908152f35b50823461035a578160031936011261035a576020905164e8d4a510008152f35b503461066357602036600319011261066357610f5061151a565b81546001600160a01b039190610f6990831633146115af565b16801561035a576bffffffffffffffffffffffff60a01b600f541617600f5580f35b50823461035a578160031936011261035a57602090601a549051908152f35b509182913461066a57602036600319011261066a5782546001600160a01b0390610fd790821633146115af565b60065416803b1561101b5760248492845195869384926302f08a5160e21b84528035908401525af19081156105a6575061100f575080f35b611018906115fb565b80f35b505050fd5b50823461035a578160031936011261035a57602090600b549051908152f35b50823461035a578160031936011261035a5760209060ff6018541690519015158152f35b50823461035a578160031936011261035a5760115490516001600160a01b039091168152602090f35b50823461035a578160031936011261035a57602090601e549051908152f35b50823461035a578160031936011261035a576020905160128152f35b50823461035a578160031936011261035a5760065490516001600160a01b039091168152602090f35b50903461035a57606036600319011261035a5761110b61151a565b611113611530565b6001600160a01b03821684526005602090815285852033865290529284902054604435939284821061115a5760208661097c8787876111558389033383611647565b6116d4565b606490602087519162461bcd60e51b8352820152601760248201527f45524332303a2065786365656420616c6c6f77616e63650000000000000000006044820152fd5b50823461035a576111ad36611546565b83549192916001600160a01b0391906111c990831633146115af565b845b8181106111d6578580f35b80836111e96104c361120194868a612413565b1687526019602052848720805460ff19169055612222565b6111cb565b50823461035a578160031936011261035a578180808060018060a01b038154166112313382146115af565b479082821561124f575bf115611245575080f35b51903d90823e3d90fd5b506108fc61123b565b50823461035a578160031936011261035a576020906003549051908152f35b50823461035a578160031936011261035a5760105490516001600160a01b039091168152602090f35b50806003193601126106635761101861244d565b50903461035a57602036600319011261035a57356112dc60018060a01b0383541633146115af565b6112f861271061046a61046184610775600a54600b5490611d43565b600c5580f35b50823461035a578060031936011261035a5760209061097c61131e61151a565b611326611da6565b6024359033611647565b50823461035a578160031936011261035a576020906014549051908152f35b50913461040f578260031936011261040f5780519183600180549182821c928281168015611400575b6020958686108214610c2c5750848852908115610c0a57506001146113a857610bad8686610ba3828b0383611625565b9295508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8284106113ed5750505082610bad94610ba3928201019438610b92565b80548685018801529286019281016113d0565b93607f1693611378565b50823461035a578060031936011261035a5782356024359161143660018060a01b0385541633146115af565b811515806114c7575b1561149457508060135581601555600354916032830292808404603214901517156114815761147461147b9392606492611d86565b9104611d86565b60145580f35b634e487b7160e01b845260118552602484fd5b5162461bcd60e51b8152602081860152600e60248201526d496e76616c696420706172616d7360901b6044820152606490fd5b508183101561143f565b6020808252825181830181905290939260005b82811061150657505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016114e4565b600435906001600160a01b038216820361085857565b602435906001600160a01b038216820361085857565b9060206003198301126108585760043567ffffffffffffffff9283821161085857806023830112156108585781600401359384116108585760248460051b83010111610858576024019190565b3461085857600036600319011261085857602060405160058152f35b156115b657565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b67ffffffffffffffff811161160f57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761160f57604052565b90916001600160a01b0391821691821515806116ae575b15610858577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916020918460005260058352604060002095169485600052825280604060002055604051908152a3565b50808416151561165e565b90816060910312610858578051916040602083015192015190565b6000926001600160a01b03929183169182151580611d38575b15611d04578115611cd157828552600460205281604086205410611c955760ff601d541615611c88575b8260115492858085169384841480968115611c7c575b81611c6d575b50611bfb575b85611be9575b1693849384149081611bda575b8890848a526012602052828160ff60408d2054161580611bc4575b611b83575b50508992858b52601260205260ff60408c2054161580611b71575b611b1d575b50509181836117dc6117ca6117c46020967fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef98611d43565b85611d66565b93878d526004865260408d2054611d66565b868c526004855260408c2055868b526117f98360408d2054611d43565b878c526004855260408c2055806119ed575b50806119b7575b50604051908152a3826006541682855260046020526040852054813b156119a0576040516338c110ef60e21b8082526001600160a01b0395909516600482015260248101919091529085908290604490829084905af16119a4575b508260065416908085526004602052604085205492823b156119a0576040519081526001600160a01b03919091166004820152602481019290925283919082908290604490829084905af161198c575b505060ff601d5416156118e4575b505060ff601d5416156118da57565b6118e2612231565b565b600654166040519163ffb2c47960e01b835260608360248184620493e0968760048401525af1908181948293611968575b50611922575b50506118cb565b60405193845260208401526040830152606082015260017fc864333d6121033635ab41b29ae52f10a22cf4438c3e4f1c4c68518feb2f8a9860803293a33880808061191b565b91509350611984915060603d811161059f576105918183611625565b919338611915565b611995906115fb565b61035a5781386118bd565b8580fd5b6119b0909491946115fb565b923861186d565b6119e490308b52600484526119d08160408d2054611d43565b308c526004855260408c2055601e54611d43565b601e5538611812565b308b526119fe8160408d2054611d43565b308c526004855260408c20556127109081611a1b600a5483611d73565b0480151580611b10575b611afb575b508b82611a39600b5484611d73565b0480611aa8575b505081611a4f600d5483611d73565b0480611a93575b50600c5480611a67575b505061180b565b611a7091611d73565b0480611a7e575b8080611a60565b611a8a90601b54611d43565b601b5538611a77565b611a9f90601c54611d43565b601c5538611a56565b30825260048752611abd816040842054611d66565b30835260048852604083205561dead8092528d6040611adf8382842054611d43565b9184815260048a52205560405190815287873092a38b38611a40565b611b0790600e54611d43565b600e5538611a2a565b508b600f54161515611a25565b8115611b69575b50611b31575b388061178c565b925050915060058202828104600503611b5557839285929091612710900490611b2a565b634e487b7160e01b87526011600452602487fd5b905038611b24565b50868b5260ff60408c20541615611787565b611bac575b611b94575b828161176c565b9050612710611ba560095485611d73565b0490611b8d565b9150612710611bbd60085486611d73565b0491611b88565b505050858a52828160ff60408d20541615611767565b6010548816841415915061174c565b9450806010541681861614159461173f565b928852506012602052604087205460ff168015611c5a575b15611c2057858592611739565b60405162461bcd60e51b815260206004820152601260248201527154726164696e67206e6f742061637469766560701b6044820152606490fd5b50858216875260ff604088205416611c13565b60ff915060a01c161538611733565b8284168714915061172d565b611c90611da6565b611717565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a416d6f756e74207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b6044820152606490fd5b5083811615156116ed565b91908201809211611d5057565b634e487b7160e01b600052601160045260246000fd5b91908203918211611d5057565b81810292918115918404141715611d5057565b8115611d90570490565b634e487b7160e01b600052601260045260246000fd5b601d5460ff81168015611df6575b611df357611dca610a62601b54601c5490611d43565b601a541115611dd65750565b60ff19908116600117601d55611dea611e40565b601d5416601d55565b50565b50601a5415611db4565b3d15611e3b573d9067ffffffffffffffff821161160f5760405191611e2f601f8201601f191660200184611625565b82523d6000602084013e565b606090565b601b54600090601c54600e5491611e5b836107758484611d43565b93841561221b5780601b5580601c5580600e5560018060a01b03601054166040516315ab88c960e31b8152602081600481855afa90811561221057879084926121ca575b50611eab919230611647565b6040516060810181811067ffffffffffffffff8211176121b65760405260028152602081019160403684378151156121a2573083528151600110156121a2576001600160a01b0390811660408301526010544793911690813b156106665791849160405193849263791ac94760e01b845260a48401908c600486015285602486015260a060448601525180915260c484019190855b81811061217d575050508383809230606483015242608483015203925af1908161216a575b50611fc6575050602092611faf7f9c517099ca0908fbba82379bf527eb8ca9a81835f95d9e61906d8578497171329593611fa4611fba94601b54611d43565b601b55601c54611d43565b601c55600e54611d43565b600e55604051908152a1565b611fd291935047611d66565b9280151580612156575b1561214c57828286611ff781611ff2868a611d73565b611d86565b965b82156121425761200c92611ff291611d73565b945b80612102575b50505082612023575b50505050565b818080808660018060a01b03600654165af161203d611e00565b50156120ea57506006546001600160a01b0316803b1561035a57818091602460405180948193630a30dee360e41b83528860048401525af180156120df576120cb575b50507fa34050dbab1220a48176516f252602780a1adfda5f8a7aa8673e3d6641fc64ec91816120b3604093601f54611d43565b601f5582519182526020820152a15b3880808061201d565b6120d582916115fb565b6106635780612080565b6040513d84823e3d90fd5b9150506120fa9150601b54611d43565b601b556120c2565b600f54829182918291906001600160a01b03165af161211f611e00565b501561212d575b8281612014565b61213990600e54611d43565b600e5538612126565b505050809461200e565b8282868296611ff9565b50600f546001600160a01b03161515611fdc565b612176909391936115fb565b9138611f65565b82516001600160a01b0316845289965087955060209384019390920191600101611f40565b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b9150506020813d602011612208575b816121e660209383611625565b8101031261040f57516001600160a01b038116810361040f5786611eab611e9f565b3d91506121d9565b6040513d85823e3d90fd5b5050505050565b6000198114611d505760010190565b601e5465048c273950008110611df35765048c27394fff198101818111611d5057601e556000606032811b915b6005811061226c5750505050565b60408051602090818101924284524481830152868683015284607483015260948881840152825260c082019180831067ffffffffffffffff84111761160f57828252519093206001600160a01b03908116939084159081156123ce575b81156123c0575b506123b35730600052600491828452816000205464e8d4a50fff19810190811161239e5730600052838552826000205584600052816000205464e8d4a510009384820180921161238957957f90bcf0048b4f2fce00ba208729b9edf192f9ca8c71b84845e2d94f7dffeeddcd949281969492612384999883600052865283600020558381527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef853092a351908152a2612222565b61225e565b601190634e487b7160e01b6000525260246000fd5b601184634e487b7160e01b6000525260246000fd5b5050505061238490612222565b9050601154168414386122d0565b30861491506122c9565b156123df57565b60405162461bcd60e51b815260206004820152600c60248201526b546f74616c203e203130302560a01b6044820152606490fd5b91908110156124235760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b03811681036108585790565b60185460009060ff8116156127355760135434036126fb5760081c60ff166126b0575b60165461247d3482611d43565b6015541061267c57612490903490611d43565b601655601454308252600460209080825260409280848620541061263a573385528183526124c18185872054611d43565b338652828452848620553085526124db8185872054611d66565b30865282845284862055338552601783526124f98185872054611d43565b3386526017845284862055835134815281848201527f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f853392a2835190815233907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843092a38060018060a01b036006541692338652528284205492823b1561066657516338c110ef60e21b81523391810191825260208201939093528391839182908490829060400103925af161262b575b5060165460155411156125bc5750565b7f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c79060ff19601854166018557f1eb1561f8507eb9bc6988331f66f369e75710f2b4b678ad5b4a52454b6636f5f8180a16126146127b4565b6011805460ff60a01b1916600160a01b17905580a1565b612634906115fb565b386125ac565b50915162461bcd60e51b815291820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b141c995cd85b1948199d5b1b60a21b6044820152606490fd5b338152601960205260ff6040822054166124705760405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590810939088185b5bdd5b9d60721b6044820152606490fd5b60405162461bcd60e51b815260206004820152601260248201527150726573616c65206e6f742061637469766560701b6044820152606490fd5b60a09194939260c0820195600180851b03168252602082015260006040820152600060608201527355b486df3acd881cc8a006bf45cb9a7353672e7a60808201520152565b6000308152600460205260408120544790801580156128a6575b6128a1576127e1601b54601c5490611d43565b8082111561201d576127f861283a91606093611d66565b84601b5584601c5560018060a01b0361281682826010541630611647565b601054169060405194858094819363f305d71960e01b83524290306004850161276f565b03925af19081156120df57916040917f03f82d6e9655f3dcff58c68e61adfad355b92c77a8fde4d53a423a6c58e29347938291612880575b5082519182526020820152a1565b905061289a915060603d811161059f576105918183611625565b5038612872565b505050565b5081156127ce56fea264697066735822122064985bb7eef54024e19ddf2a9d04eb72a72e1bb947ecc30cc77e8b98ab1f61b164736f6c634300081400336080346200034e57601f90601f196001600160401b0362001ba538819003858101841685018381118682101762000252578592829160405283396020948591810103126200034e5751936200005362000353565b6200005d62000353565b91815192848411620002525760039384546001948582811c9216801562000343575b8a8310146200032d578185849311620002d7575b508990858311600114620002745760009262000268575b505060001982871b1c191690841b1784555b8051948511620002525760049687548481811c9116801562000247575b828210146200023257838111620001e7575b50809286116001146200017b5750849550908492916000956200016f575b50501b92600019911b1c19161790555b600580546001600160a01b03191633908117909155604051919060007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361012c60115560125561180790816200039e8239f35b01519350388062000109565b939295859081168860005285600020956000905b89838310620001cc5750505010620001b1575b50505050811b01905562000119565b01519060f884600019921b161c1916905538808080620001a2565b8587015189559097019694850194889350908101906200018f565b88600052816000208480890160051c820192848a1062000228575b0160051c019085905b8281106200021b575050620000eb565b600081550185906200020b565b9250819262000202565b602289634e487b7160e01b6000525260246000fd5b90607f1690620000d9565b634e487b7160e01b600052604160045260246000fd5b015190503880620000aa565b908987941691886000528b6000209260005b8d828210620002c05750508411620002a7575b505050811b018455620000bc565b015160001983891b60f8161c1916905538808062000299565b8385015186558a9790950194938401930162000286565b90915086600052896000208580850160051c8201928c861062000323575b918891869594930160051c01915b8281106200031357505062000093565b6000815585945088910162000303565b92508192620002f5565b634e487b7160e01b600052602260045260246000fd5b91607f16916200007f565b600080fd5b60408051919082016001600160401b038111838210176200025257604052601582527f4d6f64615f4469766964656e645f547261636b65720000000000000000000000602083015256fe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600090813560e01c90816306fdde0314610b8b57508063095ea7b314610b1a57806309bbedde14610afb5780630bc2294414610a5557806318160ddd14610a36578063226cfa3d146109fe57806323b872dd146109db57806327ce0147146109b55780633009a60914610996578063313ce5671461097a57806331e79db0146108eb5780634e71d92d146108ba5780634e7b827f1461087c578063564c8d11146108565780635ebf4db9146108275780636a474002146108095780636f2789ec146107ea57806370a08231146107b3578063715018a61461075557806385a6b3ae146107365780638da5cb5b1461070d57806391b89fba146104f557806395d89b411461060a578063a30dee3014610522578063a8b9d240146104f5578063a9059cbb146104d6578063aafd847a1461049e578063bc4c4b371461044c578063be10b6141461042d578063dd62ed3e146103e4578063e30443bc146103a7578063f26b854f14610340578063f2fde38b1461028a578063fbcbc0f1146101df5763ffb2c4790361001257346101dc5760203660031901126101dc57506101ca6060923561150b565b91929081519384526020840152820152f35b80fd5b50903461028657602036600319011261028657610100916101fe610cca565b906102088261179d565b916102128161179d565b6001600160a01b0382166000908152600b602052604090205461023483610f1a565b9161023e84610ee4565b9360018060a01b03169687865260086020528080872054966010602052205496815198895260208901528701526060860152608085015260a084015260c083015260e0820152f35b5080fd5b50913461033c57602036600319011261033c576102a5610cca565b600554916001600160a01b03808416926102c0338514610cfb565b1693841561030157505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b0319161760055580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b50903461028657816003193601126102865760055482906001600160a01b031661036b338214610cfb565b479081158015610379578380f35b839283928392839061039e575bf11561039457818180808380f35b51903d90823e3d90fd5b506108fc610386565b509034610286573660031901126101dc576103e16103c3610cca565b6103d860018060a01b03600554163314610cfb565b602435906111e1565b80f35b50903461028657806003193601126102865780602092610402610cca565b61040a610ce5565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5090346102865781600319360112610286576020906012549051908152f35b509034610286578060031936011261028657610466610cca565b6024359283151584036101dc57506020926104959161049060018060a01b03600554163314610cfb565b61173a565b90519015158152f35b5090346102865760203660031901126102865760209181906001600160a01b036104c6610cca565b1681526008845220549051908152f35b509034610286573660031901126101dc576104ef610cca565b50610d9b565b5090346102865760203660031901126102865760209061051b610516610cca565b610ee4565b9051908152f35b50913461033c57602036600319011261033c5780359161054d60018060a01b03600554163314610cfb565b6002548015610606578315908115610563578580f35b60065491608086901b90600160801b8783041417156105f3570481018091116105e057600655518281527fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d7845411651160203392a26009549182018092116105cd575060095538808080808580f35b634e487b7160e01b835260119052602482fd5b634e487b7160e01b855260118352602485fd5b634e487b7160e01b875260118552602487fd5b8480fd5b509034610286578160031936011261028657805191809380549160019083821c92828516948515610703575b60209586861081146106f0578589529081156106cc5750600114610674575b6106708787610666828c0383610d79565b5191829182610c81565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106106b957505050826106709461066692820101943880610655565b805486850188015292860192810161069b565b60ff19168887015250505050151560051b8301019250610666826106703880610655565b634e487b7160e01b845260228352602484fd5b93607f1693610636565b50903461028657816003193601126102865760055490516001600160a01b039091168152602090f35b5090346102865781600319360112610286576020906009549051908152f35b50346101dc57806003193601126101dc57600554816001600160a01b03821661077f338214610cfb565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b03191660055580f35b5090346102865760203660031901126102865760209181906001600160a01b036107db610cca565b16815280845220549051908152f35b5090346102865781600319360112610286576020906011549051908152f35b50346101dc57806003193601126101dc5761082333610df4565b5080f35b5082346102865760203660031901126102865761084f60018060a01b03600554163314610cfb565b3560125580f35b5090346102865760203660031901126102865760209061051b610877610cca565b61179d565b5090346102865760203660031901126102865760209160ff9082906001600160a01b036108a7610cca565b168152600f855220541690519015158152f35b50346101dc57806003193601126101dc576005546108e2906001600160a01b03163314610cfb565b6108233361167f565b50903461028657602036600319011261028657610906610cca565b6005546001600160a01b039061091f9082163314610cfb565b811691828452600f60205283209081549160ff83166106065760016109539360ff191617905561094e81611114565b611016565b7fa878b31040b2e6d0a9a3d3361209db3908ba62014b0dca52adbaee451d128b258280a280f35b5090346102865781600319360112610286576020905160128152f35b509034610286578160031936011261028657602090600e549051908152f35b5090346102865760203660031901126102865760209061051b6109d6610cca565b610f1a565b50346101dc5760603660031901126101dc576109f5610cca565b506104ef610ce5565b5090346102865760203660031901126102865760209181906001600160a01b03610a26610cca565b1681526010845220549051908152f35b5090346102865781600319360112610286576020906002549051908152f35b50913461033c57602036600319011261033c57803591610a8060018060a01b03600554163314610cfb565b603c83101580610aee575b15610ac0575050601154817f474ea64804364a1e29a4487ddb63c3342a2dd826ccd8acf48825e680a0e6f20f8480a360115580f35b906020606492519162461bcd60e51b83528201526008602482015267062dad2dc5a6468d60c31b6044820152fd5b5062015180831115610a8b565b509034610286578160031936011261028657602090600a549051908152f35b50903461028657806003193601126102865760209181610b38610cca565b91602435918291338152600187528181209460018060a01b0316948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b9050828434610c7d5783600319360112610c7d57600354600181811c9186908281168015610c73575b6020958686108214610c605750848852908115610c3e5750600114610be5575b6106708686610666828b0383610d79565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610c2b575050508261067094610666928201019486610bd4565b8054868501880152928601928101610c0e565b60ff191687860152505050151560051b83010192506106668261067086610bd4565b634e487b7160e01b845260229052602483fd5b93607f1693610bb4565b8380fd5b6020808252825181830181905290939260005b828110610cb657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610c94565b600435906001600160a01b0382168203610ce057565b600080fd5b602435906001600160a01b0382168203610ce057565b15610d0257565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b6040810190811067ffffffffffffffff821117610d6357604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610d6357604052565b60405162461bcd60e51b8152602060048201526008602482015267191a5cd8589b195960c21b6044820152606490fd5b81810292918115918404141715610dde57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0316610e0681610ee4565b9081610e14575b5050600090565b60009080825260086020526040822054838101809111610ed057828085848295948395845260086020526040842055807fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d6020604051858152a25af1903d15610eca573d9067ffffffffffffffff8211610eb65760405191610ea0601f8201601f191660200184610d79565b825260203d92013e5b610eb35780610e0d565b90565b634e487b7160e01b81526041600452602490fd5b50610ea9565b634e487b7160e01b83526011600452602483fd5b610eb390610ef181610f1a565b6001600160a01b03909116600090815260086020526040902054905b91908203918211610dde57565b6006549060018060a01b0316610f3e60009282845283602052604084205490610dcb565b9082821261033c57825260076020526040822054610f5b91610f6a565b908082126101dc575060801c90565b908082019181831291600092838312908015821691151617610ed057821380159182610fbe575b8215610fa3575b5050156101dc575090565b90915081610fb4575b503880610f98565b9050821238610fac565b808512159250610f91565b600a5481101561100057600a6000527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b039081166000818152600d60205260408120805460ff81161561110d5760ff19169055600b602052806040812055600c602052604081205491600a5492600019938481019081116110f9576110bd92918661107a61109e93610fc9565b90549060031b1c1692838652600c6020528160408720558552846040812055610fc9565b90919082549060031b9160018060a01b03809116831b921b1916179055565b600a549081156110e5575001906110d382610fc9565b909182549160031b1b19169055600a55565b634e487b7160e01b81526031600452602490fd5b634e487b7160e01b84526011600452602484fd5b5050505050565b6001600160a01b031660008181526020818152604080832054909291908061113d575050505050565b6d6275726e203e2062616c616e636560901b82855161115b81610d47565b600e81520152848352828252828481205561117881600254610f0d565b60025582857fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef848751858152a3848352600782526111bc8484205491600654610dcb565b90838212610c7d57600792916111d191610f6a565b948352522055388080808061110d565b6001600160a01b038082166000818152600f60209081526040808320549596949560ff166114f35760125485106114d95783835282825280832054808611156113e95761122e9086610f0d565b6002548181018091116113d557600255848452838352818420548181018091116113d5578585528484528285205584847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef858551858152a38484526007835261129d8285205491600654610dcb565b848112908115916113d15782039182138082166113bd57816113b4575b5080156113ad575b15610c7d5784845260078352818420555b6001600160a01b0384166000908152600d602052604090205460ff161561132c575050506001600160a01b03166000908152600b60205260409020556113299190611324905b600554163314610cfb565b6116dc565b50565b6001600160a01b0384166000908152600d602052604090209394600c94805460ff191660011790556001600160a01b0386166000908152600b6020526040902055600a549384928685525282205568010000000000000000821015610eb65750916113a86113249261109e856001611329989701600a55610fc9565b611319565b50836112c2565b905015386112ba565b634e487b7160e01b86526011600452602486fd5b8580fd5b634e487b7160e01b85526011600452602485fd5b858181106113f9575b50506112d3565b61140291610f0d565b84845283835281842054825161141781610d47565b600e81526d6275726e203e2062616c616e636560901b858201528183116114ba57508190868652858552038285205561145281600254610f0d565b60025583857fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef858551858152a3848452600783526114968285205491600654610dcb565b9084821261060657906114a891610f6a565b848452600783528184205538856113f2565b835162461bcd60e51b81529081906114d59060048301610c81565b0390fd5b5050506113249150916113a88361094e6113299695611114565b50505050505050565b6000198114610dde5760010190565b90600a8054928315611653579291600e546000925a92849685935b8187108061164a575b156115f85761153d906114fc565b9783548910156115ef575b61155189610fc9565b9060018060a01b03918291549060031b1c169081600052601060205261157b604060002054611660565b6115bb575b505061158b906114fc565b945a9081811161159e575b509497611526565b816115ab91989298610f0d565b8101809111610dde579538611596565b906113246115ce92600554163314610cfb565b6115da575b3880611580565b936115e761158b916114fc565b9490506115d3565b60009850611548565b96509296935093505083600e5560405190828252856020830152846040830152606082015260017fc864333d6121033635ab41b29ae52f10a22cf4438c3e4f1c4c68518feb2f8a9860803293a3929190565b5087891061152f565b5050600e54600092508291565b428111611679576116719042610f0d565b601154111590565b50600090565b61168881610df4565b80611694575050600090565b7fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf092602060009360018060a01b03169283855260108252426040862055604051908152a3600190565b6116e581610df4565b806116f1575050600090565b7fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf0926020600193848060a01b031692836000526010825242604060002055604051908152a3600190565b9061174482610df4565b918261175257505050600090565b60207fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf0929160018060a01b031692836000526010825242604060002055604051948552151593a3600190565b6001600160a01b03166000908152600d602052604090205460ff16156117cb57600c60205260406000205490565b6000199056fea264697066735822122073ec67596f00ea141cc77b15c5f77552ea177f26f66d8c66757dce2e63fed3de64736f6c634300081400338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
};

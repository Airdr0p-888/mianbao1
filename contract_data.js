// Auto-generated contract data
const CONTRACT_ABI = [
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
        "indexed": true,
        "internalType": "address",
        "name": "holder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "DividendClaimed",
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
        "name": "dividendReceived",
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
        "indexed": true,
        "internalType": "address",
        "name": "oldTracker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newTracker",
        "type": "address"
      }
    ],
    "name": "DividendTrackerUpdated",
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
    "name": "claimDividend",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "inputs": [],
    "name": "dividendTrackerEmergencyWithdrawBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "excluded",
        "type": "bool"
      }
    ],
    "name": "excludeFromDividend",
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
        "name": "wait_",
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
        "internalType": "contract ModaDividendTracker",
        "name": "newTracker",
        "type": "address"
      }
    ],
    "name": "setDividendTracker",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "gas",
        "type": "uint256"
      }
    ],
    "name": "triggerDividendProcess",
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
    "inputs": [],
    "name": "withdrawPresaleBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

const CONTRACT_BYTECODE = "0x60c080604052346200067757600060a05262004c21803803809162000025828562000bea565b8339810161020082820312620006d05781516001600160401b038111620006d057816200005491840162000c0e565b602083015190916001600160401b038211620006d0576200007791840162000c0e565b9160408101519260608201519260808301519460a084015160c085015160e086015190610100870151926101208801519461014089015196620000be6101608b0162000c85565b986101808b0151916101a08c01516080526101c08c01519b8c15158d03620006d0576101e0620000ef910162000c85565b60a051906001600160a01b03811662000bba5750335b81546001600160a01b0319166001600160a01b03919091169081178255604051917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3678ac7230489e800006019556109c49081871162000b855750861162000b4c57612710620001898b620001838c620001838d8d62000c9a565b62000c9a565b0362000b12578d1562000add578c1562000aa8578c8e1062000a70576001600160a01b038b161562000a3d576080516001811015908162000a30575b5015620009f8578051906001600160401b038211620008fc5760015460a051600182811c92168015620009ed575b6020831014620008da57509081601f84931162000993575b5060a05190602091601f841160011462000920575060a0519262000914575b50508160011b916000199060031b1c1916176001555b8051906001600160401b038211620008fc5760025460a051600182811c92168015620008f1575b6020831014620008da57509081601f84931162000880575b5060a05190602091601f84116001146200080d575060a0519262000801575b50508160011b916000199060031b1c1916176002555b670de0b6b3a76400008281810204811483151715620007e9578083026003553060a05152600460205260a05192026040832055604051918261133581011060018060401b0361133585011117620007d25750611335620038ec8339611335820190815230602082015260a05191908190036040019082f0908115620007c6575060018060a01b031660018060a01b03196018541617601855600655600755600855600955600b55600a5560018060a01b03811660018060a01b0319600d541617600d557310ed43c718714eb63d5aa57b78b54704e256024e60018060a01b0319600e541617600e5560405163c45a015560e01b81526020816004817310ed43c718714eb63d5aa57b78b54704e256024e5afa908115620006ab5760a0519162000784575b506040516315ab88c960e31b81526020816004817310ed43c718714eb63d5aa57b78b54704e256024e5afa8015620006ab5760a0519062000742575b6040516364e329cb60e11b81523060048201526001600160a01b03918216602482015260a051909360209350849260449284929091165af1908115620006ab5760a0519162000700575b50600f80546001600160a01b0319166001600160a01b0392831617905560a08051309052601060205280516040808220805460ff1990811660019081179092558354861690935283518281208054851683179055958516909552825181812080548416871790557310ed43c718714eb63d5aa57b78b54704e256024e9052915191822080549091169093179092556018541690813b15620006a8575060405162241fbd60e51b91828252306004830152600160248301528160448160a05180945af18015620006ab57620006ee575b506018546001600160a01b0316803b15620006d0576040519082825260a0516004830152600160248301528160448160a05180945af18015620006ab57620006d6575b50601854600f546001600160a01b039081169116803b15620006d057604051918383526004830152600160248301528160448160a05180945af18015620006ab57620006b8575b5060185460a05180546001600160a01b03928316921690823b15620006a857506040519283526004830152600160248301528160448160a05180945af18015620006ab5762000692575b5060019061ff0060165491151560081b169061ffff1916171760165560ff60a01b19600f5416600f55806011558160135560035491608051928381029381850414901517156200067c570490816064029160648304036200067c578115620006775704601255604051612c43908162000ca98239f35b600080fd5b634e487b7160e01b600052601160045260246000fd5b6200069d9062000bc0565b60a051801562000601575b80fd5b6040513d60a051823e3d90fd5b620006c39062000bc0565b60a0518015620005b75780fd5b60a05180fd5b620006e19062000bc0565b60a0518015620005705780fd5b620006f99062000bc0565b386200052d565b90506020813d60201162000739575b816200071e6020938362000bea565b81010312620006d057620007329062000c85565b386200045e565b3d91506200070f565b506020813d6020116200077b575b816200075f6020938362000bea565b81010312620006d0576200077560209162000c85565b62000414565b3d915062000750565b90506020813d602011620007bd575b81620007a26020938362000bea565b81010312620006d057620007b69062000c85565b38620003d8565b3d915062000793565b604051903d90823e3d90fd5b634e487b7160e01b9052604160045260a051602490fd5b634e487b7160e01b60a051526011600452602460a051fd5b0151905038806200029e565b60029194505260a051906020822091935b601f198416851062000864576001945083601f198116106200084a575b505050811b01600255620002b4565b015160001960f88460031b161c191690553880806200083b565b818101518355602094850194600190930192909101906200081e565b909150600260a0515260a05160208120601f850160051c810160208610620008d2575b9085949392915b601f840160051c82018110620008c3575050506200027f565b828155869550600101620008aa565b5080620008a3565b634e487b7160e01b9052602260045260a051602490fd5b91607f169162000267565b634e487b7160e01b60a051526041600452602460a051fd5b0151905038806200022a565b60019194505260a051906020822091935b601f198416851062000977576001945083601f198116106200095d575b505050811b0160015562000240565b015160001960f88460031b161c191690553880806200094e565b8181015183556020948501946001909301929091019062000931565b909150600160a0515260a05160208120601f850160051c810160208610620009e5575b9085949392915b601f840160051c82018110620009d6575050506200020b565b828155869550600101620009bd565b5080620009b6565b91607f1691620001f3565b60405162461bcd60e51b815260206004820152601060248201526f50726573616c652070637420312d393960801b6044820152606490fd5b60639150111538620001c5565b60405162461bcd60e51b815260206004820152600b60248201526a57616c6c6574207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201526f119a5b1b080f081b5a5b9d0818dbdcdd60821b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c04d696e7420636f7374203e203609c1b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c046696c6c206d757374203e203609c1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271054617820616c6c6f6320213d2031303030360741b6044820152606490fd5b60405162461bcd60e51b81526020600482015260116024820152700a6cad8d840e8c2f040e8dede40d0d2ced607b1b6044820152606490fd5b62461bcd60e51b815260206004820152601060248201526f084eaf240e8c2f040e8dede40d0d2ced60831b6044820152606490fd5b62000105565b6001600160401b03811162000bd457604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000bd457604052565b919080601f8401121562000677578251906001600160401b03821162000bd4576040519160209162000c4a601f8301601f191684018562000bea565b818452828287010111620006775760005b81811062000c7157508260009394955001015290565b858101830151848201840152820162000c5b565b51906001600160a01b03821682036200067757565b919082018092116200067c5756fe604060808152600480361015610062575b361561001b57600080fd5b60ff60165416156100305761002e6127c0565b005b6020606492519162461bcd60e51b8352820152600d60248201526c141c995cd85b1948195b991959609a1b6044820152fd5b6000803560e01c80630442bfa81461160157806306fdde03146115465780630807b9e214611527578063095ea7b3146114f55780630f44f3a7146114ab5780631249c58b146114975780631694505e1461146e57806318160ddd1461144f5780631d111d1314611407578063232452161461138d57806323b872dd146112e05780632c1f5216146112b7578063313ce5671461129b57806333cb7d911461122257806336a8bb1f1461120357806349bd5a5e146111da57806353135ca0146111b657806353deb3d6146111975780635999095e146111265780635c1d8b05146111075780635d098b38146110b257806364c30c8a1461109257806366e3540a1461107357806370a082311461103c578063715018a614610fe05780637515d15514610fc157806375f0a87414610f9857806377ecc24c14610f6a57806382c67cbe14610f4b5780638a8c523c14610ea85780638ab148fb14610e815780638cd09d5014610e4a5780638da5cb5b14610e2257806391c04cfb14610da05780639242338314610d8157806395d89b4114610c7f57806398acb5d814610c0e5780639b19251a14610bd05780639f276f5e14610bb1578063a04eab9714610b59578063a4c3b09114610af2578063a9059cbb14610ac1578063addc831e14610a72578063ae9bb3fa14610a23578063b5bc09d5146109c5578063b6138b1a146104bf578063bbc0c7421461099e578063c2fe651e1461097f578063c473413a14610960578063c6a3064714610907578063c9f62af2146108e8578063cb4ca631146108aa578063cffd129c1461088b578063d3fa94f814610838578063dc1052e214610801578063dd62ed3e146107b3578063e3b3904014610794578063e51fde3214610775578063e7ce0a41146106f6578063e8078d94146105c7578063edac985b14610545578063efaa7442146104c4578063f0187b87146104bf578063f0fc6bca14610434578063f2fde38b1461037f5763fbbf8cc3146103445750610010565b823461037b57602036600319011261037b5760209181906001600160a01b0361036b611740565b1681526015845220549051908152f35b5080fd5b509190346104305760203660031901126104305761039b611740565b8354916001600160a01b03808416926103b53385146117e4565b169384156103f557505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b50918291346104bb57826003193601126104bb57602090604460018060a01b0360185416918451958693849263bc4c4b3760e01b845233908401528160248401525af19081156104b25750610487575080f35b6104a79060203d81116104ab575b61049f818361185a565b810190611f55565b5080f35b503d610495565b513d84823e3d90fd5b5050fd5b6117c8565b50903461037b57602036600319011261037b57356104ec60018060a01b0383541633146117e4565b61053f61052d61052d60085461053a6105086009548093611f28565b9161053a600b5491610534600a54956127109889916105278988611f28565b90611f28565b1115612bd2565b88611f28565b611f28565b60085580f35b50903461037b576105553661176c565b83549194916001600160a01b03919061057190831633146117e4565b845b81811061057e578580f35b8261059261058d83858b612786565b6127ac565b1686526017602052838620600160ff19825416179055600181018091111561057357634e487b7160e01b865260118552602486fd5b5091903461043057826003193601126104305782546001600160a01b03906105f290821633146117e4565b601a5447811515806106ed575b156106b9579161067894939160609387601a556106218284600e54163061187c565b600e548854875163f305d71960e01b8152309681019687526020870194909452600060408701819052606087015284166001600160a01b031660808601524260a08601529196879493909216928492839160c00190565b03925af19081156104b2575061068c575080f35b6106ac9060603d81116106b2575b6106a4818361185a565b8101906125ad565b50505080f35b503d61069a565b845162461bcd60e51b8152602081860152600e60248201526d139bdd1a1a5b99c81d1bc818591960921b6044820152606490fd5b508015156105ff565b50809183346104bb5760203660031901126104bb5782546001600160a01b039061072390821633146117e4565b6018541691823b156107705783926024849284519586938492635ebf4db960e01b84528035908401525af19081156104b2575061075d5750f35b61076690611830565b61076d5780f35b80fd5b505050fd5b50823461037b578160031936011261037b57602090600b549051908152f35b50823461037b578160031936011261037b57602090601a549051908152f35b50823461037b578060031936011261037b576020916107d0611740565b826107d9611756565b6001600160a01b03928316845260058652922091166000908152908352819020549051908152f35b50903461037b57602036600319011261037b573561082960018060a01b0383541633146117e4565b6109c4811161037b5760065580f35b50903461037b57602036600319011261037b573561086060018060a01b0383541633146117e4565b61088561271061052d8361053a61087c60085460095490611f28565b600b5490611f28565b600a5580f35b50823461037b578160031936011261037b576020906007549051908152f35b50823461037b57602036600319011261037b5760209160ff9082906001600160a01b036108d5611740565b1681526010855220541690519015158152f35b50823461037b578160031936011261037b57602090600a549051908152f35b50823461037b578060031936011261037b57610921611740565b9061092a6117b9565b835490926001600160a01b039161094490831633146117e4565b168352601060205282209060ff80198354169115151617905580f35b50823461037b578160031936011261037b576020906006549051908152f35b50823461037b578160031936011261037b576020906013549051908152f35b50823461037b578160031936011261037b5760209060ff600f5460a01c1690519015158152f35b50809183346104bb57826003193601126104bb5782546001600160a01b03906109f190821633146117e4565b6018541691823b1561077057815163f26b854f60e01b81529284918491829084905af19081156104b2575061075d5750f35b50903461037b57602036600319011261037b5735801515809103610a6d57610a5560018060a01b0383541633146117e4565b61ff006016549160081b169061ff0019161760165580f35b600080fd5b50903461037b57602036600319011261037b5735610a9a60018060a01b0383541633146117e4565b610abb61271061052d610ab261087c85600854611f28565b600a5490611f28565b60095580f35b50823461037b578060031936011261037b57602090610aeb610ae1611740565b602435903361190e565b5160018152f35b5091346104305780600319360112610430576020610b0e611740565b92604460018060a01b0391868381541693610b2a3386146117e4565b8651978895869463a9059cbb60e01b86528501526024356024850152165af19081156104b25750610487575080f35b50918291346104bb5760203660031901126104bb5760185482516001624d3b8760e01b03198152823592810192909252909260609184916024918391906001600160a01b03165af19081156104b2575061068c575080f35b50823461037b578160031936011261037b57602090601b549051908152f35b50823461037b57602036600319011261037b5760209160ff9082906001600160a01b03610bfb611740565b1681526017855220541690519015158152f35b50903461037b57602036600319011261037b57356001600160a01b038181169182900361043057610c438184541633146117e4565b816018549182167fdab7e227381106009c2eb953811a49c7e30de8e9eb12e2aedb79b25c22f474b98580a36001600160a01b0319161760185580f35b509134610430578260031936011261043057805191836002549060019082821c928281168015610d77575b6020958686108214610d645750848852908115610d425750600114610ce9575b610ce58686610cdb828b038361185a565b51918291826116f7565b0390f35b929550600283527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b828410610d2f5750505082610ce594610cdb928201019438610cca565b8054868501880152928601928101610d12565b60ff191687860152505050151560051b8301019250610cdb82610ce538610cca565b634e487b7160e01b845260229052602483fd5b93607f1693610caa565b50823461037b578160031936011261037b576020906014549051908152f35b50809183346104bb57806003193601126104bb57610dbc611740565b610dc46117b9565b845490916001600160a01b0391610dde90831633146117e4565b816018541690813b15610e1e578660449281958751988996879562241fbd60e51b87521690850152151560248401525af19081156104b2575061075d5750f35b8680fd5b50823461037b578160031936011261037b57905490516001600160a01b039091168152602090f35b50903461037b57602036600319011261037b5735610e7260018060a01b0383541633146117e4565b6109c4811161037b5760075580f35b50823461037b578160031936011261037b5760209060ff60165460081c1690519015158152f35b50919034610430578260031936011261043057610ecf60018060a01b0384541633146117e4565b600f549160ff8360a01c16610f1757505060ff60a01b1916600160a01b17600f557f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c78180a180f35b906020606492519162461bcd60e51b8352820152600e60248201526d416c72656164792061637469766560901b6044820152fd5b50823461037b578160031936011261037b57602090600c549051908152f35b50903461037b57602036600319011261037b57610f9160018060a01b0383541633146117e4565b3560195580f35b50823461037b578160031936011261037b57600d5490516001600160a01b039091168152602090f35b50823461037b578160031936011261037b576020906011549051908152f35b503461076d578060031936011261076d578054816001600160a01b0382166110093382146117e4565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b509190346104305760203660031901126104305760209282916001600160a01b03611065611740565b168252845220549051908152f35b50823461037b578160031936011261037b576020906008549051908152f35b50823461037b578160031936011261037b576020905164e8d4a510008152f35b503461076d57602036600319011261076d576110cc611740565b81546001600160a01b0391906110e590831633146117e4565b16801561037b576bffffffffffffffffffffffff60a01b600d541617600d5580f35b50823461037b578160031936011261037b576020906019549051908152f35b50918291346104bb5760203660031901126104bb5782546001600160a01b039061115390821633146117e4565b60185416803b156107705760248492845195869384926302f08a5160e21b84528035908401525af19081156104b2575061118b575080f35b61119490611830565b80f35b50823461037b578160031936011261037b576020906009549051908152f35b50823461037b578160031936011261037b5760209060ff6016541690519015158152f35b50823461037b578160031936011261037b57600f5490516001600160a01b039091168152602090f35b50823461037b578160031936011261037b57602090601d549051908152f35b5091903461043057826003193601126104305782546001600160a01b031661124b3382146117e4565b4791821561126f575083808093819382f115611265575080f35b51903d90823e3d90fd5b606490602085519162461bcd60e51b8352820152600660248201526527379021272160d11b6044820152fd5b50823461037b578160031936011261037b576020905160128152f35b50823461037b578160031936011261037b5760185490516001600160a01b039091168152602090f35b50903461037b57606036600319011261037b576112fb611740565b611303611756565b6001600160a01b03821684526005602090815285852033865290529284902054604435939284821061134a57602086610aeb878787611345838903338361187c565b61190e565b606490602087519162461bcd60e51b8352820152601760248201527f45524332303a2065786365656420616c6c6f77616e63650000000000000000006044820152fd5b50903461037b5761139d3661176c565b83549194916001600160a01b0391906113b990831633146117e4565b845b8181106113c6578580f35b826113d561058d83858b612786565b168652601760205283862060ff19815416905560018101809111156113bb57634e487b7160e01b865260118552602486fd5b50823461037b578160031936011261037b578180808060018060a01b038154166114323382146117e4565b4790828215611446575bf115611265575080f35b506108fc61143c565b50823461037b578160031936011261037b576020906003549051908152f35b50823461037b578160031936011261037b57600e5490516001600160a01b039091168152602090f35b508060031936011261076d576111946127c0565b50903461037b57602036600319011261037b57356114d360018060a01b0383541633146117e4565b6114ef61271061052d610ab28461053a60085460095490611f28565b600b5580f35b50823461037b578060031936011261037b57602090610aeb611515611740565b61151d6120e5565b602435903361187c565b50823461037b578160031936011261037b576020906012549051908152f35b50913461043057826003193601126104305780519183600180549182821c9282811680156115f7575b6020958686108214610d645750848852908115610d42575060011461159f57610ce58686610cdb828b038361185a565b9295508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8284106115e45750505082610ce594610cdb928201019438610cca565b80548685018801529286019281016115c7565b93607f169361156f565b5091903461043057816003193601126104305780356024359061162e60018060a01b0386541633146117e4565b8015938415806116ed575b156116ba57508060115581601355600354936032850294808604603214901517156116a7576116a35761166b916118ee565b9081606402916064830403611690575080156104305761168a916118ee565b60125580f35b634e487b7160e01b845260119052602483fd5b8480fd5b634e487b7160e01b865260118452602486fd5b5162461bcd60e51b8152602081850152600e60248201526d496e76616c696420706172616d7360901b6044820152606490fd5b5081831015611639565b6020808252825181830181905290939260005b82811061172c57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161170a565b600435906001600160a01b0382168203610a6d57565b602435906001600160a01b0382168203610a6d57565b906020600319830112610a6d5760043567ffffffffffffffff92838211610a6d5780602383011215610a6d578160040135938411610a6d5760248460051b83010111610a6d576024019190565b602435908115158203610a6d57565b34610a6d576000366003190112610a6d57602060405160058152f35b156117eb57565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b67ffffffffffffffff811161184457604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761184457604052565b90916001600160a01b0391821691821515806118e3575b15610a6d577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916020918460005260058352604060002095169485600052825280604060002055604051908152a3565b508084161515611893565b81156118f8570490565b634e487b7160e01b600052601260045260246000fd5b91906001600160a01b038316151580611f16575b15611ee2578115611eaf576001600160a01b0383166000908152600460205260409020548211611e735760ff601c541615611e66575b600f546001600160a01b03848116908216149190828015611e51575b80611e43575b611dc5575b82611dac575b6001600160a01b0382811691161480611d94575b60009260018060a01b03861660005260106020528060ff604060002054161580611d73575b611d30575b506001600160a01b03861660009081526010602052604081205490929060ff161580611d12575b611cc5575b5050908183611a49611a2d611a276020967fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef98611f28565b88611f35565b9660018060a01b03891660005260048652604060002054611f35565b6001600160a01b0388811660009081526004875260408082209390935590851681522054611a78908790611f28565b6001600160a01b038416600090815260048652604090205580611b84575b5080611b4a575b50611aa785611f6d565b611ab081611f6d565b60ff601c541615611aec575b60ff601c541615611adf575b6040519384526001600160a01b03908116941692a3565b611ae76125c8565b611ac8565b6018546040516001624d3b8760e01b0319815262061a80600482015290606090829060249082906000906001600160a01b03165af1611b2c575b50611abc565b611b439060603d81116106b2576106a4818361185a565b5050611b26565b611b7b903060005260048452611b6581604060002054611f28565b3060005260048552604060002055601d54611f28565b601d5538611a9d565b30600052611b9781604060002054611f28565b30600052600485526040600020556127109081611bb660085483611f42565b0480151580611cb1575b611c9c575b5081611bd360095483611f42565b0480611c41575b5081611be8600a5483611f42565b0480611c2c575b50600b5480611c00575b5050611a96565b611c0991611f42565b0480611c17575b8080611bf9565b611c2390601b54611f28565b601b5538611c10565b611c3890601a54611f28565b601a5538611bef565b3060005260048652611c5881604060002054611f35565b306000526004875260406000205561dead9081600052611c7d81604060002054611f28565b826000526004885260406000205560405190815287873092a338611bda565b611ca890600c54611f28565b600c5538611bc5565b50600d546001600160a01b03161515611bc0565b8115611d0a575b50611cd9575b38806119ef565b506005830290838204600503611cf457906127109004611cd2565b634e487b7160e01b600052601160045260246000fd5b905038611ccc565b506001600160a01b0384166000908152604090205460ff16156119ea565b611d59575b81611d41575b806119c3565b9250612710611d5260075486611f42565b0492611d3b565b819350612710611d6b60065487611f42565b049350611d35565b50506001600160a01b03831660009081526040902054819060ff16156119be565b50600e546001600160a01b0385811691161415611999565b600e546001600160a01b03838116911614159250611985565b6001600160a01b03851660009081526010602052604090205460ff168015611e26575b61197f5760405162461bcd60e51b815260206004820152601260248201527154726164696e67206e6f742061637469766560701b6044820152606490fd5b506001600160a01b0382166000908152604090205460ff16611de8565b5060ff8160a01c161561197a565b506001600160a01b0382811690821614611974565b611e6e6120e5565b611958565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a416d6f756e74207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b6044820152606490fd5b506001600160a01b0381161515611922565b91908201809211611cf457565b91908203918211611cf457565b81810292918115918404141715611cf457565b90816020910312610a6d57518015158103610a6d5790565b60018060a01b03806018541660409180835194634e7b827f60e01b865216918260048601526020948581602481855afa9081156120da576000916120bd575b506120b6578260005260048552836000205494845190632f842d8560e21b82528082600481865afa9081156120ab5760009161207f575b508610905061204157506018541692833b15610a6d57604460009283855196879485936338c110ef60e21b8552600485015260248401525af1908115612037575061202c575b50565b61203590611830565b565b513d6000823e3d90fd5b935050823b15610a6d5760009260448492845195869384926338c110ef60e21b845260048401528160248401525af1908115612037575061202c5750565b82813d83116120a4575b612093818361185a565b8101031261076d5750518038611fe3565b503d612089565b86513d6000823e3d90fd5b5050505050565b6120d49150863d88116104ab5761049f818361185a565b38611fac565b85513d6000823e3d90fd5b601c5460ff8116801561213b575b61202957612112612109601b54601a5490611f28565b600c5490611f28565b601954111561211e5750565b60ff19908116600117601c55612132612185565b601c5416601c55565b50601954156120f3565b3d15612180573d9067ffffffffffffffff82116118445760405191612174601f8201601f19166020018461185a565b82523d6000602084013e565b606090565b601b8054601a54600c5461219d8161053a8486611f28565b9182156120b65760009485815585601a5585600c5560018060a01b03946121c98587600e54163061187c565b604096875196606088019767ffffffffffffffff988181108a821117612599578a5260028152602098898201918b3684378051156125855730835283600e54168c516315ab88c960e31b81528c81600481855afa90811561257b578791612545575b50825160011015612531579186918e958e888f96168885015247975195869463791ac94760e01b865260a4860191600487015286602487015260a060448701525180915260c48501929186905b82821061250c57505050508383809230606483015242608483015203925af1918261246f575b50506122fc575050506122f292826122dd6122e7937f9c517099ca0908fbba82379bf527eb8ca9a81835f95d9e61906d8578497171329a979554611f28565b9055601a54611f28565b601a55600c54611f28565b600c5551908152a1565b61230d919293949998955047611f35565b9480151580612462575b1561245d576123268187611f42565b670de0b6b3a764000090818102908082048314901517156124495781890291898304036124495790612357916118ee565b505b82848861236f8161236a868c611f42565b6118ee565b98821561243f576123839261236a91611f42565b965b80612409575b5050508461239e575b5050505050505050565b8180868193601854165af16123b1612145565b50156123f257507fa34050dbab1220a48176516f252602780a1adfda5f8a7aa8673e3d6641fc64ec94508351928352820152a15b3880808080808080612394565b9250505061240291508254611f28565b90556123e5565b8180809286600d54165af161241c612145565b501561242a575b828161238b565b61243690600c54611f28565b600c5538612423565b5050508096612385565b634e487b7160e01b85526011600452602485fd5b612359565b5081600d54161515612317565b3d8087843e61247e818461185a565b8201918c81840312610e1e5780519082821161250857019082601f83011215610e1e5781519081116124f457908c808f938060051b9451906124c28387018361185a565b81520192820101928311610e1e578c809101915b8383106124e457505061229e565b82518152918101918d91016124d6565b634e487b7160e01b87526041600452602487fd5b8780fd5b919496509282955081908b600194511681520194019101908f928694928b9694612278565b634e487b7160e01b87526032600452602487fd5b90508c81813d8311612574575b61255c818361185a565b81010312610e1e57518581168103610e1e573861222b565b503d612552565b8e513d89823e3d90fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526041600452602484fd5b90816060910312610a6d578051916040602083015192015190565b601d805465048c2739500081106127825765048c27394fff198101908111611cf4578155600090606032811b925b600581106126045750505050565b825460408051602091828201934285524482840152888784015285607484015260949081840152825260c082019180831067ffffffffffffffff84111761184457828252519093206001600160a01b0390811693908415908115612778575b811561276a575b506127615730600052600491828452816000205464e8d4a50fff19810190811161274c5730600052838552826000205584600052816000205464e8d4a5100093848201809211612737579186917f90bcf0048b4f2fce00ba208729b9edf192f9ca8c71b84845e2d94f7dffeeddcd9695949383600052865283600020558381527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef853092a351908152a25b60018101809111156125f657634e487b7160e01b600052601160045260246000fd5b601190634e487b7160e01b6000525260246000fd5b601184634e487b7160e01b6000525260246000fd5b50505050612715565b9050600f541684143861266a565b3086149150612663565b5050565b91908110156127965760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b0381168103610a6d5790565b60165460ff811615612a56576011543403612a1c5760081c60ff166129cf575b6014546127ed3482611f28565b6013541061299b57612800903490611f28565b60145560125460009030825260209060048252604081818520541061295857338452600483526128338282862054611f28565b338552600484528185205530845261284e8282862054611f35565b30855260048452818520553384526015835261286d8282862054611f28565b3385526015845281852055805134815282848201527f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f823392a2519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef33923092a36128da33611f6d565b60145460135411156128e95750565b7f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c79060ff19601654166016557f1eb1561f8507eb9bc6988331f66f369e75710f2b4b678ad5b4a52454b6636f5f8180a1612941612a90565b600f805460ff60a01b1916600160a01b17905580a1565b5162461bcd60e51b815260048101839052601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b141c995cd85b1948199d5b1b60a21b6044820152606490fd5b33600052601760205260ff604060002054166127e05760405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590810939088185b5bdd5b9d60721b6044820152606490fd5b60405162461bcd60e51b815260206004820152601260248201527150726573616c65206e6f742061637469766560701b6044820152606490fd5b6000308152600460205260408120544781158015612bca575b612bc557612abc601b54601a5490611f28565b9081831115612bbf57612ad4606092612b4d94611f35565b9084601b5584601a5560018060a01b0390612af48383600e54163061187c565b600e54865460405163f305d71960e01b8152306004820152602481019590955260006044860181905260648601526001600160a01b039084161660848501524260a48501529294859390921691839190829060c4820190565b03925af1908115612bb457916040917f03f82d6e9655f3dcff58c68e61adfad355b92c77a8fde4d53a423a6c58e29347938291612b93575b5082519182526020820152a1565b9050612bad915060603d81116106b2576106a4818361185a565b5038612b85565b6040513d84823e3d90fd5b50505050565b505050565b508015612aa9565b15612bd957565b60405162461bcd60e51b815260206004820152600c60248201526b546f74616c203e203130302560a01b6044820152606490fdfea2646970667358221220ab8c2c426f26397dec3efa31cbe7b7fafb9aac393c86d3bb141659c91b617c3764736f6c634300081400336080346100b657601f61133538819003918201601f19168301916001600160401b038311848410176100bb5780849260409485528339810103126100b65780516020909101516001600160a01b03908181168082036100b6576100b15750335b16908160018060a01b031960005416176000556040519160007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361012c600c55600d5561126390816100d28239f35b61005f565b600080fd5b634e487b7160e01b600052604160045260246000fdfe604060808152600480361015610072575b361561001b57600080fd5b602060649261003560018060a01b0360005416331461095a565b5162461bcd60e51b815291820152601d60248201527f4469766964656e64506179696e67546f6b656e3a20737570706c793d300000006044820152fd5b906000803560e01c80630342a9781461088c5780630483f7a0146107f457806309bbedde146107d55780630bc229441461077b57806318160ddd14610760578063226cfa3d1461072857806327ce0147146107025780633009a609146106e35780634e71d92d146106635780634e7b827f146106255780635ebf4db9146105f75780636843cd84146105d15780636a474002146105bd5780636f2789ec1461059e57806370a0823114610566578063715018a61461050a57806385a6b3ae146104ec5780638da5cb5b146104c4578063a30dee3014610496578063a8b9d24014610469578063aafd847a14610431578063bc4c4b3714610355578063be10b61414610336578063e30443bc146102fa578063f26b854f14610290578063f2fde38b146101dc5763ffb2c479146101a9575090610010565b346101d95760203660031901126101d957506101c7606092356110fa565b91929081519384526020840152820152f35b80fd5b50913461028c57602036600319011261028c576101f7610930565b8354916001600160a01b038084169261021133851461095a565b1693841561025157505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b5090346102f657816003193601126102f657815482906001600160a01b03166102ba33821461095a565b4790811580156102c8578380f35b83928392839283906102ed575bf1156102e357818180808380f35b51903d90823e3d90fd5b506108fc6102d5565b5080fd5b5090346102f6573660031901126101d957610333610316610930565b61032a60018060a01b03845416331461095a565b60243590610a84565b80f35b5090346102f657816003193601126102f657602090600d549051908152f35b5090346102f657806003193601126102f65790602091610373610930565b9161037c61094b565b81546001600160a01b0394918491610397908716331461095a565b1580610408575b6103a783610e01565b95866103b9575b878784519015158152f35b7fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf092931693848152600b885282429120556103f2846109dc565b9082519182521587820152a283808281806103ae565b8583168452600b875261042c61042483862054600c54906109a6565b4210156111ec565b61039e565b5090346102f65760203660031901126102f65760209181906001600160a01b03610459610930565b1681526003845220549051908152f35b5090346102f65760203660031901126102f65760209061048f61048a610930565b6109dc565b9051908152f35b5091903461028c57602036600319011261028c5760209061003560649460018060a01b03905416331461095a565b5090346102f657816003193601126102f657905490516001600160a01b039091168152602090f35b50913461028c578260031936011261028c5760209250549051908152f35b50346101d957806003193601126101d9578054816001600160a01b03821661053333821461095a565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b5090346102f65760203660031901126102f65760209181906001600160a01b0361058e610930565b1681526006845220549051908152f35b5090346102f657816003193601126102f657602090600c549051908152f35b50346101d957806003193601126101d95780f35b5090346102f65760203660031901126102f657906020916105f0610930565b5051908152f35b5082346102f65760203660031901126102f65761061e60018060a01b03835416331461095a565b35600d5580f35b5090346102f65760203660031901126102f65760209160ff9082906001600160a01b03610650610930565b168152600a855220541690519015158152f35b5090346102f657816003193601126102f657338252600b60205261069061042482842054600c54906109a6565b61069933610e01565b50338252600b60205242818320557fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf0926106d1336109dc565b9180519283528360208401523392a280f35b5090346102f657816003193601126102f6576020906009549051908152f35b5090346102f65760203660031901126102f65760209061048f610723610930565b610a19565b5090346102f65760203660031901126102f65760209181906001600160a01b03610750610930565b168152600b845220549051908152f35b5090346102f657816003193601126102f65751908152602090f35b50913461028c57602036600319011261028c577f4b0a6b82d0dc4407b3359033a4f27efd1e2105e4571b72d6a3b8f1da3e6079dd9160209135906107c960018060a01b03865416331461095a565b81600c5551908152a180f35b5090346102f657816003193601126102f6576020906005549051908152f35b5090346102f657806003193601126102f6577f50b9be6d475eaa75d2387ce1985972767cbe50d0b6e16cffd31a82062cbfbc756020610831610930565b9261083a61094b565b9060018060a01b0361085081885416331461095a565b851694858752600a8452818720928015159360ff1981541660ff861617905561087d575b5051908152a280f35b61088690610d50565b86610874565b50913461028c578160031936011261028c576108ad83916024359035610ff8565b9091835193849381850191855280518092526060850191602080920190845b81811061091057505050848203818601528080855193848152019401925b8281106108f957505050500390f35b8351855286955093810193928101926001016108ea565b82516001600160a01b0316855288975093830193918301916001016108cc565b600435906001600160a01b038216820361094657565b600080fd5b60243590811515820361094657565b1561096157565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b919082018092116109b357565b634e487b7160e01b600052601160045260246000fd5b818102929181159184041417156109b357565b610a09906109e981610a19565b6001600160a01b0390911660009081526003602052604090205490610a0c565b90565b919082039182116109b357565b60009060018060a01b0316815260066020526040812054906002602052610a476040822054926001546109c9565b60801c818382019384129112908015821691151617610a7057808212610a6b575090565b905090565b634e487b7160e01b81526011600452602490fd5b6001600160a01b03166000818152600a602052604081205490929060ff16610b3157600d548110610b2457610ae190828452600860205260ff604085205416600014610b155782845260066020528060408520555b6001546109c9565b60801c90600160ff1b8214610b0157825260026020526040822091039055565b634e487b7160e01b83526011600452602483fd5b610b1f8184610cb7565b610ad9565b50610b2f9150610d50565b565b5090604060ff916008602052205416610b475750565b610b2f90610b9d565b600554811015610b875760056000527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390811660008181526008602090815260408083205492949093919260ff1615610cb05760078352838520546005546000199190828101908111610c9c578084918303610c4d575b5050506005548015610c39576007949392910190610c0982610b50565b909182549160031b1b1916905560055584526008815282842060ff19815416905560068152838381205552812055565b634e487b7160e01b87526031600452602487fd5b610c5690610b50565b90549060031b1c16610c8a81610c6b84610b50565b90919082549060031b9160018060a01b03809116831b921b1916179055565b87526007855285872055388281610bec565b634e487b7160e01b88526011600452602488fd5b5050505050565b6001600160a01b0381166000908152600860205260408120549192909160ff16610d4257600860205260408220600160ff198254161790556006602052604082205560055490600760205281604082205568010000000000000000821015610d2e575090610c6b826001610b2f9401600555610b50565b634e487b7160e01b81526041600452602490fd5b915060409060066020522055565b6001600160a01b03811660008181526008602052604081205490929060ff1615610da057610d8790610d8183610e01565b50610b9d565b8152600260205280604081205560036020526040812055565b505050565b604051906020820182811067ffffffffffffffff821117610dc557604052565b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f1916820167ffffffffffffffff811183821017610dc557604052565b6001600160a01b0316610e13816109dc565b9081610e20575050600090565b600091818352602060038152604091610e3c81848720546109a6565b8486526003835283862055837fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d838551848152a28480808084885af13d15610f9a573d67ffffffffffffffff8111610f8657610ea0601f8201601f19168501610ddb565b90815286843d92013e5b15610eb9575050505050600190565b8385526003825282852054835184810181811067ffffffffffffffff821117610f72578552600f81526e15da5d1a191c985dc819985a5b1959608a1b84820152818311610f18575060039291610f0e91610a0c565b9385525282205590565b839087865192839162461bcd60e51b8352816004840152835191826024850152815b838110610f5b57505060448094508284010152601f80199101168101030190fd5b808601820151878201604401528694508101610f3a565b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b87526041600452602487fd5b610eaa565b67ffffffffffffffff8111610dc55760051b60200190565b90610fc9610fc483610f9f565b610ddb565b8281528092610fda601f1991610f9f565b0190602036910137565b8051821015610b875760209160051b010190565b919061100490836109a6565b6005548082116110f2575b50808310156110cc5761102a6110258483610a0c565b610fb7565b906110386110258583610a0c565b93805b828110611049575050509190565b604061105482610b50565b90546001600160a01b039160039190821b1c821661107b6110758787610a0c565b89610fe4565b5261108584610b50565b9054911b1c166000908152600660205220546110aa6110a48484610a0c565b88610fe4565b52600181018091111561103b5760246000634e487b7160e01b81526011600452fd5b5090506110d7610da5565b90600082526110e4610da5565b916000835260003681379190565b90503861100f565b9060059182549081156111df579190600954906000945a938692835b878910806111d6575b156111c55760018087018097116109b35786855411156111bc575b61114387610b50565b905460039190911b1c6001600160a01b031661115e81610e01565b61119b575b5081018091116109b357955a9081811161117f575b5095611116565b9861118e82611194939b610a0c565b906109a6565b9738611178565b958181018091116109b35795600052600b6020524260406000205538611163565b6000965061113a565b600986905597509295509293505050565b5081811061111f565b5050600954600092508291565b156111f357565b60405162461bcd60e51b815260206004820152601260248201527110db185a5b481dd85a5d081b9bdd081b595d60721b6044820152606490fdfea26469706673582212207b9e4175db43106f264b34a066c6ab5f3043a71945db011012c44de322343aea64736f6c63430008140033";

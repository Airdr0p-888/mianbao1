const CONTRACT_DATA = {
  "ABI": [
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
      "inputs": [],
      "name": "MintSoldOut",
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
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "bool",
          "name": "excluded",
          "type": "bool"
        }
      ],
      "name": "excludeFromDividendBatch",
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
      "name": "lpReserveBNB",
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
      "name": "lpReserveTokens",
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
      "name": "lpTokensPerMint",
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
      "inputs": [],
      "name": "mintCount",
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
      "name": "mintRound",
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
  ],
  "BYTECODE": "0x6101006040523462000c4b57600060a05262004f828038038091620000278261010062000c7a565b61010039610100016101e06101008203126200079f57610100516001600160401b0381116200079f578162000060916101000162000c9e565b6101205190916001600160401b0382116200079f5762000084916101000162000c9e565b6101405160e0526101605160c052610180516080526101a0516101c0516101e051610200516102205161024051949695939492909190620000c761026062000d15565b956101806101000151956101a06101000151988915158a036200079f57620000f16102c062000d15565b60a051906001600160a01b03811662000c455750335b81546001600160a01b0319166001600160a01b03919091169081178255604051917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36109c490818d1162000c105750831162000bd7576127106200017f886200017989620001798a8a62000d2a565b62000d2a565b1162000b9e5760c0511562000b695760c0516080511062000b31576001600160a01b0389161562000afe578051906001600160401b03821162000a025760015460a051600182811c9216801562000af3575b6020831014620009e057509081601f84931162000a99575b5060a05190602091601f841160011462000a26575060a0519262000a1a575b50508160011b916000199060031b1c1916176001555b8051906001600160401b03821162000a025760025460a051600182811c92168015620009f7575b6020831014620009e057509081601f84931162000986575b5060a05190602091601f841160011462000913575060a0519262000907575b50508160011b916000199060031b1c1916176002555b60e05180670de0b6b3a7640000810204670de0b6b3a76400001490151715620008b857670de0b6b3a764000060e05102600355620002d560c05160805162000d4e565b988915620008d05768015af1d78b58c4000060e051670de0b6b3a76400008102918291020460191490151715620008b8576020966200033d670de0b6b3a76400006200033760e0516103e868015af1d78b58c400008202049283910262000d6f565b62000d6f565b6200035a8c6103e868015af1d78b58c4000060e051020462000d4e565b6012556200037a8c6103e868015af1d78b58c4000060e051020462000d4e565b60135560a05160018060a01b0381541690526004895260a05181604082205560018060a01b039054169060405190815260a051907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9a8b91a3620003f06103e868015af1d78b58c4000060e05102048062000d2a565b3060a051526004602052604060a05120556200041e6103e868015af1d78b58c4000060e05102048062000d2a565b60405190815260a051809960203093a3604051976001600160401b036114558a01908111908a1117620008a1575061145562003b2d893961145588019081523060208201819052604082015260a05197908190036060019088f0968715620008955750601d9660018060a01b031660018060a01b0319885416178755600655600755600855600955600b55600a5560018060a01b03821660018060a01b0319600d541617600d557310ed43c718714eb63d5aa57b78b54704e256024e8060018060a01b0319600e541617600e5560405163c45a015560e01b8152602081600481855afa9081156200077a5760a0519162000853575b506040516315ab88c960e31b8152602081600481865afa80156200077a5760a0519062000811575b6040516364e329cb60e11b81523060048201526001600160a01b03918216602482015260a051909360209350849260449284929091165af19081156200077a5760a05191620007cf575b50600f80546001600160a01b0319166001600160a01b0392831617905560a08051309052601060205280516040808220805460ff1990811660019081179092558354861690935283518281208054851683179055978516909752825181812080548416891790559490945290519283208054909116909417909355815490921691823b1562000777575060405162241fbd60e51b92838252306004830152600160248301528160448160a05180945af180156200077a57620007bd575b5080546001600160a01b0316803b156200079f576040519083825260a0516004830152600160248301528160448160a05180945af180156200077a57620007a5575b508054600f546001600160a01b039081169116803b156200079f57604051918483526004830152600160248301528160448160a05180945af180156200077a5762000787575b505460a05180546001600160a01b03928316921690823b156200077757506040519283526004830152600160248301528160448160a05180945af180156200077a5762000761575b506019805461ffff191691151560081b61ff0016919091176001179055600f805460ff60a01b1916905560c05160115560805160145560155560a051601655604051612daf908162000d7e8239f35b6200076c9062000c50565b60a051801562000712575b80fd5b6040513d60a051823e3d90fd5b620007929062000c50565b60a0518015620006ca5780fd5b60a05180fd5b620007b09062000c50565b60a0518015620006845780fd5b620007c89062000c50565b3862000642565b90506020813d60201162000808575b81620007ed6020938362000c7a565b810103126200079f57620008019062000d15565b3862000585565b3d9150620007de565b506020813d6020116200084a575b816200082e6020938362000c7a565b810103126200079f576200084460209162000d15565b6200053b565b3d91506200081f565b90506020813d6020116200088c575b81620008716020938362000c7a565b810103126200079f57620008859062000d15565b3862000513565b3d915062000862565b604051903d90823e3d90fd5b634e487b7160e01b9052604160045260a051602490fd5b634e487b7160e01b60a051526011600452602460a051fd5b60405162461bcd60e51b815260206004820152600f60248201526e4d696e7420636f756e74207a65726f60881b6044820152606490fd5b0151905038806200027c565b60029194505260a051906020822091935b601f19841685106200096a576001945083601f1981161062000950575b505050811b0160025562000292565b015160001960f88460031b161c1916905538808062000941565b8181015183556020948501946001909301929091019062000924565b909150600260a0515260a05160208120601f850160051c810160208610620009d8575b9085949392915b601f840160051c82018110620009c9575050506200025d565b828155869550600101620009b0565b5080620009a9565b634e487b7160e01b9052602260045260a051602490fd5b91607f169162000245565b634e487b7160e01b60a051526041600452602460a051fd5b01519050388062000208565b60019194505260a051906020822091935b601f198416851062000a7d576001945083601f1981161062000a63575b505050811b016001556200021e565b015160001960f88460031b161c1916905538808062000a54565b8181015183556020948501946001909301929091019062000a37565b909150600160a0515260a05160208120601f850160051c81016020861062000aeb575b9085949392915b601f840160051c8201811062000adc57505050620001e9565b82815586955060010162000ac3565b508062000abc565b91607f1691620001d1565b60405162461bcd60e51b815260206004820152600b60248201526a57616c6c6574207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201526f119a5b1b080f081b5a5b9d0818dbdcdd60821b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c04d696e7420636f7374203e203609c1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270054617820616c6c6f63203e20313030303607c1b6044820152606490fd5b60405162461bcd60e51b81526020600482015260116024820152700a6cad8d840e8c2f040e8dede40d0d2ced607b1b6044820152606490fd5b62461bcd60e51b815260206004820152601060248201526f084eaf240e8c2f040e8dede40d0d2ced60831b6044820152606490fd5b62000107565b600080fd5b6001600160401b03811162000c6457604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000c6457604052565b919080601f8401121562000c4b578251906001600160401b03821162000c64576040519160209162000cda601f8301601f191684018562000c7a565b81845282828701011162000c4b5760005b81811062000d0157508260009394955001015290565b858101830151848201840152820162000ceb565b51906001600160a01b038216820362000c4b57565b9190820180921162000d3857565b634e487b7160e01b600052601160045260246000fd5b811562000d59570490565b634e487b7160e01b600052601260045260246000fd5b9190820391821162000d385756fe60806040908082526004908136101561010a575b50361561001f57600080fd5b60195460ff1615610036575050610034612917565b005b600e546001600160a01b0390811633811491908390831561009e575b5050501561005c57005b6020606492519162461bcd60e51b8352820152601e60248201527f424e42206e6f742061636365707465642061667465722070726573616c6500006044820152fd5b85516315ab88c960e31b8152929350602091839182905afa9081156100ff576000916100d1575b50163314388281610052565b6100f2915060203d81116100f8575b6100ea8183611a86565b810190611b1a565b386100c5565b503d6100e0565b84513d6000823e3d90fd5b600090813560e01c90816301b5ac321461191e575080630442bfa8146117ac57806306fdde03146116f15780630807b9e2146116d2578063095ea7b3146116a05780630f44f3a7146116565780631249c58b146116425780631694505e1461161957806318160ddd146115fa5780631d111d13146115b2578063232452161461151657806323b872dd14611469578063277cc4d5146113715780632c1f521614611348578063313ce5671461132c57806333cb7d91146112b357806336a8bb1f1461129457806347af29111461127557806349bd5a5e1461124c57806353135ca01461122857806353deb3d6146112095780635999095e146111a45780635d098b381461114f57806364c30c8a1461112f57806366e3540a1461111057806370a08231146110d9578063715018a61461107a5780637515d1551461105b57806375f0a87414611032578063765db1c41461101357806382c67cbe14610ff45780638a8c523c14610f515780638ab148fb14610f2a5780638cd09d5014610ef35780638da5cb5b14610ecb57806391c04cfb14610e405780639242338314610e2157806395d89b4114610d1f5780639659867e14610d0057806398acb5d814610c8f5780639b19251a14610c51578063a026432914610c32578063a04eab9714610bda578063a4c3b09114610b73578063a9059cbb14610b42578063addc831e14610af3578063ae9bb3fa14610aa9578063b5bc09d514610a4e578063b6138b1a1461057a578063bbc0c74214610a27578063c2fe651e14610a08578063c473413a146109e9578063c6a3064714610990578063c9f62af214610971578063cb4ca63114610933578063cffd129c14610914578063d3fa94f8146108c1578063dc1052e21461088a578063dd62ed3e14610841578063e51fde3214610822578063e7ce0a41146107ac578063e8078d94146106a8578063edac985b14610600578063efaa74421461057f578063f0187b871461057a578063f0fc6bca146104ef578063f2fde38b1461043a5763fbbf8cc3036100135782346104365760203660031901126104365760209181906001600160a01b03610426611983565b1681526018845220549051908152f35b5080fd5b509190346104eb5760203660031901126104eb57610456611983565b8354916001600160a01b0380841692610470338514611a10565b169384156104b057505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b5091829134610576578260031936011261057657602090604460018060a01b03601d5416918451958693849263bc4c4b3760e01b845233908401528160248401525af190811561056d5750610542575080f35b6105629060203d8111610566575b61055a8183611a86565b8101906120e1565b5080f35b503d610550565b513d84823e3d90fd5b5050fd5b6119f4565b50903461043657602036600319011261043657356105a760018060a01b038354163314611a10565b6105fa6105e86105e86008546105f56105c36009548093611b5c565b916105f5600b54916105ef600a54956127109889916105e28988611b5c565b90611b5c565b1115612d1e565b88611b5c565b611b5c565b60085580f35b50903461043657602092836003193601126104eb57813567ffffffffffffffff81116106a45761063390369084016119b4565b84549195916001600160a01b03919061064f9083163314611a10565b855b81811061065c578680f35b8261067061066b83858c6128f3565b612903565b168752601a8452848720600160ff19825416179055600181018091111561065157634e487b7160e01b875260118652602487fd5b8380fd5b509190346104eb57826003193601126104eb5782546001600160a01b03906106d39082163314611a10565b308452816020528284205447811515806107a3575b1561076f57918160609361070661072e97969484600e541630611aa8565b82600e5416928854169186519788958694859363f305d71960e01b8552429230908601612317565b03925af190811561056d5750610742575080f35b6107629060603d8111610768575b61075a8183611a86565b8101906122fc565b50505080f35b503d610750565b845162461bcd60e51b8152602081860152600e60248201526d139bdd1a1a5b99c81d1bc818591960921b6044820152606490fd5b508015156106e8565b50918291346105765760203660031901126105765782546001600160a01b03906107d99082163314611a10565b601d5416803b1561081d576024849284519586938492635ebf4db960e01b84528035908401525af190811561056d5750610811575080f35b61081a90611a5c565b80f35b505050fd5b508234610436578160031936011261043657602090600b549051908152f35b5082346104365780600319360112610436578060209261085f611983565b61086761199e565b6001600160a01b0391821683526005865283832091168252845220549051908152f35b50903461043657602036600319011261043657356108b260018060a01b038354163314611a10565b6109c481116104365760065580f35b50903461043657602036600319011261043657356108e960018060a01b038354163314611a10565b61090e6127106105e8836105f561090560085460095490611b5c565b600b5490611b5c565b600a5580f35b5082346104365781600319360112610436576020906007549051908152f35b5082346104365760203660031901126104365760209160ff9082906001600160a01b0361095e611983565b1681526010855220541690519015158152f35b508234610436578160031936011261043657602090600a549051908152f35b5082346104365780600319360112610436576109aa611983565b906109b36119e5565b835490926001600160a01b03916109cd9083163314611a10565b168352601060205282209060ff80198354169115151617905580f35b5082346104365781600319360112610436576020906006549051908152f35b5082346104365781600319360112610436576020906014549051908152f35b50823461043657816003193601126104365760209060ff600f5460a01c1690519015158152f35b509182913461057657826003193601126105765782546001600160a01b0390610a7a9082163314611a10565b601d5416803b1561081d57839183518095819363f26b854f60e01b83525af190811561056d5750610811575080f35b509034610436576020366003190112610436573580151580910361043657610adb60018060a01b038354163314611a10565b61ff006019549160081b169061ff0019161760195580f35b5090346104365760203660031901126104365735610b1b60018060a01b038354163314611a10565b610b3c6127106105e8610b3361090585600854611b5c565b600a5490611b5c565b60095580f35b508234610436578060031936011261043657602090610b6c610b62611983565b6024359033611b89565b5160018152f35b5091346104eb57806003193601126104eb576020610b8f611983565b92604460018060a01b0391868381541693610bab338614611a10565b8651978895869463a9059cbb60e01b86528501526024356024850152165af190811561056d5750610542575080f35b509182913461057657602036600319011261057657601d5482516001624d3b8760e01b03198152823592810192909252909260609184916024918391906001600160a01b03165af190811561056d5750610742575080f35b508234610436578160031936011261043657602090601c549051908152f35b5082346104365760203660031901126104365760209160ff9082906001600160a01b03610c7c611983565b168152601a855220541690519015158152f35b50903461043657602036600319011261043657356001600160a01b03818116918290036104eb57610cc4818454163314611a10565b81601d549182167fdab7e227381106009c2eb953811a49c7e30de8e9eb12e2aedb79b25c22f474b98580a36001600160a01b03191617601d5580f35b5082346104365781600319360112610436576020906015549051908152f35b5091346104eb57826003193601126104eb57805191836002549060019082821c928281168015610e17575b6020958686108214610e045750848852908115610de25750600114610d89575b610d858686610d7b828b0383611a86565b519182918261193a565b0390f35b929550600283527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b828410610dcf5750505082610d8594610d7b928201019438610d6a565b8054868501880152928601928101610db2565b60ff191687860152505050151560051b8301019250610d7b82610d8538610d6a565b634e487b7160e01b845260229052602483fd5b93607f1693610d4a565b5082346104365781600319360112610436576020906017549051908152f35b5091346104eb57806003193601126104eb5782610e5b611983565b610e636119e5565b9060018060a01b03610e79818554163314611a10565b601d541690813b156106a457845162241fbd60e51b81526001600160a01b039091169581019586529115156020860152909384919082908490829060400103925af190811561056d5750610811575080f35b508234610436578160031936011261043657905490516001600160a01b039091168152602090f35b5090346104365760203660031901126104365735610f1b60018060a01b038354163314611a10565b6109c481116104365760075580f35b50823461043657816003193601126104365760209060ff60195460081c1690519015158152f35b509190346104eb57826003193601126104eb57610f7860018060a01b038454163314611a10565b600f549160ff8360a01c16610fc057505060ff60a01b1916600160a01b17600f557f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c78180a180f35b906020606492519162461bcd60e51b8352820152600e60248201526d416c72656164792061637469766560901b6044820152fd5b508234610436578160031936011261043657602090600c549051908152f35b508234610436578160031936011261043657602090601b549051908152f35b508234610436578160031936011261043657600d5490516001600160a01b039091168152602090f35b5082346104365781600319360112610436576020906011549051908152f35b50346110d657806003193601126110d6578054816001600160a01b0382166110a3338214611a10565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b80fd5b509190346104eb5760203660031901126104eb5760209282916001600160a01b03611102611983565b168252845220549051908152f35b5082346104365781600319360112610436576020906008549051908152f35b5082346104365781600319360112610436576020905164e8d4a510008152f35b50346110d65760203660031901126110d657611169611983565b81546001600160a01b0391906111829083163314611a10565b168015610436576bffffffffffffffffffffffff60a01b600d541617600d5580f35b50918291346105765760203660031901126105765782546001600160a01b03906111d19082163314611a10565b601d5416803b1561081d5760248492845195869384926302f08a5160e21b84528035908401525af190811561056d5750610811575080f35b5082346104365781600319360112610436576020906009549051908152f35b50823461043657816003193601126104365760209060ff6019541690519015158152f35b508234610436578160031936011261043657600f5490516001600160a01b039091168152602090f35b5082346104365781600319360112610436576020906016549051908152f35b508234610436578160031936011261043657602090601e549051908152f35b509190346104eb57826003193601126104eb5782546001600160a01b03166112dc338214611a10565b47918215611300575083808093819382f1156112f6575080f35b51903d90823e3d90fd5b606490602085519162461bcd60e51b8352820152600660248201526527379021272160d11b6044820152fd5b5082346104365781600319360112610436576020905160128152f35b508234610436578160031936011261043657601d5490516001600160a01b039091168152602090f35b509034610436578260031936011261043657803567ffffffffffffffff81116104eb576113a190369083016119b4565b93906113ab6119e5565b9060018060a01b03956113c2878754163314611a10565b855b8181106113cf578680f35b87601d54166113e261066b8385876128f3565b813b1561146557865162241fbd60e51b81526001600160a01b0390911681890190815286151560208201529091899183919082908490829060400103925af1801561145b5761144c575b5060018101809111156113c457634e487b7160e01b875260118652602487fd5b61145590611a5c565b3861142c565b86513d8a823e3d90fd5b8880fd5b50903461043657606036600319011261043657611484611983565b61148c61199e565b6001600160a01b0382168452600560209081528585203386529052928490205460443593928482106114d357602086610b6c8787876114ce8389033383611aa8565b611b89565b606490602087519162461bcd60e51b8352820152601760248201527f45524332303a2065786365656420616c6c6f77616e63650000000000000000006044820152fd5b50903461043657602092836003193601126104eb57813567ffffffffffffffff81116106a45761154990369084016119b4565b84549195916001600160a01b0391906115659083163314611a10565b855b818110611572578680f35b8261158161066b83858c6128f3565b168752601a845284872060ff198154169055600181018091111561156757634e487b7160e01b875260118652602487fd5b5082346104365781600319360112610436578180808060018060a01b038154166115dd338214611a10565b47908282156115f1575bf1156112f6575080f35b506108fc6115e7565b5082346104365781600319360112610436576020906003549051908152f35b508234610436578160031936011261043657600e5490516001600160a01b039091168152602090f35b50806003193601126110d65761081a612917565b509034610436576020366003190112610436573561167e60018060a01b038354163314611a10565b61169a6127106105e8610b33846105f560085460095490611b5c565b600b5580f35b508234610436578060031936011261043657602090610b6c6116c0611983565b6116c8612271565b6024359033611aa8565b5082346104365781600319360112610436576020906012549051908152f35b5091346104eb57826003193601126104eb5780519183600180549182821c9282811680156117a2575b6020958686108214610e045750848852908115610de2575060011461174a57610d858686610d7b828b0383611a86565b9295508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061178f5750505082610d8594610d7b928201019438610d6a565b8054868501880152928601928101611772565b93607f169361171a565b5082346104365780600319360112610436578235602435906117d860018060a01b038554163314611a10565b60ff6019541680611914575b156118d157801515806118c7575b15611893576118018183611b69565b92831561185f5750601155601455806015556003549260198402938085046019149015171561184c57506103e861184692930461183e8282611b69565b601255611b69565b60135580f35b634e487b7160e01b835260119052602482fd5b5162461bcd60e51b8152602081870152600f60248201526e4d696e7420636f756e74207a65726f60881b6044820152606490fd5b825162461bcd60e51b8152602081870152600e60248201526d496e76616c696420706172616d7360901b6044820152606490fd5b50808210156117f2565b825162461bcd60e51b8152602081870181905260248201527f43616e6e6f74206368616e6765206166746572206d696e7420737461727465646044820152606490fd5b50601654156117e4565b9050346104365781600319360112610436576020906013548152f35b6020808252825181830181905290939260005b82811061196f57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161194d565b600435906001600160a01b038216820361199957565b600080fd5b602435906001600160a01b038216820361199957565b9181601f840112156119995782359167ffffffffffffffff8311611999576020808501948460051b01011161199957565b60243590811515820361199957565b3461199957600036600319011261199957602060405160058152f35b15611a1757565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b67ffffffffffffffff8111611a7057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611a7057604052565b90916001600160a01b039182169182151580611b0f575b15611999577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916020918460005260058352604060002095169485600052825280604060002055604051908152a3565b508084161515611abf565b9081602091031261199957516001600160a01b03811681036119995790565b91908203918211611b4657565b634e487b7160e01b600052601160045260246000fd5b91908201809211611b4657565b8115611b73570490565b634e487b7160e01b600052601260045260246000fd5b90916001600160a01b0380831691821515806120c3575b1561208f57801561205c5760008381526004926020938085526040928484822054106120225760ff601d5460a01c1680612019575b8061200a575b611fc15760ff601d5460a01c1615611fb4575b600f549783891690818914809a8115611fa8575b81611f99575b50611f36575b89611f25575b998591899a9b8683169c8d92831480611f17575b86938d885260108d528260ff888a2054161580611f04575b611ec0575b50879d885260108d5260ff8789205416159081611eaf575b50611e5a575b5050611c6f8b83611b5c565b611c79908a611b39565b988c8652868b528486205490611c8e91611b39565b8c8652868b52848620558c8552888486205490611caa91611b5c565b8d8652868b5284862055600080516020612d5a8339815191529a611ce594611ce09380611d9c575b505080611d6a575b506120f9565b6120f9565b601d549260ff8460a01c1615611d1d575b5050505060ff601d5460a01c1615611d10575b51908152a3565b611d1861274b565b611d09565b60609262061a80926024928751968795869463ffb2c47960e01b8652850152165af1611d4c575b808080611cf6565b611d639060603d81116107685761075a8183611a86565b5050611d44565b611d9390308752878c52611d81818b892054611b5c565b308852888d528a882055601e54611b5c565b601e5538611cda565b3088528c89611dae83858c2054611b5c565b91308b525282892055611de46127109182611dcb600854836120ce565b0480151580611e4d575b611e38575b50600954906120ce565b048015611cd257308852888d528c89611e0083858c2054611b39565b91308b5252828920558c89611e1e8361dead95868d528c2054611b5c565b91848b52528b8920558a519081528d8d3092a38838611cd2565b611e4490600c54611b5c565b600c5538611dda565b508c600d54161515611dd5565b908092939495509115611ea7575b50611e79575b908692913880611c63565b985060058702878104600503611e9457612710900498611e6e565b634e487b7160e01b845260118552602484fd5b905038611e68565b8852508587205460ff16158f611c5d565b611ee9575b81611ed1575b82611c45565b9350612710611ee26007548d6120ce565b0493611ecb565b819450612710611efc8d600654906120ce565b049450611ec5565b50508088528260ff888a20541615611c40565b5087600e54168c1415611c28565b600e5485168b861614159950611c14565b8883526010885260ff86842054168015611f87575b611c0e57855162461bcd60e51b8152808501899052601260248201527154726164696e67206e6f742061637469766560701b6044820152606490fd5b50848b16835260ff8684205416611f4b565b60ff915060a01c161538611c08565b8c871684149150611c02565b611fbc612271565b611bee565b9097869750918392600080516020612d5a833981519152978352898752838320611fec878254611b39565b90551697888252855220612001838254611b5c565b905551908152a3565b5082600f5416838a1614611bdb565b50308714611bd5565b835162461bcd60e51b81528083018790526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a416d6f756e74207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b6044820152606490fd5b508185161515611ba0565b81810292918115918404141715611b4657565b90816020910312611999575180151581036119995790565b60018060a01b0380601d541660409180835194634e7b827f60e01b865216918260048601526020948581602481855afa90811561226657600091612249575b50612242578260005260048552836000205494845190632f842d8560e21b82528082600481865afa9081156122375760009161220b575b50861090506121cd5750601d541692833b1561199957604460009283855196879485936338c110ef60e21b8552600485015260248401525af19081156121c357506121b8575b50565b6121c190611a5c565b565b513d6000823e3d90fd5b935050823b156119995760009260448492845195869384926338c110ef60e21b845260048401528160248401525af19081156121c357506121b85750565b82813d8311612230575b61221f8183611a86565b810103126110d6575051803861216f565b503d612215565b86513d6000823e3d90fd5b5050505050565b6122609150863d88116105665761055a8183611a86565b38612138565b85513d6000823e3d90fd5b601d5460ff8160a01c166121b55730600052600460205260406000205480156122b85760ff60a01b19918216600160a01b17601d556122af9061234b565b601d5416601d55565b5050565b3d156122f7573d9067ffffffffffffffff8211611a7057604051916122eb601f8201601f191660200184611a86565b82523d6000602084013e565b606090565b90816060910312611999578051916040602083015192015190565b9060a09295949360c0830196600180861b038093168452602084015260006040840152600060608401521660808201520152565b80156121b557600854600b54906123628282611b5c565b91612370600a548094611b5c565b928315612242576123d3826123cd6123b4876123a3866123ae836123a36123dc9b8f9e8f908f6123a3906123a8936120ce565b611b69565b9f6120ce565b9a6120ce565b6105f56001986123c7838b1c8094611b39565b9a611b5c565b94611b5c565b90841c90611b5c565b9283156123e957816123ef575b50505050565b600e546001600160a01b0390612409908490831630611aa8565b6040948551946060860167ffffffffffffffff9087811082821117611a70578852600287526020968781018936823781511561270d5730815285600e5416908a516315ab88c960e31b81528a81600481865afa90811561274057600091612723575b50835186101561270d578716838c01528a516318cbafe560e01b8152600481018a905260006024820181905260a06044830152935160a4820181905247969194859360c4850193909290918e5b8282106126f45750505050509181600081819530606483015242608483015203925af19182612671575b505061251557505050507f9c517099ca0908fbba82379bf527eb8ca9a81835f95d9e61906d8578497171329251908152a1565b93869161255a61252b61254d9895969747611b39565b61255561253e846123a3600854856120ce565b998a946123a3600b54856120ce565b938492611b39565b611b39565b9680151580612664575b612647575b50806125f8575b50505050811515806125ef575b156123e9576125c0936060936125988484600e541630611aa8565b82600e54169260005416915180968195829463f305d71960e01b845242913060048601612317565b03925af16125d1575b8080806123e9565b6125e89060603d81116107685761075a8183611a86565b50506125c9565b5082151561257d565b60008080808489601d54165af161260d6122bc565b5015612570577fa34050dbab1220a48176516f252602780a1adfda5f8a7aa8673e3d6641fc64ec938351928352820152a138848180612570565b60008080809389600d54165af15061265d6122bc565b5038612569565b5085600d54161515612564565b3d806000843e6126818184611a86565b820191898184031261199957805190828211611999570182601f82011215611999578051918211611a705789808360051b938d51906126c283870183611a86565b815201928201019283116119995789809101915b8383106126e45750506124e2565b82518152918101918a91016126d6565b84518d168652889650948501949093019282018e6124b8565b634e487b7160e01b600052603260045260246000fd5b61273a91508b3d8d116100f8576100ea8183611a86565b3861246b565b8c513d6000823e3d90fd5b601e805465048c2739500081106122b85765048c27394fff198101908111611b46578155600090606032811b925b600581106127875750505050565b825460408051602091828201934285524482840152888784015285607484015260949081840152825260c082019180831067ffffffffffffffff841117611a7057828252519093206001600160a01b03908116939084159081156128e9575b81156128db575b506128d25730600052600491828452816000205464e8d4a50fff1981019081116128bd5730600052838552826000205584600052816000205464e8d4a51000938482018092116128a8579186917f90bcf0048b4f2fce00ba208729b9edf192f9ca8c71b84845e2d94f7dffeeddcd969594938360005286528360002055838152600080516020612d5a833981519152853092a351908152a25b600181018091111561277957634e487b7160e01b600052601160045260246000fd5b601190634e487b7160e01b6000525260246000fd5b601184634e487b7160e01b6000525260246000fd5b50505050612886565b9050600f54168414386127ed565b30861491506127e6565b919081101561270d5760051b0190565b356001600160a01b03811681036119995790565b60195460ff811615612c10576011543403612bd65760081c60ff16612b89575b6017546129443482611b5c565b60145410612b5557612957903490611b5c565b60175560165460018101809111611b46576016556012546000903082526020906004825260408084205461299961299060135485611b5c565b601b5490611b5c565b11612b1257338452600483526129b28282862054611b5c565b33855260048452818520553084526129cd8282862054611b39565b3085526004845281852055338452601883526129ec8282862054611b5c565b3385526018845281852055805134815282848201527f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f823392a251908152600080516020612d5a83398151915233923092a3612a47336120f9565b612a56601b5460135490611b5c565b601b55612a6534601c54611b5c565b601c55612a70612c4a565b6017546014541115612a7f5750565b7f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c79060ff19601954166019557f1eb1561f8507eb9bc6988331f66f369e75710f2b4b678ad5b4a52454b6636f5f8180a17f3f2af9f26095d292132b7be52f11c1760da3a5825c66688b295287d8279a45de8180a1612afb612c4a565b600f805460ff60a01b1916600160a01b17905580a1565b5162461bcd60e51b815260048101839052601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b141c995cd85b1948199d5b1b60a21b6044820152606490fd5b33600052601a60205260ff604060002054166129375760405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590810939088185b5bdd5b9d60721b6044820152606490fd5b60405162461bcd60e51b815260206004820152601260248201527150726573616c65206e6f742061637469766560701b6044820152606490fd5b601b54601c549080158015612d16575b6122b8576000601b556000601c55816060612cae60018060a01b03612c848582600e541630611aa8565b80600e5416906000541660405194858094819363f305d71960e01b835242908a3060048601612317565b03925af19081612cf8575b50612cc657601b55601c55565b6040907f03f82d6e9655f3dcff58c68e61adfad355b92c77a8fde4d53a423a6c58e293479282519182526020820152a1565b612d0f9060603d81116107685761075a8183611a86565b5050612cb9565b508115612c5a565b15612d2557565b60405162461bcd60e51b815260206004820152600c60248201526b546f74616c203e203130302560a01b6044820152606490fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220bb0a3f2bdb3fbef40e92bd81ee853a8f779d94be4caf65e353a681fd33548cb464736f6c634300081400336080346100d157601f61145538819003918201601f19168301916001600160401b038311848410176100d6578084926060946040528339810103126100d15780516100586040610051602085016100ec565b93016100ec565b916001600160a01b039081908181166100cc5750335b169260018060a01b031992848460005416176000556040519460007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361012c600c55600d551690600e541617600e5561135490816101018239f35b61006e565b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100d15756fe60406080815260049081361015610029575b5050361561001e57600080fd5b61002734610980565b005b6000803560e01c80630342a978146108665780630483f7a0146107ce57806309bbedde146107af5780630bc229441461075557806318160ddd14610738578063226cfa3d1461070057806327ce0147146106da5780633009a609146106bb5780634e71d92d1461063b5780634e7b827f146105fd57806355a373d6146105d45780635ebf4db9146105a65780636843cd84146105805780636a4740021461056c5780636f2789ec1461054d57806370a0823114610515578063715018a6146104b957806385a6b3ae1461049b5780638da5cb5b14610473578063a30dee3014610456578063a8b9d24014610429578063aafd847a146103f1578063bc4c4b3714610315578063be10b614146102f6578063e30443bc146102ba578063f26b854f14610250578063f2fde38b1461019c5763ffb2c479146101695750610011565b346101995760203660031901126101995750610187606092356111eb565b91929081519384526020840152820152f35b80fd5b50913461024c57602036600319011261024c576101b761090a565b8354916001600160a01b03808416926101d1338514610934565b1693841561021157505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b5090346102b657816003193601126102b657815482906001600160a01b031661027a338214610934565b479081158015610288578380f35b83928392839283906102ad575bf1156102a357818180808380f35b51903d90823e3d90fd5b506108fc610295565b5080fd5b5090346102b657366003190112610199576102f36102d661090a565b6102ea60018060a01b038454163314610934565b60243590610bc7565b80f35b5090346102b657816003193601126102b657602090600d549051908152f35b5090346102b657806003193601126102b6579060209161033361090a565b9161033c610925565b81546001600160a01b03949184916103579087163314610934565b15806103c8575b61036783610ee3565b9586610379575b878784519015158152f35b7fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf092931693848152600b885282429120556103b284610a59565b9082519182521587820152a2838082818061036e565b8583168452600b87526103ec6103e483862054600c5490610a39565b4210156112dd565b61035e565b5090346102b65760203660031901126102b65760209181906001600160a01b0361041961090a565b1681526003845220549051908152f35b5090346102b65760203660031901126102b65760209061044f61044a61090a565b610a59565b9051908152f35b5082346102b65760203660031901126102b6576102f39035610980565b5090346102b657816003193601126102b657905490516001600160a01b039091168152602090f35b50913461024c578260031936011261024c5760209250549051908152f35b50346101995780600319360112610199578054816001600160a01b0382166104e2338214610934565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b5090346102b65760203660031901126102b65760209181906001600160a01b0361053d61090a565b1681526006845220549051908152f35b5090346102b657816003193601126102b657602090600c549051908152f35b503461019957806003193601126101995780f35b5090346102b65760203660031901126102b6579060209161059f61090a565b5051908152f35b5082346102b65760203660031901126102b6576105cd60018060a01b038354163314610934565b35600d5580f35b5090346102b657816003193601126102b657600e5490516001600160a01b039091168152602090f35b5090346102b65760203660031901126102b65760209160ff9082906001600160a01b0361062861090a565b168152600a855220541690519015158152f35b5090346102b657816003193601126102b657338252600b6020526106686103e482842054600c5490610a39565b61067133610ee3565b50338252600b60205242818320557fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf0926106a933610a59565b9180519283528360208401523392a280f35b5090346102b657816003193601126102b6576020906009549051908152f35b5090346102b65760203660031901126102b65760209061044f6106fb61090a565b610a96565b5090346102b65760203660031901126102b65760209181906001600160a01b0361072861090a565b168152600b845220549051908152f35b5090346102b657816003193601126102b65760209061044f610b55565b50913461024c57602036600319011261024c577f4b0a6b82d0dc4407b3359033a4f27efd1e2105e4571b72d6a3b8f1da3e6079dd9160209135906107a360018060a01b038654163314610934565b81600c5551908152a180f35b5090346102b657816003193601126102b6576020906005549051908152f35b5090346102b657806003193601126102b6577f50b9be6d475eaa75d2387ce1985972767cbe50d0b6e16cffd31a82062cbfbc75602061080b61090a565b92610814610925565b9060018060a01b0361082a818854163314610934565b851694858752600a8452818720928015159360ff1981541660ff8616179055610857575b5051908152a280f35b61086090610e93565b8661084e565b50913461024c578160031936011261024c57610887839160243590356110e2565b9091835193849381850191855280518092526060850191602080920190845b8181106108ea57505050848203818601528080855193848152019401925b8281106108d357505050500390f35b8351855286955093810193928101926001016108c4565b82516001600160a01b0316855288975093830193918301916001016108a6565b600435906001600160a01b038216820361092057565b600080fd5b60243590811515820361092057565b1561093b57565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b610988610b55565b908115808015610a31575b610a2c57600154608083901b918315600160801b858504141715610a1657610a00576109fb936109c4920490610a39565b6001556040518181527fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d7845411651160203392a2600454610a39565b600455565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b505050565b508115610993565b91908201809211610a1657565b81810292918115918404141715610a1657565b610a8690610a6681610a96565b6001600160a01b0390911660009081526003602052604090205490610a89565b90565b91908203918211610a1657565b60009060018060a01b0316815260066020526040812054906002602052610ac4604082205492600154610a46565b60801c818382019384129112908015821691151617610aed57808212610ae8575090565b905090565b634e487b7160e01b81526011600452602490fd5b6020810190811067ffffffffffffffff821117610b1d57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610b1d57604052565b600e546040516318160ddd60e01b815290602090829060049082906001600160a01b03165afa908115610bbb57600091610b8d575090565b906020823d8211610bb3575b81610ba660209383610b33565b8101031261019957505190565b3d9150610b99565b6040513d6000823e3d90fd5b6001600160a01b03166000818152600a602052604081205490929060ff16610c7457600d548110610c6757610c2490828452600860205260ff604085205416600014610c585782845260066020528060408520555b600154610a46565b60801c90600160ff1b8214610c4457825260026020526040822091039055565b634e487b7160e01b83526011600452602483fd5b610c628184610dfa565b610c1c565b50610c729150610e93565b565b5090604060ff916008602052205416610c8a5750565b610c7290610ce0565b600554811015610cca5760056000527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390811660008181526008602090815260408083205492949093919260ff1615610df35760078352838520546005546000199190828101908111610ddf578084918303610d90575b5050506005548015610d7c576007949392910190610d4c82610c93565b909182549160031b1b1916905560055584526008815282842060ff19815416905560068152838381205552812055565b634e487b7160e01b87526031600452602487fd5b610d9990610c93565b90549060031b1c16610dcd81610dae84610c93565b90919082549060031b9160018060a01b03809116831b921b1916179055565b87526007855285872055388281610d2f565b634e487b7160e01b88526011600452602488fd5b5050505050565b6001600160a01b0381166000908152600860205260408120549192909160ff16610e8557600860205260408220600160ff198254161790556006602052604082205560055490600760205281604082205568010000000000000000821015610e71575090610dae826001610c729401600555610c93565b634e487b7160e01b81526041600452602490fd5b915060409060066020522055565b6001600160a01b03811660008181526008602052604081205490929060ff1615610a2c57610eca90610ec483610ee3565b50610ce0565b8152600260205280604081205560036020526040812055565b6001600160a01b0316610ef581610a59565b9081610f02575050600090565b600091818352602060038152604091610f1e8184872054610a39565b8486526003835283862055837fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d838551848152a28480808084885af13d1561107f573d67ffffffffffffffff811161106b57845190610f86601f8201601f1916860183610b33565b815286843d92013e5b15610f9e575050505050600190565b8385526003825282852054835184810181811067ffffffffffffffff821117611057578552600f81526e15da5d1a191c985dc819985a5b1959608a1b84820152818311610ffd575060039291610ff391610a89565b9385525282205590565b839087865192839162461bcd60e51b8352816004840152835191826024850152815b83811061104057505060448094508284010152601f80199101168101030190fd5b80860182015187820160440152869450810161101f565b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b87526041600452602487fd5b610f8f565b67ffffffffffffffff8111610b1d5760051b60200190565b906110a682611084565b6110b36040519182610b33565b82815280926110c4601f1991611084565b0190602036910137565b8051821015610cca5760209160051b010190565b91906110ee9083610a39565b6005548082116111e3575b50808310156111b65761111461110f8483610a89565b61109c565b9061112261110f8583610a89565b93805b828110611133575050509190565b604061113e82610c93565b90546001600160a01b039160039190821b1c821661116561115f8787610a89565b896110ce565b5261116f84610c93565b9054911b1c1660009081526006602052205461119461118e8484610a89565b886110ce565b5260018101809111156111255760246000634e487b7160e01b81526011600452fd5b5060405191506111c582610b01565b60008252604051916111d683610b01565b6000835260003681379190565b9050386110f9565b9060059182549081156112d0579190600954906000945a938692835b878910806112c7575b156112b6576001808701809711610a165786855411156112ad575b61123487610c93565b905460039190911b1c6001600160a01b031661124f81610ee3565b61128c575b508101809111610a1657955a90818111611270575b5095611207565b9861127f82611285939b610a89565b90610a39565b9738611269565b95818101809111610a165795600052600b6020524260406000205538611254565b6000965061122b565b600986905597509295509293505050565b50818110611210565b5050600954600092508291565b156112e457565b60405162461bcd60e51b815260206004820152601260248201527110db185a5b481dd85a5d081b9bdd081b595d60721b6044820152606490fdfea26469706673582212207a3481f4799f8ec1d3c780123df5d18455976b3f02f92ba0e1d7ebf6e24b937264736f6c63430008140033",
  "CONTRACT_NAME": "ModaMintToken",
  "COMPILER_VERSION": "0.8.20",
  "OPTIMIZER": {
    "enabled": true,
    "runs": 200
  },
  "VIA_IR": true,
  "EVM_VERSION": "paris"
};
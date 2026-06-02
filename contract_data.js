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
  "BYTECODE": "0x6101006040523462000c4457600060a05262004c4b8038038091620000278261010062000c73565b61010039610100016101e06101008203126200079857610100516001600160401b03811162000798578162000060916101000162000c97565b6101205190916001600160401b038211620007985762000084916101000162000c97565b610140516080526101605160e0526101805160c0526101a0516101c0516101e051610200516102205161024051949695939492909190620000c761026062000d0e565b956101806101000151956101a06101000151988915158a036200079857620000f16102c062000d0e565b60a051906001600160a01b03811662000c3e5750335b81546001600160a01b0319166001600160a01b03919091169081178255604051917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36109c490818d1162000c095750831162000bd0576127106200017f886200017989620001798a8a62000d23565b62000d23565b1162000b975760e0511562000b625760e05160c0511062000b2a576001600160a01b0389161562000af7578051906001600160401b038211620009fb5760015460a051600182811c9216801562000aec575b6020831014620009d957509081601f84931162000a92575b5060a05190602091601f841160011462000a1f575060a0519262000a13575b50508160011b916000199060031b1c1916176001555b8051906001600160401b038211620009fb5760025460a051600182811c92168015620009f0575b6020831014620009d957509081601f8493116200097f575b5060a05190602091601f84116001146200090c575060a0519262000900575b50508160011b916000199060031b1c1916176002555b60805180670de0b6b3a7640000810204670de0b6b3a76400001490151715620008b157670de0b6b3a764000060805102600355620002d560e05160c05162000d47565b988915620008c95768015af1d78b58c40000608051670de0b6b3a76400008102918291020460191490151715620008b1576020966200033d670de0b6b3a7640000620003376080516103e868015af1d78b58c400008202049283910262000d68565b62000d68565b6200035a8c6103e868015af1d78b58c40000608051020462000d47565b6012556200037a8c6103e868015af1d78b58c40000608051020462000d47565b60135560a05160018060a01b0381541690526004895260a05181604082205560018060a01b039054169060405190815260a051907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9a8b91a3620003f06103e868015af1d78b58c4000060805102048062000d23565b3060a051526004602052604060a05120556200041e6103e868015af1d78b58c4000060805102048062000d23565b60405190815260a051809960203093a3604051976001600160401b036113578a01908111908a11176200089a5750611357620038f48939611357880190815230602082015260a05197908190036040019088f09687156200088e5750601c9660018060a01b031660018060a01b0319885416178755600655600755600855600955600b55600a5560018060a01b03821660018060a01b0319600d541617600d557310ed43c718714eb63d5aa57b78b54704e256024e8060018060a01b0319600e541617600e5560405163c45a015560e01b8152602081600481855afa908115620007735760a051916200084c575b506040516315ab88c960e31b8152602081600481865afa8015620007735760a051906200080a575b6040516364e329cb60e11b81523060048201526001600160a01b03918216602482015260a051909360209350849260449284929091165af1908115620007735760a05191620007c8575b50600f80546001600160a01b0319166001600160a01b0392831617905560a08051309052601060205280516040808220805460ff1990811660019081179092558354861690935283518281208054851683179055978516909752825181812080548416891790559490945290519283208054909116909417909355815490921691823b1562000770575060405162241fbd60e51b92838252306004830152600160248301528160448160a05180945af180156200077357620007b6575b5080546001600160a01b0316803b1562000798576040519083825260a0516004830152600160248301528160448160a05180945af1801562000773576200079e575b508054600f546001600160a01b039081169116803b156200079857604051918483526004830152600160248301528160448160a05180945af18015620007735762000780575b505460a05180546001600160a01b03928316921690823b156200077057506040519283526004830152600160248301528160448160a05180945af1801562000773576200075a575b506019805461ffff191691151560081b61ff0016919091176001179055600f805460ff60a01b1916905560e05160115560c05160145560155560a051601655604051612b7d908162000d778239f35b620007659062000c49565b60a05180156200070b575b80fd5b6040513d60a051823e3d90fd5b6200078b9062000c49565b60a0518015620006c35780fd5b60a05180fd5b620007a99062000c49565b60a05180156200067d5780fd5b620007c19062000c49565b386200063b565b90506020813d60201162000801575b81620007e66020938362000c73565b810103126200079857620007fa9062000d0e565b386200057e565b3d9150620007d7565b506020813d60201162000843575b81620008276020938362000c73565b8101031262000798576200083d60209162000d0e565b62000534565b3d915062000818565b90506020813d60201162000885575b816200086a6020938362000c73565b8101031262000798576200087e9062000d0e565b386200050c565b3d91506200085b565b604051903d90823e3d90fd5b634e487b7160e01b9052604160045260a051602490fd5b634e487b7160e01b60a051526011600452602460a051fd5b60405162461bcd60e51b815260206004820152600f60248201526e4d696e7420636f756e74207a65726f60881b6044820152606490fd5b0151905038806200027c565b60029194505260a051906020822091935b601f198416851062000963576001945083601f1981161062000949575b505050811b0160025562000292565b015160001960f88460031b161c191690553880806200093a565b818101518355602094850194600190930192909101906200091d565b909150600260a0515260a05160208120601f850160051c810160208610620009d1575b9085949392915b601f840160051c82018110620009c2575050506200025d565b828155869550600101620009a9565b5080620009a2565b634e487b7160e01b9052602260045260a051602490fd5b91607f169162000245565b634e487b7160e01b60a051526041600452602460a051fd5b01519050388062000208565b60019194505260a051906020822091935b601f198416851062000a76576001945083601f1981161062000a5c575b505050811b016001556200021e565b015160001960f88460031b161c1916905538808062000a4d565b8181015183556020948501946001909301929091019062000a30565b909150600160a0515260a05160208120601f850160051c81016020861062000ae4575b9085949392915b601f840160051c8201811062000ad557505050620001e9565b82815586955060010162000abc565b508062000ab5565b91607f1691620001d1565b60405162461bcd60e51b815260206004820152600b60248201526a57616c6c6574207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201526f119a5b1b080f081b5a5b9d0818dbdcdd60821b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c04d696e7420636f7374203e203609c1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270054617820616c6c6f63203e20313030303607c1b6044820152606490fd5b60405162461bcd60e51b81526020600482015260116024820152700a6cad8d840e8c2f040e8dede40d0d2ced607b1b6044820152606490fd5b62461bcd60e51b815260206004820152601060248201526f084eaf240e8c2f040e8dede40d0d2ced60831b6044820152606490fd5b62000107565b600080fd5b6001600160401b03811162000c5d57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000c5d57604052565b919080601f8401121562000c44578251906001600160401b03821162000c5d576040519160209162000cd3601f8301601f191684018562000c73565b81845282828701011162000c445760005b81811062000cfa57508260009394955001015290565b858101830151848201840152820162000ce4565b51906001600160a01b038216820362000c4457565b9190820180921162000d3157565b634e487b7160e01b600052601160045260246000fd5b811562000d52570490565b634e487b7160e01b600052601260045260246000fd5b9190820391821162000d315756fe608060409080825260049081361015610066575b50361561001f57600080fd5b60ff6019541615610034576100326126ce565b005b6020606492519162461bcd60e51b8352820152600d60248201526c141c995cd85b1948195b991959609a1b6044820152fd5b600090813560e01c90816301b5ac321461171b575080630442bfa8146115a957806306fdde03146114ee5780630807b9e2146114cf578063095ea7b31461149d5780630f44f3a7146114535780631249c58b1461143f5780631694505e1461141657806318160ddd146113f75780631d111d13146113af578063232452161461133557806323b872dd146112885780632c1f52161461125f578063313ce5671461124357806333cb7d91146111ca57806336a8bb1f146111ab57806347af29111461118c57806349bd5a5e1461116357806353135ca01461113f57806353deb3d6146111205780635999095e146110af5780635d098b381461105a57806364c30c8a1461103a57806366e3540a1461101b57806370a0823114610fe4578063715018a614610f885780637515d15514610f6957806375f0a87414610f40578063765db1c414610f2157806382c67cbe14610f025780638a8c523c14610e5f5780638ab148fb14610e385780638cd09d5014610e015780638da5cb5b14610dd957806391c04cfb14610d575780639242338314610d3857806395d89b4114610c365780639659867e14610c1757806398acb5d814610ba65780639b19251a14610b68578063a04eab9714610b10578063a4c3b09114610aa9578063a9059cbb14610a78578063addc831e14610a29578063ae9bb3fa146109da578063b5bc09d51461097c578063b6138b1a146104c0578063bbc0c74214610955578063c2fe651e14610936578063c473413a14610917578063c6a30647146108be578063c9f62af21461089f578063cb4ca63114610861578063cffd129c14610842578063d3fa94f8146107ef578063dc1052e2146107b8578063dd62ed3e1461076a578063e51fde321461074b578063e7ce0a41146106cc578063e8078d94146105c8578063edac985b14610546578063efaa7442146104c5578063f0187b87146104c0578063f0fc6bca14610435578063f2fde38b146103805763fbbf8cc30361001357823461037c57602036600319011261037c5760209181906001600160a01b0361036c611780565b1681526018845220549051908152f35b5080fd5b509190346104315760203660031901126104315761039c611780565b8354916001600160a01b03808416926103b6338514611824565b169384156103f657505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b50918291346104bc57826003193601126104bc57602090604460018060a01b03601c5416918451958693849263bc4c4b3760e01b845233908401528160248401525af19081156104b35750610488575080f35b6104a89060203d81116104ac575b6104a0818361189a565b810190611ed6565b5080f35b503d610496565b513d84823e3d90fd5b5050fd5b611808565b50903461037c57602036600319011261037c57356104ed60018060a01b038354163314611824565b61054061052e61052e60085461053b6105096009548093611951565b9161053b600b5491610535600a54956127109889916105288988611951565b90611951565b1115612aec565b88611951565b611951565b60085580f35b50903461037c57610556366117ac565b83549194916001600160a01b0391906105729083163314611824565b845b81811061057f578580f35b8261059361058e83858b6126aa565b6126ba565b168652601a602052838620600160ff19825416179055600181018091111561057457634e487b7160e01b865260118552602486fd5b5091903461043157826003193601126104315782546001600160a01b03906105f39082163314611824565b308452816020528284205447811515806106c3575b1561068f57918160609361062661064e97969484600e5416306118bc565b82600e5416928854169186519788958694859363f305d71960e01b855242923090860161210c565b03925af19081156104b35750610662575080f35b6106829060603d8111610688575b61067a818361189a565b8101906120f1565b50505080f35b503d610670565b845162461bcd60e51b8152602081860152600e60248201526d139bdd1a1a5b99c81d1bc818591960921b6044820152606490fd5b50801515610608565b50809183346104bc5760203660031901126104bc5782546001600160a01b03906106f99082163314611824565b601c541691823b156107465783926024849284519586938492635ebf4db960e01b84528035908401525af19081156104b357506107335750f35b61073c90611870565b6107435780f35b80fd5b505050fd5b50823461037c578160031936011261037c57602090600b549051908152f35b50823461037c578060031936011261037c57602091610787611780565b82610790611796565b6001600160a01b03928316845260058652922091166000908152908352819020549051908152f35b50903461037c57602036600319011261037c57356107e060018060a01b038354163314611824565b6109c4811161037c5760065580f35b50903461037c57602036600319011261037c573561081760018060a01b038354163314611824565b61083c61271061052e8361053b61083360085460095490611951565b600b5490611951565b600a5580f35b50823461037c578160031936011261037c576020906007549051908152f35b50823461037c57602036600319011261037c5760209160ff9082906001600160a01b0361088c611780565b1681526010855220541690519015158152f35b50823461037c578160031936011261037c57602090600a549051908152f35b50823461037c578060031936011261037c576108d8611780565b906108e16117f9565b835490926001600160a01b03916108fb9083163314611824565b168352601060205282209060ff80198354169115151617905580f35b50823461037c578160031936011261037c576020906006549051908152f35b50823461037c578160031936011261037c576020906014549051908152f35b50823461037c578160031936011261037c5760209060ff600f5460a01c1690519015158152f35b50809183346104bc57826003193601126104bc5782546001600160a01b03906109a89082163314611824565b601c541691823b1561074657815163f26b854f60e01b81529284918491829084905af19081156104b357506107335750f35b50903461037c57602036600319011261037c5735801515809103610a2457610a0c60018060a01b038354163314611824565b61ff006019549160081b169061ff0019161760195580f35b600080fd5b50903461037c57602036600319011261037c5735610a5160018060a01b038354163314611824565b610a7261271061052e610a6961083385600854611951565b600a5490611951565b60095580f35b50823461037c578060031936011261037c57602090610aa2610a98611780565b602435903361197e565b5160018152f35b5091346104315780600319360112610431576020610ac5611780565b92604460018060a01b0391868381541693610ae1338614611824565b8651978895869463a9059cbb60e01b86528501526024356024850152165af19081156104b35750610488575080f35b50918291346104bc5760203660031901126104bc57601c5482516001624d3b8760e01b03198152823592810192909252909260609184916024918391906001600160a01b03165af19081156104b35750610662575080f35b50823461037c57602036600319011261037c5760209160ff9082906001600160a01b03610b93611780565b168152601a855220541690519015158152f35b50903461037c57602036600319011261037c57356001600160a01b038181169182900361043157610bdb818454163314611824565b81601c549182167fdab7e227381106009c2eb953811a49c7e30de8e9eb12e2aedb79b25c22f474b98580a36001600160a01b03191617601c5580f35b50823461037c578160031936011261037c576020906015549051908152f35b509134610431578260031936011261043157805191836002549060019082821c928281168015610d2e575b6020958686108214610d1b5750848852908115610cf95750600114610ca0575b610c9c8686610c92828b038361189a565b5191829182611737565b0390f35b929550600283527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b828410610ce65750505082610c9c94610c92928201019438610c81565b8054868501880152928601928101610cc9565b60ff191687860152505050151560051b8301019250610c9282610c9c38610c81565b634e487b7160e01b845260229052602483fd5b93607f1693610c61565b50823461037c578160031936011261037c576020906017549051908152f35b50809183346104bc57806003193601126104bc57610d73611780565b610d7b6117f9565b845490916001600160a01b0391610d959083163314611824565b81601c541690813b15610dd5578660449281958751988996879562241fbd60e51b87521690850152151560248401525af19081156104b357506107335750f35b8680fd5b50823461037c578160031936011261037c57905490516001600160a01b039091168152602090f35b50903461037c57602036600319011261037c5735610e2960018060a01b038354163314611824565b6109c4811161037c5760075580f35b50823461037c578160031936011261037c5760209060ff60195460081c1690519015158152f35b50919034610431578260031936011261043157610e8660018060a01b038454163314611824565b600f549160ff8360a01c16610ece57505060ff60a01b1916600160a01b17600f557f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c78180a180f35b906020606492519162461bcd60e51b8352820152600e60248201526d416c72656164792061637469766560901b6044820152fd5b50823461037c578160031936011261037c57602090600c549051908152f35b50823461037c578160031936011261037c57602090601b549051908152f35b50823461037c578160031936011261037c57600d5490516001600160a01b039091168152602090f35b50823461037c578160031936011261037c576020906011549051908152f35b50346107435780600319360112610743578054816001600160a01b038216610fb1338214611824565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b509190346104315760203660031901126104315760209282916001600160a01b0361100d611780565b168252845220549051908152f35b50823461037c578160031936011261037c576020906008549051908152f35b50823461037c578160031936011261037c576020905164e8d4a510008152f35b503461074357602036600319011261074357611074611780565b81546001600160a01b03919061108d9083163314611824565b16801561037c576bffffffffffffffffffffffff60a01b600d541617600d5580f35b50918291346104bc5760203660031901126104bc5782546001600160a01b03906110dc9082163314611824565b601c5416803b156107465760248492845195869384926302f08a5160e21b84528035908401525af19081156104b35750611114575080f35b61111d90611870565b80f35b50823461037c578160031936011261037c576020906009549051908152f35b50823461037c578160031936011261037c5760209060ff6019541690519015158152f35b50823461037c578160031936011261037c57600f5490516001600160a01b039091168152602090f35b50823461037c578160031936011261037c576020906016549051908152f35b50823461037c578160031936011261037c57602090601d549051908152f35b5091903461043157826003193601126104315782546001600160a01b03166111f3338214611824565b47918215611217575083808093819382f11561120d575080f35b51903d90823e3d90fd5b606490602085519162461bcd60e51b8352820152600660248201526527379021272160d11b6044820152fd5b50823461037c578160031936011261037c576020905160128152f35b50823461037c578160031936011261037c57601c5490516001600160a01b039091168152602090f35b50903461037c57606036600319011261037c576112a3611780565b6112ab611796565b6001600160a01b0382168452600560209081528585203386529052928490205460443593928482106112f257602086610aa28787876112ed83890333836118bc565b61197e565b606490602087519162461bcd60e51b8352820152601760248201527f45524332303a2065786365656420616c6c6f77616e63650000000000000000006044820152fd5b50903461037c57611345366117ac565b83549194916001600160a01b0391906113619083163314611824565b845b81811061136e578580f35b8261137d61058e83858b6126aa565b168652601a60205283862060ff198154169055600181018091111561136357634e487b7160e01b865260118552602486fd5b50823461037c578160031936011261037c578180808060018060a01b038154166113da338214611824565b47908282156113ee575bf11561120d575080f35b506108fc6113e4565b50823461037c578160031936011261037c576020906003549051908152f35b50823461037c578160031936011261037c57600e5490516001600160a01b039091168152602090f35b50806003193601126107435761111d6126ce565b50903461037c57602036600319011261037c573561147b60018060a01b038354163314611824565b61149761271061052e610a698461053b60085460095490611951565b600b5580f35b50823461037c578060031936011261037c57602090610aa26114bd611780565b6114c5612066565b60243590336118bc565b50823461037c578160031936011261037c576020906012549051908152f35b50913461043157826003193601126104315780519183600180549182821c92828116801561159f575b6020958686108214610d1b5750848852908115610cf9575060011461154757610c9c8686610c92828b038361189a565b9295508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061158c5750505082610c9c94610c92928201019438610c81565b805486850188015292860192810161156f565b93607f1693611517565b50823461037c578060031936011261037c578235602435906115d560018060a01b038554163314611824565b60ff6019541680611711575b156116ce57801515806116c4575b15611690576115fe818361195e565b92831561165c5750601155601455806015556003549260198402938085046019149015171561164957506103e861164392930461163b828261195e565b60125561195e565b60135580f35b634e487b7160e01b835260119052602482fd5b5162461bcd60e51b8152602081870152600f60248201526e4d696e7420636f756e74207a65726f60881b6044820152606490fd5b825162461bcd60e51b8152602081870152600e60248201526d496e76616c696420706172616d7360901b6044820152606490fd5b50808210156115ef565b825162461bcd60e51b8152602081870181905260248201527f43616e6e6f74206368616e6765206166746572206d696e7420737461727465646044820152606490fd5b50601654156115e1565b90503461037c578160031936011261037c576020906013548152f35b6020808252825181830181905290939260005b82811061176c57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161174a565b600435906001600160a01b0382168203610a2457565b602435906001600160a01b0382168203610a2457565b906020600319830112610a245760043567ffffffffffffffff92838211610a245780602383011215610a24578160040135938411610a245760248460051b83010111610a24576024019190565b602435908115158203610a2457565b34610a24576000366003190112610a2457602060405160058152f35b1561182b57565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b67ffffffffffffffff811161188457604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761188457604052565b90916001600160a01b039182169182151580611923575b15610a24577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916020918460005260058352604060002095169485600052825280604060002055604051908152a3565b5080841615156118d3565b9190820391821161193b57565b634e487b7160e01b600052601160045260246000fd5b9190820180921161193b57565b8115611968570490565b634e487b7160e01b600052601260045260246000fd5b90916001600160a01b038083169182151580611eb8575b15611e84578015611e51576000838152600492602093808552604092848482205410611e175760ff601c5460a01c1680611e0e575b80611dff575b611db65760ff601c5460a01c1615611da9575b600f549783891690818914809a8115611d9d575b81611d8e575b50611d2b575b89611d1a575b998591899a9b8683169c8d92831480611d0c575b86938d885260108d528260ff888a2054161580611cf9575b611cb5575b50879d885260108d5260ff8789205416159081611ca4575b50611c4f575b5050611a648b83611951565b611a6e908a61192e565b988c8652868b528486205490611a839161192e565b8c8652868b52848620558c8552888486205490611a9f91611951565b8d8652868b5284862055600080516020612b288339815191529a611ada94611ad59380611b91575b505080611b5f575b50611eee565b611eee565b601c549260ff8460a01c1615611b12575b5050505060ff601c5460a01c1615611b05575b51908152a3565b611b0d612502565b611afe565b60609262061a80926024928751968795869463ffb2c47960e01b8652850152165af1611b41575b808080611aeb565b611b589060603d81116106885761067a818361189a565b5050611b39565b611b8890308752878c52611b76818b892054611951565b308852888d528a882055601d54611951565b601d5538611acf565b3088528c89611ba383858c2054611951565b91308b525282892055611bd96127109182611bc060085483611ec3565b0480151580611c42575b611c2d575b5060095490611ec3565b048015611ac757308852888d528c89611bf583858c205461192e565b91308b5252828920558c89611c138361dead95868d528c2054611951565b91848b52528b8920558a519081528d8d3092a38838611ac7565b611c3990600c54611951565b600c5538611bcf565b508c600d54161515611bca565b908092939495509115611c9c575b50611c6e575b908692913880611a58565b985060058702878104600503611c8957612710900498611c63565b634e487b7160e01b845260118552602484fd5b905038611c5d565b8852508587205460ff16158f611a52565b611cde575b81611cc6575b82611a3a565b9350612710611cd76007548d611ec3565b0493611cc0565b819450612710611cf18d60065490611ec3565b049450611cba565b50508088528260ff888a20541615611a35565b5087600e54168c1415611a1d565b600e5485168b861614159950611a09565b8883526010885260ff86842054168015611d7c575b611a0357855162461bcd60e51b8152808501899052601260248201527154726164696e67206e6f742061637469766560701b6044820152606490fd5b50848b16835260ff8684205416611d40565b60ff915060a01c1615386119fd565b8c8716841491506119f7565b611db1612066565b6119e3565b9097869750918392600080516020612b28833981519152978352898752838320611de187825461192e565b90551697888252855220611df6838254611951565b905551908152a3565b5082600f5416838a16146119d0565b503087146119ca565b835162461bcd60e51b81528083018790526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a416d6f756e74207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b6044820152606490fd5b508185161515611995565b8181029291811591840414171561193b57565b90816020910312610a2457518015158103610a245790565b60018060a01b0380601c541660409180835194634e7b827f60e01b865216918260048601526020948581602481855afa90811561205b5760009161203e575b50612037578260005260048552836000205494845190632f842d8560e21b82528082600481865afa90811561202c57600091612000575b5086109050611fc25750601c541692833b15610a2457604460009283855196879485936338c110ef60e21b8552600485015260248401525af1908115611fb85750611fad575b50565b611fb690611870565b565b513d6000823e3d90fd5b935050823b15610a245760009260448492845195869384926338c110ef60e21b845260048401528160248401525af1908115611fb85750611fad5750565b82813d8311612025575b612014818361189a565b810103126107435750518038611f64565b503d61200a565b86513d6000823e3d90fd5b5050505050565b6120559150863d88116104ac576104a0818361189a565b38611f2d565b85513d6000823e3d90fd5b601c5460ff8160a01c16611faa5730600052600460205260406000205480156120ad5760ff60a01b19918216600160a01b17601c556120a490612140565b601c5416601c55565b5050565b3d156120ec573d9067ffffffffffffffff821161188457604051916120e0601f8201601f19166020018461189a565b82523d6000602084013e565b606090565b90816060910312610a24578051916040602083015192015190565b9060a09295949360c0830196600180861b038093168452602084015260006040840152600060608401521660808201520152565b8015611faa57600854612159610833600a548093611951565b80156122015761216c6121719284611ec3565b61195e565b9061217c828261192e565b9081612206575b50508061218d5750565b4780612197575050565b6121df9160609160018060a01b03906121b58383600e5416306118bc565b81600e541691600054169060405180968195829463f305d71960e01b84524291306004860161210c565b03925af16121ea5750565b6122019060603d81116106885761067a818361189a565b505050565b600e546001600160a01b03906122209084908316306118bc565b6040908151936060850167ffffffffffffffff908681108282111761188457845260028652602095868101853682378151156124ab5730815284600e54169086516315ab88c960e31b81528981600481865afa9081156124f7576000916124c1575b508351906001918210156124ab5787909492919416888301524795885194859363791ac94760e01b855260a485019260048601526000602486015260a060448601525180925260c48401929160005b8d8282106124935750505050509181600081819530606483015242608483015203925af19182612410575b505061232e5750507f9c517099ca0908fbba82379bf527eb8ca9a81835f95d9e61906d857849717132935051908152a1565b61233b909392934761192e565b9060085461234b600b5482611951565b908161235c575b5050505050612183565b6123749161216c61236d9286611ec3565b809361192e565b9180151580612403575b6123e6575b5081612391575b8080612352565b60008080848194601c54165af16123a66120b1565b506123b2575b8061238a565b7fa34050dbab1220a48176516f252602780a1adfda5f8a7aa8673e3d6641fc64ec938351928352820152a1388080806123ac565b60008080809385600d54165af1506123fc6120b1565b5038612383565b5081600d5416151561237e565b3d806000843e612420818461189a565b8201918881840312610a2457805190828211610a24570182601f82011215610a245780519182116118845788808360051b938951906124618387018361189a565b81520192820101928311610a245788809101915b8383106124835750506122fc565b8251815291810191899101612475565b84518c168652889650948501949093019282016122d1565b634e487b7160e01b600052603260045260246000fd5b8a81813d83116124f0575b6124d6818361189a565b8101031261037c5751908782168203610743575038612282565b503d6124cc565b88513d6000823e3d90fd5b601d805465048c2739500081106120ad5765048c27394fff19810190811161193b578155600090606032811b925b6005811061253e5750505050565b825460408051602091828201934285524482840152888784015285607484015260949081840152825260c082019180831067ffffffffffffffff84111761188457828252519093206001600160a01b03908116939084159081156126a0575b8115612692575b506126895730600052600491828452816000205464e8d4a50fff1981019081116126745730600052838552826000205584600052816000205464e8d4a510009384820180921161265f579186917f90bcf0048b4f2fce00ba208729b9edf192f9ca8c71b84845e2d94f7dffeeddcd969594938360005286528360002055838152600080516020612b28833981519152853092a351908152a25b600181018091111561253057634e487b7160e01b600052601160045260246000fd5b601190634e487b7160e01b6000525260246000fd5b601184634e487b7160e01b6000525260246000fd5b5050505061263d565b9050600f54168414386125a4565b308614915061259d565b91908110156124ab5760051b0190565b356001600160a01b0381168103610a245790565b60195460ff811615612ab2576011543403612a785760081c60ff16612a2b575b6017546126fb3482611951565b601454106129f75761270e903490611951565b6017556016546001810180911161193b5760165560125460009030825260046020908082526040928385205461275261274960135484611951565b601b5490611951565b116129b55733855281835261276a8185872054611951565b33865282845284862055308552612784818587205461192e565b30865282845284862055338552601883526127a28185872054611951565b3386526018845284862055835134815281848201527f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f853392a283519081523390600080516020612b28833981519152843092a36127ff33611eee565b61280e601b5460135490611951565b9182601b556017546014541115612826575050505050565b60ff19601954166019557f1eb1561f8507eb9bc6988331f66f369e75710f2b4b678ad5b4a52454b6636f5f8580a17f3f2af9f26095d292132b7be52f11c1760da3a5825c66688b295287d8279a45de8580a14791831515806129ac575b6128d0575b5050600f805460ff60a01b1916600160a01b179055507f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c7929150819050a13880808080612037565b60606129189187601b5560018060a01b036128f08782600e5416306118bc565b80600e54169089541686895180968195829463f305d71960e01b84528c42923090860161210c565b03925af180156129a257917f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c7969593917f03f82d6e9655f3dcff58c68e61adfad355b92c77a8fde4d53a423a6c58e293479593612984575b508351928352820152a19038808080612888565b61299b9060603d81116106885761067a818361189a565b5050612970565b85513d88823e3d90fd5b50821515612883565b50915162461bcd60e51b815291820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b141c995cd85b1948199d5b1b60a21b6044820152606490fd5b33600052601a60205260ff604060002054166126ee5760405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590810939088185b5bdd5b9d60721b6044820152606490fd5b60405162461bcd60e51b815260206004820152601260248201527150726573616c65206e6f742061637469766560701b6044820152606490fd5b15612af357565b60405162461bcd60e51b815260206004820152600c60248201526b546f74616c203e203130302560a01b6044820152606490fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212202fbb49637386d228ccbb23d586a0424f492b06e08074a144faad037eba3b249564736f6c634300081400336080346100b657601f61135738819003918201601f19168301916001600160401b038311848410176100bb5780849260409485528339810103126100b65780516020909101516001600160a01b03908181168082036100b6576100b15750335b16908160018060a01b031960005416176000556040519160007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361012c600c55600d5561128590816100d28239f35b61005f565b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610029575b5050361561001e57600080fd5b6100273461092f565b005b6000803560e01c80630342a978146108155780630483f7a01461077d57806309bbedde146107045780630bc229441461072357806318160ddd14610704578063226cfa3d146106cc57806327ce0147146106a65780633009a609146106875780634e71d92d146106075780634e7b827f146105c95780635ebf4db91461059b5780636843cd84146105755780636a474002146105615780636f2789ec1461054257806370a082311461050a578063715018a6146104ae57806385a6b3ae146104905780638da5cb5b14610468578063a30dee301461044b578063a8b9d2401461041e578063aafd847a146103e6578063bc4c4b371461030a578063be10b614146102eb578063e30443bc146102af578063f26b854f14610245578063f2fde38b146101915763ffb2c4791461015e5750610011565b3461018e57602036600319011261018e575061017c6060923561111c565b91929081519384526020840152820152f35b80fd5b509134610241576020366003190112610241576101ac6108b9565b8354916001600160a01b03808416926101c63385146108e3565b1693841561020657505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b5090346102ab57816003193601126102ab57815482906001600160a01b031661026f3382146108e3565b47908115801561027d578380f35b83928392839283906102a2575bf11561029857818180808380f35b51903d90823e3d90fd5b506108fc61028a565b5080fd5b5090346102ab5736600319011261018e576102e86102cb6108b9565b6102df60018060a01b0384541633146108e3565b60243590610aab565b80f35b5090346102ab57816003193601126102ab57602090600d549051908152f35b5090346102ab57806003193601126102ab57906020916103286108b9565b916103316108d4565b81546001600160a01b039491849161034c90871633146108e3565b15806103bd575b61035c83610e23565b958661036e575b878784519015158152f35b7fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf092931693848152600b885282429120556103a784610a03565b9082519182521587820152a28380828180610363565b8583168452600b87526103e16103d983862054600c54906109e3565b42101561120e565b610353565b5090346102ab5760203660031901126102ab5760209181906001600160a01b0361040e6108b9565b1681526003845220549051908152f35b5090346102ab5760203660031901126102ab5760209061044461043f6108b9565b610a03565b9051908152f35b5082346102ab5760203660031901126102ab576102e8903561092f565b5090346102ab57816003193601126102ab57905490516001600160a01b039091168152602090f35b50913461024157826003193601126102415760209250549051908152f35b503461018e578060031936011261018e578054816001600160a01b0382166104d73382146108e3565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b5090346102ab5760203660031901126102ab5760209181906001600160a01b036105326108b9565b1681526006845220549051908152f35b5090346102ab57816003193601126102ab57602090600c549051908152f35b503461018e578060031936011261018e5780f35b5090346102ab5760203660031901126102ab57906020916105946108b9565b5051908152f35b5082346102ab5760203660031901126102ab576105c260018060a01b0383541633146108e3565b35600d5580f35b5090346102ab5760203660031901126102ab5760209160ff9082906001600160a01b036105f46108b9565b168152600a855220541690519015158152f35b5090346102ab57816003193601126102ab57338252600b6020526106346103d982842054600c54906109e3565b61063d33610e23565b50338252600b60205242818320557fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf09261067533610a03565b9180519283528360208401523392a280f35b5090346102ab57816003193601126102ab576020906009549051908152f35b5090346102ab5760203660031901126102ab576020906104446106c76108b9565b610a40565b5090346102ab5760203660031901126102ab5760209181906001600160a01b036106f46108b9565b168152600b845220549051908152f35b5090346102ab57816003193601126102ab576020906005549051908152f35b509134610241576020366003190112610241577f4b0a6b82d0dc4407b3359033a4f27efd1e2105e4571b72d6a3b8f1da3e6079dd91602091359061077160018060a01b0386541633146108e3565b81600c5551908152a180f35b5090346102ab57806003193601126102ab577f50b9be6d475eaa75d2387ce1985972767cbe50d0b6e16cffd31a82062cbfbc7560206107ba6108b9565b926107c36108d4565b9060018060a01b036107d98188541633146108e3565b851694858752600a8452818720928015159360ff1981541660ff8616179055610806575b5051908152a280f35b61080f90610d77565b866107fd565b5091346102415781600319360112610241576108368391602435903561101a565b9091835193849381850191855280518092526060850191602080920190845b81811061089957505050848203818601528080855193848152019401925b82811061088257505050500390f35b835185528695509381019392810192600101610873565b82516001600160a01b031685528897509383019391830191600101610855565b600435906001600160a01b03821682036108cf57565b600080fd5b6024359081151582036108cf57565b156108ea57565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b6005549081158080156109db575b6109d657600154608083901b918315600160801b8585041417156109c0576109aa576109a59361096e9204906109e3565b6001556040518181527fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d7845411651160203392a26004546109e3565b600455565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b505050565b50811561093d565b919082018092116109c057565b818102929181159184041417156109c057565b610a3090610a1081610a40565b6001600160a01b0390911660009081526003602052604090205490610a33565b90565b919082039182116109c057565b60009060018060a01b0316815260066020526040812054906002602052610a6e6040822054926001546109f0565b60801c818382019384129112908015821691151617610a9757808212610a92575090565b905090565b634e487b7160e01b81526011600452602490fd5b6001600160a01b03166000818152600a602052604081205490929060ff16610b5857600d548110610b4b57610b0890828452600860205260ff604085205416600014610b3c5782845260066020528060408520555b6001546109f0565b60801c90600160ff1b8214610b2857825260026020526040822091039055565b634e487b7160e01b83526011600452602483fd5b610b468184610cde565b610b00565b50610b569150610d77565b565b5090604060ff916008602052205416610b6e5750565b610b5690610bc4565b600554811015610bae5760056000527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390811660008181526008602090815260408083205492949093919260ff1615610cd75760078352838520546005546000199190828101908111610cc3578084918303610c74575b5050506005548015610c60576007949392910190610c3082610b77565b909182549160031b1b1916905560055584526008815282842060ff19815416905560068152838381205552812055565b634e487b7160e01b87526031600452602487fd5b610c7d90610b77565b90549060031b1c16610cb181610c9284610b77565b90919082549060031b9160018060a01b03809116831b921b1916179055565b87526007855285872055388281610c13565b634e487b7160e01b88526011600452602488fd5b5050505050565b6001600160a01b0381166000908152600860205260408120549192909160ff16610d6957600860205260408220600160ff198254161790556006602052604082205560055490600760205281604082205568010000000000000000821015610d55575090610c92826001610b569401600555610b77565b634e487b7160e01b81526041600452602490fd5b915060409060066020522055565b6001600160a01b03811660008181526008602052604081205490929060ff16156109d657610dae90610da883610e23565b50610bc4565b8152600260205280604081205560036020526040812055565b604051906020820182811067ffffffffffffffff821117610de757604052565b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f1916820167ffffffffffffffff811183821017610de757604052565b6001600160a01b0316610e3581610a03565b9081610e42575050600090565b600091818352602060038152604091610e5e81848720546109e3565b8486526003835283862055837fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d838551848152a28480808084885af13d15610fbc573d67ffffffffffffffff8111610fa857610ec2601f8201601f19168501610dfd565b90815286843d92013e5b15610edb575050505050600190565b8385526003825282852054835184810181811067ffffffffffffffff821117610f94578552600f81526e15da5d1a191c985dc819985a5b1959608a1b84820152818311610f3a575060039291610f3091610a33565b9385525282205590565b839087865192839162461bcd60e51b8352816004840152835191826024850152815b838110610f7d57505060448094508284010152601f80199101168101030190fd5b808601820151878201604401528694508101610f5c565b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b87526041600452602487fd5b610ecc565b67ffffffffffffffff8111610de75760051b60200190565b90610feb610fe683610fc1565b610dfd565b8281528092610ffc601f1991610fc1565b0190602036910137565b8051821015610bae5760209160051b010190565b919061102690836109e3565b600554808211611114575b50808310156110ee5761104c6110478483610a33565b610fd9565b9061105a6110478583610a33565b93805b82811061106b575050509190565b604061107682610b77565b90546001600160a01b039160039190821b1c821661109d6110978787610a33565b89611006565b526110a784610b77565b9054911b1c166000908152600660205220546110cc6110c68484610a33565b88611006565b52600181018091111561105d5760246000634e487b7160e01b81526011600452fd5b5090506110f9610dc7565b9060008252611106610dc7565b916000835260003681379190565b905038611031565b906005918254908115611201579190600954906000945a938692835b878910806111f8575b156111e75760018087018097116109c05786855411156111de575b61116587610b77565b905460039190911b1c6001600160a01b031661118081610e23565b6111bd575b5081018091116109c057955a908181116111a1575b5095611138565b986111b0826111b6939b610a33565b906109e3565b973861119a565b958181018091116109c05795600052600b6020524260406000205538611185565b6000965061115c565b600986905597509295509293505050565b50818110611141565b5050600954600092508291565b1561121557565b60405162461bcd60e51b815260206004820152601260248201527110db185a5b481dd85a5d081b9bdd081b595d60721b6044820152606490fdfea2646970667358221220856bea2b13daed06425e37d6d08e2cd292b199f7929beb1a1662509c1c38942464736f6c63430008140033"
};

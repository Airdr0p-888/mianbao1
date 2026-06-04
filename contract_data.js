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
          "name": "tokensDistributed",
          "type": "uint256"
        }
      ],
      "name": "DividendDistributed",
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
      "name": "LP_RECEIVER",
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
      "name": "addLiquidity",
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
      "inputs": [],
      "name": "dividendTrackerEmergencyWithdrawToken",
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
      "name": "pendingDividendTokens",
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
  "BYTECODE": "60e0806040523462000b8157600060a05262004bef803803809162000025828562000bb0565b833981016101c082820312620006bd5781516001600160401b038111620006bd57816200005491840162000bd4565b602083015190916001600160401b038211620006bd576200007791840162000bd4565b916040810151608052606081015191608082015160c05260a08201519160c08101519460e08201516101008301516101208401519161014085015193620000c2610160870162000c4b565b96620000d86101a0610180890151980162000c4b565b60a051906001600160a01b03811662000b7b5750335b81546001600160a01b0319166001600160a01b03919091169081178255604051917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36109c490818b1162000b4657508b1162000b0d576127106200016687620001608862000160898962000c60565b62000c60565b1162000ad457891562000a9f578960c0511062000a67576001600160a01b0388161562000a34578051906001600160401b038211620009385760015460a051600182811c9216801562000a29575b60208310146200091657509081601f849311620009cf575b5060a05190602091601f84116001146200095c575060a0519262000950575b50508160011b916000199060031b1c1916176001555b8051906001600160401b038211620009385760025460a051600182811c921680156200092d575b60208310146200091657509081601f849311620008bc575b5060a05190602091601f841160011462000849575060a051926200083d575b50508160011b916000199060031b1c1916176002555b60805180670de0b6b3a7640000810204670de0b6b3a76400001490151715620007ee57670de0b6b3a764000060805102600355620002b68860c05162000c84565b9889156200080657681b1ae4d6e2ef500000608051670de0b6b3a7640000810291829102046101f41490151715620007ee57620003058a6103e8681b1ae4d6e2ef500000608051020462000c84565b6013553060a051526004602052670de0b6b3a7640000608051029586604060a051205560405196875260a05196877fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203093a3604051966001600160401b036115e8890190811190891117620007d757506115e86200360788396115e88701908152306020820181905260408201819052606082015260a05196908190036080019087f0958615620007cb575060198054610100600160a81b03600898891b16610100600160a81b03199091161781556006989098556007558455600955600b55600a55600e80546001600160a01b0384166001600160a01b031991821617909155600f80547310ed43c718714eb63d5aa57b78b54704e256024e92168217905560405163c45a015560e01b8152602081600481855afa908115620006b05760a0519162000789575b506040516315ab88c960e31b8152602081600481865afa8015620006b05760a0519062000747575b6040516364e329cb60e11b81523060048201526001600160a01b03918216602482015260a051909360209350849260449284929091165af1908115620006b05760a0519162000705575b50601080546001600160a01b0319166001600160a01b0392831617905560a08051309052601160205280516040808220805460ff19908116600190811790925573dacd2db81e1f79f1b2113a69ecf8b77e438946899384905284518381208054831684179055988616909852835182812080548a1683179055959095529151918220805487169094179093558554841c9091169290833b15620006ad575060405162241fbd60e51b93848252306004830152600160248301528160448160a05180945af18015620006b057620006f3575b508454811c6001600160a01b0316803b15620006bd576040519084825260a0516004830152600160248301528160448160a05180945af18015620006b057620006db575b5084546010546001600160a01b0390811691831c16803b15620006bd57604051918583526004830152600160248301528160448160a05180945af18015620006b057620006c3575b508454901c6001600160a01b031690813b15620006bd576040519283526004830152600160248301528160448160a05180945af18015620006b05762000697575b5081541660011790556010805460ff60a01b1916905560125560c05160145560155560a051601655604051612961908162000ca68239f35b620006a29062000b86565b60a05180156200065f575b80fd5b6040513d60a051823e3d90fd5b60a05180fd5b620006ce9062000b86565b60a05180156200061e5780fd5b620006e69062000b86565b60a0518015620005d65780fd5b620006fe9062000b86565b3862000592565b90506020813d6020116200073e575b81620007236020938362000bb0565b81010312620006bd57620007379062000c4b565b38620004c1565b3d915062000714565b506020813d60201162000780575b81620007646020938362000bb0565b81010312620006bd576200077a60209162000c4b565b62000477565b3d915062000755565b90506020813d602011620007c2575b81620007a76020938362000bb0565b81010312620006bd57620007bb9062000c4b565b386200044f565b3d915062000798565b604051903d90823e3d90fd5b634e487b7160e01b9052604160045260a051602490fd5b634e487b7160e01b60a051526011600452602460a051fd5b60405162461bcd60e51b815260206004820152600f60248201526e4d696e7420636f756e74207a65726f60881b6044820152606490fd5b0151905038806200025f565b60029194505260a051906020822091935b601f1984168510620008a0576001945083601f1981161062000886575b505050811b0160025562000275565b015160001960f88460031b161c1916905538808062000877565b818101518355602094850194600190930192909101906200085a565b909150600260a0515260a05160208120601f850160051c8101602086106200090e575b9085949392915b601f840160051c82018110620008ff5750505062000240565b828155869550600101620008e6565b5080620008df565b634e487b7160e01b9052602260045260a051602490fd5b91607f169162000228565b634e487b7160e01b60a051526041600452602460a051fd5b015190503880620001eb565b60019194505260a051906020822091935b601f1984168510620009b3576001945083601f1981161062000999575b505050811b0160015562000201565b015160001960f88460031b161c191690553880806200098a565b818101518355602094850194600190930192909101906200096d565b909150600160a0515260a05160208120601f850160051c81016020861062000a21575b9085949392915b601f840160051c8201811062000a1257505050620001cc565b828155869550600101620009f9565b5080620009f2565b91607f1691620001b4565b60405162461bcd60e51b815260206004820152600b60248201526a57616c6c6574207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201526f119a5b1b080f081b5a5b9d0818dbdcdd60821b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c04d696e7420636f7374203e203609c1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270054617820616c6c6f63203e20313030303607c1b6044820152606490fd5b60405162461bcd60e51b81526020600482015260116024820152700a6cad8d840e8c2f040e8dede40d0d2ced607b1b6044820152606490fd5b62461bcd60e51b815260206004820152601060248201526f084eaf240e8c2f040e8dede40d0d2ced60831b6044820152606490fd5b620000ee565b600080fd5b6001600160401b03811162000b9a57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000b9a57604052565b919080601f8401121562000b81578251906001600160401b03821162000b9a576040519160209162000c10601f8301601f191684018562000bb0565b81845282828701011162000b815760005b81811062000c3757508260009394955001015290565b858101830151848201840152820162000c21565b51906001600160a01b038216820362000b8157565b9190820180921162000c6e57565b634e487b7160e01b600052601160045260246000fd5b811562000c8f570490565b634e487b7160e01b600052601260045260246000fdfe604060808152600480361015610121575b361561001b57600080fd5b60195460ff8116156100345750505061003261255f565b005b600f546001600160a01b039081163381149290849084156100b4575b505082156100a4575b50501561006257005b6020606492519162461bcd60e51b8352820152601e60248201527f424e42206e6f742061636365707465642061667465722070726573616c6500006044820152fd5b90915060081c1633143880610059565b86516315ab88c960e31b8152929450602091839182905afa80156101165782916000916100e8575b50163314918338610050565b610109915060203d811161010f575b6101018183611821565b8101906118b5565b386100dc565b503d6100f7565b85513d6000823e3d90fd5b6000803560e01c80630442bfa8146115bc57806306fdde03146115015780630807b9e2146114e2578063095ea7b3146114b05780630f44f3a7146114665780631249c58b146114525780631694505e1461142957806318160ddd1461140a5780631d111d13146113c257806323b872dd14611315578063277cc4d5146111f65780632c1f5216146111c95780632ebd7c47146111aa5780632ed29c781461114c578063313ce5671461113057806333cb7d91146110b75780633c5e4ca31461108857806347af29111461106957806349bd5a5e1461104057806353135ca01461101c57806353deb3d614610ffd5780635999095e14610f955780635d098b3814610f4057806366e3540a14610f2157806370a0823114610eea578063715018a614610e8b5780637515d15514610e6c57806375f0a87414610e4357806382c67cbe14610e245780638a8c523c14610d815780638cd09d5014610d4a5780638da5cb5b14610d2257806391c04cfb14610c945780639242338314610c7557806395d89b4114610b735780639659867e14610b5457806398acb5d814610aca578063a04eab9714610a6f578063a4c3b09114610a08578063a9059cbb146109d7578063addc831e14610991578063b5bc09d514610933578063bbc0c7421461090c578063c2fe651e146108ed578063c473413a146108ce578063c6a3064714610875578063c9f62af214610856578063cb4ca63114610818578063cffd129c146107f9578063d3fa94f8146107aa578063dc1052e214610773578063dd62ed3e1461072a578063e51fde321461070b578063e7ce0a4114610692578063e8078d9414610593578063efaa744214610534578063f0fc6bca146104a6578063f2fde38b146103f15763fbbf8cc3146103b65750610010565b82346103ed5760203660031901126103ed5760209181906001600160a01b036103dd61176b565b1681526018845220549051908152f35b5080fd5b509190346104a25760203660031901126104a25761040d61176b565b8354916001600160a01b03808416926104273385146117ab565b1693841561046757505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b5091829134610530578260031936011261053057602090604460018060a01b0360195460081c16918451958693849263bc4c4b3760e01b845233908401528160248401525af190811561052757506104fc575080f35b61051c9060203d8111610520575b6105148183611821565b810190611dbb565b5080f35b503d61050a565b513d84823e3d90fd5b5050fd5b5090346103ed5760203660031901126103ed573561055c60018060a01b0383541633146117ab565b61058d61271061058661057d610574600954866118f7565b600b54906118f7565b600a54906118f7565b11156128d0565b60085580f35b509190346104a257826003193601126104a25782546001600160a01b03906105be90821633146117ab565b3084528160205282842054479181151580610689575b15610655579181836105f2610614979694606096600f541630611843565b600f541691855180978195829463f305d71960e01b8452429130908501611fa6565b03925af19081156105275750610628575080f35b6106489060603d811161064e575b6106408183611821565b810190611f8b565b50505080f35b503d610636565b845162461bcd60e51b8152602081860152600e60248201526d139bdd1a1a5b99c81d1bc818591960921b6044820152606490fd5b508215156105d4565b50918291346105305760203660031901126105305782546001600160a01b03906106bf90821633146117ab565b60195460081c16803b15610706576024849284519586938492635ebf4db960e01b84528035908401525af190811561052757506106fa575080f35b610703906117f7565b80f35b505050fd5b5082346103ed57816003193601126103ed57602090600b549051908152f35b5082346103ed57806003193601126103ed578060209261074861176b565b610750611786565b6001600160a01b0391821683526005865283832091168252845220549051908152f35b5090346103ed5760203660031901126103ed573561079b60018060a01b0383541633146117ab565b6109c481116103ed5760065580f35b5090346103ed5760203660031901126103ed57356107d260018060a01b0383541633146117ab565b6107f3612710610586836107ee610574600854600954906118f7565b6118f7565b600a5580f35b5082346103ed57816003193601126103ed576020906007549051908152f35b5082346103ed5760203660031901126103ed5760209160ff9082906001600160a01b0361084361176b565b1681526011855220541690519015158152f35b5082346103ed57816003193601126103ed57602090600a549051908152f35b5082346103ed57806003193601126103ed5761088f61176b565b9061089861179c565b835490926001600160a01b03916108b290831633146117ab565b168352601160205282209060ff80198354169115151617905580f35b5082346103ed57816003193601126103ed576020906006549051908152f35b5082346103ed57816003193601126103ed576020906014549051908152f35b5082346103ed57816003193601126103ed5760209060ff60105460a01c1690519015158152f35b509182913461053057826003193601126105305782546001600160a01b039061095f90821633146117ab565b60195460081c16803b1561070657839183518095819363f26b854f60e01b83525af190811561052757506106fa575080f35b5090346103ed5760203660031901126103ed57356109b960018060a01b0383541633146117ab565b6109d161271061058661057d610574856008546118f7565b60095580f35b5082346103ed57806003193601126103ed57602090610a016109f761176b565b6024359033611924565b5160018152f35b5091346104a257806003193601126104a2576020610a2461176b565b92604460018060a01b0391868381541693610a403386146117ab565b8651978895869463a9059cbb60e01b86528501526024356024850152165af190811561052757506104fc575080f35b50918291346105305760203660031901126105305760195482516001624d3b8760e01b031981528235928101929092529092606091849160249183919060081c6001600160a01b03165af19081156105275750610628575080f35b5090346103ed5760203660031901126103ed576001600160a01b039035818116808203610b5057610aff8385541633146117ab565b601954928360081c167fdab7e227381106009c2eb953811a49c7e30de8e9eb12e2aedb79b25c22f474b98580a3610100600160a81b031990911660089190911b610100600160a81b03161760195580f35b8380fd5b5082346103ed57816003193601126103ed576020906015549051908152f35b5091346104a257826003193601126104a257805191836002549060019082821c928281168015610c6b575b6020958686108214610c585750848852908115610c365750600114610bdd575b610bd98686610bcf828b0383611821565b5191829182611722565b0390f35b929550600283527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b828410610c235750505082610bd994610bcf928201019438610bbe565b8054868501880152928601928101610c06565b60ff191687860152505050151560051b8301019250610bcf82610bd938610bbe565b634e487b7160e01b845260229052602483fd5b93607f1693610b9e565b5082346103ed57816003193601126103ed576020906017549051908152f35b5091346104a257806003193601126104a25782610caf61176b565b610cb761179c565b9060018060a01b03610ccd8185541633146117ab565b60195460081c1690813b15610b5057845162241fbd60e51b81526001600160a01b039091169581019586529115156020860152909384919082908490829060400103925af190811561052757506106fa575080f35b5082346103ed57816003193601126103ed57905490516001600160a01b039091168152602090f35b5090346103ed5760203660031901126103ed5735610d7260018060a01b0383541633146117ab565b6109c481116103ed5760075580f35b509190346104a257826003193601126104a257610da860018060a01b0384541633146117ab565b6010549160ff8360a01c16610df057505060ff60a01b1916600160a01b176010557f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c78180a180f35b906020606492519162461bcd60e51b8352820152600e60248201526d416c72656164792061637469766560901b6044820152fd5b5082346103ed57816003193601126103ed57602090600c549051908152f35b5082346103ed57816003193601126103ed57600e5490516001600160a01b039091168152602090f35b5082346103ed57816003193601126103ed576020906012549051908152f35b5034610ee75780600319360112610ee7578054816001600160a01b038216610eb43382146117ab565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b80fd5b509190346104a25760203660031901126104a25760209282916001600160a01b03610f1361176b565b168252845220549051908152f35b5082346103ed57816003193601126103ed576020906008549051908152f35b5034610ee7576020366003190112610ee757610f5a61176b565b81546001600160a01b039190610f7390831633146117ab565b1680156103ed576bffffffffffffffffffffffff60a01b600e541617600e5580f35b50918291346105305760203660031901126105305782546001600160a01b0390610fc290821633146117ab565b60195460081c16803b156107065760248492845195869384926302f08a5160e21b84528035908401525af190811561052757506106fa575080f35b5082346103ed57816003193601126103ed576020906009549051908152f35b5082346103ed57816003193601126103ed5760209060ff6019541690519015158152f35b5082346103ed57816003193601126103ed5760105490516001600160a01b039091168152602090f35b5082346103ed57816003193601126103ed576020906016549051908152f35b5082346103ed57816003193601126103ed576020905173dacd2db81e1f79f1b2113a69ecf8b77e438946898152f35b509190346104a257826003193601126104a25782546001600160a01b03166110e03382146117ab565b47918215611104575083808093819382f1156110fa575080f35b51903d90823e3d90fd5b606490602085519162461bcd60e51b8352820152600660248201526527379021272160d11b6044820152fd5b5082346103ed57816003193601126103ed576020905160128152f35b509182913461053057826003193601126105305782546001600160a01b039061117890821633146117ab565b60195460081c16803b15610706578391835180958193634925604760e01b83525af190811561052757506106fa575080f35b5082346103ed57816003193601126103ed57602090600d549051908152f35b5082346103ed57816003193601126103ed57601954905160089190911c6001600160a01b03168152602090f35b509190346104a257816003193601126104a25780359067ffffffffffffffff9283831161131157366023840112156113115782820135938411611311576024926005368587831b8401011161130d5761124d61179c565b875490926001600160a01b039161126790831633146117ab565b885b888110611274578980f35b8260195460081c168a8983871b8501013585811681036103ed57823b156103ed57885162241fbd60e51b81526001600160a01b03909116818b0190815288151560208201529092839182908490829060400103925af18015611303576112f4575b50600181018091111561126957634e487b7160e01b8a5260118752878afd5b6112fd906117f7565b386112d5565b87513d8d823e3d90fd5b8680fd5b8480fd5b5090346103ed5760603660031901126103ed5761133061176b565b611338611786565b6001600160a01b03821684526005602090815285852033865290529284902054604435939284821061137f57602086610a0187878761137a8389033383611843565b611924565b606490602087519162461bcd60e51b8352820152601760248201527f45524332303a2065786365656420616c6c6f77616e63650000000000000000006044820152fd5b5082346103ed57816003193601126103ed578180808060018060a01b038154166113ed3382146117ab565b4790828215611401575bf1156110fa575080f35b506108fc6113f7565b5082346103ed57816003193601126103ed576020906003549051908152f35b5082346103ed57816003193601126103ed57600f5490516001600160a01b039091168152602090f35b5080600319360112610ee75761070361255f565b5090346103ed5760203660031901126103ed573561148e60018060a01b0383541633146117ab565b6114aa61271061058661057d846107ee600854600954906118f7565b600b5580f35b5082346103ed57806003193601126103ed57602090610a016114d061176b565b6114d8611f46565b6024359033611843565b5082346103ed57816003193601126103ed576020906013549051908152f35b5091346104a257826003193601126104a25780519183600180549182821c9282811680156115b2575b6020958686108214610c585750848852908115610c36575060011461155a57610bd98686610bcf828b0383611821565b9295508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061159f5750505082610bd994610bcf928201019438610bbe565b8054868501880152928601928101611582565b93607f169361152a565b5082346103ed57806003193601126103ed578235602435906115e860018060a01b0385541633146117ab565b60ff6019541680611718575b156116d557801515806116cb575b15611697576116118183611904565b928315611663575060125560145580601555600354926101f49384810294818604149015171561165057506103e861164a929304611904565b60135580f35b634e487b7160e01b835260119052602482fd5b5162461bcd60e51b8152602081870152600f60248201526e4d696e7420636f756e74207a65726f60881b6044820152606490fd5b825162461bcd60e51b8152602081870152600e60248201526d496e76616c696420706172616d7360901b6044820152606490fd5b5080821015611602565b825162461bcd60e51b8152602081870181905260248201527f43616e6e6f74206368616e6765206166746572206d696e7420737461727465646044820152606490fd5b50601654156115f4565b6020808252825181830181905290939260005b82811061175757505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611735565b600435906001600160a01b038216820361178157565b600080fd5b602435906001600160a01b038216820361178157565b60243590811515820361178157565b156117b257565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b67ffffffffffffffff811161180b57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761180b57604052565b90916001600160a01b0391821691821515806118aa575b15611781577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916020918460005260058352604060002095169485600052825280604060002055604051908152a3565b50808416151561185a565b9081602091031261178157516001600160a01b03811681036117815790565b919082039182116118e157565b634e487b7160e01b600052601160045260246000fd5b919082018092116118e157565b811561190e570490565b634e487b7160e01b600052601260045260246000fd5b90916001600160a01b03808316929183151580611d9d575b15611d69578015611d36576000848152600492602093808552604092848482205410611cfc5760ff928360195460a81c1680611cf3575b80611ce4575b611c9b578360195460a81c1615611c8e575b60105499818b16808b1486819d8215611c82575b82611c74575b5050611c13575b8b611c02575b908a87928483169d8e9182149182611bf3575b8793885260118d52898689205416159081611be3575b50611ba4575b50506119ed818a6118d4565b988c8652868b528386205490611a02916118d4565b8c8652868b52838620558c8552888386205490611a1e916118f7565b8d8652868b528386205560008051602061290c8339815191529a611a5293611a4d9280611abc575b5050611dd3565b611dd3565b601954938460a81c1615611a6c575b5050505051908152a3565b60609262061a80926024928751968795869463ffb2c47960e01b865285015260081c165af1611a9e575b808080611a61565b611ab59060603d811161064e576106408183611821565b5050611a96565b3088528c89611ace83858c20546118f7565b91308b525282892055611b196127109182611aeb60085483611da8565b0480151580611b97575b611b82575b5082611b08600b5483611da8565b0480611b6d575b5060095490611da8565b048015611a4657308852888d528c89611b3583858c20546118d4565b91308b5252828920558c89611b538361dead95868d528c20546118f7565b91848b52528b8920558a519081528d8d3092a38838611a46565b611b7990600d546118f7565b600d5538611b0f565b611b8e90600c546118f7565b600c5538611afa565b5089600e54161515611af5565b611bcb575b611bb5575b38806119e1565b50612710611bc56007548a611da8565b04611bae565b9050612710611bdc6006548b611da8565b0490611ba9565b885250848720548916158f6119db565b600f54871684141592506119c5565b600f54831682841614159b506119b2565b8a8452601189528587852054168015611c63575b6119ac57865162461bcd60e51b81528086018a9052601260248201527154726164696e67206e6f742061637469766560701b6044820152606490fd5b508282168452858785205416611c27565b60a01c1615905086386119a5565b8486168414925061199f565b611c96611f46565b61198b565b90919860008051602061290c8339815191529750849350888352898752838320611cc68782546118d4565b90551697888252855220611cdb8382546118f7565b905551908152a3565b508060105416818b1614611979565b50308914611973565b835162461bcd60e51b81528083018790526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a416d6f756e74207a65726f60a81b6044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b6044820152606490fd5b50818516151561193c565b818102929181159184041417156118e157565b90816020910312611781575180151581036117815790565b60018060a01b038060195460081c1660409180835194634e7b827f60e01b865216918260048601526020948581602481855afa90811561011657600091611f29575b50611f22578260005260048552836000205494845190632f842d8560e21b82528082600481865afa908115611f1757600091611eeb575b5086109050611ead575060195460081c1692833b1561178157604460009283855196879485936338c110ef60e21b8552600485015260248401525af1908115611ea35750611e98575b50565b611ea1906117f7565b565b513d6000823e3d90fd5b935050823b156117815760009260448492845195869384926338c110ef60e21b845260048401528160248401525af1908115611ea35750611e985750565b82813d8311611f10575b611eff8183611821565b81010312610ee75750518038611e4c565b503d611ef5565b86513d6000823e3d90fd5b5050505050565b611f409150863d8811610520576105148183611821565b38611e15565b60195460ff8160a81c16611e955730600052600460205260406000205415611e955760ff60a81b19908116600160a81b17601955611f82611feb565b60195416601955565b90816060910312611781578051916040602083015192015190565b60a09194939260c0820195600180851b031682526020820152600060408201526000606082015273dacd2db81e1f79f1b2113a69ecf8b77e4389468960808201520152565b60085461200061057d600092600b54906118f7565b90811561255b5730815260049160209183835260409081812094855495861561255257600d549081151580612548575b612427575b505060085495600a549461204986896118f7565b1561241557612072816120678861206c612095956120678e89611da8565b611904565b95611da8565b9761208c600199612086818c1c80926118d4565b946118f7565b96891c906118f7565b968715801561241f575b61241557600f546001600160a01b0394906120be908890871630611843565b855167ffffffffffffffff9290606081018481118282101761240057885260028152898101883682378151156123eb5730815287600f54169089516315ab88c960e31b81528c818a81865afa9081156123e15786916123c4575b5083518510156123af57918b918d8c968c899616888801528b4798519788966318cbafe560e01b885260a488019288015287602488015260a06044880152518091528d60c48701949388915b83831061238a575050505050508383809230606483015242608483015203925af190816122ed575b506121c1575050505050507f9c517099ca0908fbba82379bf527eb8ca9a81835f95d9e61906d857849717132935051908152a1565b6121ed91939598929497506121d96121e691476118d4565b996120676008548c611da8565b80996118d4565b97801515806122e0575b612284575b505050508015158061227b575b612214575050505050565b61224b948461222a83606097600f541630611843565b600f5416925180968195829463f305d71960e01b8452429130908501611fa6565b03925af161225d575b80808080611f22565b6122749060603d811161064e576106408183611821565b5050612254565b50841515612209565b82808080938b600e54165af1503d156122d8573d9283116122c5578451926122b5601f8201601f1916830185611821565b83523d92013e5b388080806121fc565b634e487b7160e01b825260418652602482fd5b5050506122bc565b5087600e541615156121f7565b3d8085833e6122fc8183611821565b8101908b8183031261131157805190868211612371570181601f8201121561131157805190868211612375578c808360051b938d519061233e83870183611821565b81520192820101928311612371578c809101915b8383106123615750505061218c565b82518152918101918d9101612352565b8580fd5b604189634e487b7160e01b6000525260246000fd5b84979950858294979293969950511681520195019101928f928996948896948f612164565b603289634e487b7160e01b6000525260246000fd5b6123db91508d803d1061010f576101018183611821565b38612118565b8b513d88823e3d90fd5b603287634e487b7160e01b6000525260246000fd5b604187634e487b7160e01b6000525260246000fd5b5050505050505050565b50851561209f565b839297509061243b918194600d55546118d4565b3082528686528382205560195460081c6001600160a01b03908116808352848320546124689085906118f7565b9083528787528483205560195460081c1680845184815260008051602061290c833981519152883092a3803b156103ed578180916024865180948193633243c79160e01b8352888d8401525af1801561253e5790869161250d575b507f421a325f20c894d513bb650b5eef0778619f93a3a7256d48c0e2523dbd00565191928451908152a130815284845281812054948515612505573880612035565b505050505050565b916125387f421a325f20c894d513bb650b5eef0778619f93a3a7256d48c0e2523dbd005651936117f7565b916124c3565b84513d84823e3d90fd5b5081881015612030565b50505050505050565b5050565b60ff601954161561289657601254340361285c5760175461258034826118f7565b60145410612828576125939034906118f7565b601755601654600181018091116118e15760165560135460003081526004916020908382526040908082852054106127e5573384528483526125d881838620546118f7565b338552858452828520553084526125f281838620546118d4565b308552858452828520553384526018835261261081838620546118f7565b3385526018845282852055815134815281848201527f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f833392a28151908152339060008051602061290c833981519152843092a361266d33611dd3565b6017546014541115612680575b50505050565b7f799663458a5ef2936f7fa0c99b3336c69c25890f82974f04e811e5bb359186c79360ff19601954166019557f1eb1561f8507eb9bc6988331f66f369e75710f2b4b678ad5b4a52454b6636f5f8480a17f3f2af9f26095d292132b7be52f11c1760da3a5825c66688b295287d8279a45de8480a130845280835281842054904790821515806127dc575b612733575b50506010805460ff60a01b1916600160a01b1790555082915050a13880808061267a565b6060612773839260018060a01b036127508782600f541630611843565b600f541690875194858094819363f305d71960e01b83528a429130908501611fa6565b03925af190816127be575b5061278a575b8061270f565b7f03f82d6e9655f3dcff58c68e61adfad355b92c77a8fde4d53a423a6c58e29347938351928352820152a138808080612784565b6127d59060603d811161064e576106408183611821565b505061277e565b5081151561270a565b815162461bcd60e51b8152808601849052601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606490fd5b60405162461bcd60e51b815260206004820152600c60248201526b141c995cd85b1948199d5b1b60a21b6044820152606490fd5b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590810939088185b5bdd5b9d60721b6044820152606490fd5b60405162461bcd60e51b815260206004820152601260248201527150726573616c65206e6f742061637469766560701b6044820152606490fd5b156128d757565b60405162461bcd60e51b815260206004820152600c60248201526b546f74616c203e203130302560a01b6044820152606490fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212206de13ee5d30284f0fc20a598676464be205336505f0054602787249bd6f9f09b64736f6c63430008140033608034620000f657601f620015e838819003918201601f19168301916001600160401b03831184841017620000fb57808492608094604052833981010312620000f6578051620000526020830162000111565b6200006e6060620000666040860162000111565b940162000111565b6001600160a01b03918290808216620000ee575080335b169460018060a01b031994868660005416176000556040519660007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a361012c600d55600e551683600f541617600f55169060055416176005556114c19081620001278239f35b819062000085565b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620000f65756fe60406080815260049081361015610020575b5050361561001e57600080fd5b005b6000803560e01c80630342a978146109af5780630483f7a01461091757806309bbedde146108f85780630bc229441461089e5780631582358e1461087557806318160ddd14610858578063226cfa3d1461082057806327ce0147146107fa5780633009a609146107db5780633243c791146107be57806349256047146106ab5780634e71d92d1461062b5780634e7b827f146105ed57806355a373d6146105c45780635ebf4db9146105965780636843cd84146105705780636a4740021461055c5780636f2789ec1461053d57806370a0823114610505578063715018a6146104a957806385a6b3ae1461048b5780638da5cb5b14610463578063a8b9d24014610436578063aafd847a146103fe578063bc4c4b3714610322578063be10b61414610303578063e30443bc146102c7578063f26b854f1461025d578063f2fde38b146101a95763ffb2c479146101765750610011565b346101a65760203660031901126101a6575061019460609235611358565b91929081519384526020840152820152f35b80fd5b509134610259576020366003190112610259576101c4610a53565b8354916001600160a01b03808416926101de338514610a7d565b1693841561021e57505082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03191617815580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b8280fd5b5090346102c357816003193601126102c357815482906001600160a01b0316610287338214610a7d565b479081158015610295578380f35b83928392839283906102ba575bf1156102b057818180808380f35b51903d90823e3d90fd5b506108fc6102a2565b5080fd5b5090346102c3573660031901126101a6576103006102e3610a53565b6102f760018060a01b038454163314610a7d565b60243590610d10565b80f35b5090346102c357816003193601126102c357602090600e549051908152f35b5090346102c357806003193601126102c35790602091610340610a53565b91610349610a6e565b81546001600160a01b03949184916103649087163314610a7d565b15806103d5575b61037483611044565b9586610386575b878784519015158152f35b7fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf092931693848152600c885282429120556103bf84610ba2565b9082519182521587820152a2838082818061037b565b8583168452600c87526103f96103f183862054600d5490610b82565b42101561144a565b61036b565b5090346102c35760203660031901126102c35760209181906001600160a01b03610426610a53565b1681526003845220549051908152f35b5090346102c35760203660031901126102c35760209061045c610457610a53565b610ba2565b9051908152f35b5090346102c357816003193601126102c357905490516001600160a01b039091168152602090f35b50913461025957826003193601126102595760209250549051908152f35b50346101a657806003193601126101a6578054816001600160a01b0382166104d2338214610a7d565b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a36001600160a01b031916815580f35b5090346102c35760203660031901126102c35760209181906001600160a01b0361052d610a53565b1681526007845220549051908152f35b5090346102c357816003193601126102c357602090600d549051908152f35b50346101a657806003193601126101a65780f35b5090346102c35760203660031901126102c3579060209161058f610a53565b5051908152f35b5082346102c35760203660031901126102c3576105bd60018060a01b038354163314610a7d565b35600e5580f35b5090346102c357816003193601126102c357600f5490516001600160a01b039091168152602090f35b5090346102c35760203660031901126102c35760209160ff9082906001600160a01b03610618610a53565b168152600b855220541690519015158152f35b5090346102c357816003193601126102c357338252600c6020526106586103f182842054600d5490610b82565b61066133611044565b50338252600c60205242818320557fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf09261069933610ba2565b9180519283528360208401523392a280f35b5091903461025957826003193601126102595782546001600160a01b03908116919084906106da338514610a7d565b60055416928251936370a0823160e01b855230868601526020958686602481855afa9586156107b4578496610781575b5085610714578380f35b86936044928651978895869463a9059cbb60e01b865285015260248401525af1908115610778575061074a575b80838180808380f35b8161076992903d10610771575b6107618183610c7c565b81019061102c565b503880610741565b503d610757565b513d85823e3d90fd5b9095508681813d83116107ad575b6107998183610c7c565b810103126107a95751943861070a565b8380fd5b503d61078f565b85513d86823e3d90fd5b5082346102c35760203660031901126102c3576103009035610ac9565b5090346102c357816003193601126102c357602090600a549051908152f35b5090346102c35760203660031901126102c35760209061045c61081b610a53565b610bdf565b5090346102c35760203660031901126102c35760209181906001600160a01b03610848610a53565b168152600c845220549051908152f35b5090346102c357816003193601126102c35760209061045c610c9e565b5090346102c357816003193601126102c35760055490516001600160a01b039091168152602090f35b509134610259576020366003190112610259577f4b0a6b82d0dc4407b3359033a4f27efd1e2105e4571b72d6a3b8f1da3e6079dd9160209135906108ec60018060a01b038654163314610a7d565b81600d5551908152a180f35b5090346102c357816003193601126102c3576020906006549051908152f35b5090346102c357806003193601126102c3577f50b9be6d475eaa75d2387ce1985972767cbe50d0b6e16cffd31a82062cbfbc756020610954610a53565b9261095d610a6e565b9060018060a01b03610973818854163314610a7d565b851694858752600b8452818720928015159360ff1981541660ff86161790556109a0575b5051908152a280f35b6109a990610fdc565b86610997565b5091346102595781600319360112610259576109d08391602435903561124f565b9091835193849381850191855280518092526060850191602080920190845b818110610a3357505050848203818601528080855193848152019401925b828110610a1c57505050500390f35b835185528695509381019392810192600101610a0d565b82516001600160a01b0316855288975093830193918301916001016109ef565b600435906001600160a01b0382168203610a6957565b600080fd5b602435908115158203610a6957565b15610a8457565b60405162461bcd60e51b815260206004820152601c60248201527f4f776e61626c653a2063616c6c6572206973206e6f74206f776e6572000000006044820152606490fd5b610ad1610c9e565b908115808015610b7a575b610b7557600154608083901b918315600160801b858504141715610b5f57610b4957610b4493610b0d920490610b82565b6001556040518181527fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d7845411651160203392a2600454610b82565b600455565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b505050565b508115610adc565b91908201809211610b5f57565b81810292918115918404141715610b5f57565b610bcf90610baf81610bdf565b6001600160a01b0390911660009081526003602052604090205490610bd2565b90565b91908203918211610b5f57565b60009060018060a01b0316815260076020526040812054906002602052610c0d604082205492600154610b8f565b60801c818382019384129112908015821691151617610c3657808212610c31575090565b905090565b634e487b7160e01b81526011600452602490fd5b6020810190811067ffffffffffffffff821117610c6657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610c6657604052565b600f546040516318160ddd60e01b815290602090829060049082906001600160a01b03165afa908115610d0457600091610cd6575090565b906020823d8211610cfc575b81610cef60209383610c7c565b810103126101a657505190565b3d9150610ce2565b6040513d6000823e3d90fd5b6001600160a01b03166000818152600b602052604081205490929060ff16610dbd57600e548110610db057610d6d90828452600960205260ff604085205416600014610da15782845260076020528060408520555b600154610b8f565b60801c90600160ff1b8214610d8d57825260026020526040822091039055565b634e487b7160e01b83526011600452602483fd5b610dab8184610f43565b610d65565b50610dbb9150610fdc565b565b5090604060ff916009602052205416610dd35750565b610dbb90610e29565b600654811015610e135760066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390811660008181526009602090815260408083205492949093919260ff1615610f3c5760088352838520546006546000199190828101908111610f28578084918303610ed9575b5050506006548015610ec5576008949392910190610e9582610ddc565b909182549160031b1b1916905560065584526009815282842060ff19815416905560078152838381205552812055565b634e487b7160e01b87526031600452602487fd5b610ee290610ddc565b90549060031b1c16610f1681610ef784610ddc565b90919082549060031b9160018060a01b03809116831b921b1916179055565b87526008855285872055388281610e78565b634e487b7160e01b88526011600452602488fd5b5050505050565b6001600160a01b0381166000908152600960205260408120549192909160ff16610fce57600960205260408220600160ff198254161790556007602052604082205560065490600860205281604082205568010000000000000000821015610fba575090610ef7826001610dbb9401600655610ddc565b634e487b7160e01b81526041600452602490fd5b915060409060076020522055565b6001600160a01b03811660008181526009602052604081205490929060ff1615610b75576110139061100d83611044565b50610e29565b8152600260205280604081205560036020526040812055565b90816020910312610a6957518015158103610a695790565b6001600160a01b0390811661105881610ba2565b918261106657505050600090565b60009282845260209060038252846040936110848386842054610b82565b8683526003855285832055857fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d858751868152a260055416838551809263a9059cbb60e01b82528860048301528560248301528160449586925af19081156111e75787916111ca575b50156110fe57505050505050600190565b848652600383528386205490845185810181811067ffffffffffffffff8211176111b6578652600f81526e15da5d1a191c985dc819985a5b1959608a1b8582015282841161115f5750506003929161115591610bd2565b9385525282205590565b90848892875193849262461bcd60e51b8452806004850152825192836024860152825b8481106111a057505050828201840152601f01601f19168101030190fd5b8181018301518882018801528795508201611182565b634e487b7160e01b89526041600452602489fd5b6111e19150843d8611610771576107618183610c7c565b386110ed565b85513d89823e3d90fd5b67ffffffffffffffff8111610c665760051b60200190565b90611213826111f1565b6112206040519182610c7c565b8281528092611231601f19916111f1565b0190602036910137565b8051821015610e135760209160051b010190565b919061125b9083610b82565b600654808211611350575b50808310156113235761128161127c8483610bd2565b611209565b9061128f61127c8583610bd2565b93805b8281106112a0575050509190565b60406112ab82610ddc565b90546001600160a01b039160039190821b1c82166112d26112cc8787610bd2565b8961123b565b526112dc84610ddc565b9054911b1c166000908152600760205220546113016112fb8484610bd2565b8861123b565b5260018101809111156112925760246000634e487b7160e01b81526011600452fd5b50604051915061133282610c4a565b600082526040519161134383610c4a565b6000835260003681379190565b905038611266565b90600691825490811561143d579190600a54906000945a938692835b87891080611434575b15611423576001808701809711610b5f57868554111561141a575b6113a187610ddc565b905460039190911b1c6001600160a01b03166113bc81611044565b6113f9575b508101809111610b5f57955a908181116113dd575b5095611374565b986113ec826113f2939b610bd2565b90610b82565b97386113d6565b95818101809111610b5f5795600052600c60205242604060002055386113c1565b60009650611398565b600a86905597509295509293505050565b5081811061137d565b5050600a54600092508291565b1561145157565b60405162461bcd60e51b815260206004820152601260248201527110db185a5b481dd85a5d081b9bdd081b595d60721b6044820152606490fdfea26469706673582212201682b424f0f84686b352f337855e745e69877eb8eec4a739cc910bbe38b12a6a64736f6c63430008140033",
  "TRACKER_ABI": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minBalance_",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenContract_",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dividendToken_",
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
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "autoClaim",
          "type": "bool"
        }
      ],
      "name": "Claim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newClaimWait",
          "type": "uint256"
        }
      ],
      "name": "ClaimWaitUpdated",
      "type": "event"
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
          "name": "weiAmount",
          "type": "uint256"
        }
      ],
      "name": "DividendWithdrawn",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "weiAmount",
          "type": "uint256"
        }
      ],
      "name": "DividendsDistributed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "excluded",
          "type": "bool"
        }
      ],
      "name": "ExcludedFromDividends",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "accumulativeDividendOf",
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
          "name": "account",
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
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimWait",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "distributeDividends",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dividendToken",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "dividendTokenBalanceOf",
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
      "name": "emergencyWithdrawBNB",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyWithdrawToken",
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
      "name": "excludeFromDividends",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "excludedFromDividends",
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
      "name": "getNumberOfTokenHolders",
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
          "name": "start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "count_",
          "type": "uint256"
        }
      ],
      "name": "getTokenHolders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
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
      "name": "lastClaimTimes",
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
      "name": "lastProcessedIndex",
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
      "name": "minimumTokenBalanceForDividends",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "gas",
          "type": "uint256"
        }
      ],
      "name": "process",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "autoClaim",
          "type": "bool"
        }
      ],
      "name": "processAccount",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "setBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newClaimWait",
          "type": "uint256"
        }
      ],
      "name": "setClaimWait",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minBalance",
          "type": "uint256"
        }
      ],
      "name": "setMinimumTokenBalanceForDividends",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenContract",
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
      "name": "withdrawDividend",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "withdrawableDividendOf",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "withdrawnDividendOf",
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
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
};
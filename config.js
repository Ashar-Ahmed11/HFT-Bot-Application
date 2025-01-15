/*
For stocks, make sure it matches the ticker from Yahoo Finance.
For cryptos, make sure it matches the ticker from Binance.

NOTE:
- There's an email cap of 100 emails a day, so make sure emails[] is not too long
- The more tickers you add, the longer it will take the for loop to cycle through all of them.
- Each cycle 
- The reason why this is so limited is because of the FREE plan offered by https://taapi.io 
- https://taapi.io offers 1 Free API Call per 15 seconds
- Interval is the time period of each candle
*/

const config = {
    tickers: [
        {
            ticker: 'BTC/USDT',
            interval: '15m'
        },
        {
            ticker: 'ETH/USDT',
            interval: '15m'
        },
        {
            ticker: 'XRP/USDT',
            interval: '15m'
        },
        {
            ticker: 'LTC/USDT',
            interval: '15m'
        }
        // {
        //     ticker: 'SUI/USDT',
        //     interval: '15m'
        // },
        // {
        //     ticker:'COTI/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'SEI/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'PYTH/USDT',
        //     interval:'15m'
        // }
        // ,
        // {
        //     ticker:'MANTA/USDT',
        //     interval:'15m'
        // }
        // ,
        // {
        //     ticker:'JUP/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'RUNE/USDT',
        //     interval:'15m'
        // },
        
        // {
        //     ticker:'STX/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'MINA/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'LDO/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'ARB/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'BLUR/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'RNDR/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:'IMX/USDT',
        //     interval:'15m'
        // }
        // ,
        // {
        //     ticker:'ALGO/USDT',
        //     interval:'15m'
        // },
        // {
        //     ticker:"JASMY/USDT",
        //     interval:"15m"
        // },
        // {
        //     ticker:"XAI/USDT",
        //     interval:"15m"
        // },
        // {
        //     ticker:"ADA/USDT",
        //     interval:"15m"
        // },
        // {
        //     ticker:"OP/USDT",
        //     interval:"15m"
        // },
        
        // {
        //     ticker:'ONDO/USDT',
        //     interval:"15m"
        // },
        // {
        //     ticker:'XTZ/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'MATIC/USDT',
        //     interval:"15m"
        // },
        // {
        //     ticker:'SNX/USDT',
        //     interval:'15m'
        // }
        // ,
        // {
        //     ticker:'PENDLE/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'FIL/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'WLD/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'DOT/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'ALICE/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'DYM/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'BTC/USDT',
        //     interval:"15m"
        // }
        // ,
        // {
        //     ticker:'PIXEL/USDT',
        //     interval:"15m"
        // }
    ],
    emails: ['ashar.a.hmd11@gmail.com'],
}

module.exports = config;

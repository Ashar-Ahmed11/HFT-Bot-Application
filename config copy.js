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

const configTwo = {
    tickers: [
      
        {
            ticker:'XRP/USDT',
            interval:'5m'
        },
      
        {
            ticker:'XMR/USDT',
            interval:'5m'
        },
    ],
    emails: ['ashar.a.hmd11@gmail.com'],
}

module.exports = configTwo;
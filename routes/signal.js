const port = process.env.PORT || 8000
require('dotenv').config()
const axios = require('axios')
// const yahooStockPrices = require('yahoo-stock-prices')
const sendGridMail = require('@sendgrid/mail')
const { setIntervalAsync } = require('set-interval-async/dynamic')
// const { tickers, emails } = require('./config')
const nodemailer = require('nodemailer')
const express = require('express')
const router = express.Router()
let emailSent = false




  router.get('/signal/:token',async(req,res)=>{

  
  async function sendBuySignal(ticker, interval) {

  
  
      const { rsi ,price} = await getMACDandEMA(ticker, interval)
      // const { valueMACD, valueMACDSignal } = macd
      // const { valueMACDFour, valueMACDSignalFour } = macdFour
      // const yahooTicker = ticker.includes('/') ? `BTC-USD` : ticker
  
      // console.log(price)
      // const { price } = await yahooStockPrices.getCurrentData('BTC-USD')

      if (
        // price.value > ema.value &&
        // valueMACD < 0 &&
        // valueMACDSignal < 0 &&

        // valueMACD > valueMACDSignal &&

        
        // macdVol.valueMACDHist[1]>0&&
        // macdVol.valueMACDHist[0]<0&&

        // ema3>ema6 && ema6>ema13 && ema13>ema21 

        rsi<30

        // macd.valueMACDHist[1]>0&&
        // macd.valueMACDHist[0]<0





        // macdFour.valueMACD < 0 &&
        // macdFour.valueMACDSignal < 0 &&
        // macdFour.valueMACD > macdFour.valueMACDSignal &&
        // volume.value[0]<=42 && 
        // rsiFour<=40&&
        // macdVol.valueMACDHist[0]<macdVol.valueMACDHist[1]&&
        // macdFourVol.valueMACDHist[0]<macdFourVol.valueMACDHist[1]
         


      
      ) {
        console.log('💲 LONG/Buy signal... 💬')
        // console.log( 'At(USD): '  + price.value + ' macd: ' + valueMACD + ' macdRed: ' +    macdVol.valueMACDHist[1], `ema3: ${ema3} ema6: ${ema6} ema13: ${ema13} ema21: ${ema21}` ) 

        console.log(ticker, price.value,rsi)
        sendAlert(ticker, price.value,`🟢 LONG/BUY ${ticker}`)
        res.send(`💲 Sending buy signal... 💬`)
        
  
  
      }
      else if (
        // price.value < ema.value &&
        // valueMACD > 0 &&
        // valueMACDSignal > 0 &&

   
        // valueMACD < valueMACDSignal &&




        // macdVol.valueMACDHist[1]<0&&
        // macdVol.valueMACDHist[0]>0&&
        // ema21>ema13 && ema13>ema6 && ema6>ema3

        rsi>70

        // macd.valueMACDHist[1]<0&&
        // macd.valueMACDHist[0]>0



        // macdFour.valueMACD < 0 &&
        // macdFour.valueMACDSignal < 0 &&
        // macdFour.valueMACD > macdFour.valueMACDSignal &&
        // volume.value[0]<=42 && 
        // rsiFour<=40&&
        // macdVol.valueMACDHist[0]<macdVol.valueMACDHist[1]&&
        // macdFourVol.valueMACDHist[0]<macdFourVol.valueMACDHist[1]
         


      
      ) {
        console.log('💲 SHORT/SELL Signal... 💬')
        // console.log( 'At(USD): '  + price.value + ' macd: ' + valueMACD + ' macdRed: ' + valueMACDSignal, `ema3: ${ema3} ema6: ${ema6} ema13: ${ema13} ema21: ${ema21}`  ) 

        console.log(ticker, price.value,rsi)
        sendAlert(ticker, price.value,`🔴 SHORT/SELL ${ticker}`)
        res.send(`💲 Sending sell signal... 💬`)
        
  
  
      }

    

      // else if (
      //   // price.value > ema.value &&
      //   valueMACD > 0 &&
      //   valueMACDSignal > 0 &&
      //   valueMACD < valueMACDSignal &&
      //   macdFour.valueMACD > 0 &&
      //   macdFour.valueMACDSignal > 0 &&
      //   macdFour.valueMACD < macdFour.valueMACDSignal&&
         
      //   // volume.value[0]>=55&&
      //   // rsiFour>=60&&
      //   // macdVol.valueMACDHist[0]>macdVol.valueMACDHist[1]&&
      //   macdFourVol.valueMACDHist[0]>macdFourVol.valueMACDHist[1]



      
      // ) {
      //   console.log('💲 Sending SHORT/SEll signal... 💬')
      //   console.log( 'At(USD): '  + price.value + ' macd: ' + valueMACD + ' macdRed: ' + valueMACDSignal + " macd4h: " + macdFour.valueMACD + " macd4hRed: " + macdFour.valueMACDSignal, `Past MACD4H: ${macdFourVol.valueMACDHist[0]} Current MACD4H: ${macdFourVol.valueMACDHist[1]} 4hRSI: ${rsiFour}` ) 

      //   console.log(ticker, price.value)
      //   sendAlert(ticker, price.value,'💲 Sending SHORT/SEll signal... 💬')
      //   // res.send(`💲 Sending buy signal... 💬`)
        
  
  
      // }

      // else if (
      //   // price.value > ema.value &&
      //   valueMACD < 0 &&
      //   valueMACDSignal < 0 &&
      //   valueMACD > valueMACDSignal &&
      //   macdFour.valueMACD > 0 &&
      //   macdFour.valueMACDSignal > 0 &&
      //   macdFour.valueMACD > macdFour.valueMACDSignal&&
         
      //   // volume.value[0]<=42&&
      //   // rsiFour<=40&&
      //   // macdVol.valueMACDHist[0]<macdVol.valueMACDHist[1]&&
      //   macdFourVol.valueMACDHist[0]<macdFourVol.valueMACDHist[1]


      
      // ) {
      //   console.log('💲 Sending LONG/BUY signal... 💬')
      //   console.log('At(USD): '  + price.value + ' macd: ' + valueMACD + ' macdRed: ' + valueMACDSignal + " macd4h: " + macdFour.valueMACD + " macd4hRed: " + macdFour.valueMACDSignal, `Past MACD4H: ${macdFourVol.valueMACDHist[0]} Current MACD4H: ${macdFourVol.valueMACDHist[1]} 4hRSI: ${rsiFour}` ) 

      //   console.log(ticker, price.value)
      //   sendAlert(ticker, price.value,'💲 Sending LONG/BUY signal... 💬')
      //   // res.send(`💲 Sending buy signal... 💬`)
        
  
  
      // }

      // else if (
      //   // price.value > ema.value &&
      //   valueMACD > 0 &&
      //   valueMACDSignal > 0 &&
      //   valueMACD < valueMACDSignal &&
      //   macdFour.valueMACD < 0 &&
      //   macdFour.valueMACDSignal < 0 &&
      //   macdFour.valueMACD < macdFour.valueMACDSignal&&


      //   // volume.value[0]>=55&
      //   // rsiFour>=60&&
      //   // macdVol.valueMACDHist[0]>macdVol.valueMACDHist[1]&&
      //   macdFourVol.valueMACDHist[0]>macdFourVol.valueMACDHist[1]



         

      
      // ) {
      //   console.log('💲 Sending SHORT/SELL signal... 💬') 
      //   console.log( 'At(USD): '  + price.value + ' macd: ' + valueMACD + ' macdRed: ' + valueMACDSignal + " macd4h: " + macdFour.valueMACD + " macd4hRed: " + macdFour.valueMACDSignal, `Past MACD4H: ${macdFourVol.valueMACDHist[0]} Current MACD4H: ${macdFourVol.valueMACDHist[1]} 4hRSI: ${rsiFour}` ) 

      //   console.log(ticker, price.value)
      //   sendAlert(ticker, price.value,'💲 Sending SHORT/SELL signal... 💬')
      //   // res.send(`💲 Sending buy signal... 💬`)
        
  
  
      // }

      
      else {
        // sendAlert(ticker, price.value)
        // console.log(`❌ Don't buy yet. Retesting...`, 'At(USD): '  + price.value + ' macd: ' + macdVol.valueMACDHist[0] + ' macdRed: ' +    macdVol.valueMACDHist[1], `ema3: ${ema3} ema6: ${ema6} ema13: ${ema13} ema21: ${ema21}` ) 
        console.log(`❌ Don't buy yet. Retesting...`, 'At(USD): '  + price.value + ' rsi: ' +rsi ) 
        res.send(`❌ Don't buy yet. ${req.params.token} ${rsi}`)

        // res.send(`❌ Don't buy yet. Retesting...`, 'macd: ' + valueMACD, 'At(USD): ' + price.value)
        // sendAlert(ticker, price.value)
      }
   
  }
  
  
  
  async function sendAlert(ticker, price,signal) {
  
  

    // await client.messages.create({
    //     body: `*${signal}* \n At ${price}`,
    //     from: 'whatsapp:+14155238886',
    //     to: 'whatsapp:+923363374624'
    // })
  
  
  
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
  
        user: 'metatech674@gmail.com',
        pass: 'yethmbyazkshqctb'
  
  
      }
    })
  
  
  
  
    const mailOption = {
      from: "metatech674@gmail.com",
      to: "ashar.a.hmd11@gmail.com",
      subject: "TRADING SIGNAL💲💲",
      text: `${signal} 💬 \n ${ticker} \n At ${price}`
    }
  
    transport.sendMail(mailOption, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log("Email Sent" + info.response)
        
        res.send(`💲 Buy/Long Signal...`, 'macd: ' + valueMACD, 'At(USD): ' + price.value)

      }
    })

  
  
    // // Default options are marked with *
    // const url = "https://formsubmit.co/ajax/ashar.a.hmd11@gmail.com"
    // const response = await fetch(url, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": "Basic M2YwNTJhMWU6SDd6aUZpcDYyd2ZJRXU2eA=="
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify({
  
    //     "text": `💲BUY SIGNAL \n ${ticker} \n At ${price}`,
  
    //   }), // body data type must match "Content-Type" header
    // });
    // return response.json(); // parses JSON response into native JavaScript objects
  
  }
  
  // async function sendEmail(ticker, price) {
  //   sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  //   const message = {
  //     from: 'faraazmotiwala3@gmail.com',
  //     subject: `Buy alert for ${ticker}`,
  //     text: `Current Price: ${price}`,
  //     html: `Current Price: ${price}`,
  //   }
  
  //   try {
  //     // Looping through Email list
  //     Promise.all(emails.map(async (email) => {
  //       message.to = email
  //       await sendGridMail.send(message)
  //     }))
  
  //     // Flag used to create a cooldown when sending Emails to reduce SPAM
  //     emailSent = true
  //     console.log(`✔️ Buy alert for ${ticker} sent successfully to ${email} 📨`)
  //   } catch (error) {
  //     console.log('☠️ Error with sending email ☠️')
  //   }
  
  
  // }
  
  
  async function getMACDandEMA(ticker, interval) {
    const response = await axios.post('https://api.taapi.io/bulk', {
      secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjVkMGU5OTYyY2I5MTQwYWM1YTE0ODJjIiwiaWF0IjoxNzM2OTUzNTExLCJleHAiOjMzMjQxNDE3NTExfQ.gq5OXFqR-eWavLHQOJMf3dm_Bx9TsidF35AORuSOccc",
      construct: {
        exchange: 'Binance',
        symbol: ticker,
        interval: interval,
        indicators: [
          // {
          //   indicator: 'ema',
          //   period: 200,
          // },
          // {
          //   indicator: 'macd',
          // },
          {
            indicator: 'price'
          },
          {
            indicator:'rsi',
            // results:'2'
          }
          // {
          //   indicator:"macd",
          //   results:"2"
          // }
        ],
      },
    })
    // const responseTwo = await axios.post('https://api.taapi.io/bulk', {
    //   secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjVkYTE0NWIyYzczYzFlM2ZkODhjOWE3IiwiaWF0IjoxNzA4NzkxMTExLCJleHAiOjMzMjEzMjU1MTExfQ.6lDyOV_uoIkYh2VxYPCDlHctlIWSSN4RajhdEZq9_DE",
    //   construct: {
    //     exchange: 'binancefutures',
    //     symbol: ticker,
    //     interval: '1h',
    //     indicators: [
    //       {
    //         indicator: 'ema',
    //         period: 3,
    //       },
    //       {
    //         indicator: 'ema',
    //         period: 6,
    //       },
    //       {
    //         indicator: 'ema',
    //         period: 13,
    //       },
    //       {
    //         indicator: 'ema',
    //         period: 21,
    //       },
         
    //     ],
    //   },
    // })
  
    // const  = await fetch(``)
    
    // let jsonresponse = await myapi.json()
  
  
    
  
    return {
      // ema: response.data.data[0].result,
      // macd: response.data.data[1].result,
      price: response.data.data[0].result,
      rsi: response.data.data[1].result.value,
      // volume: response.data.data[3].result,
      // macdVol:response.data.data[4].result,
      // ema3:responseTwo.data.data[0].result.value,
      // ema6:responseTwo.data.data[1].result.value,
      // ema13:responseTwo.data.data[2].result.value,
      // ema21:responseTwo.data.data[3].result.value,
      
      
      
    }
    // return {
    //   ema: response.data.data[0].result,
    //   macd: response.data.data[1].result,
    //   price: response.data.data[2].result,
    //   volume: response.data.data[3].result,
    //   macdFour:responseTwo.data.data[1].result,
    //   rsiFour:responseTwo.data.data[3].result.value,
    //   macdVol:response.data.data[4].result,
    //   macdFourVol:responseTwo.data.data[4].result
    // }
  }

  await sendBuySignal(req.params.token, "15m")


})
  
module.exports = router

//   function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms))
//   }
  
//   async function start() {
//     for (let i = 0; i < tickers.length; i++) {
//       console.log(`🔎 Analyzing ${tickers[i].ticker}...`)
//       await sendBuySignal(tickers[i].ticker, tickers[i].interval)
//       // console.log(`🔎 Analyzing BTC/USDT...`)
//       // await sendBuySignal("BTC/USDT", tickers[i].interval)
//       await sleep(15000)
//     }
  
//     // 15 minute delay if Email has already been sent
//     if (emailSent) {
//       console.log('⏰ 15 minute email cooldown...')
//       await sleep(900000)
//       emailSent = false
//     }
//   }
  
  
//   async function startInterval() {
//     console.log(`🎬 Starting up...`)
//     await start()
//     setIntervalAsync(async () => await start(), 15000)
//   }
  
//   startInterval()

// //   app.listen(port, () => {
// //     console.log(`Example app listening on port ${port}`)
// // })
 

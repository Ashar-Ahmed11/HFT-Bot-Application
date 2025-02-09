const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')
// const connectToMongo = require('./db')
// connectToMongo()

app.use(express.json())
app.use(cors({ origin: true }))

// app.use('/api/sendmessage', require('./routes/twilio'))
// app.use('/api/sendemail', require('./routes/email'))
app.use('/api/', require('./routes/signal'))
// app.use('/api/metadata', require('./routes/siteInfo'))
// app.use('/api/coverImages', require('./routes/coverImages'))
// app.use('/api/rooms', require('./routes/rooms'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
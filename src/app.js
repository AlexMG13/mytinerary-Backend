const express = require('express')
const router = require('./router/router')
const cors = require('cors')
require('./config/db')

const app  = express()
const PORT = process.env.PORT || 3030
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})




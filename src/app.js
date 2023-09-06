const express = require('express')
const router = require('./router/router')
const cors = require('cors')
require('./config/db')

const app  = express()
const PORT = process.env.PORT || 3030
const whiteList = ['https://countriesnow.space/api/v0.1/countries','http://127.0.0.1:5173']
app.use(cors({origin: whiteList}))
app.use(express.json())
app.use('/api',router)
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})




const express = require('express')
const router = require('./router/router')
require('./config/db')

const app  = express()

app.use('/api',router)

app.listen(3030, () => {console.log('listening on port 3030')})




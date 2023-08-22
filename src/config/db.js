const { connect } = require('mongoose')
require('dotenv').config()

connect(process.env.MONGO)
    .then( () => {console.log('connect success to database')})
    .catch( () => {console.log('error connecting to database')})

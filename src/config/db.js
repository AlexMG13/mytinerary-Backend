const { connect } = require('mongoose')

const URL = 'mongodb+srv://mendozaalex24:2cQlGHHdhCdnCrh0@cluster0.zb0uogo.mongodb.net/?retryWrites=true&w=majority'



connect(URL).then(console.log(() => {'connect success to database'})).catch(console.error(() => {'error connecting to database'}))

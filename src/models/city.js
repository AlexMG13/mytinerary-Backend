const { Schema, model} = require('mongoose')

const schemaCity = new Schema({
    country : {
        type: 'string',
        required: true
    },
    name : {
        type: 'string',
        required: true
    },
    photo : {
        type: 'string',
        required: true
    }
})

const City = model('City', schemaCity);

module.exports = City;
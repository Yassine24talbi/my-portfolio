const mongoose = require('mongoose')
const schema = mongoose.schema

const schemamessage = ({
    email:String,
    message:String
})

const message = mongoose.model('newmessage',schemamessage)

module.exports = message
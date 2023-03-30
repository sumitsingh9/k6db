const mongoose = require('mongoose')

const outputSchema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model('outputModel', outputSchema)
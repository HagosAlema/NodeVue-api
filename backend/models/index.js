var mongoose = require('mongoose')

var testSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Test', testSchema)

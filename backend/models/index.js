var mongoose = require('mongoose')

var testSchema = new mongoose.Schema({
    name: String
})

var Test = mongoose.model('Test', testSchema)

module.exports = {
    Test
}

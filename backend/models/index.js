var mongoose = require('mongoose')

var testSchema = new mongoose.Schema({
    name: String
})
var productSchema = new mongoose.Schema({
    name: String
})

var Test = mongoose.model('Test', testSchema)
var TestProduct = mongoose.model('TestProduct', productSchema)

module.exports = {
    Test,
    TestProduct
}

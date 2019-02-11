var mongoose = require('mongoose')

var testSchema = new mongoose.Schema({
    name: String
})
var productSchema = new mongoose.Schema({
    name: String
})
var memberSchema = new mongoose.Schema({
    name: String,
    gender: String,
    Age: Number,
    username: String,
    email: String,
    password: String
})

var Test = mongoose.model('Test', testSchema)
var TestProduct = mongoose.model('TestProduct', productSchema)
var Member = mongoose.model('Member', memberSchema)

module.exports = {
    Test,
    TestProduct,
    Member
}

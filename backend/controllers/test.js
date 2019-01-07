var mongoose = require('mongoose')

var Test = require('../Models/')

module.exports = {
    getTest: function (req, res, next) {
        Test.find(function (err, result) {
            if (err) {
                return next(err)
            }
            res.json(result)
        })
    }
}

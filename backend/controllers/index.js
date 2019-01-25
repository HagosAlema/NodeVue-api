var mongoose = require('mongoose')

var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');

var models = require('../models/')

module.exports = {
    getList: function (req, res) {

        const perPage = req.query.limit ? req.query.limit : 20;
        const page = req.query.offset ? req.query.offset : 50;
        console.log('offset = ' + page)
       // models.Test.find({}, null, {limit: 20, skip: 0}, function (err, result) {
       //     if (err) {
       //         return (new Error(err))
       //     }
       //     res.json({allList:result})
       // })

        redis.get('name', function (err, response) {
            if (err) {
                console.log('No value found in redis')
            } else {
                if (response === null) {
                    console.log('No value found')
                }else {
                    console.log(response)
                }
            }
        })
        models.Test.find()
            .limit(1*perPage)
            .skip(1*page)
            .exec(function (err, result) {
                if (err) {
                    return (new Error(err))
                }
                res.json({allList:result})
            })
    },
    createList: function (req, res) {
        console.log(req.body.data.name);
        models.Test.create(
            {
                name: req.body.data.name
            },
            function (err, result) {
                if (err) {
                    res.status(400).send('Unable to create list')
                }
                res.status(200).json(result)
            }
            )
    },
    deleteList: function (req, res) {
        var id = req.params.id
        models.Test.findByIdAndRemove(id, function (err, result) {
            if (err) {
                return new Error(err + 'Todo was not deleted')
            }
            res.json('Item was deleted successfully')
        })
    },
    updateList: function (req, res) {
        var id = req.params.id
        models.Test.findById(id, function (err, result) {
            if(err) {
                return new Error('List was not found' + err)
            }else {
                result.name = req.body.name

                result.save({
                    function (err, result) {
                        if (err) {
                            res.status(400).send('Unable to update todo')
                        } else {
                            res.status(200).json(result)
                        }
                    }
                })
            }
        })

    },
    createProduct: function (req, res) {
        console.log(req.body)
        models.TestProduct.create(
            {
                name: req.body.data.name
            },
            function (err, result) {
                if (err) {
                    res.status(400).send('Unable to create list')
                }
                res.status(200).json(result)
            }
        )
    },
    getProduct: function (req, res) {

        const perPage = req.query.limit ? req.query.limit : 20;
        const page = req.query.offset ? req.query.offset : 50;
        console.log('offset = ' + page)

        models.TestProduct.find()
            // .limit(1*perPage)
            // .skip(1*page)
            .exec(function (err, result) {
                if (err) {
                    return (new Error(err))
                }
                res.json({allList:result})
            })
    },
}

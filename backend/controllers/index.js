// var redisClient = require('redis').createClient;
// var redis = redisClient(6379, 'localhost');
var multer = require('multer')

var models = require('../models/')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('Destination Entered')
        cb(null, './public/images/scaled/')
    },
    filename: function (req, file, cb) {
        console.log('filename Entered')
        cb(null, Date.now('yyyy-mm-dd')+'.png')
    }
})
// var upload = multer({storage: storage})
var upload = multer({dest: './public/image/scaled'})

// module.exports = {
   function getList(req, res) {

        const perPage = req.query.limit ? req.query.limit : 20;
        const page = req.query.offset ? req.query.offset : 50;
        console.log('offset = ' + page)
       // models.Test.find({}, null, {limit: 20, skip: 0}, function (err, result) {
       //     if (err) {
       //         return (new Error(err))
       //     }
       //     res.json({allList:result})
       // })

        // redis.get('name', function (err, response) {
        //     if (err) {
        //         console.log('No value found in redis')
        //     } else {
        //         if (response === null) {
        //             console.log('No value found')
        //         }else {
        //             console.log(response)
        //         }
        //     }
        // })
        models.Test.find()
            .limit(1*perPage)
            .skip(1*page)
            .exec(function (err, result) {
                if (err) {
                    return (new Error(err))
                }
                res.json({allList:result})
            })
    }

    function createList(req, res) {
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
    }

    function deleteList(req, res) {
        var id = req.params.id
        models.Test.findByIdAndRemove(id, function (err, result) {
            if (err) {
                return new Error(err + 'Todo was not deleted')
            }
            res.json('Item was deleted successfully')
        })
    }

    function updateList(req, res) {
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

    }
    function createProduct (req, res) {
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
    }

    function getProduct (req, res) {

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
    }

    function deleteProduct (req, res) {
        // console.log('Delete Entered \n ID: ' + req.params.id)
        var id = req.params.id
        models.TestProduct.findByIdAndRemove({_id: id}, { $set: req.body }, function (err, result) {
            if (err) {
                console.log('Error' + err)
                return new Error(err + 'Item was not deleted')
            }
            console.log(result)
            res.json(result)
        })
    }

function uploadImage (req, res){
    console.log('Entered')
    console.log(req.file)
    // console.log(req.file)
    /**
     *
     * Before storing the paths, check if there is a valid path.
     */
    var paths = req.file;
    console.log('File uploaded successfully.')
    // console.log(req.files)
    // for (i in req.files) {
    //     // path1.push('' + __basedir + req.files[i].destination + req.files[i].filename + '')
    //     path1.push(req.files[i].filename)
    // }
    res.json(paths)
}

// }

module.exports = {
    getList,
    createList,
    deleteList,
    updateList,
    createProduct,
    getProduct,
    deleteProduct,
    upload,
    uploadImage
}

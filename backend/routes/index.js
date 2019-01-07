var express = require('express');
var router = express.Router();
var testCtrl = require('../Controllers/test')

/* GET home page. */
router.get('/', testCtrl.getTest);

module.exports = router;

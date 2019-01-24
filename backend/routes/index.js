var express = require('express');
var router = express.Router();
var testCtrl = require('../controllers/test')
var indexCtrl = require('../controllers/index')

/* GET home page. */
// ====== Test Routes ======
router.get('/', testCtrl.getTest);

// ===== index routes ======
router.get('/list/all', indexCtrl.getList);
router.post('/list/add', indexCtrl.createList);
router.post('/list/update/:id', indexCtrl.updateList);
router.get('/list/delete/:id', indexCtrl.deleteList);

module.exports = router;

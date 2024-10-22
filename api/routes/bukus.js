var express = require('express');
var router = express.Router();

const BukuController = require("../controller/buku");
const { route } = require('./bukus');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });


//format JSON
//insert
router.post('/',BukuController.createBuku);

//select
router.get('/',BukuController.readBuku);

//delete
router.delete('/',BukuController.deleteBuku);

//update
router.put('/',BukuController.updateBuku);

module.exports = router;
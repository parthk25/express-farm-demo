var express = require('express');
const fs = require('fs');
var router = express.Router();

const data = fs.readFileSync("data.json", "utf-8")
const jsonConvert = JSON.parse(data)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { value: jsonConvert });
});

router.get('/product', function (req, res, next) {
  res.render('product', { data: jsonConvert, i:req.query.id })
});

module.exports = router;

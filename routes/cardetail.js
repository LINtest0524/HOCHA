var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('cardetail', { title: '車子標題' });
})
















module.exports = router;
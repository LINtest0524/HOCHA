var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('compare', { title: '比較' });
})


// 相關JS 寫下面













module.exports = router;
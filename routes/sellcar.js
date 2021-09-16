var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('sellcar', { title: '賣車' });

    
})















module.exports = router;
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    
    res.render('index', {
        title: 'HOCHA｜二手車 買車 賣車 保養'
    });
});

module.exports = router;
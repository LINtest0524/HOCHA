var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('search', { title: '買車' });
})
















module.exports = router;
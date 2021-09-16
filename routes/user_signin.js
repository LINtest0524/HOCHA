var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('user_signin', { title: '註冊&登入' });
})













module.exports = router;
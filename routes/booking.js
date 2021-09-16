var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('booking', { title: '預約保養' });

    
})



module.exports = router;
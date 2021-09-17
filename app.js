var createError = require('http-errors');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var firebase = require('firebase');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var flash = require('connect-flash');
var validator = require('express-validator');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var session = require("express-session")
app.use(express.static("public"));
app.use(session({ secret: 'mysupersecret', resave: true, saveUninitialized: true }));
app.use(flash());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();

app.listen(process.env.PORT || 8080);

// 增加 body 解析 取得表單資料
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// view engine setup
var engine = require('ejs-locals');
app.engine('ejs', engine);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));








// 路由
var routes = require('./routes/index');

// 註冊
var user_signin = require('./routes/user_signin');

// 登出
var signout = require('./routes/signout');

// 買車
var search = require('./routes/search');

// 賣車
var sellcar = require('./routes/sellcar');

// 比較
var compare = require('./routes/compare');

// 預約保養
var booking = require('./routes/booking');



app.use('/', routes);
app.use('/signout', signout);
app.use('/user_signin', user_signin);
app.use('/sellcar', sellcar);
app.use('/compare', compare);
app.use('/search', search);
app.use('/booking', booking);










// 確認 未登入者 如果亂打網址直接到 會員中心 忘記密碼頁面時 直接導回首頁
// 要注意 所有登入過 才能看到的頁面 都要放在此判斷 之後
// 放之前 就會 壞掉
app.use(function(req, res, next){
  if(req.session.uid){
    return next();
  }
  res.redirect('/');
})











// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;

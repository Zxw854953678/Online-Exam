/**
 * Created by ZhouXiaoWen on 17-12-9.
 */

const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const logger = require('morgan');
const config = require('./config/config.js');

const app = express();

// 模板引擎
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'hbs');

app.use(serveStatic(path.join(__dirname, 'public')));
app.use("/", bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  // cookie中用来保存session id 的字段名
  name: 'connect.sid',
  // 通过设置secret来计算hash值并且存在cookie中, 产生的signedCookie放篡改
  secret: 'niit',
  // 每次请求都重新设置session id的cookie的过期时间
  resave: true,
  // true 则 无论有没有session id 的cookie, 每次请求都要重新设置session cookie
  saveUninitialized: false,
  store: new MongoStore({
    url: config.dbUrl, // 保存session使用的mongoDB的url
    collection: 'sessions', // 指定保存session的表名
    auto_reconnect: true //自动连接数据库
  })
}));

const env = 'development';
// console.log(`------> current env ${env} <------`);
if ('development' === env) {
  app.set('showStackError', true);
  // 使用morgan日志中间件 指定日志的输出格式
  app.use(logger(':method :url :status'));
  mongoose.set('debug', true);
}

app.get("/", (req, res)=> {
  "use strict";
  res.render('app');
});

app.listen(3000, ()=> {
  "use strict";
  console.log("server start...")
});

require('./config/routes')(app);
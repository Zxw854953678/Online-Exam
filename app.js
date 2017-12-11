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

// 登录
app.get("/student", (req, res)=> {
  "use strict";
  const data = {identity: {name: "student", isStu: true}};
  res.render("signIn", data);
});
app.get("/teacher", (req, res)=> {
  "use strict";
  const data = {identity: {name: "teacher", isStu: false}};
  res.render("signIn", data);
});
app.post("/student", (req, res)=> {
  "use strict";
  //数据库信息比对，成功-调转到student的首页，失败-重新登录
  //成功
  const data = {};
  res.render("index", data);

  //失败
  // console.log(req.body.username, req.body.userpwd,req.params);
  // res.redirect("/student");

});

// 注册 -只有学生可以注册
app.get("/signUp", (req, res)=> {
  "use strict";
  const data = {};
  res.render("signUp", data);
});
app.post("/signUp", (req, res)=> {
  "use strict";
  //数据库信息比对，成功-调转到app，失败-重新注册
  //成功
  // const data = {};
  // res.render("app");

  //失败
  // console.log(req.body.username, req.body.userpwd,req.params);
  res.redirect("/signUp");

});
app.listen(3000, ()=> {
  "use strict";
  console.log("server start...")
});
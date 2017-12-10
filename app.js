/**
 * Created by ZhouXiaoWen on 17-12-9.
 */

const express = require("express");

const path = require("path");
const bodyParser = require('body-parser');


// console.log(path.join(__dirname, 'views'));

const app = express();

// 模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// 指定静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
  "use strict";
  res.render('app.hbs');
});

app.get("/student",(req,res)=>{
  "use strict";
  const data = {identity:{name:"student",isStu:true}};
  res.render("signIn",data);
});

app.get("/teacher",(req,res)=>{
  "use strict";
  const data = {identity:{name:"teacher",isStu:false}};
  res.render("signIn",data);
});

app.post("/student",(req,res)=>{
  "use strict";
  //数据库信息比对，成功-调转到student的首页，失败-重新登录
  //成功
  const data = {};
  res.render("index",data);

  //失败
  // console.log(req.body.username, req.body.userpwd,req.params);
  // res.redirect("/student");

});

app.get("/signUp",(req,res)=>{
  "use strict";
  const data = {};
  // res.render("signIn",data);
  res.send("注册");
});

app.listen(3000,()=>{
  "use strict";
  console.log("server start...")
});
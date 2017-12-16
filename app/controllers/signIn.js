/**
 * Created by ZhouXiaoWen on 17-12-12.
 */

const Student = require("../models/student.js");
const Teacher = require("../models/teacher.js");

exports.showStudent = function (req, res) {
  const data = {identity: {name: "student", isStu: true}};
  res.render("signIn", data);
};

exports.showTeacher = function (req, res) {
  const data = {identity: {name: "teacher", isStu: false}};
  res.render("signIn", data);
};

exports.actionStudent = function (req, res) {
  //数据库信息比对，成功-调转到student的首页，失败-重新登录
  //成功,保存cookie、session
  //失败

  const name = req.body.name;
  const pwd = req.body.pwd;
  console.log(name, pwd);
  Student.findOne({"sno":name}, (err, result)=> {
    "use strict";
    if (err) {
      console.log(err);
    }
    if (result) {
      result.comparePwd(pwd, (err, result)=> {
        if (result) {
          req.session.name = name;
          req.session.isTeacher = false;
          res.json(true);
        }
        else {
          res.json(false);
        }
      });
    }
    else {
      res.json(false)
    }
  });

};

exports.actionTeacher = function (req, res) {
  const name = req.body.name;
  const pwd = req.body.pwd;
  Teacher.findOne({"tno":name}, (err, result)=> {
    "use strict";
    if (err) {
      console.log(err);
    }
    if (result && result.comparePwd(pwd)) {
      req.session.name = name;
      req.session.isTeacher = true;
      res.json(true);
    }
    else {
      res.json(false)
    }
  });
};
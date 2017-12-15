/**
 * Created by ZhouXiaoWen on 17-12-12.
 */

const Student = require("../models/student.js");

exports.show = function (req, res) {
  const data = {};
  res.render("signUp", data);
};

exports.action = function (req, res, next) {
  //数据库信息比对，成功-调转到app，失败-重新注册

  const _user = req.body.user;

  Student.findOne({sno: _user.sno}, (err, result)=> {
    "use strict";
    if (err) {
      console.log(err.code, err.message);
      return;
    }
    if (result) {
      res.redirect("/signUp");
    }
    else {
      const data = {
        sno: _user.sno,
        pwd: _user.pwd,
        personalInfo: {
          name: _user.name,
          course: _user.course,
          sex: _user.sex,
          birth: _user.birth,
          email: _user.email
        },
        meta: {
          createAt: new Date(),
          updateAt: new Date()
        },
        nextExam: [],
        exam: []
      };
      console.log(data);

      const student = new Student(data);
      student.save((err, result)=> {
        if (err) {
          console.log(err);
          return;
        }
        res.redirect("/");
      });
    }
  });
};

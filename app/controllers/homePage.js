/**
 * Created by ZhouXiaoWen on 17-12-13.
 */

const Student = require("../models/student.js");
// const student = new Student();

exports.logout = function (req, res) {
  res.redirect("/");
};

exports.show = function (req, res) {
  //session里面找 sno 和 isTeacher，取出name和exam信息
  const sno = "S201701001";
  const isTeacher = false;
  Student.findOne({sno},(err,result)=>{
    "use strict";
    if(err){
      console.log(err);
    }
    else{
      const exam = [];
      if (result && result.exam.length>0) {
        for (let i = 0; i < result.exam.length; i++) {
          exam.push({createTime: result.exam[i].eTime, title: result.exam[i].eTitle, score: result.exam[i].eScore,id:result.exam[i]._id})
        }
      }
      const data = {
        sno: sno,
        name: result.personalInfo.name || "",
        isTeacher: isTeacher,
        asideMain: [
          {content: "查看考卷", icon: "glyphicon-list-alt"},
          {content: "我要考试", router: "/examing", icon: "glyphicon-edit"}
        ],
        current: "查看考卷",
        tableName: ["考试", "考试时间", "考试分数", "    "],
        exam: exam.length > 0 ? exam : {
          createTime: "", title: "", score: ""
        }
      };
      res.render("homePage", data);
    }
  });
};
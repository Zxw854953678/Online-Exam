/**
 * Created by ZhouXiaoWen on 17-12-13.
 */

const Student = require("../models/student.js");
const Teacher = require("../models/teacher.js");

exports.logout = function (req, res) {
  res.redirect("/");
};

exports.show = function (req, res) {
  //session里面找 sno 和 isTeacher，取出name和exam信息

  const sno = req.session.name;
  const isTeacher = req.session.isTeacher;

  const exam = [];
  if (isTeacher) {
    Student.find({}, (err, result)=> {
      "use strict";
      if (err) {
        console.log(err);
      }
      else {
        result.forEach(elem=> {
          if (elem.exam.length > 0) {
            for (let i = 0; i < elem.exam.length; i++) {
              const date = elem.exam[i].eTime;
              const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
              exam.push({
                sid: elem.sno,
                sname: elem.personalInfo.name,
                createTime: dateStr,
                title: elem.exam[i].eTitle,
                score: elem.exam[i].eScore,
                id: elem.exam[i]._id
              })
            }
          }
        });

      }
    });

    Teacher.findOne({tno:sno}).exec((err, result)=> {
      console.log(sno);
      console.log(result);
      const data = {
        name: result.personalInfo.name || "",
        isTeacher: isTeacher,
        asideMain: [
          {content: "查看考卷", icon: "glyphicon-list-alt"},
          {content: "发布考试", router: "/release", icon: "glyphicon-edit"}
        ],
        current: "查看考卷",
        tableName: ["考试", "考试时间", "考试分数", "    "],
        exam: exam.length > 0 ? exam : {
          sid: "",
          sname: "",
          createTime: "", title: "", score: "",
        }
      };
      res.render("homePage", data);
    });
  }
  else {
    Student.findOne({sno}).exec((err, result)=> {
      "use strict";
      if (err) {
        console.log(err);
      }
      else {
        const exam = [];
        if (result && result.exam.length > 0) {
          for (let i = 0; i < result.exam.length; i++) {
            const date = result.exam[i].eTime;
            const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            exam.push({
              createTime: dateStr,
              title: result.exam[i].eTitle,
              score: result.exam[i].eScore,
              id: result.exam[i]._id
            })
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
  }
};
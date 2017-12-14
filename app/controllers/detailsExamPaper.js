/**
 * Created by ZhouXiaoWen on 17-12-14.
 */

const Student = require("../models/student.js");

exports.show = (req, res)=> {
  "use strict";
  const id = req.params.id;
  const no = req.params.no||"S201702001";
  // const sno = "S201702001";
console.log(req.params.no,"===",id,"-----------");
  let examPage = {};
  Student.findOne({sno:no}, (err, result)=> {
    if (err) {
      console.log(err);
    }
    else {
      result.exam.forEach(elem=> {
        if (elem._id == id) {
          console.log(elem);
          examFormat(examPage,elem);
          res.render("detailsExamPaper", examPage);
        }
      });
    }
  });
};

function examFormat(examPage,elem) {
  examPage.title = elem.eTitle;
  examPage.score = elem.eScore;
  const date = elem.eTime;
  examPage.createTime = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
  examPage.content = elem.eContent;
}

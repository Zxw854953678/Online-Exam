/**
 * Created by ZhouXiaoWen on 17-12-14.
 */

const Student = require("../models/student.js");

exports.show = (req, res)=> {
  "use strict";
  const id = req.params.id;
  const sno = "S201701001";

  Student.findOne({sno}, (err, result)=> {
    if (err) {
      console.log(err);
    }
    else {
      result.exam.forEach(elem=> {
        if (elem._id == id) {
          console.log(elem);
        }
      });
    }
  });
  res.send(req.params.id);
};

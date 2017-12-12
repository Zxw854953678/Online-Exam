/**
 * Created by ZhouXiaoWen on 17-12-13.
 */

const mongoose = require('mongoose');
const path = require('path');
const teacherSchema = require(path.join(__dirname, '../schemas/teacherSchema'));
const Teacher = mongoose.model('teachers', teacherSchema);


// -----------------------test----------------------------------
Teacher.findOne({sno: "S201701001"}, function (err, student) {
  if (err) {
    throw err;
  }
  console.log(student);
});

const teacher = new Teacher({
  tno: "9088989",
  pwd: "123123",
  personalInfo: {
    name: "Dan",
    course: "html",
    sex: "male",
    birth: "1979/12/12",
    email: "3233ooo2@126.com"
  },
  role:1,
  meta: {
    createAt: new Date(),
    updateAt: new Date()
  }
});
teacher.save();
//------------------------------------------------------------

module.exports = Teacher;
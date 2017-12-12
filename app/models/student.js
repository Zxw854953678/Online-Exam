/**
 * Created by ZhouXiaoWen on 17-12-12.
 */
const mongoose = require('mongoose');
const path = require('path');
const studentSchema = require(path.join(__dirname, '../schemas/studentSchema'));
const Student = mongoose.model('students', studentSchema);


// -----------------------test----------------------------------
Student.findOne({sno: "S201701001"}, function (err, student) {
  if (err) {
    throw err;
  }
  console.log(student);
});

const student = new Student({
  sno: "S201702001",
  pwd: "123123",
  personalInfo: {
    name: "james",
    course: "java",
    sex: "male",
    birth: "1989/02/02",
    email: "3233ooo2@126.com"
  },
  meta: {
    createAt: new Date(),
    updateAt: new Date()
  },
  exam: {
    eTime: new Date(),
    eTitle: "第一次java考试",
    eScore: 89,
    eContent: [{
      question: "使用Java语言编写的源程序保存时的文件扩展名是",//题目
      questionType: 0,
      options: [".class", ".java", ".cpp", ".txt"],//选项
      answer: [".java"],//回答
      value: 2, //分值
      score: 2,//得分
      standard: [".java"]//答案
    }]
  }
});
student.save();
//------------------------------------------------------------

module.exports = Student;

/**
 * Created by ZhouXiaoWen on 17-12-12.
 */
const mongoose = require('mongoose');
const path = require('path');
const StudentSchema = require(path.join(__dirname, '../schemas/studentSchema'));
const Student = mongoose.model('students', StudentSchema);


// -----------------------test----------------------------------
// Student.findOne({sno: "S201701001"}, function (err, student) {
//   if (err) {
//     throw err;
//   }
//   console.log(student);
// });
//
// const student = new Student({
//   sno: "S201701001",
//   pwd: "123123",
//   personalInfo: {
//     name: "james",
//     course: "HTML",
//     sex: "female",
//     birth: "1991/02/02",
//     email: "323oolll2@126.com"
//   },
//   meta: {
//     createAt: new Date(),
//     updateAt: new Date()
//   },
//   exam: [{
//     eTime: new Date(),
//     eTitle: "第一次 HTML 考试",
//     eScore: 89,
//     eContent: [{
//       question: "使用Java语言编写的源程序保存时的文件扩展名是",//题目
//       questionType: 0,
//       options: ["A、 .class", "B、 .java", "C、 .cpp", "D、 .txt"],//选项
//       answer: ["B"],//回答
//       value: 2, //分值
//       score: 2,//得分
//       standard: ["B"]//答案
//     },{
//       question: "关于sleep()和wait()，以下描述错误的一项是",//题目
//       questionType: 0,
//       options: ["A、 sleep是线程类（Thread）的方法，wait是Object类的方法", "B、 sleep不释放对象锁，wait放弃对象锁", "C、 sleep暂停线程、但监控状态仍然保持，结束后会自动恢复", "D、 wait后进入等待锁定池，只有针对此对象发出notify方法后获得对象锁进入运行状态"],//选项
//       answer: ["D"],//回答
//       value: 2, //分值
//       score: 2,//得分
//       standard: ["D"]//答案
//     }]
//   },{
//     eTime: new Date(),
//     eTitle: "第二次 HTML 考试",
//     eScore: 79,
//     eContent: [{
//       question: "使用Java语言编写的源程序保存时的文件扩展名是",//题目
//       questionType: 0,
//       options: ["A、 .class", "B、 .java", "C、 .cpp", "D、 .txt"],//选项
//       answer: ["B"],//回答
//       value: 2, //分值
//       score: 2,//得分
//       standard: ["B"]//答案
//     }]
//   }]
// });
// student.save();
//------------------------------------------------------------

module.exports = Student;

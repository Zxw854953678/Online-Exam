/**
 * Created by ZhouXiaoWen on 17-12-13.
 */

const mongoose = require('mongoose');
const path = require('path');
const questionSchema = require(path.join(__dirname, '../schemas/questionSchema'));
const Question = mongoose.model('question', questionSchema);

//----------------------test-----------------
const question = new Question({
  question: "使用Java语言编写的源程序保存时的文件扩展名是",//题目
  questionType: 0,//0-单选, 1-多选
  options: [".class", ".java", ".cpp", ".txt"],//选项
  value: 2,//分值
  standard: [".java"],//答案
  meta: {
    createAt: new Date(),
    updateAt: new Date()
  }
});

question.save();
//-------------------------------------------

module.exports = Question;
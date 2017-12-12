/**
 * Created by ZhouXiaoWen on 17-12-12.
 */

const mongoose = require('mongoose');

//----------------------------------------------------------------
const config = require('../../config/config.js');
mongoose.connect(config.dbUrl);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + config.dbUrl);
});
mongoose.Promise = global.Promise;
//---------------------------------------------------------------


// ------------------------Schema--------------------------------
const studentSchema = new mongoose.Schema({
  sno: {
    type: String,
    unique: true
  },
  pwd: String,
  personalInfo: {
    name: String,
    course: String,
    sex: String,
    birth: String,
    email: String
  },
  meta: {
    createAt: {
      type: Date,
      default: new Date(),
    },
    updateAt: {
      type: Date,
      default: new Date()
    }
  },
  exam: [{
    eTime: {
      type: Date,
      default: new Date()
    },
    eTitle: String,
    eScore: Number,
    eContent: [{
      question: String,//题目
      questionType:Number,
      options: [String],//选项
      answer: [String],//回答
      value: Number,//分值
      score: Number,//得分
      standard: [String]//答案
    }]
  }]
});

//---------------------------methods-----------------------


module.exports = studentSchema;
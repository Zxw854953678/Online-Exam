/**
 * Created by ZhouXiaoWen on 17-12-12.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;
//----------------------------------------------------------------
// const config = require('../../config/config.js');
// mongoose.connect(config.dbUrl);
// mongoose.connection.on('connected', function () {
//   console.log('Mongoose connection open to ' + config.dbUrl);
// });
// mongoose.Promise = global.Promise;
//---------------------------------------------------------------


// ------------------------Schema--------------------------------
const StudentSchema = new mongoose.Schema({
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
  nextExam: [{
    createTime: {
      type: Date,
      default: new Date()
    },
    rangeExam: []
  }],
  exam: [{
    eTime: Date,
    eTitle: String,
    eScore: Number,
    eContent: [{
      question: String,//题目
      questionType: Number,
      options: [String],//选项
      answer: [String],//回答
      value: Number,//分值
      score: Number,//得分
      standard: [String]//答案
    }]
  }]
});

//---------------------------methods-----------------------
StudentSchema.methods = {
  comparePwd(pwd, cb){
    "use strict";
    bcrypt.compare(pwd, this.pwd, (err, isMatch)=> {
      cb(err, isMatch);
    });
  }
};

StudentSchema.pre('save', function (next) {
  let student = this;
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  // 加密
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(student.pwd, salt, (err, hash) => {
      student.pwd = hash;
      next();
    });
  });
});

module.exports = StudentSchema;
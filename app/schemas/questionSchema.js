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

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    unique: true
  },//题目
  questionType: Number,//0-单选, 1-多选
  options: [String],//选项
  value: Number,//分值
  standard: [String],//答案
  meta: {
    createAt: {
      type: Date,
      default: new Date(),
    },
    updateAt: {
      type: Date,
      default: new Date()
    }
  }
});

module.exports = questionSchema;
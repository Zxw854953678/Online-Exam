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
const teacherSchema = new mongoose.Schema({
  tno: {
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
  role:{
    type:Number,
    default:0
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
  }
});

module.exports = teacherSchema;
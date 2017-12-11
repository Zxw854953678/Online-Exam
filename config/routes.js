/**
 * Created by ZhouXiaoWen on 17-12-11.
 */

const signIn = require('../app/controllers/signIn.js');
const signUp = require('../app/controllers/signUp.js');

module.exports = function (app) {
  // 登录
  app.get("/student", signIn.showStudent);
  app.get("/teacher", signIn.showTeacher);
  app.post("/student", signIn.actionStudent);

  // 注册 -只有学生可以注册
  app.get("/signUp", signUp.show);
  app.post("/signUp", signUp.action);
};



/**
 * Created by ZhouXiaoWen on 17-12-11.
 */

const signIn = require('../app/controllers/signIn.js');
const signUp = require('../app/controllers/signUp.js');
const homePage = require('../app/controllers/homePage.js');
const details = require('../app/controllers/details.js');

module.exports = function (app) {
  // 注册 -只有学生可以注册
  app.get("/signUp", signUp.show);
  app.post("/signUp", signUp.action);

  // 登录
  app.get("/student", signIn.showStudent);
  app.get("/teacher", signIn.showTeacher);
  app.post("/student", signIn.actionStudent);
  app.post("/teacher", signIn.actionTeacher);

  // 登录后首页显示
  app.get("/index", homePage.show);
  app.get("/index/details/:id",details.show);

  // 登出
  app.get("/logout", homePage.logout);

};



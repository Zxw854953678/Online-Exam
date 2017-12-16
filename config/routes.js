/**
 * Created by ZhouXiaoWen on 17-12-11.
 */

const signIn = require('../app/controllers/signIn.js');
const signUp = require('../app/controllers/signUp.js');
const homePage = require('../app/controllers/homePage.js');
const detailsExam = require('../app/controllers/detailsExamPaper.js');
const releaseExam = require('../app/controllers/releaseExam.js');

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

  // 首页显示后，点击“详情”，查看考生试卷
  app.get("/index/details/:id/:no", detailsExam.show); //teachder
  app.get("/index/details/:id", detailsExam.show);  //student

  // 登出
  app.get("/logout", homePage.logout);

  // teacher 发布试卷
  app.get("/teacher/releaseExam",releaseExam.show);
  app.post("/teacher/releaseExam",releaseExam.action);

};



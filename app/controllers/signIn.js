/**
 * Created by ZhouXiaoWen on 17-12-12.
 */

exports.showStudent = function (req, res) {
  const data = {identity: {name: "student", isStu: true}};
  res.render("signIn", data);
};

exports.showTeacher = function (req, res) {
  const data = {identity: {name: "teacher", isStu: false}};
  res.render("signIn", data);
};

exports.actionStudent = function (req, res) {
  //数据库信息比对，成功-调转到student的首页，失败-重新登录
  //成功
  const data = {};
  res.render("index", data);

  //失败
  // console.log(req.body.username, req.body.userpwd,req.params);
  // res.redirect("/student");

};
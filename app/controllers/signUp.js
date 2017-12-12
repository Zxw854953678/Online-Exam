/**
 * Created by ZhouXiaoWen on 17-12-12.
 */

exports.show = function (req, res) {
  const data = {};
  res.render("signUp", data);
};

exports.action = function (req, res) {
  //数据库信息比对，成功-调转到app，失败-重新注册
  //成功
  // const data = {};
  // res.render("app");

  //失败
  // console.log(req.body.username, req.body.userpwd, req.params);
  res.redirect("/signUp");
};

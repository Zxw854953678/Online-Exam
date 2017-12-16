/**
 * Created by ZhouXiaoWen on 17-12-10.
 */

$(function () {
  $('form').validator({
    feedback: {
      success: 'glyphicon-ok',
      error: 'glyphicon-remove'
    }
  });
});

function check() {
  let flag = true;
  const name = $("#username").val();
  const data = {name, pwd: $("#userpwd").val()};
  const identity = name.charAt(0) == "S"?"student":"teacher";
  $.ajax({
    url: identity,
    type: "post",
    data: data,
    async: false,
    cache: false,
    success: function (data) {
      if (!data) {
        alert("用户名或密码错误");
        flag = false;
      }
    }
  });
  return flag;
}
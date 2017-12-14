/**
 * Created by ZhouXiaoWen on 17-12-13.
 */

$(function () {
  // 设置侧边栏的高度
  const height = document.body.scrollHeight;
  const asideTop = $("#aside").offset().top;
  $("#list").height(height - asideTop)
    .children("li").first().mouseenter(function () {
    $(this).addClass("disabled");
  }).mouseleave(function () {
    $(this).removeClass("disabled")
  }).click(function (event) {
    event.preventDefault();
  });
});
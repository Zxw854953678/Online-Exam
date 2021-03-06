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

$.datetimepicker.setLocale('zh');
$(function () {
  'use strict';
  const today = new Date();
  const month = (today.getMonth() + 1) < 10 ? `0${(today.getMonth() + 1)}` : `${(today.getMonth() + 1)}`;
  const date = today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`;
  const maxTime = `${today.getFullYear()}/${month}/${date}`;
  console.log(maxTime);
  $('#birth').datetimepicker({
    timepicker: false,
    validateOnBlur: false,
    format: 'Y/m/d',
    value: ""
  });
});

$(function () {
  $('form').on('submit', function (e) {
    "use strict";
    if (!$("#agree").is(':checked')) {
      e.preventDefault();
      alert("请阅读并同意条款");
      $(this).focus();
    }
  });
});
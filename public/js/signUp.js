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
    format: 'Y/m/d',
    value: "1990/01/01",
  });
});

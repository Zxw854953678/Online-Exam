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
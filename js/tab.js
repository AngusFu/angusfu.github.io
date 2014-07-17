/*
 * @author:AngusFu
 *
 * @email:angusfu1126@qq.com
 *
 */

$(document).ready(function() {
  var intervalID;
  var curLi;
  $(".nav li a").mouseover(function() {
    curLi = $(this);
    intervalID = setInterval(onMouseOver, 100); //鼠标移入的时候有一定的延时才会切换到所在项，防止用户不经意的操作
  });

  function onMouseOver() {
    $(".cur-subcon").removeClass("cur-subcon");
    $(".subcon").eq($(".nav li a").index(curLi)).addClass("cur-subcon");
    $(".cur").removeClass("cur");
    curLi.addClass("cur");
  }
  $(".nav li a").mouseout(function() {
    clearInterval(intervalID);
  });
  $(".nav li a").click(function() { //鼠标点击也可以切换
    clearInterval(intervalID);
    $(".cur-subcon").removeClass("cur-subcon");
    $(".subcon").eq($(".nav li a").index(curLi)).addClass("cur-subcon");
    $(".cur").removeClass("cur");
    curLi.addClass("cur");
  });
});
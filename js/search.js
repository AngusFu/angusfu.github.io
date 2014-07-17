/*
 * @author:AngusFu
 *
 * @email:angusfu1126@qq.com
 *
 */

function go(formname) {
  var url;

  if (formname.type.value == "0") {
    url = "http://www.baidu.com/baidu";
    formname.word.value = formname.input.value;
    formname.query.value = '';
  }
  if (formname.type.value == "3") {
    url = "http://image.baidu.com/i";
    formname.word.value = formname.input.value;
    formname.query.value = '';
  }
  if (formname.type.value == "4") {
    url = "http://news.baidu.com/ns";
    formname.word.value = formname.input.value;
    formname.query.value = '';
  }
  if (formname.type.value == "5") {
    url = "http://mp3.baidu.com/m";
    formname.word.value = formname.input.value;
    formname.query.value = '';
  }

  if (formname.type.value == "1" || formname.type.value == "2") {
    url = "http://weixin.sogou.com/weixin";
    formname.query.value = formname.input.value;
    formname.word.value = '';
  }

  formname.action = url;
  return true;
}
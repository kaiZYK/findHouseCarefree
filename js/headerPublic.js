// 获取我的按钮
let myBtn = document.getElementsByClassName("myBtn")[0];
console.log(myBtn);
// 判断用户是否登录成功
if (window.localStorage.getItem("isLogin")) {
  touch.on(myBtn, "tap", function () {
    window.location.href = "../my/myLogin.html";
  });
} else {
  touch.on(myBtn, "tap", function () {
    window.location.href = "../my/my.html";
  });
}

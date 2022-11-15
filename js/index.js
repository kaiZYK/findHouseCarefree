// 获取整个广告框
var freeDownload = document.getElementsByClassName("freeDownload")[0];
// 获取X号
var close_ = document.getElementsByClassName("close")[0];
touch.on(close_, "tap", function () {
  freeDownload.parentNode.removeChild(freeDownload);
});

// 获取我的按钮
let myBtn = document.getElementsByClassName("myBtn")[0];
console.log(myBtn);
// 判断用户是否登录成功
if (window.localStorage.getItem("isLogin")) {
  touch.on(myBtn, "tap", function () {
    window.location.href = "./my/myLogin.html";
  });
} else {
  touch.on(myBtn, "tap", function () {
    window.location.href = "./my/my.html";
  });
}

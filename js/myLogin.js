// 获取用户名
let user = document.getElementsByClassName("user")[0];
// 获取退出登录按钮
let logout = document.getElementsByClassName("logout")[0];

// 判断用户是否登录成功
if (window.localStorage.getItem("isLogin")) {
  user.innerHTML = "欢迎你，" + window.localStorage.getItem("tel");

  // 退出登录功能
  touch.on(logout, "tap", function () {
    window.localStorage.removeItem("isLogin");
    setTimeout(function () {
      window.location.href = "./my.html";
    }, 1000);
  });
}

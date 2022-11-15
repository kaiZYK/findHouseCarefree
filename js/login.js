// 获取标题下的切换的a
let cut = document.querySelectorAll(".loginHeader> a");
// 获取到所有主体的部分
let allMain = document.getElementsByClassName("allMain");
// 利用排他法完成tab栏切换
for (let i = 0; i < cut.length; i++) {
  // 为遍历到的每一个a添加一个index属性
  cut[i].setAttribute("index", i);
  // 当点击任意时获取到设置的下标
  touch.on(cut[i], "tap", function () {
    let index = this.getAttribute("index");
    // 循环遍历标题下的切换的a的内容;
    for (let j = 0; j < cut.length; j++) {
      cut[j].className = "";
      allMain[j].style.display = "none";
      allMain[index].style.display = "block";
    }
    cut[index].className = "active";
  });
}

// 普通登录功能
// 获取手机号码
var tel = document.getElementsByClassName("tel")[0];
// 获取设置密码
var password = document.getElementsByClassName("password")[0];
// 获取登录按钮
var loginBtn = document.getElementsByClassName("login-btn")[0];
// 获取span提示信息
var membersMainSpans = document
  .getElementsByClassName("membersMain")[0]
  .getElementsByTagName("span");

// 手机号码功能

// 设置手机号码布尔值
var telBool = false;

tel.addEventListener("focus", function () {
  membersMainSpans[0].className = "";
  membersMainSpans[0].innerHTML = "请输入已注册的手机号";
});
tel.addEventListener("blur", function () {
  let registerTel = window.localStorage.getItem("tel");
  // 判断是否已经注册并且输入的手机号为注册的手机号
  if (registerTel != null && tel.value == registerTel) {
    membersMainSpans[0].className = "success";
    membersMainSpans[0].innerHTML = "手机号码已注册";
    // 手机号码布尔值返回正确
    telBool = true;
  } else {
    // 如果输入为空就清空提示信息
    if (tel.value == "") {
      membersMainSpans[0].className = "";
      membersMainSpans[0].innerHTML = "";
      // 手机号码布尔值返回错误
      telBool = false;
    } else {
      membersMainSpans[0].className = "error";
      membersMainSpans[0].innerHTML = "手机号码未注册";
      // 手机号码布尔值返回错误
      telBool = false;
    }
  }
});

// 密码功能

// 设置密码布尔值
var passwordBool = false;

password.addEventListener("focus", function () {
  membersMainSpans[1].className = "";
  membersMainSpans[1].innerHTML = "请输入密码，至少为6位";
});
password.addEventListener("blur", function () {
  var reg = /^[A-z0-9]{6,}$/;
  var bool = reg.test(password.value);

  // 如果输入为空就清空提示信息
  if (password.value == "") {
    membersMainSpans[1].className = "";
    membersMainSpans[1].innerHTML = "";
    // 密码布尔值返回错误
    passwordBool = false;
  } else {
    // 判断密码输入的是否正确
    if (bool) {
      membersMainSpans[1].className = "success";
      membersMainSpans[1].innerHTML = "密码格式正确";
      // 密码布尔值返回错误
      passwordBool = true;
    } else {
      membersMainSpans[1].className = "error";
      membersMainSpans[1].innerHTML = "密码格式错误";
      // 密码布尔值返回错误
      passwordBool = false;
    }
  }
});

// 普通登录功能
loginBtn.addEventListener("click", function () {
  // 当手机号码 验证码 密码 的布尔值都为true时 才能完成
  if (telBool == true && passwordBool == true) {
    if (password.value == window.localStorage.getItem("password")) {
      alert("登录成功"); // localStrong
      // 保存登录成功状态
      window.localStorage.setItem("isLogin", true);

      // 跳转到登录页
      setTimeout(function () {
        window.location.href = "../index.html";
      }, 1000);
    } else {
      alert("登录失败,输入手机号或密码错误");
    }
  } else {
    alert("登录失败,输入手机号或密码错误");
  }
});

// 验证码登录功能

// 获取手机号码
var authCodeTel = document.getElementsByClassName("auth-code-tel")[0];
// 获取验证码
var authCode = document.getElementsByClassName("auth-code")[0];
// 获取发送验证码按钮
var authCodeBtn = document.getElementsByClassName("auth-code-btn")[0];
// 获取登录按钮
var authCodeLoginBtn = document.getElementsByClassName(
  "auth-code-login-btn"
)[0];
// 获取span提示信息
var authCodeMainSpans = document
  .getElementsByClassName("authCodeMain")[0]
  .getElementsByTagName("span");

// 手机号码功能

// 设置手机号码布尔值
var authCodeTelBool = false;

authCodeTel.addEventListener("focus", function () {
  authCodeMainSpans[0].className = "";
  authCodeMainSpans[0].innerHTML = "请输入已注册的手机号";
});
authCodeTel.addEventListener("blur", function () {
  let registerTel = window.localStorage.getItem("tel");
  // 当手机号码 密码 的布尔值都为true时 才能完成登录
  if (registerTel != null && authCodeTel.value == registerTel) {
    authCodeMainSpans[0].className = "success";
    authCodeMainSpans[0].innerHTML = "手机号码已注册";
    // 手机号码布尔值返回正确
    authCodeTelBool = true;
  } else {
    // 如果输入为空就清空提示信息
    if (authCodeTel.value == "") {
      authCodeMainSpans[0].className = "";
      authCodeMainSpans[0].innerHTML = "";
      // 手机号码布尔值返回错误
      authCodeTelBool = false;
    } else {
      authCodeMainSpans[0].className = "error";
      authCodeMainSpans[0].innerHTML = "手机号码未注册";
      // 手机号码布尔值返回错误
      authCodeTelBool = false;
    }
  }
});

// 验证码功能

// 设置验证码布尔值
var authCodeBool = false;

// 验证码倒计时
var numberAuthCode = 60;
// 验证按定时器
var timerAuthCode = null;
// 验证码数组
var randomNumber = [];
// 验证码次数 用于判断点击按钮没有
var indexAuthCode = 0;
authCodeBtn.addEventListener("click", function (e) {
  e = e || window.event;
  window.event ? (event.cancelBubble = "true") : event.stopPropagation();
  if (authCodeTelBool) {
    // 按钮禁选
    authCodeBtn.setAttribute("disabled", "true");

    // 防抖
    clearInterval(timerAuthCode);

    // 每点一次验证码失效 验证码清空
    randomNumber = [];

    // 倒计时开始
    timerAuthCode = setInterval(function () {
      numberAuthCode--;
      authCodeBtn.innerHTML = `（${numberAuthCode}秒）重发`;
      // 如果倒计时为0 就停止 按钮恢复正常 时间变为60 验证码变为空数组
      if (numberAuthCode == 0) {
        clearInterval(timerAuthCode);
        authCodeBtn.innerHTML = `重新获取验证码`;
        authCodeBtn.removeAttribute("disabled");
        numberAuthCode = 60;
      }
    }, 1000);

    if (authCodeBtn.disabled) {
      // 设置六位随机数验证码
      setTimeout(function () {
        // 产生六个随机数添加入数组
        for (let i = 1; i <= 6; i++) {
          var number = Math.floor(Math.random() * 10);
          randomNumber.push(number);
        }
        // 数组转为字符串 + 字符串替换
        randomNumber = randomNumber.join().replace(/,/g, "");
        alert(
          `您登录的验证码为：${randomNumber}，请您尽快登录，请不要把验证码泄露给其他人，如非本人请勿操作！`
        );
        // 成功弹出验证码之后验证码次数+1
        indexAuthCode++;
      }, 3000);
    }
  } else {
    authCodeMainSpans[1].className = "error";
    authCodeMainSpans[1].innerHTML = "请填写正确的手机号";
    // 验证码布尔值返回错误
    authCodeBool = false;
    document.addEventListener("click", function (e) {
      e = e || window.event;
      window.event ? (event.cancelBubble = "true") : event.stopPropagation();
      authCodeMainSpans[1].className = "";
      authCodeMainSpans[1].innerHTML = "";
      // 验证码布尔值返回错误
      authCodeBool = false;
    });
  }
});

authCode.addEventListener("click", function (e) {
  e = e || window.event;
  window.event ? (event.cancelBubble = "true") : event.stopPropagation();
});
authCode.addEventListener("focus", function () {
  authCodeMainSpans[1].className = "";
  authCodeMainSpans[1].innerHTML = "请输入6位验证码";
});

// 判断验证码是否正确
authCode.addEventListener("blur", function () {
  // 如果没有点获取验证码按钮 没有获取验证码
  if (indexAuthCode == 0) {
    // 如果输入为空就清空提示信息
    if (authCode.value == "") {
      authCodeMainSpans[1].className = "";
      authCodeMainSpans[1].innerHTML = "";
      // 验证码布尔值返回错误
      authCodeBool = false;
    } else {
      // 否则都是错误
      authCodeMainSpans[1].className = "error";
      authCodeMainSpans[1].innerHTML = "验证码错误";
      // 验证码布尔值返回错误
      authCodeBool = false;
    }
  } else {
    // 如果点获取验证码按钮 获取到了验证码

    // 如果输入为空就清空提示信息
    if (authCode.value == "") {
      authCodeMainSpans[1].className = "";
      authCodeMainSpans[1].innerHTML = "";
      // 验证码布尔值返回错误
      authCodeBool = false;
    } else if (authCode.value == randomNumber) {
      // 如果输入为是验证码提示信息正确
      authCodeMainSpans[1].className = "success";
      authCodeMainSpans[1].innerHTML = "验证码正确";
      // 验证码布尔值返回正确
      authCodeBool = true;
    } else {
      // 否则输入不为是验证码提示信息失败
      authCodeMainSpans[1].className = "error";
      authCodeMainSpans[1].innerHTML = "验证码错误";
      // 验证码布尔值返回错误
      authCodeBool = false;
    }
  }
});
// 验证码登录功能
authCodeLoginBtn.addEventListener("click", function () {
  // 当手机号码 验证码 的布尔值都为true时 才能完成登录
  if (authCodeTelBool == true && authCodeBool == true) {
    alert("登录成功"); // localStrong
    // 保存登录成功状态
    window.localStorage.setItem("isLogin", true);

    // 跳转到登录页
    setTimeout(function () {
      window.location.href = "../index.html";
    }, 1000);
  } else {
    alert("登录失败,输入手机号或验证码错误");
  }
});

// 导航菜单功能
// 获取导航菜单
let navMune = document.getElementsByClassName("navMune")[0];
// 获取所有的标题
let titles = navMune.getElementsByClassName("title");
// 获取遮罩
let mask = document.getElementsByClassName("mask")[0];
// 获取导航选择菜单
let navMuneSelect = document.getElementsByClassName("navMuneSelect")[0];
// 获取所有的选择标题
let titleSelects = navMuneSelect.getElementsByClassName("titleSelect");
// 获取所有的选择标题的选择内容
let contentSelects = document.getElementsByClassName("contentSelect");

// 将伪数组转为真数组
titles = [...titles];
titleSelects = [...titleSelects];
contentSelects = [...contentSelects];

// 设置蒙版的宽和高
let scrollWidth =
  document.documentElement.scrollWidth || document.body.scrollWidth;
let scrollHeight =
  document.documentElement.scrollHeight || document.body.scrollHeigh;
mask.style.width = scrollWidth + "px";
mask.style.height = scrollHeight + "px";

// 遍历导航菜单所有的标题
titles.forEach((item, index) => {
  touch.on(item, "tap", function () {
    // 遮罩显示
    mask.style.display = "block";
    // 导航选择菜单显示
    navMuneSelect.style.display = "block";

    // 排他法遍历每一个选择标题
    for (let item of titleSelects) {
      item.className = "titleSelect";
    }
    titleSelects[index].className += " active";

    // 排他法遍历每一个选择内容区域
    for (let item of contentSelects) {
      item.style.display = "none";
    }
    contentSelects[index].style.display = "flex";
  });
});

// 遍历导航选择菜单所有的选择标题
titleSelects.forEach((item, index) => {
  touch.on(item, "tap", function () {
    // 排他法遍历每一个选择标题
    for (let item of titleSelects) {
      item.className = "titleSelect";
    }
    this.className += " active";

    // 排他法遍历每一个选择内容区域
    for (let item of contentSelects) {
      item.style.display = "none";
    }
    contentSelects[index].style.display = "flex";
  });
});

// 点击mask关闭遮罩
touch.on(mask, "tap", function () {
  // 遮罩关闭
  mask.style.display = "none";
  // 导航选择菜单关闭
  navMuneSelect.style.display = "none";
});

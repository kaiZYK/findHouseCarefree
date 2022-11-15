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

// 获取html
let html = document.documentElement;
function setRem() {
  let ui_w = 375;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  cl_w = cl_w < 325 ? 325 : cl_w;
  cl_w = cl_w > 800 ? 800 : cl_w;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
window.addEventListener("load", setRem);
// 防抖
let timer = null;
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 100);
});

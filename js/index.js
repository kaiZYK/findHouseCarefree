// 获取整个广告框
var freeDownload = document.getElementsByClassName("freeDownload")[0];
// 获取X号
var close_ = document.getElementsByClassName("close")[0];
touch.on(close_, "tap", function () {
  freeDownload.parentNode.removeChild(freeDownload);
});

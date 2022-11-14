var mySwiper = new Swiper(".swiper", {
  direction: "horizontal", // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      switch (number) {
        case 1:
          myNum = "1";
          break;
        case 2:
          myNum = "2";
          break;
        case 3:
          myNum = "3";
          break;
        default:
          myNum = number;
      }
      return myNum;
    },
  },
});

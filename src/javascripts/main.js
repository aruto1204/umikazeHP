import "../stylesheets/main.scss";
import swiper from "./swiper";
import humburgerMenu from "./humburger-menu";

document.addEventListener("DOMContentLoaded", () => {
  humburgerMenu();
  swiper();

  // 画面幅測定用
  // function getWindowSize() {
  //   var sW, sH, s;
  //   sW = window.innerWidth;
  //   sH = window.innerHeight;

  //   s = "横幅 = " + sW + " / 高さ = " + sH;

  //   document.getElementById("WinSize").innerHTML = s;
  // }
  // getWindowSize();
});

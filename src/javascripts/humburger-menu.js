//humburger-menu
const menuBtn = document.querySelector(".header__drawer");
const body = document.querySelector("body");
const overlay = document.querySelector(".header__overlay");
const drawerMenu = document.querySelector(".drawer__menu");
const remove = () => {
  menuBtn.classList.remove("active");
  overlay.classList.remove("active");
  //drawerMenu.classList.remove("active");
  body.classList.remove("noscroll");
};
export default () => {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    //drawerMenu.classList.toggle("active");
    //body.classList.toggle("noscroll");
  });

  overlay.addEventListener("click", () => {
    if (overlay.classList.contains("active")) {
      remove();
    }
  });
};

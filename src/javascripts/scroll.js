//「お問い合わせ」の位置にスクロールする関数
const scrollContact = (section) => {
  const target = document.querySelector(section);
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const headerNav = document.querySelectorAll(".header__item");
const headerTop = document.querySelectorAll(".header__logo");
const headerContact = document.querySelectorAll(".header__contact");
const drawerNav = document.querySelectorAll(".drawer__item");
const footerNav = document.querySelectorAll(".footer__item");

const scrollDestination = new Array();

const pushArray = (element) => {
  element.forEach((e, i) => {
    scrollDestination.push(element[i]);
  });
};

const menuBtn = document.querySelector(".header__drawer");
const body = document.querySelector("body");
const overlay = document.querySelector(".header__overlay");
const drawerMenu = document.querySelector(".drawer__menu");

const remove = () => {
  menuBtn.classList.remove("active");
  overlay.classList.remove("active");
  drawerMenu.classList.remove("active");
  body.classList.remove("noscroll");
};

export default () => {
  scrollDestination.push(headerTop[0]);
  scrollDestination.push(headerContact[0]);
  pushArray(headerNav);
  pushArray(drawerNav);
  pushArray(footerNav);

  scrollDestination.forEach((e, i) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      const link = e.getElementsByTagName("a")[0].getAttribute("href");
      scrollContact("." + link);
      remove();
    });
  });
};

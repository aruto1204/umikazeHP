//swiper
export default () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    speed: 300,
    centeredSlides: true,
    // ページネーションが必要なら追加
    breakpoints: {
      768: {
        slidesPerView: 2.1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};

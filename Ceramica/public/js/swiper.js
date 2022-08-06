import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const uderheaderSwiper = new Swiper('.underheader-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.underheader-nav__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.underheader-nav__next',
    prevEl: '.underheader-nav__prev',
  },
});

// const projectsSwiper = new Swiper('.full-slider', {
//   // slidesPerView: 0.8,
//   loop: true,
//   navigation: {
//     nextEl: '.projects__next',
//     prevEl: '.projects__prev',
//   },
// });

// const swiper1 = new Swiper(".mini-carousel", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 2.5,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// const swiper2 = new Swiper(".mini-slider", {
//   loop: true,
//   spaceBetween: 10,
//   thumbs: {
//     swiper: swiper1,
//   },
// });
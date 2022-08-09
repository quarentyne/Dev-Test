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

const project = new Swiper(".project-carousel", {
  spaceBetween: 40,
  slidesPerView: 3,
  watchSlidesProgress: true,
  loop: true,
});
const projectElements = new Swiper(".project-slider", {
  thumbs: {
    swiper: project,
  },
});


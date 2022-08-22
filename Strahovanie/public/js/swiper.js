import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const arrange = new Swiper('.arrange__swiper', {
  slidesPerView: 1,
  spaceBetween: 500,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
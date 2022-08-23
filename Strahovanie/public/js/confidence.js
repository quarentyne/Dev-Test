import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const confidence = new Swiper('.confirence__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: false,
  navigation: {
    nextEl: '.confirence__next',
    prevEl: '.confirence__prev',
  }
});
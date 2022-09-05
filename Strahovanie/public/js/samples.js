import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const samples = new Swiper('.samples__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.samples__next',
    prevEl: '.samples__prev',
  }
});
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const confidenceSlider = new Swiper('.confirence__swiper', {
  slidesPerView: 1,
  spaceBetween: 45,
  navigation: {
    nextEl: '.confirence__next',
    prevEl: '.confirence__prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

const samplesSlider = new Swiper('.samples__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.samples__next',
    prevEl: '.samples__prev',
  }
});

const menu = document.querySelector('.switch__menu');

const arrangeSlider = new Swiper('.arrange__swiper', {
  slidesPerView: 1,
  navigation: false,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

function swiperMenuChanger(options) {
  const index = event.target.dataset.index || options.slider.activeIndex;
  if (!index && index !== 0) {
    return;
  }
  const slides = options.menu.querySelectorAll(options.menuItemSelector);
  slides.forEach(slide => slide.classList.remove(options.menuItemSelectorActive));

  for (let i = 0; i <= index; i++) {
    slides[i].classList.add(options.menuItemSelectorActive);
  }

  options.slider.slideTo(index);
}


menu.addEventListener('click', swiperMenuChanger.bind(menu, {
  slider: arrangeSlider,
  menu: menu,
  menuItemSelector: '.switch__item',
  menuItemSelectorActive: 'switch__item_active',
}));

arrangeSlider.on('slideChange', swiperMenuChanger.bind(menu, {
  slider: arrangeSlider,
  menu: menu,
  menuItemSelector: '.switch__item',
  menuItemSelectorActive: 'switch__item_active',
}));
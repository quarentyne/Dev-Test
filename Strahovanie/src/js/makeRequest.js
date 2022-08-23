import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const menu = document.querySelector('.switch__menu');

const arrange = new Swiper('.arrange__swiper', {
  slidesPerView: 1,
  navigation: false,
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
  slider: arrange,
  menu: menu,
  menuItemSelector: '.switch__item',
  menuItemSelectorActive: 'switch__item_active',
}));

arrange.on('slideChange', swiperMenuChanger.bind(menu, {
  slider: arrange,
  menu: menu,
  menuItemSelector: '.switch__item',
  menuItemSelectorActive: 'switch__item_active',
}));
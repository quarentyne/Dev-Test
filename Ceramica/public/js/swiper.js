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

const projectsSlider = new Swiper('.projects__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.full-slider__next',
    prevEl: '.full-slider__prev',
    enabled: false,
  },
})

const projectCarousel = new Swiper(".project-carousel", {
  spaceBetween: 40,
  slidesPerView: 3,
  watchSlidesProgress: true,
  loop: true,
});

const projectElements = new Swiper(".project-slider", {
  spaceBetween: 1940,

  thumbs: {
    swiper: projectCarousel,
  },
  on: {
    slideChange: function () {
      const parent = document.querySelector('.project-slider');
      setTimeout(magnyfying.bind(magnyfying, parent, 2), 0);
    },
    init: function () {
      const parent = document.querySelector('.project-slider');
      setTimeout(magnyfying.bind(magnyfying, parent, 2), 0);
    }
  }
});

const blogCarousel = new Swiper('.blog__carousel', {
  spaceBetween: 10,
  slidesPerView: 4.2,
  watchSlidesProgress: true,
  loop: true,
});


function magnyfying(parentElement, zoom) {
  const slide = parentElement.querySelector('.swiper-slide-active');

  const image = slide.querySelector('.project-slider__img-big');
  const glass = slide.querySelector('.glass');

  const width = glass.offsetWidth / 2;
  const height = glass.offsetHeight / 2;

  glass.addEventListener('mousemove', moveGlass);

  function moveGlass(event) {
    event.preventDefault();

    glass.style.backgroundImage = "url('" + image.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (image.width * zoom) + "px " + (image.height * zoom) + "px";

    let position = getCursorPosition(event);
    let positionX = position.x;
    let positionY = position.y;

    if (positionX > image.width - (width / zoom)) {
      positionX = image.width - (width / zoom);
    }
    if (positionX < width / zoom) {
      positionX = width / zoom;
    }
    if (positionY > image.height - (height / zoom)) {
      positionY = image.height - (height / zoom);
    }
    if (positionY < height / zoom) {
      positionY = height / zoom;
    }
    glass.style.left = (positionX - width) + "px";
    glass.style.top = (positionY - height) + "px";
    glass.style.backgroundPosition = "-" + ((positionX * zoom) - width) + "px -" + ((positionY * zoom) - height) + "px";

  }

  function getCursorPosition(event) {
    const imageSize = image.getBoundingClientRect();
    let coordX = event.pageX - imageSize.left;
    let coordY = event.pageY - imageSize.top;

    coordX = coordX - window.pageXOffset;
    coordY = coordY - window.pageYOffset;
    return { x: coordX, y: coordY }
  }
}
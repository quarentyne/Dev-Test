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

const options = {
  parent: document.querySelector('.project-slider'),
  startPosition: {
    left: 189,
    bottom: 212,
  },
  glass: {
    glassImageSrc: "../icons/MagnifyingGlassPlus.svg",
    backgroundColor: 'rgba(249, 249, 250, 0.2)',
  },
  zoom: 2,
}

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
      setTimeout(magnyfying.bind(magnyfying, options), 0);
    },
    init: function () {
      setTimeout(magnyfying.bind(magnyfying, options), 0);
    }
  }
});

const blogCarousel = new Swiper('.blog__carousel', {
  spaceBetween: 10,
  slidesPerView: 4.2,
  watchSlidesProgress: true,
  loop: true,
  breakpoints: {
    1400: {
      slidesPerView: 4.2,
    },
    340: {
      slidesPerView: 3,
    }
  }
});

function magnyfying(options) {
  const slide = options.parent.querySelector('.swiper-slide-active');
  const image = slide.querySelector('.project-slider__img-big');
  let glass;
  let glassIcon;

  if (!slide.querySelector('.glass')) {
    glass = document.createElement('DIV');
    glass.setAttribute('class', 'glass');
    glass.style.left = options.startPosition.left + 'px';
    glass.style.bottom = options.startPosition.bottom + 'px';

    glassIcon = document.createElement('IMG');
    glassIcon.src = options.glass.glassImageSrc;
    glass.append(glassIcon);

    setGlassesBackground();
    slide.append(glass);
  } else {
    glass = slide.querySelector('.glass');
    glassIcon = slide.querySelector('.glassIcon');
  }

  const width = glass.offsetWidth / 2;
  const height = glass.offsetHeight / 2;

  glassIcon.addEventListener('mousemove', moveGlass);
  image.addEventListener('mousemove', moveGlass);

  function moveGlass(event) {
    event.preventDefault();
    glassIcon.style.opacity = 0;
    const imageWidth = image.getBoundingClientRect().width;
    const imageHeight = image.getBoundingClientRect().height;
    console.log(imageWidth);

    glass.style.backgroundImage = "url('" + image.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (imageWidth * options.zoom) + "px " + (imageHeight * options.zoom) + "px";

    let position = getCursorPosition(event);
    let positionX = position.x;
    let positionY = position.y;

    if (positionX > imageWidth - (width / options.zoom)) {
      positionX = imageWidth - (width / options.zoom);
      setGlassesBackground();
    }
    if (positionX < width / options.zoom) {
      positionX = width / options.zoom;
      setGlassesBackground();
    }
    if (positionY > imageHeight - (height / options.zoom)) {
      positionY = imageHeight - (height / options.zoom);
      setGlassesBackground();
    }
    if (positionY < height / options.zoom) {
      positionY = height / options.zoom;
      setGlassesBackground();
    }

    glass.style.left = (positionX - width) + "px";
    glass.style.top = (positionY - height) + "px";
    glass.style.backgroundPosition = "-" + ((positionX * options.zoom) - width) + "px -" + ((positionY * options.zoom) - height) + "px";
  }

  function getCursorPosition(event) {
    const imageSize = image.getBoundingClientRect();
    let coordX = event.pageX - imageSize.left;
    let coordY = event.pageY - imageSize.top;

    coordX = coordX - window.pageXOffset;
    coordY = coordY - window.pageYOffset;
    return { x: coordX, y: coordY }
  }

  function setGlassesBackground() {
    glassIcon.style.opacity = 1;
    glass.style.backgroundSize = 'inherit';
    glass.style.backgroundColor = options.glass.backgroundColor;
  }
}
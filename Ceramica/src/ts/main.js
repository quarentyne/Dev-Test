// class Slider {
//   constructor(sliderSeparator) {
//     this.index = 0;
//     this.sliders = document.querySelectorAll(sliderSeparator);
//   }

//   activeSlide(ind) {
//     this.sliders.forEach(slide => slide.classList.remove('active'));
//     this.sliders[ind].classList.add('active');
//   }

//   nextSlide() {
//     this.index++;
//     if (this.index === this.sliders.length) {
//       this.index = 0;
//     }
//     this.activeSlide(this.index);
//   }

//   prevSlide() {
//     this.index--;
//     if (this.index < 0) {
//       this.index = this.sliders.length - 1;
//     }
//     this.activeSlide(this.index);
//   }
// }

class SliderDots {
  constructor(sliderSeparator, sliderDots) {
    this.index = 0;
    this.sliders = document.querySelectorAll(sliderSeparator);
    // this.dots = sliderDots;
    this.dots = document.querySelectorAll(sliderDots);

  }

  currentSlide(ind) {
    this.activeSlide(ind);
    this.activeDot(ind);
  }

  eventHandlerDot(event, separator) {
    let activeDot = event.target.closest(separator);
    for (let i = 0; i < this.dots.length; i++) {
      if (this.dots[i] === activeDot) {
        this.currentSlide(i);
        return;
      }
    }
  }

  activeSlide(ind) {
    this.sliders.forEach(slide => slide.classList.remove('active'));
    this.sliders[ind].classList.add('active');
  }

  activeDot(ind) {
    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[ind].classList.add('active');
  }

  nextSlide() {
    this.index++;
    if (this.index === this.sliders.length) {
      this.index = 0;
    }
    this.currentSlide(this.index);
  }

  prevSlide() {
    this.index--;
    if (this.index < 0) {
      this.index = this.sliders.length - 1;
    }
    this.currentSlide(this.index);
  }
}

const underheadPrev = document.querySelector('#underheader__prev');
const underheadNext = document.querySelector('#underheader__next');
const dots = document.querySelector('.underheader__navigation-dots');
const underheadSlider = new SliderDots('.underheader__slider-item', '.underheader__navigation-dot');

underheadNext.onclick = underheadSlider.nextSlide.bind(underheadSlider);
underheadPrev.onclick = underheadSlider.prevSlide.bind(underheadSlider);

dots.addEventListener('click', function () {
  return underheadSlider.eventHandlerDot.call(underheadSlider, event, '.underheader__navigation-dot');
}, true)


const underheadMouse = document.querySelector('.underheader__navigation-mouse');

underheadMouse.onclick = () => {
  let height = document.documentElement.clientHeight;
  let dropDown = setInterval(() => {
    window.scrollBy(0, 10);
    height -= 10;
    if (height < 0) {
      clearInterval(dropDown);
    }
  }, 0);
};
class Slider {
    constructor(sliderSeparator, sliderDots) {
        this.index = 0;
        this.sliders = document.querySelectorAll(sliderSeparator);
        this.dots = document.querySelectorAll(sliderDots);
    }
    currentSlide(ind) {
        this.activeSlide(ind);
        this.activeDot(ind);
    }
    eventHandlerDot(event, separator) {
        const { target } = event;
        if (target.classList.contains(separator)) {
            for (let i = 0; i < this.dots.length; i++) {
                if (this.dots[i] === target) {
                    this.currentSlide(i);
                    return;
                }
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
const underheadSlider = new Slider('.underheader__slider-item', '.underheader__navigation-dot');
const underheadMouse = document.querySelector('.underheader__navigation-mouse');
underheadNext.addEventListener('click', underheadSlider.nextSlide.bind(underheadSlider), true);
underheadPrev.addEventListener('click', underheadSlider.prevSlide.bind(underheadSlider), true);
dots.addEventListener('click', function () {
    return underheadSlider.eventHandlerDot.call(underheadSlider, event, 'underheader__navigation-dot');
}, true);
underheadMouse.addEventListener('click', function () {
    let height = document.documentElement.clientHeight;
    let dropDown = setInterval(() => {
        window.scrollBy(0, 10);
        height -= 10;
        if (height < 0) {
            clearInterval(dropDown);
        }
    }, 0);
});

class Slider {
    constructor(props) {
        this.index = 0;
        this.sliders = document.querySelectorAll(props.sliderSeparator);
        if (!this.sliders) {
            throw new Error('Sliders weren\'t found');
        }
        this.isDots = props.dots;
        if (this.isDots) {
            this.dots = document.querySelectorAll(props.sliderDots);
            if (!this.dots) {
                throw new Error('Dots weren\'t found');
            }
        }
    }
    currentSlide(ind) {
        this.activeSlide(ind);
        if (this.isDots) {
            this.activeDot(ind);
        }
    }
    eventHandlerDot(event, separator) {
        event.preventDefault();
        if (event.target.classList.contains(separator)) {
            for (let i = 0; i < this.dots.length; i++) {
                if (this.dots[i] === event.target) {
                    this.currentSlide(i);
                    this.index = i;
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
const underheadDots = document.querySelector('.underheader__navigation-dots');
const underheadMouse = document.querySelector('.underheader__navigation-mouse');
const underheadSlider = new Slider({
    sliderSeparator: '.underheader__slider-item',
    dots: true,
    sliderDots: '.underheader__navigation-dot'
});
underheadNext.addEventListener('click', underheadSlider.nextSlide.bind(underheadSlider), true);
underheadPrev.addEventListener('click', underheadSlider.prevSlide.bind(underheadSlider), true);
underheadDots.addEventListener('click', function () {
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

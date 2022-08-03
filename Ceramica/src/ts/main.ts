interface ISliderProps {
  sliderSeparator: string;
  dots: boolean;
  sliderDots?: string;
}

class Slider {
  index: number;
  sliders: NodeListOf<Element>;
  dots: NodeListOf<Element>;
  isDots: boolean;

  constructor(props: ISliderProps) {
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

  currentSlide(ind: number): void {
    this.activeSlide(ind);
    if (this.isDots) {
      this.activeDot(ind);     
    }    
  }

  eventHandlerDot(event: Event, separator: string): void {
    event.preventDefault();
    if ((event.target as HTMLElement).classList.contains(separator)) {
      for (let i: number = 0; i < this.dots.length; i++) {
        if (this.dots[i] === event.target) {
          this.currentSlide(i);
          this.index = i;
          return;
        }
      }
    }
  }

  activeSlide(ind: number): void {
    this.sliders.forEach(slide => slide.classList.remove('active'));
    this.sliders[ind].classList.add('active');
  }

  activeDot(ind: number): void {
    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[ind].classList.add('active');
  }

  nextSlide(): void {
    this.index++;
    if (this.index === this.sliders.length) {
      this.index = 0;
    }
    this.currentSlide(this.index);
  }

  prevSlide(): void {
    this.index--;
    if (this.index < 0) {
      this.index = this.sliders.length - 1;
    }
    this.currentSlide(this.index);
  }
}

const underheadPrev: Element = document.querySelector('#underheader__prev');
const underheadNext: Element = document.querySelector('#underheader__next');
const underheadDots: Element = document.querySelector('.underheader__navigation-dots');
const underheadMouse: Element = document.querySelector('.underheader__navigation-mouse');

const underheadSlider: Slider = new Slider({
  sliderSeparator: '.underheader__slider-item',
  dots: true,
  sliderDots: '.underheader__navigation-dot'
});

underheadNext.addEventListener('click', underheadSlider.nextSlide.bind(underheadSlider), true);
underheadPrev.addEventListener('click', underheadSlider.prevSlide.bind(underheadSlider), true);

underheadDots.addEventListener('click', function (): void {
  return underheadSlider.eventHandlerDot.call(underheadSlider, event, 'underheader__navigation-dot');
}, true)

underheadMouse.addEventListener('click', function (): void {
  let height: number = document.documentElement.clientHeight;
  let dropDown = setInterval(() => {
    window.scrollBy(0, 10);
    height -= 10;
    if (height < 0) {
      clearInterval(dropDown);
    }
  }, 0);
});

const projectsPrev: Element = document.querySelector('#projects__prev');
const projectsNext: Element = document.querySelector('#projects__next');
const projectsSlider: Slider = new Slider({
  sliderSeparator: '.projects__slider-item',
  dots: false,
})
projectsPrev.addEventListener('click', projectsSlider.prevSlide.bind(projectsSlider), true);
projectsNext.addEventListener('click', projectsSlider.nextSlide.bind(projectsSlider), true);
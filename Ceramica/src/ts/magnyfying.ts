interface IMagnifyOptions {
  parent: HTMLElement;
  targetSelector: string;
  startPosition: {
    left: number;
    bottom: number;
  };
  glass: {
    glassImageSrc: string;
    backgroundColor: string;
  };
  zoom: number;
}

function magnyfying(options: IMagnifyOptions): void {
  const slide: HTMLElement | null = options.parent.querySelector('.swiper-slide-active');
  if (!slide) {
    throw new Error('Slide wasn\'t found');
  }
  const image: HTMLImageElement  = slide.querySelector(options.targetSelector);

  let glass: HTMLElement | null;
  let glassIcon: HTMLImageElement | null;

  if (!slide.querySelector('.glass')) {
    glass = document.createElement('DIV');
    glass.setAttribute('class', 'glass');
    glass.style.left = options.startPosition.left + 'px';
    glass.style.bottom = options.startPosition.bottom + 'px';

    glassIcon = new Image();
    glassIcon.classList.add('glassIcon');
    glassIcon.src = options.glass.glassImageSrc;
    glass.append(glassIcon);

    setGlassesBackground();
    slide.append(glass);
  } else {
    glass = slide.querySelector('.glass');
    glassIcon = slide.querySelector('.glassIcon');
  }

  if (!glass ) {
    throw new Error('Glass isn\'t exist');
  }

  const width: number = glass.offsetWidth / 2;
  const height: number = glass.offsetHeight / 2;

  glassIcon.addEventListener('mousemove', moveGlass);
  image.addEventListener('mousemove', moveGlass);

  function moveGlass(event: MouseEvent): void {
    event.preventDefault();

    if (!glass || !glassIcon) {
      throw new Error('Glass isn\'t exist');
    }

    glassIcon.style.opacity = '0';
    const imageWidth: number = image.getBoundingClientRect().width;
    const imageHeight: number = image.getBoundingClientRect().height;

    glass.style.backgroundImage = "url('" + image.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (imageWidth * options.zoom) + "px " + (imageHeight * options.zoom) + "px";

    let position: {
      x: number,
      y: number
    } = getCursorPosition(event);
    let positionX: number = position.x;
    let positionY: number = position.y;

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

  function getCursorPosition(event: MouseEvent):{x: number, y: number} {
    const imageSize: DOMRect = image.getBoundingClientRect();
    let coordX: number = event.pageX - imageSize.left;
    let coordY: number = event.pageY - imageSize.top;

    coordX = coordX - window.pageXOffset;
    coordY = coordY - window.pageYOffset;
    return { x: coordX, y: coordY };
  }

  function setGlassesBackground(): void {
    if (!glass || !glassIcon) {
      throw new Error('Glass isn\'t exist');
    }
    glassIcon.style.opacity = '1';
    glass.style.backgroundSize = 'inherit';
    glass.style.backgroundColor = options.glass.backgroundColor;
  }
}
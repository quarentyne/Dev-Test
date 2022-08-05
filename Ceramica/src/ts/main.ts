const underheadMouse: Element = document.querySelector('.underheader-nav__mouse');

function scrollTop(direction: boolean) {  
  let height = this.getBoundingClientRect().y + this.getBoundingClientRect().height;
  if (!direction) {
    height = document.documentElement.clientHeight - height;
  }

  let glide = setInterval(() => {
    if (!direction) {
      window.scrollBy(0, -10);
    } else {
      window.scrollBy(0, 10);
    }
    
    height -= 10;
    if (height < 0) {
    clearInterval(glide);
  }
  }, 0)
}

underheadMouse.addEventListener('click', scrollTop.bind(underheadMouse, true), true);
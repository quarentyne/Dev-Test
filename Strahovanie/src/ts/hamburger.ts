const menu: HTMLElement = document.querySelector('nav');
const closeMenuButton: HTMLElement = document.querySelector('.menu__close');
const openMenuButton: HTMLElement = document.querySelector('.menu__open');

const menuController = (): void => {
  menu.classList.toggle('nav_show');
  if (!document.body.style.overflowY) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = '';
  }
}

closeMenuButton.addEventListener('click', menuController);
openMenuButton.addEventListener('click', menuController);
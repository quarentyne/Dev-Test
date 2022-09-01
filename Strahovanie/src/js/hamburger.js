const menu = document.querySelector('nav');
const closeMenuButton = document.querySelector('.menu__close');
const openMenuButton = document.querySelector('.menu__open');


closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('nav_show');
});
openMenuButton.addEventListener('click', () => {
  menu.classList.add('nav_show');
})
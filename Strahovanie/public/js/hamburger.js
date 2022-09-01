const menu = document.querySelector('nav');
const closeMenuButton = document.querySelector('.menu__close');
const openMenuButton = document.querySelector('.menu__open');


closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('nav_show');
  document.querySelector('body').style.overflowY = "";
});
openMenuButton.addEventListener('click', () => {
  menu.classList.add('nav_show');
  document.querySelector('body').style.overflowY = "hidden";
})
const menu = document.querySelector('nav');
const closeMenuButton = document.querySelector('.menu__close');
const openMenuButton = document.querySelector('.menu__open');
const menuController = () => {
    menu.classList.toggle('nav_show');
    if (!document.body.style.overflowY) {
        document.body.style.overflowY = 'hidden';
    }
    else {
        document.body.style.overflowY = '';
    }
};
closeMenuButton.addEventListener('click', menuController);
openMenuButton.addEventListener('click', menuController);

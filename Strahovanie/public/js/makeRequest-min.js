import Swiper from"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";const menu=document.querySelector(".switch__menu"),arrange=new Swiper(".arrange__swiper",{slidesPerView:1,navigation:!1,pagination:{el:".swiper-pagination",type:"progressbar"}});function swiperMenuChanger(e){const n=event.target.dataset.index||e.slider.activeIndex;if(!n&&0!==n)return;const t=e.menu.querySelectorAll(e.menuItemSelector);t.forEach(n=>n.classList.remove(e.menuItemSelectorActive));for(let r=0;r<=n;r++)t[r].classList.add(e.menuItemSelectorActive);e.slider.slideTo(n)}menu.addEventListener("click",swiperMenuChanger.bind(menu,{slider:arrange,menu:menu,menuItemSelector:".switch__item",menuItemSelectorActive:"switch__item_active"})),arrange.on("slideChange",swiperMenuChanger.bind(menu,{slider:arrange,menu:menu,menuItemSelector:".switch__item",menuItemSelectorActive:"switch__item_active"}));
import Swiper from"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";const confidenceSlider=new Swiper(".confirence__swiper",{slidesPerView:3,spaceBetween:45,navigation:{nextEl:".confirence__next",prevEl:".confirence__prev"}}),samplesSlider=new Swiper(".samples__slider",{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".samples__next",prevEl:".samples__prev"}}),menu=document.querySelector(".switch__menu"),arrangeSlider=new Swiper(".arrange__swiper",{slidesPerView:1,navigation:!1,pagination:{el:".swiper-pagination",type:"progressbar"}});function swiperMenuChanger(e){const n=event.target.dataset.index||e.slider.activeIndex;if(!n&&0!==n)return;const i=e.menu.querySelectorAll(e.menuItemSelector);i.forEach(n=>n.classList.remove(e.menuItemSelectorActive));for(let r=0;r<=n;r++)i[r].classList.add(e.menuItemSelectorActive);e.slider.slideTo(n)}menu.addEventListener("click",swiperMenuChanger.bind(menu,{slider:arrangeSlider,menu:menu,menuItemSelector:".switch__item",menuItemSelectorActive:"switch__item_active"})),arrangeSlider.on("slideChange",swiperMenuChanger.bind(menu,{slider:arrangeSlider,menu:menu,menuItemSelector:".switch__item",menuItemSelectorActive:"switch__item_active"}));
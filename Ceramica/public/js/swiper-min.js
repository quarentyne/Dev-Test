import Swiper from"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";const uderheaderSwiper=new Swiper(".underheader-slider",{slidesPerView:1,loop:!0,pagination:{el:".underheader-nav__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".underheader-nav__next",prevEl:".underheader-nav__prev"}}),projectsSlider=new Swiper(".projects__slider",{slidesPerView:1,navigation:{nextEl:".full-slider__next",prevEl:".full-slider__prev",enabled:!1}}),options={parent:document.querySelector(".project-slider"),targetSelector:".project-slider__img-big",startPosition:{left:189,bottom:212},glass:{glassImageSrc:"/icons/MagnifyingGlassPlus.svg",backgroundColor:"rgba(249, 249, 250, 0.2)"},zoom:2},projectCarousel=new Swiper(".project-carousel",{spaceBetween:40,slidesPerView:3,watchSlidesProgress:!0,loop:!0,allowTouchMove:!1}),projectElements=new Swiper(".project-slider",{spaceBetween:1940,thumbs:{swiper:projectCarousel},on:{slideChange:function(){setTimeout(magnyfying.bind(magnyfying,options),0)},init:function(){setTimeout(magnyfying.bind(magnyfying,options),0)}}}),blogCarousel=new Swiper(".blog__carousel",{spaceBetween:10,slidesPerView:4.165,watchSlidesProgress:!0,loop:!0});
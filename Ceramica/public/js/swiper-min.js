import Swiper from"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";const uderheaderSwiper=new Swiper(".underheader-slider",{slidesPerView:1,loop:!0,pagination:{el:".underheader-nav__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".underheader-nav__next",prevEl:".underheader-nav__prev"}}),projectsSlider=new Swiper(".projects__slider",{slidesPerView:1,navigation:{nextEl:".full-slider__next",prevEl:".full-slider__prev",enabled:!1}}),projectCarousel=new Swiper(".project-carousel",{spaceBetween:40,slidesPerView:3,watchSlidesProgress:!0,loop:!0}),options={parent:document.querySelector(".project-slider"),startPosition:{left:189,bottom:212},glass:{glassImageSrc:"../icons/MagnifyingGlassPlus.svg",backgroundColor:"rgba(249, 249, 250, 0.2)"},zoom:2},projectElements=new Swiper(".project-slider",{spaceBetween:1940,thumbs:{swiper:projectCarousel},on:{slideChange:function(){document.querySelector(".project-slider");setTimeout(magnyfying.bind(magnyfying,options),0)},init:function(){setTimeout(magnyfying.bind(magnyfying,options),0)}}}),blogCarousel=new Swiper(".blog__carousel",{spaceBetween:10,slidesPerView:4.2,watchSlidesProgress:!0,loop:!0});function magnyfying(e){const t=e.parent.querySelector(".swiper-slide-active"),o=t.querySelector(".project-slider__img-big");let n,s;t.querySelector(".glass")?(n=t.querySelector(".glass"),s=t.querySelector(".glassIcon")):((n=document.createElement("DIV")).setAttribute("class","glass"),n.style.left=e.startPosition.left+"px",n.style.bottom=e.startPosition.bottom+"px",(s=document.createElement("IMG")).src=e.glass.glassImageSrc,n.append(s),a(),t.append(n));const r=n.offsetWidth/2,i=n.offsetHeight/2;function l(t){t.preventDefault(),s.style.opacity=0;const l=o.getBoundingClientRect().width,c=o.getBoundingClientRect().height;n.style.backgroundImage="url('"+o.src+"')",n.style.backgroundRepeat="no-repeat",n.style.backgroundSize=l*e.zoom+"px "+c*e.zoom+"px";let p=function(e){const t=o.getBoundingClientRect();let n=e.pageX-t.left,s=e.pageY-t.top;return n-=window.pageXOffset,s-=window.pageYOffset,{x:n,y:s}}(t),d=p.x,g=p.y;d>l-r/e.zoom&&(d=l-r/e.zoom,a()),d<r/e.zoom&&(d=r/e.zoom,a()),g>c-i/e.zoom&&(g=c-i/e.zoom,a()),g<i/e.zoom&&(g=i/e.zoom,a()),n.style.left=d-r+"px",n.style.top=g-i+"px",n.style.backgroundPosition="-"+(d*e.zoom-r)+"px -"+(g*e.zoom-i)+"px"}function a(){s.style.opacity=1,n.style.backgroundSize="inherit",n.style.backgroundColor=e.glass.backgroundColor}s.addEventListener("mousemove",l),o.addEventListener("mousemove",l)}
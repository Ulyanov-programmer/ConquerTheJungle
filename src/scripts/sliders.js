import Swiper from '../libs/swiper-bundle.esm.browser.min.js'

new Swiper('.detail__days-slider', {
  watchOverflow: true,
  spaceBetween: 0,
  grabCursor: true,

  breakpoints: {
    1440: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 2.2,
    },
  },
})


/* HINTS 
  grabCursor: true,

  navigation: {
    nextEl: ".nextNavButton", prevEl: ".prevNavButton",
    disabledClass: 'unactive',
  },
  pagination: { 
    el: '.swiperPagination', 
    clickable: true, 
  },

  preloadImages: true,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevnext: true,
  },

  autoplay:{
    delay: 3000,
    stopOnLastSlide: false,
  },
  ? Infinite scrolling.
  loop: false,

  ? Changes the slider settings based on the width of the screen.
  breakpoints: {
    // ? when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  ? Changes the height of the slider in runtime depending on the height of the slides.
  autoHeight: true,

  ? If there are no more than one slides, the slider stops working.
  watchOverflow: true,

  direction: 'horizontal' or 'vertical',

  ? Indent between slides.
  spaceBetween: 150,

  ? Enable parallax effect.
  parallax: true,
  ?? For working add and set attributes on elements in slide:
  data-swiper-parallax="toRight_InPixels"
  data-swiper-parallax-duration="1000"

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  }

  ? Thumbs construction:
  new Swiper('.thumbs', {
    spaceBetween: 15,
    slidesPerView: 6,
    watchOverflow: true,
  })

  new Swiper('.main', {
    watchOverflow: true,

    thumbs: {
      swiper: demosSwiper,
      slideThumbActiveClass: 'active',
    },
  })
  ? Multiple rows
  grid: {
    rows: 2,
    fill: 'row',
  },
*/
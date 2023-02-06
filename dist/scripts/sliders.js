import Swiper from "../libs/swiper-bundle.esm.browser.min.js";
new Swiper(".detail__days-slider", {
  watchOverflow: true,
  spaceBetween: 0,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 2.2
    }
  }
});

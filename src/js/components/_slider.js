import Swiper, {
  Navigation,
} from 'swiper/bundle';

const classSlider = new Swiper(".shopping-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // loop: true,
  // centeredSlides: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },


  // a11y: {
  //   prevSlideMessage: 'Попередній слайд',
  //   nextSlideMessage: 'Наступний слайд',
  // },

  navigation: {
    nextEl: ".shopping-slider__next",
    prevEl: ".shopping-slider__prev",
  },
});

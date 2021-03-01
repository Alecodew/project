const flowersSlider = new Swiper('.flowers-slider', {
  // параметры слайдера
  slidesPerView:6,
  loop: true,

  
 

  // подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // параметры слайдера
  slidesPerView:1,
  loop: true,

  
 

  // подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
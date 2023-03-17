import Swiper, {
  Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Pagination]);

export default () => {
  const sliders = document.querySelectorAll(".js-gallery-swiper");

  sliders.forEach(slider => {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 16,
      pagination: {
        el: slider.querySelector('.page-swiper-pagination'),
        type: 'bullets',
      },
      on: {
        init: () => {
          if (window.tatneft_api.locoScroll) {
            setTimeout(() => {
              window.tatneft_api.locoScroll.update();
            }, 600);
          }
        },
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    });
  })
};

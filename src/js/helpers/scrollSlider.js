import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Scrollbar} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Scrollbar]);

export default function scrollSlider() {
  const sliders = document.querySelectorAll('.scroll-slider');

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 8,
      autoHeight: true,
      scrollbar: {
        el: slider.querySelector('.swiper-scrollbar'),
        draggable: true
      },
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        type: "bullets"
      },
      breakpoints: {
        768: {
          autoHeight: false,
          spaceBetween: 16,
          slidesPerView: "auto"
        }
      },
      navigation: {
        prevEl: slider.querySelector('.swiper-button-prev'),
        nextEl: slider.querySelector('.swiper-button-next')
      }
    })
  })
}

import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function recyclingFeatures() {
  const slider = document.querySelector('.recycling-info__features-slider');
  if (!slider) return

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: "auto"
      }
    },
    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      type: "bullets"
    }
  })
}

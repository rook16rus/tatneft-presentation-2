import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function introSlider() {
  const slider = document.querySelector('.intro__slider');
  if (!slider) return

  const swiper = new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 8,

    breakpoints: {
      1200: {
        spaceBetween: 0
      }
    }
  })
}

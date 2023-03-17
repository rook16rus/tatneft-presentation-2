import Swiper, {
  Pagination, Mousewheel, EffectFade,
} from 'swiper/swiper-bundle';

Swiper.use([Pagination, Mousewheel, EffectFade]);


export default () => {
  const tooltipBtns = document.querySelectorAll(".js-spheres-tooltip-btn");
  const mobileToltips = document.querySelectorAll(".js-spheres-tooltip-mobile");
  const tooltipHelps = document.querySelectorAll(".js-spheres-tooltip-help");
  const sphereNavBtns = Array.from(document.querySelectorAll(".spheres__nav-btn"));
  const spheresContent = Array.from(document.querySelectorAll(".spheres__content"));
  const spheresImgs = Array.from(document.querySelectorAll(".spheres__img"));
  const spheresHeadings = Array.from(document.querySelectorAll(".js-legend-heading"));
  let flag = false;
  let slidesNum = 0;
  let direction;
  let splitedHeadingsArr = [];

  if (tooltipBtns.length === 0) return;

  const headingArr = ['Городская среда', 'Промышленность', 'Месторождения'];
  const spheresSlider = document.querySelector(".js-spheres-content");

  window.tatneft_api.addEventWheel = (evt) => {
    if (evt.deltaY < 0 && window.scrollY === 0) {
      setTimeout(() => {
        window.tatneft_api.backToDefault();
      }, 300);
    }
  };

  const spheres = new Swiper(spheresSlider, {
    slidesPerView: 'auto',
    allowTouchMove: false,
    mousewheel: {
      enabled: true,
      sensitivity: 5.5
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.spheres-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<button class="page-tab-btn ' + className + '">' + (headingArr[index]) + '</button>';
      },
    },
    breakpoints: {
      280: {
        mousewheel: {
          enabled: false,
        },
      },
      1280: {
        mousewheel: {
          enabled: true,
        },
      }
    },
    on: {
      slideChange: function (swiper) {
        spheresImgs.forEach(img => img.classList.remove("is-active"));
        spheresImgs[swiper.activeIndex].classList.add("is-active");

        setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = false;
        }, 500);
      },
      reachEnd: function (swiper) {
        setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = true;
        }, 750);
      },
      slideChangeTransitionEnd: function (swiper) {
        if (swiper.activeIndex === 0) {
          console.log(swiper.activeIndex);

          window.addEventListener('wheel', window.tatneft_api.addEventWheel);
        } else {
          window.removeEventListener('wheel', window.tatneft_api.addEventWheel);
        }
      }
    }
  });
};

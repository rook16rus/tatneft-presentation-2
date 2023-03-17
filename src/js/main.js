// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import './helpers/lazyload';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import validation from './helpers/validation';
import phoneMask from './helpers/inputMask';
import customSelects from './helpers/customSelects';
import fileUpload from './helpers/fileUpload';
import smoothScroll from './helpers/smoothScroll';
import { primaryInput } from 'detect-it';
import accordions from './helpers/accordions';
import fixedHeader from './helpers/fixedHeader';
import modalHeading from "./helpers/modalHeading";
import scrollSlider from "./helpers/scrollSlider";
import animateGraphic from "./helpers/animateGraphic";
import pageLoader from "./helpers/pageLoader";
import backgroundWebp from "./helpers/backgroundWebp";
import recyclingFeatures from "./helpers/recyclingFeatures";
import fancybox from "./helpers/fancybox";
import gallerySlider from "./helpers/gallerySlider";
import galleryCursor from "./helpers/galleryCursor";
import tabs from "./helpers/tabs";

documenReady(() => {
  window.tatneft_api = { locoFlag: false, menuImages: false };

  if (primaryInput === 'touch') {
    document.body.classList.remove('no-scroll');
  }
  lazyIMages();
  smoothScroll();
  initModal();
  validation();
  phoneMask();
  customSelects();
  fileUpload();
  accordions();
  fixedHeader();
  modalHeading();
  scrollSlider();
  animateGraphic();
  pageLoader();
  backgroundWebp();
  recyclingFeatures();
  fancybox();
  gallerySlider();
  galleryCursor();
  tabs();
});


window.addEventListener("load", () => {
  const preloader = document.querySelector(".js-preloader");

  if (preloader) {
    if (window.tatneft_api.locoScroll) {
      window.tatneft_api.locoScroll.update();
      preloader.classList.add("is-loaded");
      document.body.classList.add('is-loaded');
      animateGraphic();
    } else {
      preloader.classList.add("is-loaded");
      document.body.classList.add('is-loaded');
      animateGraphic();
    }
  }
});

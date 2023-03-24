import { primaryInput } from 'detect-it';
// import gsap from 'gsap';

export default () => {
  const gallery = document.querySelector(".gallery-container");
  if (!gallery) return;

  const wrapper = gallery.querySelector('.swiper-wrapper');
  const cursor = document.querySelector(".js-fake-cursor");

  if (primaryInput === 'touch') return;

  gallery.addEventListener('pointermove', e => {
    cursor.classList.add('visible');
    gallery.style.setProperty('--x', e.clientX - gallery.getBoundingClientRect().left + 'px');
    gallery.style.setProperty('--y', e.clientY - gallery.getBoundingClientRect().top + 'px');
  }, true);

  gallery.addEventListener('mouseenter', (e) => {
    cursor.classList.add('visible');
  });
  gallery.addEventListener('mouse leave', (e) => {
    cursor.classList.remove('visible');
  });



  // const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  // const mouse = { x: pos.x, y: pos.y };
  // const speed = 0.2;

  // const xSet = gsap.quickSetter(cursor, "left", "px");
  // const ySet = gsap.quickSetter(cursor, "top", "px");

  // document.addEventListener("mousemove", e => {
  //   mouse.x = e.x;
  //   mouse.y = e.y;
  // });

  // document.addEventListener("mousedown", e => {
  //   console.log("234");
  // })

  // gsap.ticker.add(() => {
  //   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  //   pos.x += (mouse.x - pos.x) * dt;
  //   pos.y += (mouse.y - pos.y) * dt;
  //   xSet(pos.x);
  //   ySet(pos.y);
  // });
};

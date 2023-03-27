export default function burger() {
  const header = document.querySelector('.header')
  if (!header) return

  const burgerButton = header.querySelector('.header__burger-button');
  const burgerCloseButton = header.querySelector('.header__burger-close');

  burgerButton.addEventListener('click', () => {
    header.classList.toggle('active');
  })

  burgerCloseButton.addEventListener('click', () => {
    header.classList.toggle('active');
  })
}

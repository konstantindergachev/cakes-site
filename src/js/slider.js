export const createSlider = () => {
  const slideShow = document.getElementById('slideshow');
  const slideShowText = document.getElementById('slideshowText');
  const slides = [ ...slideShow.getElementsByTagName('img') ];
  const slidesText = [ ...slideShowText.getElementsByTagName('div') ];
  let slideIdx = 0;

  const nextSlide = (ev) => {
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx + 1) % slides.length;
    slides[slideIdx].classList.add('active');
  };
  const controlRight = document.querySelector('.controls__right');
  controlRight.addEventListener('click', nextSlide);
  let textIdx = 0;
  const nextText = (ev) => {
    slidesText[textIdx].classList.remove('active');
    textIdx = (textIdx + 1) % slidesText.length;
    slidesText[textIdx].classList.add('active');
  };
  controlRight.addEventListener('click', nextText);

  const prevSlide = (ev) => {
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx - 1 + slides.length) % slides.length;
    slides[slideIdx].classList.add('active');
  };
  const controlLeft = document.querySelector('.controls__left');
  controlLeft.addEventListener('click', prevSlide);
  const prevText = (ev) => {
    slidesText[textIdx].classList.remove('active');
    textIdx = (textIdx - 1 + slidesText.length) % slidesText.length;
    slidesText[textIdx].classList.add('active');
  };
  controlLeft.addEventListener('click', prevText);
};

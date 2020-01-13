import '../scss/main.scss';
import { changePage } from './changePage';
import { createHamburgerMenu } from './hamburger';
import { showIngredients } from './openIngredients';
import { createSlider } from './slider';

window.addEventListener('load', () => {
  if (window.location.pathname === '/') {
    createSlider();
    showIngredients();
  }
  if (window.location.pathname === '/cakes.html') {
    document.body.style.overflowY = 'scroll';
  }
  createHamburgerMenu();
  changePage();
});

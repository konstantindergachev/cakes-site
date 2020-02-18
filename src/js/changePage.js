export const changePage = () => {
  const currentLocation = location.href;
  const menuLinks = document.querySelectorAll('.menu__link');
  const menuLength = menuLinks.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuLinks[i].href === currentLocation) {
      menuLinks[i].classList.add('active');
    }
  }
};

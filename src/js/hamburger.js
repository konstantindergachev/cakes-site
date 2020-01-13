export const createHamburgerMenu = () => {
  const navbar = document.getElementById('navbar');
  const hamburgerToggle = (ev) => {
    ev.target.closest('header').classList.toggle('active');
  };

  navbar.addEventListener('click', hamburgerToggle);
};

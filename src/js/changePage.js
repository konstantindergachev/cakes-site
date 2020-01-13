export const changePage = () => {
  const menuItem = document.querySelector('.menu');
  switch (window.location.pathname) {
    case '/':
      menuItem.children[0].children[0].classList.add('active');
      break;
    case '/index.html':
      menuItem.children[0].children[0].classList.add('active');
      break;
    case '/cakes.html':
      menuItem.children[1].children[0].classList.add('active');
      break;
    case '/about.html':
      menuItem.children[2].children[0].classList.add('active');
      break;
    case '/contacts.html':
      menuItem.children[3].children[0].classList.add('active');
      break;
  }
};

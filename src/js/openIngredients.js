export const showIngredients = () => {
  const btn = document.querySelector('.bannerText');
  const openIngredients = (ev) => {
    if (
      ev.target.previousElementSibling.classList.contains('ingredients__show')
    ) {
      ev.target.previousElementSibling.classList.add('ingredients');
      ev.target.previousElementSibling.classList.remove('ingredients__show');
    } else {
      ev.target.previousElementSibling.classList.remove('ingredients');
      ev.target.previousElementSibling.classList.add('ingredients__show');
    }
  };
  btn.addEventListener('click', openIngredients);
};

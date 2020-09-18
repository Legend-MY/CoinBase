const dropdown = document.querySelector('.header__btn');
const dropdownItems = document.querySelector('.header__sell');

dropdown.onclick = function () {
  dropdownItems.classList.toggle('header__sell_active');
}
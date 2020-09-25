const dropdown = document.querySelector('.header__btn');
const dropdownItems = document.querySelector('.header__sell');
const menuBurger = document.querySelector('.menu-burger');
const navBar = document.querySelector('.nav');
const wrapper = document.querySelector('.wrapper');

dropdown.onclick = function () {
  dropdownItems.classList.toggle('header__sell_active');
}

menuBurger.onclick = function () {
  menuBurger.classList.toggle('menu-burger-active');
  navBar.classList.toggle('nav_active');
  wrapper.classList.toggle('wrapper_active');
}



// Header change background while scrolling
$(window).scroll(function () {
  if (this.scrollY > 20)
    $('header').addClass('sticky');
  else
    $('header').removeClass('sticky');
});
'use strict';
const buttonSlide = document.querySelector('.slideDown');

function hamburgerClick() {
  // Note: two ways of doing this

  // Version One
  const menuList = document.querySelector('.menuList');
  const style = window.getComputedStyle(menuList);
  let displayValue = style.getPropertyValue('display');

  if (displayValue === 'none') {
    $('.menuList').fadeIn(500);
  } else {
    $('.menuList').fadeOut(250);
  }

  // Version Two
    // For now, use Version One 
  // $('.menuList').toggle(500);
}

buttonSlide.addEventListener('click', hamburgerClick);

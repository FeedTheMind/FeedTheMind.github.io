(function () {
  'use strict';
}());


const $buttonSlide = $('.slideDown');

function hamburgerClick() {
  const $menuList = $('.menuList');
  const $style = $menuList.css('display');

  if ($style === 'none') {
    $menuList.fadeIn(500);
  } else {
    $menuList.fadeOut(250);
  }
}

$buttonSlide.on('click', hamburgerClick);


// Determine window size
  // Fix menu from disappearing when resized

window.addEventListener('resize', () => {
  const menuList = document.querySelector('.menuList');
  let windowWidth = window.innerWidth;

  if (windowWidth >= 975) {
    menuList.style.display = 'block';
  } else {
    menuList.style.display = 'none';
  }
});


// Allow user to click navigation that "scrolls"

function scroller(htmlElement, homeTop){
  const nav = $('nav');
  let position = 0;

  // If navigation is left and has 150 width, change values
  if (nav.width() === 150) {
    position = $(htmlElement).offset().top;
    // Else if fixed to top and element "false"
  } else {
    position = $(htmlElement).offset().top - nav.height();
  }

  $('body').animate({ scrollTop: position + homeTop}, 1500);
}


$('.navItem a').on('click', function () {
  const self = this;
  const lower = self.innerText.toLowerCase();
  let combined = '#' + lower;

  // Use ternary operator and assign 0 if true; otherwise, false
  let positionTop = combined === '#home' ? 0 : 1; 
  scroller(combined, positionTop);
});


// If user wants to close menu, allow him or her
// with hamburger button (above) or clicking .menuList

function menuDetection() {
  const menuList = $('.menuList');
  const nav = $('nav');

  if (menuList && nav.width() !== 150) {
    menuList.fadeOut(250);
  }
}

$('.menuList').on('click', menuDetection);


// Insert date (year) into .dateYear
$('.dateYear').text(new Date().getFullYear());


// Resizing wasn't updating fast enough
  // Use setInterval
setInterval(function () {
  let $height = $('.slideWrap').height();
  let $about = $('#about');

  $about.css('margin-top', $height + 20);
}, 100);


// Add to this list
let hellos = [
  'Hello', 
  'Hallo',
  'Bonjour',
  'Konnichiwa', 
  'Ciao',
  'Hola',
  'Aloha',
  'Hej'
];
let count = -1;

function newGreeting() {
  const $holder = $('.helloHolder');
  let speed = 2500;
  let fade = 1000;
  
  if (count !== (hellos.length - 1)) {
    count++;
  } else count = 0;

  if (hellos[count] === 'Hello') {
    speed = 3500;
    fade = 2000;
  }

  $holder.text(hellos[count]);

  $holder.fadeIn(fade).delay(speed).fadeOut(fade, function () {
    newGreeting();
  });
}

newGreeting();


$('form input, form textarea').on('focus blur', function (e) {
  if (e.type === 'focus') {
    $(this).parent().addClass('toggle');
  } else {
    $(this).parent().removeClass('toggle');
  }
});

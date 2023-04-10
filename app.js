const menuIcon = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-header');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  logo.classList.toggle('visible')
  
});

menu.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  logo.classList.toggle('visible')
  
});
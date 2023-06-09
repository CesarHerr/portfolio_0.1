const menuIcon = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-header');
const closeBtn = document.querySelector('.hamburger-close');
const email = document.querySelector('.email-icon');
const nav = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  logo.classList.toggle('visible');
  closeBtn.classList.toggle('close');
  email.classList.toggle('visible');
  nav.classList.toggle('change-width');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  logo.classList.toggle('visible');
  closeBtn.classList.toggle('close');
  email.classList.toggle('visible');
  nav.classList.toggle('change-width');
});

const portfolio = document.querySelector('#portfolio');
const portfolioLink = document.querySelector('.link-portfolio');

function mouseOver() {
  portfolioLink.classList.toggle('linkedPortfolio');
}

function mouseOut() {
  portfolioLink.classList.toggle('linkedPortfolio');
}

portfolio.addEventListener('mouseover', mouseOver);
portfolio.addEventListener('mouseout', mouseOut);

const about = document.querySelector('#about');
const aboutLink = document.querySelector('.link-about');

function mouseOver2() {
  aboutLink.classList.toggle('linkedAbout');
}

function mouseOut2() {
  aboutLink.classList.toggle('linkedAbout');
}

about.addEventListener('mouseover', mouseOver2);
about.addEventListener('mouseout', mouseOut2);

const contact = document.querySelector('#contact');
const contactLink = document.querySelector('.link-contact');

function mouseOver3() {
  contactLink.classList.toggle('linkedContact');
}

function mouseOut3() {
  contactLink.classList.toggle('linkedContact');
}

contact.addEventListener('mouseover', mouseOver3);
contact.addEventListener('mouseout', mouseOut3);

const headline = document.querySelector('.headline');
const myLogo = document.querySelector('.logo-header');

function mouseOver4() {
  myLogo.classList.toggle('linkedLogo');
}

function mouseOut4() {
  myLogo.classList.toggle('linkedLogo');
}

headline.addEventListener('mouseover', mouseOver4);
headline.addEventListener('mouseout', mouseOut4);
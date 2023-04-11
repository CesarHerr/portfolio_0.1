const menuIcon = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-header');
const closeBtn = document.querySelector('.hambuguer-close');
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

const portfolio= document.querySelector('#portfolio')
const portfolioLink= document.querySelector('.link-portfolio')

portfolio.addEventListener("mouseover", mouseOver);
portfolio.addEventListener("mouseout", mouseOut);

function mouseOver() {
  portfolioLink.style.fontSize = "1.5rem";
  portfolioLink.style.padding = "0.7rem 2rem";
  portfolioLink.style.boxShadow = "12.8px 20.6px 5.3px rgba(0, 0, 0, 0.194), 23.3px 37.6px 17.9px rgba(0, 0, 0, 0.286), 52px 84px 80px rgba(0, 0, 0, 0.48)";
  portfolioLink.style.borderRadius = "0.8rem";
  portfolioLink.style.border = "solid 1px rgba(0, 0, 0, 0.194)";  

}

function mouseOut() {
  portfolioLink.style.padding = "0";
  portfolioLink.style.boxShadow = "none";
  portfolioLink.style.fontSize = "1rem";
  portfolioLink.style.border = "none";
}

const about= document.querySelector('#about')
const aboutLink= document.querySelector('.link-about')

about.addEventListener("mouseover", mouseOver2);
about.addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  aboutLink.style.fontSize = "1.5rem";
  aboutLink.style.padding = "0.7rem 2rem";
  aboutLink.style.boxShadow = "12.8px 20.6px 5.3px rgba(0, 0, 0, 0.194), 23.3px 37.6px 17.9px rgba(0, 0, 0, 0.286), 52px 84px 80px rgba(0, 0, 0, 0.48)";
  aboutLink.style.borderRadius = "0.8rem"
  aboutLink.style.border = "solid 1px rgba(0, 0, 0, 0.194)";

}

function mouseOut2() {
  aboutLink.style.padding = "0";
  aboutLink.style.boxShadow = "none";
  aboutLink.style.fontSize = "1rem";
  aboutLink.style.border = "none";
}

const contact= document.querySelector('#contact')
const contactLink= document.querySelector('.link-contact')
const imgEmail= document.querySelector('.link-contact img')

contact.addEventListener("mouseover", mouseOver3);
contact.addEventListener("mouseout", mouseOut3);

function mouseOver3() {
contactLink.style.fontSize = "1.6rem";
contactLink.style.padding = "0.7rem 2rem";
contactLink.style.boxShadow = "12.8px 20.6px 5.3px rgba(0, 0, 0, 0.194), 23.3px 37.6px 17.9px rgba(0, 0, 0, 0.286), 52px 84px 80px rgba(0, 0, 0, 0.48)";
contactLink.style.borderRadius = "0.8rem"
contactLink.style.border = "solid 1px rgba(0, 0, 0, 0.194)";
contactLink.style.border = "none";}

function mouseOut3() {
contactLink.style.padding = "0";
contactLink.style.boxShadow = "none";
contactLink.style.fontSize = "1rem";
}
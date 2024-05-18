'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const textLogo = document.querySelector("[data-text-logo]")
const imgLogo = document.querySelector("[data-logo-img]")

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    imgLogo.classList.add("active");
    textLogo.classList.add("text-logo-hidden")
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    textLogo.classList.remove("text-logo-hidden")
    imgLogo.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

const carousel = document.querySelector(".slideParent");

carousel.addEventListener('mouseleave', () => {
  carousel.classList.remove('hover');
});

carousel.addEventListener('mouseenter', () => {
  carousel.classList.add('hover');
});

// function openInNewTab(url) {
//   var newTab = window.open(url, '_blank');
//   newTab.focus();
// }

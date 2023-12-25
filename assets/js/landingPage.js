"use strict";

/* 
navbar toggle in mobile
*/

const /* {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /* {NodeElement} */ $navtoggler = document.querySelector("[data-nav-toggler]");

$navtoggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/* 
header scroll state
*/

const /* {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/* 
add to favorite button toggle
*/

const /* {NodeList} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});
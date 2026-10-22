/* ========================================
   1. Mobile Navigation
======================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close the mobile menu when a navigation link is clicked.

const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// Close the menu when the user clicks outside the navigation.

document.addEventListener("click", function (event) {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});


/* ========================================
   2. Automatic Copyright Year
======================================== */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


/* ========================================
   3. Console Message
======================================== */

console.log("Welcome to Muhammad Abdullah's portfolio!");
console.log("Website loaded successfully.");
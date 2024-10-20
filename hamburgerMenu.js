document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menuItems = document.querySelector(".dropdown");

hamburger.addEventListener("click", function () {
menuItems.classList.toggle("show"); // Toggle the show class
 });
});
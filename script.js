// JavaScript to toggle the mobile menu
const menuBtn = document.getElementById("menu-btn");
const sidebarLeft = document.querySelector(".sidebar-left");

menuBtn.addEventListener("click", function () {
    sidebarLeft.classList.toggle("active");
});

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var search = form.querySelector("input[type=search]");
    search.value = "site:www.ristudypost.com " + search.value;
    form.submit();
});

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






// Disable right-click context menu
        window.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable copy and cut keyboard shortcuts
        window.addEventListener('keydown', function (e) {
            if (e.ctrlKey && (e.key === 'c' || e.key === 'x')) {
                e.preventDefault();
            }
        });

        // Detect Chrome extension activity
        if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
            alert("Chrome extension detected. Some functionality may be restricted.");
        }

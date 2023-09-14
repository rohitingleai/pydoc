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




// Function to display the alert message
        function showAlert() {
            alert("Copy-paste is not allowed on this website. This website is DMCA protected.");
        }

        // Disable right-click context menu
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            showAlert();
        });

        // Disable Ctrl+C keyboard shortcut
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                showAlert();
            }
        });


       // Add an event listener to detect right-clicks
        document.addEventListener('contextmenu', function (e) {
            // Prevent the default right-click context menu
            e.preventDefault();
            
            // Redirect to a URL of your choice
            window.location.href = '/';
        });

        // Add an event listener to detect Ctrl+C (or Cmd+C on macOS) key press
        document.addEventListener('keydown', function (e) {
            // Check if the Ctrl key (or Cmd key on macOS) is pressed along with 'C'
            if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                // Redirect to a URL of your choice
                window.location.href = '/';
            }
        });

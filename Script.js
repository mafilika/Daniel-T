// Show welcome message once per browser session
if (!sessionStorage.getItem("visited")) {
    alert("Welcome! We provide honest, affordable, and professional construction services.");
    sessionStorage.setItem("visited", "true");
}

// Highlight active page link
const links = document.querySelectorAll("a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.backgroundColor = "#0b3c5d";
        link.style.color = "#ffffff";
    }
});

// Confirm before leaving current page
links.forEach(link => {
    link.addEventListener("click", function (event) {
        const destination = this.getAttribute("href");
        if (destination && destination !== currentPage) {
            const proceed = confirm("Do you want to continue to this section?");
            if (!proceed) {
                event.preventDefault();
            }
        }
    });
});

// Add current year to any element with id="year"
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
          }

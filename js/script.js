// Function to load external HTML files
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});

// Toggle Navigation Menu for Mobile View
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-links");
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "☰";
    toggleButton.classList.add("nav-toggle");

    document.querySelector("header").prepend(toggleButton);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Portfolio Image Hover Effect
document.addEventListener("DOMContentLoaded", () => {
    const portfolioItems = document.querySelectorAll(".portfolio-item img");
    portfolioItems.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.3s";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});


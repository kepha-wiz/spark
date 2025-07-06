// Main JavaScript functionality for the SISDS website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header functionality
window.onscroll = function() {
    const header = document.getElementById("navbar");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Search functionality
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll(".searchable-item");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "" : "none";
    });
});

// Initialize other scripts
document.addEventListener("DOMContentLoaded", function() {
    // Initialize carousel, lightbox, tabs, etc.
    // These functions would be defined in their respective JS files
});
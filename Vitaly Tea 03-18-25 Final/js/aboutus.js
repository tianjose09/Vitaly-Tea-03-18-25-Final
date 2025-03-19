document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

// Page navigation active link

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#navbar a");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;

        if (currentPage === linkPath) {
            link.classList.add("active");
        }
    });
});


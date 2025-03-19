// Page navigation active link

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#navbar a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });
});

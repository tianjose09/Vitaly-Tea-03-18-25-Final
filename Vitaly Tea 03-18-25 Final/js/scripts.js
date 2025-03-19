document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Check if user has seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');

    if (hasSeenLoader) {
        // User has seen loader before, skip it
        loader.style.display = "none";
        content.classList.remove("hidden");
        content.style.opacity = "1";
    } else {
        // First visit in this session, show the loader
        let percentage = 0;
        const loadingText = document.getElementById("loading-percentage");

        function updateLoading() {
            if (percentage <= 100) {
                loadingText.textContent = percentage + "%";
                let speed = 40; // Syncs with 4s coffee filling animation
                percentage++;
                setTimeout(updateLoading, speed);
            } else {
                // Smoothly hide loader and show content
                setTimeout(() => {
                    loader.style.opacity = "0";
                    setTimeout(() => {
                        loader.style.display = "none";
                        content.classList.remove("hidden");
                        content.style.opacity = "1";

                        // Set flag that user has seen the loader (only for this session)
                        sessionStorage.setItem('hasSeenLoader', 'true');
                    }, 1000);
                }, 500);
            }
        }

        updateLoading();
    }
});



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

function setActiveLink() {
    const links = document.querySelectorAll("#navbar a");
    
    links.forEach(link => {
    link.addEventListener("click", function() {
    links.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
    });
    });
    }
    
    document.addEventListener("DOMContentLoaded", setActiveLink);
    
    const slides = document.querySelectorAll(".carousel img");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
    
    function showSlide() {
    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
    }
    
    function goToSlide(n) {
    index = n;
    showSlide();
    }
    
    function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
    }
    
    function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
    }
    
    setInterval(nextSlide, 10000);
    
    dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
    });
    
    document.querySelector(".left-arrow").addEventListener("click", prevSlide);
    document.querySelector(".right-arrow").addEventListener("click", nextSlide);
    
    showSlide();
    
    const testimonials = [
    {
    img: 'images/home-page/client2.jpg',
    name: 'Roscoe Del Fierro',
    title: 'CEO, Tech Company',
    rating: '⭐⭐⭐⭐⭐',
    score: '5.0',
    message: 'The printing service was fast and high quality. I loved the cozy nook while waiting!'
    },
    {
    img: 'images/home-page/client3.jpg',
    name: 'Schuyler Rockwell',
    title: 'Student',
    rating: '⭐⭐⭐⭐⭐',
    score: '5.0',
    message: 'Great coffee and fast printing. Great for students like me!'
    },
    {
    img: 'images/home-page/client4.jpg',
    name: 'Matt Yu',
    title: 'Photographer',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'Their drinks are surprisingly good! I was genuinely impressed by the overall service'
    },
    {
    img: 'images/home-page/client5.jpg',
    name: 'Royce Solarez',
    title: 'Manager, Retail Store',
    rating: '⭐⭐⭐',
    score: '3.0',
    message: 'Good service, but the wait time was longer than expected. Drinks were nice though.'
    },
    {
    img: 'images/home-page/client6.jpg',
    name: 'Aestherille Zeraphine',
    title: 'Student',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'The cozy atmosphere and excellent printing service make Vitaly Tea my go-to spot!'
    },
    {
    img: 'images/home-page/client7.jpg',
    name: 'Ali Mercadejas',
    title: 'Doctor',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'Great quality prints and a fantastic place to relax with a cup of coffee.'
    },
    {
    img: 'images/home-page/client8.jpg',
    name: 'Zariyah Isla Leviste',
    title: 'Business Owner',
    rating: '⭐⭐⭐⭐⭐',
    score: '4.0',
    message: 'Vitaly Tea’s printing service exceeded my expectations with its efficiency. Plus, their chai latte keeps me coming back!'
    },
    {
    img: 'images/home-page/client9.jpg',
    name: 'Radleigh Vesarius Riego',
    title: 'Nurse',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'The atmosphere is perfect for getting work done while enjoying a delicious cup of coffee'
    },
    {
    img: 'images/home-page/client10.jpg',
    name: 'Eurydyce Amethyst Hidalgo',
    title: 'Marketing Executive',
    rating: '⭐⭐⭐',
    score: '3.0',
    message: 'Printing quality was decent, but the environment was a bit noisy for my taste.'
    }
    ];
    
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    
    function updateTestimonial(index) {
    const testimonialImage = document.querySelector('.testimonial-image img');
    const clientName = document.querySelector('.client-name');
    const clientTitle = document.querySelector('.client-title');
    const ratingStars = document.querySelector('.stars');
    const ratingScore = document.querySelector('.score');
    const message = document.querySelector('.testimonial-message');
    
    testimonialImage.src = testimonials[index].img;
    testimonialImage.alt = testimonials[index].name;
    clientName.textContent = testimonials[index].name;
    clientTitle.textContent = testimonials[index].title;
    ratingStars.textContent = testimonials[index].rating;
    ratingScore.textContent = testimonials[index].score;
    message.textContent = testimonials[index].message;
    }
    
    rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
    });
    
    leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
    });
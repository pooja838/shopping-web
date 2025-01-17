let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth;  // Get the width of a single slide
    slider.style.transform = `translateX(-${index * slideWidth}px)`;  // Move the slider
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop through the slides
    goToSlide(currentIndex);
}
goToSlide(currentIndex);


setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-track img");
    let currentIndex = 0;
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? "block" : "none";
    });
    function showNextSlide() {
        slides[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = "block";
    }
    setInterval(showNextSlide, 2300);
});

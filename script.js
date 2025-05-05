document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-track img");
    let currentIndex = 0;

    // Masquer toutes les images sauf la première
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? "block" : "none";
    });

    function showNextSlide() {
        // Masquer l'actuelle
        slides[currentIndex].style.display = "none";

        // Passer à l'image suivante
        currentIndex = (currentIndex + 1) % slides.length;

        // Afficher la nouvelle
        slides[currentIndex].style.display = "block";
    }

    // Changer d’image toutes les 2.5 secondes
    setInterval(showNextSlide, 2500);
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
let currentIndex = 2; // Centro inicial

function updateCarousel() {
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });

    const offset = -(currentIndex * (images[0].clientWidth + 20)); // 20px es el margen
    track.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

updateCarousel(); // Llamada inicial
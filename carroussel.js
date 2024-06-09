document.addEventListener('DOMContentLoaded', (event) => {
    const slides = [
        { "image": "slide1.webp" },
        { "image": "slide2.webp" }
    ];

    let currentSlide = 0;
    const totalSlides = slides.length;
    const bannerImg = document.querySelector('.banner-img');
    const dotsContainer = document.querySelector('.dots');
    let dots = [];

    function showSlide(index) {
        bannerImg.src = `./assets/slideshow/${slides[index].image}`;
        // Si vous avez une tagline à afficher, décommentez la ligne suivante et ajoutez les tagline dans votre tableau slides
        // tagLine.innerHTML = slides[index].tagLine;
    }

    function createPaginationDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                showSlide(i);
                updateDots(i);
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }
        updateDots(currentSlide);
    }

    function updateDots(index) {
        dots.forEach((dot, dotIndex) => {
            if (dotIndex === index) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
        updateDots(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
        updateDots(currentSlide);
    }

    // Afficher la première slide au chargement de la page
    showSlide(currentSlide);
    createPaginationDots();

    //Change de slide toute les 10s
    setInterval(nextSlide, 10000);
});


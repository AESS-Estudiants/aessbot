document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    // Array d'imatges dinàmicament
    const images = [
        'imatge7.png',
        'imatge8.png',
        //'imatge9.png',
        //'imatge10.png',
        //'imatge7.jpg',
        //'imatge4.jpg',
        //'imatge5.jpg',
        //'imatge6.jpg',
    ];

    // Añade dinámicamente las imágenes
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/carousel/${img}`;
        carouselImages.appendChild(imgElement);
    });

    // Variables para gestionar el índice
    let currentIndex = 0;
    const totalImages = images.length;

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100; // Mueve el carrusel basado en el índice
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Evento para ir a la imagen anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Cíclico
        updateCarousel();
    });
    
    // Evento para ir a la siguiente imagen
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages; // Cíclico
        updateCarousel();
    });
}); 
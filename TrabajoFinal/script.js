
// Cambiar imagen del carrusel cada 5 segundos
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function changeCarouselImage() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

setInterval(changeCarouselImage, 5000);

document.addEventListener("DOMContentLoaded", function () {
    // Función para abrir la imagen en grande al hacer clic
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener("click", function () {
            const imgSrc = this.getAttribute('src'); // Obtener la fuente de la imagen seleccionada
            const modalImage = document.getElementById('modalImage');
            modalImage.src = imgSrc; // Cambiar la fuente de la imagen en el modal
            const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show(); // Mostrar el modal
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Lógica do Menu Hamburger
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('main-nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }


    // Lógica do Carrossel
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carouselSlide && prevBtn && nextBtn) {
        const carouselImages = carouselSlide.querySelectorAll('img');

        let counter = 0;
        const imageCount = carouselImages.length;
        let slideInterval;

        function updateCarousel() {
            // Esconde todas as imagens
            carouselImages.forEach(img => {
                img.style.display = 'none';
            });
            // Mostra apenas a imagem atual
            carouselImages[counter].style.display = 'block';
        }

        function nextImage() {
            counter++;
            if (counter >= imageCount) {
                counter = 0; // Volta para a primeira imagem
            }
            updateCarousel();
        }

        function prevImage() {
            counter--;
            if (counter < 0) {
                counter = imageCount - 1; // Vai para a última imagem
            }
            updateCarousel();
        }

        function startSlideShow() {
            slideInterval = setInterval(nextImage, 3000); // Muda a imagem a cada 3 segundos (3000 ms)
        }

        function resetSlideShow() {
            clearInterval(slideInterval);
            startSlideShow();
        }

        nextBtn.addEventListener('click', () => {
            nextImage();
            resetSlideShow(); // Reinicia o timer quando o usuário interage
        });

        prevBtn.addEventListener('click', () => {
            prevImage();
            resetSlideShow(); // Reinicia o timer quando o usuário interage
        });
        // Inicializa o carrossel mostrando a primeira imagem
        updateCarousel();
        startSlideShow(); // Inicia a passagem automática de slides
    }

    // Lógica do Modal (Zoom) - Aplicável a qualquer página com a estrutura do modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const imagesToZoom = document.querySelectorAll('.carousel-slide img'); // Pode ser ajustado para outras imagens

    if (modal && modalImg && closeModal && imagesToZoom.length > 0) {
        imagesToZoom.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });

        const close = () => {
            modal.style.display = "none";
        }
        closeModal.addEventListener('click', close);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Fecha o modal ao pressionar a tecla 'Escape'
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' || event.key === 'Esc') {
                close();
            }
        });
    }

    // Lógica do Acordeão de Curiosidades
    const curiosidadeItems = document.querySelectorAll('.curiosidade-item');

    if (curiosidadeItems.length > 0) {
        curiosidadeItems.forEach(item => {
            const title = item.querySelector('.curiosidade-title');
            const content = item.querySelector('.curiosidade-content');

            title.addEventListener('click', () => {
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + "px"; // Define a altura máxima para o conteúdo crescer
                } else {
                    content.style.maxHeight = null; // Recolhe o conteúdo
                }
            });
        });
    }
});
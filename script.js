document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    setupButton();
    startCounter();
    setupScrollAnimation();
});

function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 30; // Cantidad de corazones simultáneos

    // Crear corazones periódicamente
    setInterval(() => {
        if (container.children.length < heartCount) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            // Alternar entre corazones rojos y verdes
            heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💚';

            // Posición aleatoria horizontal
            heart.style.left = Math.random() * 100 + 'vw';

            // Tamaño aleatorio
            const size = Math.random() * 20 + 10;
            heart.style.fontSize = size + 'px';

            // Duración aleatoria de la caída
            const duration = Math.random() * 3 + 3; // entre 3 y 6 segundos
            heart.style.animationDuration = duration + 's';

            container.appendChild(heart);

            // Eliminar el corazón después de la animación
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }
    }, 300);
}

function startCounter() {
    // Fecha de inicio: 17 de Junio (año actual o anterior, asumiremos 2024 para ejemplo reciente, cambiar según necesidad)
    const startDate = new Date('2025-06-17T12:30:00');

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) {
            // Si la fecha es futura (ej. pruebas), mostrar ceros
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    setInterval(updateCounter, 1000);
    updateCounter(); // Primera llamada inmediata
}

function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

function setupButton() {
    const btn = document.getElementById('reveal-btn');
    const hiddenMsg = document.getElementById('hidden-message');

    if (btn && hiddenMsg) {
        btn.addEventListener('click', () => {
            if (hiddenMsg.style.display === 'none' || hiddenMsg.style.display === '') {
                hiddenMsg.style.display = 'block';
                // Pequeña animación de entrada
                hiddenMsg.style.animation = 'slideUpFade 0.5s ease-out';
                btn.textContent = 'Ocultar Sorpresa 🙈';
            } else {
                hiddenMsg.style.display = 'none';
                btn.textContent = '¡Tengo una sorpresa! 🎁';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    setupButton();
});

function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 30; // Cantidad de corazones simultáneos

    // Crear corazones periódicamente
    setInterval(() => {
        if (container.children.length < heartCount) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️'; // Puedes cambiar esto por otros emojis o SVG
            
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

function setupButton() {
    const btn = document.getElementById('reveal-btn');
    const hiddenMsg = document.getElementById('hidden-message');

    if(btn && hiddenMsg) {
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

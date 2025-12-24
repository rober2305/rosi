document.addEventListener('DOMContentLoaded', () => {
    // Advanced Scroll Observer
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the item is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after showing (remove if you want re-animation)
                // fadeInObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => fadeInObserver.observe(el));

    // Smooth Scroll for the Down Arrow
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', () => {
            const firstSection = document.querySelector('main');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

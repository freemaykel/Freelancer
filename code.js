document.addEventListener('DOMContentLoaded', () => {

    // Funkcja do animacji pojawiania się elementów przy przewijaniu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Element zostanie animowany, gdy 10% będzie widoczne
    });

    // Obserwuj wszystkie elementy z klasą .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

});
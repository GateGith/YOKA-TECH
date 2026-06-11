
// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== HEADER SCROLL EFFECT (si vous ajoutez une navbar plus tard) ====================
// Simple effet de fade pour les éléments au scroll
const fadeElements = document.querySelectorAll('.stat-card, .product-card, .review-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== CONSOLE LOG POUR LE SUIVI ====================
console.log('🚀 YOKA TECH - Site prêt ! Téléphones • PC • Gaming • Consoles');
console.log('📞 YOKA PHONE: 0559 21 61 95');
console.log('🎮 YOKA GAMING: 0795 94 67 28');

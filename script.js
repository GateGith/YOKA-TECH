// script.js - YOKA TECH Enhanced Interactions

// ==================== DOM READY ====================
document.addEventListener('DOMContentLoaded', function() {

  // ==================== SMOOTH SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==================== PARTICLE BACKGROUND ====================
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 20 + 15}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        opacity: ${Math.random() * 0.5 + 0.2};
      `;
      particlesContainer.appendChild(particle);
    }

    // Inject keyframes for particles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatParticle {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 60 - 30}px) scale(1.2); }
        50% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 60 - 30}px) scale(0.8); }
        75% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 60 - 30}px) scale(1.1); }
      }
    `;
    document.head.appendChild(style);
  }

  // ==================== STATS COUNTER ====================
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          
          if (isDecimal) {
            el.textContent = current.toFixed(1);
          } else {
            el.textContent = Math.floor(current);
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = isDecimal ? target.toFixed(1) : target;
          }
        };
        
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  // ==================== FADE IN ON SCROLL ====================
  const fadeElements = document.querySelectorAll(
    '.stat-card, .product-card, .review-card, .store-image, .store-info, .map-card, .contact-info, .social-links'
  );

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    fadeObserver.observe(el);
  });

  // ==================== PRODUCT CLICK ====================
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('h3')?.textContent || 'Produit';
      alert(`🛒 ${title} disponible en boutique ! Contactez-nous pour plus d'informations.`);
    });
    card.style.cursor = 'pointer';
  });

  // ==================== FLOATING WA EFFECT ====================
  const floatingWA = document.querySelector('.floating-wa');
  if (floatingWA) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        floatingWA.style.opacity = '1';
        floatingWA.style.transform = 'scale(1)';
      } else {
        floatingWA.style.opacity = '0.7';
        floatingWA.style.transform = 'scale(0.9)';
      }
      lastScroll = currentScroll;
    });
    floatingWA.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    floatingWA.style.opacity = '0.7';
    floatingWA.style.transform = 'scale(0.9)';
  }

  // ==================== AUTO UPDATE YEAR ====================
  const footerYear = document.querySelector('.footer p:first-child');
  if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} YOKA TECH — Téléphones • PC • Gaming • Consoles • Accessoires`;
  }

  // ==================== PARALLAX HERO ====================
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.3}px`;
      }
    }
  });

  // ==================== CONSOLE ====================
  console.log('🚀 YOKA TECH – Spécialiste Tech à Kouba');
  console.log('📱 YOKA PHONE: 0559 21 61 95');
  console.log('🎮 YOKA GAMING: 0795 94 67 28');

});

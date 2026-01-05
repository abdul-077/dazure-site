/**
 * AURA BEAUTY - Static JavaScript
 * Ultra-conceptual beauty store interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const navMobile = document.getElementById('navMobile');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !navMobile.classList.contains('hidden');
      
      if (isOpen) {
        // Close menu
        navMobile.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        // Open menu
        navMobile.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });
  }

  // ========================================
  // Newsletter Form
  // ========================================
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');

  if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      if (email) {
        // Hide form, show success message
        newsletterForm.classList.add('hidden');
        newsletterSuccess.classList.remove('hidden');
        
        // Add animation
        newsletterSuccess.style.opacity = '0';
        newsletterSuccess.style.transform = 'scale(0.9)';
        
        requestAnimationFrame(() => {
          newsletterSuccess.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          newsletterSuccess.style.opacity = '1';
          newsletterSuccess.style.transform = 'scale(1)';
        });
      }
    });
  }

  // ========================================
  // Header Scroll Effect
  // ========================================
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add/remove background opacity based on scroll
    if (currentScrollY > 50) {
      header.style.background = 'hsla(30, 30%, 98%, 0.9)';
    } else {
      header.style.background = 'hsla(30, 30%, 98%, 0.7)';
    }
    
    lastScrollY = currentScrollY;
  }, { passive: true });

  // ========================================
  // Intersection Observer for Reveal Animations
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with reveal-on-scroll class
  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    revealObserver.observe(el);
  });

  // ========================================
  // Product Card Hover Effects
  // ========================================
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // ========================================
  // Add to Cart Button Click
  // ========================================
  const addButtons = document.querySelectorAll('.add-btn');
  const cartCount = document.querySelector('.cart-count');
  let currentCount = parseInt(cartCount?.textContent || '0');

  addButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

  // Checkout redirect
const cartBtn = document.querySelector('.cart-btn');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });
}

      
      // Increment cart count
      currentCount++;
      if (cartCount) {
        cartCount.textContent = currentCount;
        
        // Add pop animation
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
          cartCount.style.transform = 'scale(1)';
        }, 150);
      }
      
      // Add visual feedback to button
      btn.style.transform = 'scale(0.9)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ========================================
  // Parallax Effect for Hero Blobs
  // ========================================
  const blob1 = document.querySelector('.blob-1');
  const blob2 = document.querySelector('.blob-2');

  if (blob1 && blob2) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      blob1.style.transform = `translate(${x}px, ${y}px)`;
      blob2.style.transform = `translate(${-x}px, ${-y}px)`;
    }, { passive: true });
  }

  // ========================================
  // Logo Hover Effect
  // ========================================
  const logo = document.querySelector('.logo');
  
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      logo.style.transform = logo.classList.contains('logo') 
        ? 'translateX(-50%) scale(1.02)' 
        : 'scale(1.02)';
    });

    logo.addEventListener('mouseleave', () => {
      logo.style.transform = window.innerWidth >= 1024 
        ? 'scale(1)' 
        : 'translateX(-50%) scale(1)';
    });
  }

  // ========================================
  // Ritual Cards Glow Effect on Hover
  // ========================================
  const ritualCards = document.querySelectorAll('.ritual-card');

  ritualCards.forEach((card) => {
    const glow = card.querySelector('.ritual-glow');
    
    card.addEventListener('mousemove', (e) => {
      if (glow) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        glow.style.transform = 'translate(-50%, -50%)';
      }
    });
  });

  // ========================================
  // Preloader (if needed)
  // ========================================
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial reveal animations
    document.querySelectorAll('.reveal-up').forEach((el, index) => {
      el.style.animationDelay = `${0.1 + index * 0.1}s`;
    });
  });

  // ========================================
  // Cart Count Animation on Load
  // ========================================
  if (cartCount) {
    cartCount.style.transition = 'transform 0.15s ease';
  }
});

// ========================================
// CSS Transition Helper
// ========================================
function addTransition(element, property, duration = '0.4s', easing = 'cubic-bezier(0.16, 1, 0.3, 1)') {
  element.style.transition = `${property} ${duration} ${easing}`;
}

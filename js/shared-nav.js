// ========================================
// PRODUCTION-READY JAVASCRIPT
// Scroll Animations, Navigation, Forms
// ========================================

/**
 * SCROLL ANIMATION OBSERVER
 * Triggers animations when elements come into view
 */
const createScrollObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll, .card, .section-title');
    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
};

/**
 * NAVBAR SCROLL EFFECT
 * Add shadow and adjust height on scroll
 */
const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};

/**
 * ACTIVE NAV LINK UPDATE
 * Highlights current page in navigation
 */
const updateActiveNav = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

/**
 * MOBILE MENU TOGGLE
 * Handle mobile navigation
 */
const initMobileMenu = () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileToggle || !navMenu) return;

    // Toggle menu on button click
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
};

/**
 * SMOOTH SCROLL FOR ANCHOR LINKS
 */
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
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
};

/**
 * SET CURRENT YEAR IN FOOTER
 */
const setFooterYear = () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

/**
 * CONTACT FORM HANDLING
 * Uses Web3Forms for free form submission
 */
const initContactForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Clear previous messages
        const existingMsg = form.querySelector('.form-message');
        if (existingMsg) existingMsg.remove();

        try {
            // Collect form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                access_key: '73c1a6f9-58ba-4bb8-999f-e4a53edf2a8d' // Web3Forms access key
            };

            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            // Show success message
            if (result.success) {
                const successMsg = document.createElement('div');
                successMsg.className = 'form-message success';
                successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll respond within 24 hours.';
                form.insertBefore(successMsg, form.firstChild);

                // Reset form
                form.reset();

                // Remove message after 5 seconds
                setTimeout(() => {
                    successMsg.style.animation = 'fadeInUp 0.5s ease reverse';
                    setTimeout(() => successMsg.remove(), 500);
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            const errorMsg = document.createElement('div');
            errorMsg.className = 'form-message error';
            errorMsg.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or contact me directly at khoalibafokeng6@gmail.com';
            form.insertBefore(errorMsg, form.firstChild);

            console.error('Form submission error:', error);

            // Remove message after 5 seconds
            setTimeout(() => {
                errorMsg.style.animation = 'fadeInUp 0.5s ease reverse';
                setTimeout(() => errorMsg.remove(), 500);
            }, 5000);
        } finally {
            // Restore button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
};

/**
 * PARALLAX EFFECT ON SCROLL
 * Subtle movement for header elements
 */
const initParallax = () => {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const elements = header.querySelectorAll('.profile-img, header h1, header h2');
        
        elements.forEach((el, index) => {
            const yPos = scrolled * (0.5 + index * 0.1);
            el.style.transform = `translateY(${yPos * 0.5}px)`;
        });
    });
};

/**
 * STAGGERED ANIMATION FOR CARDS
 * Adds sequential animation delay
 */
const initStaggeredCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
};

/**
 * BUTTON RIPPLE EFFECT
 * Visual feedback on button click
 */
const initRippleEffect = () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
};

/**
 * SMOOTH PAGE TRANSITIONS
 * Add fade effect when navigating
 */
const initPageTransitions = () => {
    document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('javascript:') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                e.preventDefault();
                
                document.body.style.animation = 'fadeInUp 0.3s ease reverse';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
};

/**
 * PREVENT HORIZONTAL SCROLL
 */
const preventHorizontalScroll = () => {
    document.addEventListener('wheel', (e) => {
        if (e.deltaX !== 0) {
            e.preventDefault();
        }
    }, { passive: false });
};

/**
 * INITIALIZE ALL FEATURES
 */
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    updateActiveNav();
    handleNavbarScroll();
    setFooterYear();
    
    // Mobile menu
    initMobileMenu();
    
    // Scroll effects
    createScrollObserver();
    initParallax();
    
    // Interactive elements
    initSmoothScroll();
    initStaggeredCards();
    initRippleEffect();
    
    // Forms
    initContactForm();
    
    // Navigation
    initPageTransitions();
    
    // Performance
    preventHorizontalScroll();
    
    console.log('Website initialized successfully');
});

/**
 * HANDLE PAGE VISIBILITY
 * Pause animations when tab is hidden
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.opacity = '0.95';
    } else {
        document.body.style.opacity = '1';
    }
});

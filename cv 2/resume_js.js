// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initParticles();
    initTypingEffect();
    initNavbarScroll();
});

// Navigation Toggle
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animatedElements = document.querySelectorAll(
        '.skill-item, .timeline-item, .project-card, .contact-item'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Animate skill items with delay
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Animate project cards with delay
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Contact Form Handling
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmission(form);
        });

        // Add floating label effect
        const formInputs = form.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }
}

// Handle Form Submission
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        showNotification('Message sent successfully!', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Remove focused class from form groups
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('focused');
        });
    }, 2000);
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--background-overlay);
                border: 1px solid var(--neon-cyan);
                border-radius: 10px;
                padding: 1rem;
                color: var(--text-white);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                box-shadow: var(--shadow-neon);
                max-width: 300px;
            }
            
            .notification-success {
                border-color: #00ff88;
                box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--neon-cyan);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notification);

    // Close notification
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            removeNotification(notification);
        }
    }, 5000);
}

function removeNotification(notification) {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 300);
}

// Particle Animation
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }

    function initParticlesArray() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }

    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
            ctx.fill();
        });

        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    initParticlesArray();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticlesArray();
    });

    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// Typing Effect for Hero Section
function initTypingEffect() {
    const roleElement = document.querySelector('.title-role');
    if (!roleElement) return;

    const roles = [
        'Front-End Developer',
        'React.js Developer',
        'Vue.js & Angular Enthusiast',
        'JavaScript Expert',
        'UI/UX Enthusiast',
        'Web Designer',
        'Python & Java Collaborator'
    ];


    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeRole() {
        const currentRole = roles[currentRoleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentCharIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before typing next role
        }

        setTimeout(typeRole, typeSpeed);
    }

    // Start typing effect after initial animation
    setTimeout(typeRole, 2000);
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(0, 10, 20, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 255, 255, 0.3)';
        } else {
            navbar.style.background = 'var(--background-overlay)';
            navbar.style.borderBottom = '1px solid rgba(0, 255, 255, 0.1)';
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    if (navigator.languages && navigator.languages.includes('en')) {
        console.log("Disabling translation.");
        document.body.setAttribute("translate", "no");
    }
});




function initEnhancedParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)` // Cyan variations
        };
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }

    function updateParticles() {
        particles.forEach(particle => {
            // Mouse interaction
            if (mouse.x && mouse.y) {
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += (dx / distance) * force * 0.01;
                    particle.vy += (dy / distance) * force * 0.01;
                }
            }

            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            // Keep particles in bounds
            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${(100 - distance) / 100 * 0.2})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

// Scroll progress bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    function updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

// Real-time form validation
function initFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input[data-validate], textarea[data-validate]');

    function validateInput(input) {
        const type = input.dataset.validate;
        let isValid = false;

        switch (type) {
            case 'name':
                isValid = input.value.trim().length >= 2;
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(input.value.trim());
                break;
            case 'message':
                isValid = input.value.trim().length >= 10;
                break;
        }

        input.classList.toggle('valid', isValid && input.value.length > 0);
        input.classList.toggle('invalid', !isValid && input.value.length > 0);
        return isValid;
    }

    inputs.forEach(input => {
        input.addEventListener('input', () => validateInput(input));
        input.addEventListener('blur', () => validateInput(input));
    });
}

// Mobile touch gestures
function initMobileGestures() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!navToggle || !navMenu) return;

    let startX = 0;
    let startY = 0;
    let isHorizontalSwipe = false;

    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isHorizontalSwipe = false;
    });

    document.addEventListener('touchmove', (e) => {
        if (!startX || !startY) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            isHorizontalSwipe = true;
            e.preventDefault(); // Prevent scrolling when swiping horizontally
        }
    });

    document.addEventListener('touchend', (e) => {
        if (!isHorizontalSwipe) return;

        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;

        if (Math.abs(diffX) > 100) { // Minimum swipe distance
            if (diffX > 0) {
                // Swipe right - open menu
                navMenu.classList.add('active');
                navToggle.classList.add('active');
            } else {
                // Swipe left - close menu
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }

        startX = 0;
        startY = 0;
        isHorizontalSwipe = false;
    });
}

// Initialize new features
document.addEventListener('DOMContentLoaded', function () {
    initEnhancedParticles();
    initScrollProgress();
    initFormValidation();
    initMobileGestures();
    initLoadingAnimation();
    initBackToTop();
    initRippleEffects();
    initKeyboardNavigation();
    initSectionTransitions();
});

// Loading Animation
function initLoadingAnimation() {
    const elements = document.querySelectorAll('.hero .title-line, .hero .title-name, .hero .title-role, .hero .hero-description, .hero .hero-buttons, .about .section-title, .about .about-text p, .about .skills-grid, .experience .section-title, .experience .timeline-item');

    elements.forEach((element, index) => {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 100);
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', scrollToTop);
}

/// Button Ripple Effects
function initRippleEffects() {
    const buttons = document.querySelectorAll('.btn, .form-button, .project-link, .social-link');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
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

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/// Keyboard Navigation Improvements
function initKeyboardNavigation() {
    const focusableElements = document.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');

    function handleKeyDown(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    }

    function handleMouseDown() {
        document.body.classList.remove('keyboard-navigation');
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Enhanced focus management
    focusableElements.forEach(element => {
        element.addEventListener('focus', function () {
            this.style.outline = '2px solid var(--neon-cyan)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function () {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// Smooth Section Transitions
function initSectionTransitions() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}







function openModal(e) {
    e.preventDefault();
    document.getElementById("customModal").style.display = "flex";
}

// يقفل لما تضغط على X
function closeModal() {
    document.getElementById("customModal").style.display = "none";
}

// يقفل لما تضغط بره الرسالة
window.onclick = function(event) {
    let modal = document.getElementById("customModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

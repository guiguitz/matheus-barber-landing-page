/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Menu show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if(window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 100,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(sectionsClass) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-top');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    if(window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Add smooth scroll reveal effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

/*=============== GALLERY MODAL ===============*/
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const galleryItems = document.querySelectorAll('.gallery__item');

// Add click event to all gallery items
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        const img = this.querySelector('img');
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

// Close modal
const closeModal = document.querySelector('.gallery__modal-close');
if(closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if(target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*=============== LOADING ANIMATION ===============*/
window.addEventListener('load', () => {
    // Add fade-in animation to home section
    const homeSection = document.querySelector('.home');
    if(homeSection) {
        homeSection.style.opacity = '0';
        setTimeout(() => {
            homeSection.style.transition = 'opacity 1s ease';
            homeSection.style.opacity = '1';
        }, 100);
    }
});

/*=============== LAZY LOADING IMAGES ===============*/
// Native lazy loading is used in HTML with loading="lazy" attribute
// This is a fallback for browsers that don't support it
if('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    console.log('Native lazy loading supported');
} else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(scrollHeader));
window.addEventListener('scroll', debounce(scrollActive));
window.addEventListener('scroll', debounce(scrollUp));

/*=============== WHATSAPP FLOATING BUTTON ===============*/
// Create floating WhatsApp button
const createWhatsAppButton = () => {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/5531998460165';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.setAttribute('aria-label', 'Contato via WhatsApp');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 100px;
            right: 1.5rem;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        
        .whatsapp-float:hover {
            background-color: #20ba5a;
            transform: scale(1.1);
            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.4);
        }
        
        .whatsapp-float i {
            margin-top: 0;
        }
        
        @media screen and (max-width: 768px) {
            .whatsapp-float {
                width: 50px;
                height: 50px;
                font-size: 25px;
                bottom: 80px;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(whatsappBtn);
};

// Initialize WhatsApp button
createWhatsAppButton();

/*=============== FORM VALIDATION (if form is added later) ===============*/
const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4,5}[-\s\.]?[0-9]{4}$/;
    return re.test(String(phone));
};

/*=============== ANIMATE ON SCROLL FOR CARDS ===============*/
const animateCards = () => {
    const cards = document.querySelectorAll('.service__card, .contact__card, .gallery__item');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });
};

// Initialize card animations
animateCards();

/*=============== PREVENT LAYOUT SHIFT ===============*/
// Add aspect ratio to images to prevent layout shift
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if(!img.hasAttribute('width') || !img.hasAttribute('height')) {
            img.addEventListener('load', function() {
                this.style.aspectRatio = `${this.naturalWidth} / ${this.naturalHeight}`;
            });
        }
    });
});

/*=============== CONSOLE MESSAGE ===============*/
console.log('%c🔥 Matheus Costa Barber 🔥', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%cAtendimento em domicílio com excelência!', 'font-size: 14px; color: #555;');
console.log('%cAgende seu horário: https://calendly.com/matheuscosta_barber/matheuscosta', 'font-size: 12px; color: #888;');


// Language Selector JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-option');

    // Données des langues
    const languages = {
        'fr': { flag: '🇫🇷', name: 'Français' },
        'en': { flag: '🇺🇸', name: 'English' }
    };

    // Langue par défaut
    let currentLanguage = 'en';

    // Toggle dropdown
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langBtn.classList.toggle('active');
        langDropdown.classList.toggle('active');
    });

    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langBtn.classList.remove('active');
            langDropdown.classList.remove('active');
        }
    });

    // Sélection d'une langue
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            
            if (selectedLang !== currentLanguage) {
                // Mettre à jour l'affichage
                currentFlag.textContent = languages[selectedLang].flag;
                currentLang.textContent = languages[selectedLang].name;
                
                // Mettre à jour les classes selected
                langOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                // Mettre à jour la langue courante
                currentLanguage = selectedLang;
                
                // Fermer le dropdown
                langBtn.classList.remove('active');
                langDropdown.classList.remove('active');
                
                // Appeler la fonction de changement de langue
                changeLanguage(selectedLang);
            }
        });
    });

    // Charger la langue sauvegardée au démarrage
if (localStorage.getItem('preferred-language') && languages[(localStorage.getItem('preferred-language'))]) {
    currentLanguage = localStorage.getItem('preferred-language');

    // Appliquer la langue à SimpleI18n
    if (typeof SimpleI18n !== 'undefined' && SimpleI18n.changeLanguage) {
        SimpleI18n.changeLanguage(localStorage.getItem('preferred-language'));
    }

    // Mettre à jour le sélecteur visuellement
    currentFlag.textContent = languages[(localStorage.getItem('preferred-language'))].flag;
    currentLang.textContent = languages[(localStorage.getItem('preferred-language'))].name;

    langOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.lang === localStorage.getItem('preferred-language')) {
            option.classList.add('selected');
        }
    });
} else {
    // Langue par défaut
    currentFlag.textContent = languages[currentLanguage].flag;
    currentLang.textContent = languages[currentLanguage].name;
    langOptions.forEach(option => {
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('selected');
        }
    });
}


    // Fonction pour changer la langue (à adapter selon votre système i18n)
    function changeLanguage(lang) {
        
        console.log('Changement de langue vers:', lang);
        
        
        SimpleI18n.changeLanguage(lang);
        
        
        // Sauvegarder la préférence
        localStorage.setItem('preferred-language', lang);
        
        
    }

    // Charger la langue sauvegardée au démarrage
    const savedLang = localStorage.getItem('preferred-language');
    if (localStorage.getItem('preferred-language') && languages[(localStorage.getItem('preferred-language'))]) {
        currentFlag.textContent = languages[(localStorage.getItem('preferred-language'))].flag;
        currentLang.textContent = languages[(localStorage.getItem('preferred-language'))].name;
        currentLanguage = localStorage.getItem('preferred-language');
        
        langOptions.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.lang === localStorage.getItem('preferred-language')) {
                option.classList.add('selected');
            }
        });
    }
});

// Fermer le dropdown avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        
        langBtn.classList.remove('active');
        langDropdown.classList.remove('active');
    }
});

// Messages de validation multilingues
const validationMessages = {
    en: {
        fillAllFields: 'Please fill in all fields',
        invalidEmail: 'Please enter a valid email address',
        successMessage: 'Your message has been sent successfully!',
        errorMessage: 'An error occurred. Please try again.',
        sendingError: 'An error occurred while sending the message.'
    },
    fr: {
        fillAllFields: 'Veuillez remplir tous les champs',
        invalidEmail: 'Veuillez entrer une adresse email valide',
        successMessage: 'Votre message a été envoyé avec succès!',
        errorMessage: 'Une erreur est survenue. Veuillez réessayer.',
        sendingError: 'Une erreur est survenue lors de l\'envoi du message.'
    }
};

// Fonction pour obtenir les messages dans la langue actuelle
function getValidationMessages() {
    const currentLang = (typeof i18next !== 'undefined' && i18next.language) ? i18next.language : 'en';
    return validationMessages[currentLang] || validationMessages.en;
}

// Fonction pour mettre à jour les messages (appelée depuis i18n.js)
window.updateFormValidationMessages = function(lang) {
    // Cette fonction peut être utilisée pour d'autres mises à jour si nécessaire
    console.log('Messages de validation mis à jour pour:', lang);
};

// Highlight current section in navigation
const highlightCurrentSection = function() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightCurrentSection);
highlightCurrentSection();

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Hero Background Slideshow
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.background-slide');
    let currentSlide = 0;
    
    function showNextSlide() {
        // Hide current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show next slide
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(showNextSlide, 5000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlideshow();
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.getElementById('menu').classList.remove('active');
        const menuBtn = document.getElementById('mobile-menu-btn').querySelector('i');
        if (menuBtn && menuBtn.classList.contains('fa-times')) {
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }

        // Scroll to section
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Form submission handling avec messages multilingues
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const messages = getValidationMessages();
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert(messages.fillAllFields);
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(messages.invalidEmail);
        return;
    }
    
    // Prepare form data for submission
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    
    // Submit the form via fetch API
    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(messages.successMessage);
            this.reset();
        } else {
            alert(messages.errorMessage);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(messages.sendingError);
    });
});

// Animation on scroll
const animateOnScroll = function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Highlight the current section in navigation
    const highlightCurrentSection = function() {
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection();
});
// Solution i18n simple sans dépendances externes
const SimpleI18n = {
    currentLang: 'fr', // Défaut français comme dans l'index
    
    translations: {
        en: {
            "menu.home": "Home",
            "menu.about": "About",
            "menu.services": "Services",
            "menu.faq": "FAQ",
            "menu.contact": "Contact",
            
            "hero.title": "Welcome to Health Metrica",
            "hero.subtitle": "Innovative Artificial Intelligence Solutions for Better Healthcare in Resource-Limited Areas",
            "hero.services_button": "Our Services",
            "hero.contact_button": "Contact Us",
            
            "about.title": "About Us",
            "about.subtitle": "Driving Healthcare Innovation with Secure Data Solutions and Advanced Warehousing for Reliable Medical Data Management",
            "about.who_we_are": "Who We Are",
            "about.description": "Welcome to Health Metrica, where innovation transforms healthcare. We deliver advanced data solutions to revolutionize the medical field. Our expertise in secure data storage and efficient warehousing ensures reliable management of healthcare information. By leveraging cutting-edge technology, we empower healthcare systems worldwide, enabling better decision-making and improved patient outcomes. At Health Metrica, we are committed to driving meaningful advancements and addressing the unique challenges of modern healthcare systems.",
            "about.founded": "Founded in 2022, our company is committed to developing innovative solutions that address the unique challenges of healthcare systems, particularly in resource-limited regions.",
            "about.mission": "CUSTOMIZED SOLUTIONS",
            "about.mission_text": "Health Metrica offers customized solutions thanks to artificial intelligence, optimizing healthcare, particularly in resource-limited areas, for a lasting impact.",
            "about.vision": "EXPERT TEAM",
            "about.vision_text": "Health Metrica's expert team combines AI expertise and data management skills to create innovative solutions, addressing critical healthcare system needs in resource-limited areas worldwide.",
            
            "services.title": "Our Services",
            "services.subtitle": "At Health Metrica, our mission is to leverage artificial intelligence to improve healthcare in resource-limited areas. We believe in harnessing the power of technology to address the unique challenges faced by healthcare systems around the world.",
            "services.storage_title": "Data Storage and Warehousing",
            "services.storage_text": "We offer advanced data warehousing services for healthcare and other sectors, featuring cutting-edge encryption and robust security measures to ensure confidentiality and data integrity.",
            "services.analysis_title": "Data Analysis and Visualization",
            "services.analysis_text": "We specialize in data analysis and visualization, equipping professionals with actionable insights to make informed decisions and enhance patient outcomes.",
            "services.consulting_title": "Consulting Services",
            "services.consulting_text": "Our experts in bioinformatics, epidemiology and medical data analysis support healthcare professionals in strategic decision-making and improving their performance.",
            "services.app_title": "Application Development",
            "services.app_text": "We create innovative applications for healthcare pathways and public health, enabling accurate diagnoses, risk factor assessment and effective epidemic management.",
            "services.learn_more": "Learn More",
            
            "faq.title": "Frequently Asked Questions",
            "faq.subtitle": "Find answers to common questions about our innovative healthcare solutions, including data security, training programs, diagnostic tools, and epidemic prevention. Discover how Health Metrica empowers healthcare providers with cutting-edge technology and expertise.",
            "faq.question1": "How does health metrica ensure the security of healthcare data in its storage solutions?",
            "faq.answer1": "Our data platforms utilize state-of-the-art encryption protocols and stringent security measures to guarantee the confidentiality and integrity of all healthcare data.",
            "faq.question2": "What skills do your data analytics training programs provide to healthcare professionals?",
            "faq.answer2": "Our programs equip healthcare professionals with practical data analytics skills to drive informed decisions and improve patient outcomes through evidence-based insights.",
            "faq.question3": "How do the language-based tools improve patient care?",
            "faq.answer3": "Our evolving language-based tools enable healthcare providers to achieve more accurate diagnostics and create personalized care plans tailored to individual patient needs.",
            "faq.question4": "How do epidemic circumvention tools enhance public health responses?",
            "faq.answer4": "These tools assist in identifying and mitigating potential disease outbreaks, improving preparedness and enabling rapid, effective responses to public health threats.",
            
            "contact.title": "Contact Us",
            "contact.subtitle": "Questions or need information? We're here to help",
            "contact.our_details": "Our Details",
            "contact.address": `
Address: Atlantique, Godomey, Benin.<br>
<strong>Benin: +229 01 46 09 74 89</strong><br>
<strong>Ivory Coast: +225 05 75 43 20 43</strong><br>
<strong>Germany: +49 1521 9221951</strong><br>`,
  "contact.office_hours": "Office Hours: 8am - 5pm Monday - Friday",
            "contact.follow_us": "Follow Us",
            "contact.send_message": "Send Us a Message",
            "contact.form_name": "Name",
            "contact.form_email": "Email",
            "contact.form_subject": "Subject",
            "contact.form_message": "Message",
            "contact.form_submit": "Send",
            
            "footer.tagline": "Innovative solutions for healthcare data management and analysis",
            "footer.quick_links": "Quick Links",
            "footer.services": "Services",
            "footer.copyright": "2025 Health Metrica. All rights reserved.",
            "footer.credit_prefix": "Designed and developed by",
            
            // Messages de validation
            "validation.fillAllFields": "Please fill in all fields",
            "validation.invalidEmail": "Please enter a valid email address",
            "validation.successMessage": "Your message has been sent successfully!",
            "validation.errorMessage": "An error occurred. Please try again.",
            "validation.sendingError": "An error occurred while sending the message."
        },
        
        fr: {
            "menu.home": "Accueil",
            "menu.about": "À propos",
            "menu.services": "Services",
            "menu.faq": "FAQ",
            "menu.contact": "Contact",
            
            "hero.title": "Bienvenue chez Health Metrica",
            "hero.subtitle": "Des solutions d’intelligence artificielle novatrices pour rendre les soins de santé accessibles et performants dans les régions à ressources limitées.",
            "hero.services_button": "Nos Services",
            "hero.contact_button": "Contactez-nous",
            
            "about.title": "À propos de nous",
            "about.subtitle": "Stimuler l'innovation en santé grâce à des solutions sécurisées de gestion et d'analyse de données",
            "about.who_we_are": "Qui sommes-nous",
            "about.description": "Bienvenue chez Health Metrica, où l'innovation transforme les soins de santé. Nous fournissons des solutions de données avancées pour révolutionner le domaine médical. Notre expertise en stockage sécurisé de données et en entreposage efficace garantit une gestion fiable des informations de santé. En exploitant une technologie de pointe, nous donnons les moyens aux systèmes de santé du monde entier, permettant une meilleure prise de décision et des résultats améliorés pour les patients. Chez Health Metrica, nous nous engageons à stimuler des avancées significatives et à relever les défis uniques des systèmes de santé modernes.",
            "about.founded": "Fondée en 2022, notre entreprise s'engage à développer des solutions innovantes qui répondent aux défis uniques des systèmes de santé, en particulier dans les régions à ressources limitées.",
            "about.mission": "SOLUTIONS PERSONNALISÉES",
            "about.mission_text": "Health Metrica propose des solutions personnalisées grâce à l'intelligence artificielle, optimisant les soins de santé, particulièrement dans les zones à ressources limitées, pour un impact durable.",
            "about.vision": "ÉQUIPE D'EXPERTS",
            "about.vision_text": "L'équipe d'experts de Health Metrica combine l'expertise en IA et les compétences en gestion de données pour créer des solutions innovantes, répondant aux besoins critiques des systèmes de santé dans les zones à ressources limitées du monde entier.",
            
            "services.title": "Nos Services",
            "services.subtitle": "Chez Health Metrica, notre mission est d'exploiter l'intelligence artificielle pour améliorer les soins de santé dans les zones à ressources limitées. Nous croyons en l'exploitation de la puissance de la technologie pour répondre aux défis uniques auxquels font face les systèmes de santé dans le monde.",
            "services.storage_title": "Stockage et entrepôt de données",
            "services.storage_text": "Nous offrons des services d'entreposage de données avancés pour les soins de santé et d'autres secteurs, avec un chiffrement de pointe et des mesures de sécurité robustes pour garantir la confidentialité et l'intégrité des données.",
            "services.analysis_title": "Analyse et visualisation de données",
            "services.analysis_text": " Nous sommes spécialisés dans l'analyse et la visualisation de données, équipant les professionnels d'outils d'aide à la décision performants et améliorant le suivi des patients",
            "services.consulting_title": "Services de conseil",
            "services.consulting_text": "Nos experts en bioinformatique, en épidémiologie et en analyse de données médicales accompagnent les professionnels de santé dans la prise de décision stratégique et l'amélioration de leur performance.",
            "services.app_title": "Développement d'applications",
            "services.app_text": "Nous créons des applications innovantes pour les parcours de soins et la santé publique, permettant des diagnostics précis, l'évaluation des facteurs de risque et une gestion efficace des épidémies.",
            "services.learn_more": "En savoir plus",
            
            "faq.title": "Foire aux questions",
            "faq.subtitle": "Trouvez des réponses aux questions courantes sur nos solutions de santé innovantes, y compris la sécurité des données, les programmes de formation, les outils de diagnostic et la prévention des épidémies. Découvrez comment Health Metrica donne les moyens aux prestataires de soins avec une technologie et une expertise de pointe.",
            "faq.question1": "Comment Health Metrica garantit-elle la sécurité des données de santé dans ses solutions de stockage ?",
            "faq.answer1": "Nos plateformes de données utilisent des protocoles de chiffrement de pointe et des mesures de sécurité strictes pour garantir la confidentialité et l'intégrité de toutes les données de santé.",
            "faq.question2": "Quelles compétences vos programmes de formation en analyse de données apportent-ils aux professionnels de la santé ?",
            "faq.answer2": "Nos programmes équipent les professionnels de santé avec des compétences pratiques en analyse de données pour prendre des décisions éclairées et améliorer les résultats pour les patients grâce à des insights basés sur des preuves.",
            "faq.question3": "Comment les outils basés sur le langage améliorent-ils la prise en charge des patients ?",
            "faq.answer3": "Nos outils évolutifs basés sur le langage permettent aux prestataires de soins d'obtenir des diagnostics plus précis et de créer des plans de soins personnalisés adaptés aux besoins individuels des patients.",
            "faq.question4": "Comment les outils de contournement des épidémies renforcent-ils les réponses de santé publique ?",
            "faq.answer4": "Ces outils aident à identifier et atténuer les épidémies potentielles, améliorant la préparation et permettant des réponses rapides et efficaces aux menaces de santé publique.",
            
            "contact.title": "Contactez-nous",
            "contact.subtitle": "Des questions ou besoin d'informations ? Nous sommes là pour vous aider",
            "contact.our_details": "Nos coordonnées",
            "contact.address": `
Adresse : Atlantique, Godomey, Bénin.<br>
<strong>Bénin : +229 01 46 09 74 89</strong><br>
<strong>Côte d'Ivoire : +225 05 75 43 20 43</strong><br>
<strong>Allemagne : +49 1521 9221951</strong><br>`,
  "contact.office_hours": "Heures d'ouverture : 8h - 17h Lundi- Vendredi",
            "contact.follow_us": "Suivez-nous",
            "contact.send_message": "Envoyez-nous un message",
            "contact.form_name": "Nom",
            "contact.form_email": "Email",
            "contact.form_subject": "Sujet",
            "contact.form_message": "Message",
            "contact.form_submit": "Envoyer",
            
            "footer.tagline": "Solutions innovantes pour la gestion et l'analyse des données de santé",
            "footer.quick_links": "Liens rapides",
            "footer.services": "Services",
            "footer.copyright": "2025 Health Metrica. Tous droits réservés.",
            //"footer.credit_prefix": "Conçu et développé par",
            
            // Messages de validation
            "validation.fillAllFields": "Veuillez remplir tous les champs",
            "validation.invalidEmail": "Veuillez entrer une adresse email valide",
            "validation.successMessage": "Votre message a été envoyé avec succès!",
            "validation.errorMessage": "Une erreur est survenue. Veuillez réessayer.",
            "validation.sendingError": "Une erreur est survenue lors de l'envoi du message."
        }
    },
    
    // Fonction pour obtenir une traduction
    t(key) {
        return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
    },
    
    // Fonction pour changer de langue
    changeLanguage(lang) {
        this.currentLang = lang;
        this.translatePage();
        document.documentElement.lang = lang;
        
        // Mettre à jour le sélecteur de langue dans l'interface
        this.updateLanguageSelector(lang);
    },
    
    // Fonction pour mettre à jour l'interface du sélecteur de langue
    updateLanguageSelector(lang) {
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        
        if (currentFlag && currentLang) {
            if (lang === 'fr') {
                currentFlag.textContent = '🇫🇷';
                currentLang.textContent = 'Français';
            } else {
                currentFlag.textContent = '🇺🇸';
                currentLang.textContent = 'English';
            }
        }
    },

    
    // Fonction pour traduire toute la page
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            if (element.dataset.i18nHtml === "true") {
    element.innerHTML = translation;
} else {
    element.textContent = translation;
}

        });
        
        // Mettre à jour les messages de validation
        if (window.updateFormValidationMessages) {
            window.updateFormValidationMessages(this.currentLang);
        }
        
        console.log('Page traduite en:', this.currentLang);
    },
    
    // Fonction d'initialisation
    init() {
        // Traduire la page au chargement
        this.translatePage();
        
        // Configurer le sélecteur de langue
        this.setupLanguageSelector();
        
        console.log('SimpleI18n initialisé avec la langue:', this.currentLang);
    },
    
    // Configuration du sélecteur de langue
    setupLanguageSelector() {
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (langBtn && langDropdown) {
            // Toggle dropdown
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                langDropdown.classList.toggle('show');
            });
            
            // Fermer dropdown si clic ailleurs
            document.addEventListener('click', () => {
                langDropdown.classList.remove('show');
            });
            
            // Gérer la sélection de langue
            langOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const selectedLang = option.getAttribute('data-lang');
                    this.changeLanguage(selectedLang);
                    langDropdown.classList.remove('show');
                });
            });
            
            // Mettre à jour l'affichage initial
            this.updateLanguageSelector(this.currentLang);
        }
    }
};

// Messages de validation multilingues pour script.js
window.getValidationMessages = function() {
    const lang = SimpleI18n.currentLang;
    return {
        fillAllFields: SimpleI18n.t('validation.fillAllFields'),
        invalidEmail: SimpleI18n.t('validation.invalidEmail'),
        successMessage: SimpleI18n.t('validation.successMessage'),
        errorMessage: SimpleI18n.t('validation.errorMessage'),
        sendingError: SimpleI18n.t('validation.sendingError')
    };
};

window.updateFormValidationMessages = function(lang) {
    // Fonction appelée quand la langue change
    console.log('Messages de validation mis à jour pour:', lang);
};

// Initialiser quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    SimpleI18n.init();
});

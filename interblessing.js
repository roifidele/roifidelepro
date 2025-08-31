// Initialize Vue app
new Vue({
    el: '#app',
    data: {
        activeEffect: null,
        activeAchievement: null,
        showScrollTop: false,
        contactForm: {
            name: '',
            email: '',
            message: ''
        },
        achievements: [
            {
                title: "Prix Julienne Lusenge",
                shortDesc: "Deuxième prix pour son action remarquable en droits humains.",
                fullDesc: "En décembre 2024, lors de la première édition du Prix Julienne Lusenge pour les droits humains, Blessing a reçu le deuxième prix pour son action remarquable. Elle considère cette distinction comme une validation de son engagement et un encouragement à persévérer.",
                year: "Décembre 2024",
                type: "women",
                iconColor: "text-women"
            },
            {
                title: "100 jeunes influents de la RDC",
                shortDesc: "Reconnue parmi les 100 jeunes les plus influents de la RDC en 2023.",
                fullDesc: "Elle a été reconnue parmi les 100 jeunes les plus influents de la RDC en 2023, dans la catégorie 'Défense des droits de la jeune fille, de la femme et de l'enfant', lors de l'initiative '100 jeunes pages d'espoir' orchestrée par Pourelle.info.",
                year: "2023",
                type: "children",
                iconColor: "text-children"
            },
            {
                title: "50 Femmes qui inspirent",
                shortDesc: "Nominée à l'édition des '50 Femmes qui inspirent' en 2025.",
                fullDesc: "En 2025, elle a été la plus jeune des nominées à l'édition des '50 Femmes qui inspirent', un prix décerné aux femmes congolaises et africaines par Pourelle.info.",
                year: "2025",
                type: "women",
                iconColor: "text-women"
            }
        ],
        galleryImages: [
            { 
                description: "Blessing lors d'une conférence sur les droits des femmes",
                type: "women"
            },
            { 
                description: "Distribution de kits d'hygiène menstruelle",
                type: "women"
            },
            { 
                description: "Participation à la formation MONUSCO contre la désinformation",
                type: "desinformation"
            },
            { 
                description: "Cérémonie de remise du Prix Julienne Lusenge",
                type: "women"
            },
            { 
                description: "Sensibilisation sur l'albinisme",
                type: "albinism"
            },
            { 
                description: "Atelier avec des jeunes filles",
                type: "children"
            }
        ]
    },
    mounted() {
        // Navbar scroll effect
        window.addEventListener('scroll', this.handleScroll);
        
        // Initialize scroll reveal animations
        this.initAnimations();
    },
    methods: {
        handleScroll() {
            // Show/hide scroll to top button
            this.showScrollTop = window.scrollY > 300;
            
            // Navbar background change on scroll
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        },
        smoothScroll(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        hoverEffect(effect) {
            this.activeEffect = effect;
        },
        resetEffect() {
            this.activeEffect = null;
        },
        toggleAchievement(index) {
            this.activeAchievement = this.activeAchievement === index ? null : index;
        },
        submitForm() {
            // Simple form validation and submission simulation
            if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
                alert('Merci pour votre message! Blessing vous répondra bientôt.');
                this.contactForm = {
                    name: '',
                    email: '',
                    message: ''
                };
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        },
        initAnimations() {
            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__fadeInUp');
                    }
                });
            }, observerOptions);
            
            // Observe all sections for animation
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('animate__animated');
                observer.observe(section);
            });
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});

// Add animate.css classes dynamically
const animateCSS = document.createElement('link');
animateCSS.rel = 'stylesheet';
animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
document.head.appendChild(animateCSS);
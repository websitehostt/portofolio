document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        });
    }

    // 2. AOS Init
    AOS.init({
        duration: 800, easing: 'ease-out-cubic', once: true, offset: 50
    });

    // 3. Typed.js
    if(document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ["Network & Data Enthusiast", "Frontend Web Developer", "Mahasiswa Universitas Bhayangkara"],
            typeSpeed: 40, backSpeed: 30, backDelay: 2000, startDelay: 500, loop: true, showCursor: true
        });
    }

    // 4. Particles.js (Jaringan Neural)
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00f2ea" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#7000ff", "opacity": 0.3, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" } },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } } }
        },
        "retina_detect": true
    });

    // 5. Filter Logic (Support Horizontal Scroll)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block'; // Tampilkan kembali
                    item.classList.add('aos-animate');
                } else {
                    item.style.display = 'none'; // Sembunyikan total
                }
            });
        });
    });

    // 6. Lightbox
    new SimpleLightbox('.certificate-gallery a', { overlayOpacity: 0.9, animationSpeed: 200 });

    // 7. Back to Top
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTopButton.classList.add('active');
        else backToTopButton.classList.remove('active');
    });
});
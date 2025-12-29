// Hero Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider img');
function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 3000); // Change slide every 3 seconds
showSlides(); // Initialize

// Menu Tab Filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Simulate sending (replace with real API, e.g., EmailJS or backend)
    alert(`Thank you, ${formData.get('name')}! Your message has been sent. We'll get back to you soon.`);
    e.target.reset();
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollInto}
    
    }
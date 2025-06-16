// Initialize AOS animations with complete configuration
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    offset: 120,
    mirror: true
});

// Mobile Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Hamburger animation
    hamburger.querySelectorAll('.line').forEach((line, index) => {
        if(index === 0) line.style.transform = hamburger.classList.contains('active') 
            ? 'translateY(9px) rotate(45deg)' 
            : '';
        if(index === 1) line.style.opacity = hamburger.classList.contains('active') 
            ? '0' 
            : '';
        if(index === 2) line.style.transform = hamburger.classList.contains('active') 
            ? 'translateY(-9px) rotate(-45deg)' 
            : '';
    });
}

// Event Listeners
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking links (mobile)
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) toggleMenu();
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 50 
        ? '0 5px 20px rgba(0,0,0,0.2)'
        : 'none';
});

// Set active page in navigation
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Contact Alert Function
function contactAlert() {
    alert("Thanks for your interest! I'll get back to you soon.");
}

// Dynamic Content Toggling
function showMore(section) {
    const content = document.getElementById(`${section}-more`);
    if(content) {
        content.style.maxHeight = content.classList.contains('visible') 
            ? '0' 
            : `${content.scrollHeight}px`;
        content.classList.toggle('visible');
    }
}

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Icon Button Functionality
document.querySelectorAll('.icon-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonGroup = this.closest('.button-group');
        const actionButton = buttonGroup.querySelector('.action-button');
        if(actionButton) actionButton.click();
    });
});

// Page Load Effects
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add("hide-nav");
    } else {
        // Scrolling up
        header.classList.remove("hide-nav");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

// Image Modal Functionality
document.querySelectorAll('.project-image-clickable').forEach(imgDiv => {
    imgDiv.addEventListener('click', function() {
        const imgSrc = imgDiv.getAttribute('data-img');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('imageModalImg');
        modalImg.src = imgSrc;
        modal.classList.add('open');
    });
    imgDiv.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            imgDiv.click();
        }
    });
});

document.getElementById('imageModalClose').addEventListener('click', function() {
    document.getElementById('imageModal').classList.remove('open');
});
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('open');
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('imageModal').classList.remove('open');
    }
});

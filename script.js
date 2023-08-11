// Get references to HTML elements
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const aboutSection = document.querySelector('section');

// Change header color when clicked
header.addEventListener('click', () => {
    header.style.backgroundColor = '#ffcc00';
});

// Highlight clicked navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Display alert when about section is hovered
aboutSection.addEventListener('mouseover', () => {
    alert('Hovered over the About section!');
});

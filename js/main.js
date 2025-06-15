// Simple smooth scrolling for internal links
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
}

// Simple form submission alert
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message!');
  form.reset();
});

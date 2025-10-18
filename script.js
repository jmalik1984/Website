const navToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#main-menu');
const yearEl = document.querySelector('#year');
const appointmentForm = document.querySelector('.appointment__form');
const appointmentFeedback = document.querySelector('.form-feedback');
const packageButtons = document.querySelectorAll('[data-package]');
const serviceSelect = document.querySelector('#service');
const newsletterForm = document.querySelector('.newsletter__form');
const newsletterFeedback = document.querySelector('.newsletter-feedback');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

packageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const packageName = button.getAttribute('data-package');
    if (serviceSelect) {
      serviceSelect.value = 'Package Booking';
    }
    appointmentFeedback.textContent = `Selected the ${packageName} package. Complete the form to confirm your booking.`;
    appointmentFeedback.style.color = 'var(--clr-primary-dark)';
    appointmentFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

if (appointmentForm) {
  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(appointmentForm);
    const name = formData.get('name');
    const service = formData.get('service');
    appointmentFeedback.textContent = `Thank you ${name}! We will call you shortly to confirm your ${service} appointment.`;
    appointmentFeedback.style.color = 'var(--clr-primary-dark)';
    appointmentForm.reset();
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (!emailInput?.value) {
      newsletterFeedback.textContent = 'Please enter a valid email address.';
      newsletterFeedback.style.color = '#c0392b';
      return;
    }

    newsletterFeedback.textContent = 'You are subscribed! Look out for our next beauty newsletter.';
    newsletterFeedback.style.color = 'var(--clr-primary-dark)';
    emailInput.value = '';
  });
}

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    const targetId = this.getAttribute('href');
    const target = targetId && document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

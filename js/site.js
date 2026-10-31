/**
 * site.js - Modern Vanilla JavaScript
 * Zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year dynamically
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Handle dynamic video modal
  const videoModal = document.getElementById('videoModal');
  if (videoModal) {
    const iframe = videoModal.querySelector('iframe');
    const modalTitle = videoModal.querySelector('.modal-title');
    if (iframe) {
      videoModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const title = button.getAttribute('data-bs-title');
        const src = button.getAttribute('data-bs-src');
        
        if (modalTitle) modalTitle.textContent = title;
        iframe.title = `Presentación: ${title}`;
        iframe.src = src;
      });

      videoModal.addEventListener('hidden.bs.modal', () => {
        iframe.src = '';
      });
    }
  }

  // Auto-close mobile navbar upon clicking any navigation link
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse && typeof bootstrap !== 'undefined') {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  }
});

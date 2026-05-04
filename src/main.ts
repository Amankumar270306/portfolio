import './style.css'


const injectHeader = () => {
  const header = document.createElement('header');
  header.className = 'site-header';
  
  const currentPath = window.location.pathname;
  
  
  const isActive = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/index.html' || currentPath === '/about.html')) {
      
      return 'active';
    }
    return currentPath === path ? 'active' : '';
  };

  header.innerHTML = `
    <a href="/about.html" class="logo">AMAN</a>
    <nav class="nav-links">
      <a href="/about.html" class="nav-link ${isActive('/about.html')}">ABOUT</a>
      <a href="/qualifications.html" class="nav-link ${isActive('/qualifications.html')}">QUALIFICATIONS</a>
      <a href="/projects.html" class="nav-link ${isActive('/projects.html')}">PROJECTS</a>
      <a href="/experience.html" class="nav-link ${isActive('/experience.html')}">EXPERIENCE</a>
      <a href="/contact.html" class="nav-link ${isActive('/contact.html')}">CONTACT</a>
    </nav>
    <a href="/contact.html" class="btn btn-gold">INQUIRE</a>
  `;
  document.body.prepend(header);
};


document.addEventListener('DOMContentLoaded', () => {
  
  const path = window.location.pathname;
  if (path.includes('about.html') || path === '/' || path === '/index.html') {
    document.body.classList.add('theme-light');
  } else {
    document.body.classList.add('theme-dark');
  }

  injectHeader();

  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-up').forEach((el) => {
    observer.observe(el);
  });
});

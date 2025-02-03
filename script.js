document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  menuToggle.addEventListener('click', () => navList.classList.toggle('active'));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          navList.classList.remove('active');
      });
  });

  // Theme toggling
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  body.setAttribute('data-theme', theme);

  themeToggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
  });

  // Font toggling
  const fontToggle = document.querySelector('.font-toggle');
  let isMonoFont = localStorage.getItem('preferredFont') === 'mono';
  document.documentElement.style.setProperty('--current-font', isMonoFont ? 'var(--mono-font)' : 'var(--primary-font)');

  fontToggle.addEventListener('click', () => {
      isMonoFont = !isMonoFont;
      document.documentElement.style.setProperty(
          '--current-font',
          isMonoFont ? 'var(--mono-font)' : 'var(--primary-font)'
      );
      localStorage.setItem('preferredFont', isMonoFont ? 'mono' : 'standard');
  });

  // Dropdown functionality
  document.querySelectorAll('.dropdown > a').forEach(trigger => {
      trigger.addEventListener('click', function(e) {
          e.preventDefault();
          const dropdown = this.parentElement;
          const isActive = dropdown.classList.contains('active');
          
          document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
          if (!isActive) dropdown.classList.add('active');
      });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', e => {
      if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
      }
  });

  // Close on Esc key
  document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
          document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
      }
  });
});
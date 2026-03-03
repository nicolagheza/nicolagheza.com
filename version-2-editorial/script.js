/* ============================================================
   EDITORIAL LUXURY - Interactive Scripts
   ============================================================ */

(function () {
  'use strict';

  // --------------------------------------------------------
  // IntersectionObserver: Scroll Reveal Animations
  // --------------------------------------------------------
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const className = el.classList.contains('reveal')
              ? 'reveal--visible'
              : el.classList.contains('reveal-left')
              ? 'reveal-left--visible'
              : el.classList.contains('reveal-right')
              ? 'reveal-right--visible'
              : 'reveal-scale--visible';

            el.classList.add(className);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // --------------------------------------------------------
  // Staggered reveal for groups
  // --------------------------------------------------------
  function initStaggerReveal() {
    const staggerGroups = document.querySelectorAll('.stagger');

    if (!staggerGroups.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child) => {
              if (child.classList.contains('reveal')) {
                child.classList.add('reveal--visible');
              } else if (child.classList.contains('reveal-left')) {
                child.classList.add('reveal-left--visible');
              } else if (child.classList.contains('reveal-right')) {
                child.classList.add('reveal-right--visible');
              } else if (child.classList.contains('reveal-scale')) {
                child.classList.add('reveal-scale--visible');
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    staggerGroups.forEach((group) => observer.observe(group));
  }

  // --------------------------------------------------------
  // Navigation: scroll-based styling
  // --------------------------------------------------------
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;
    let ticking = false;

    function updateNav() {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastScroll = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    });

    // Initialize on load
    updateNav();
  }

  // --------------------------------------------------------
  // Mobile Navigation Toggle
  // --------------------------------------------------------
  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('nav__toggle--open');
      links.classList.toggle('nav__links--open');
    });

    // Close on link click
    const navLinks = links.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        toggle.classList.remove('nav__toggle--open');
        links.classList.remove('nav__links--open');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        toggle.classList.remove('nav__toggle--open');
        links.classList.remove('nav__links--open');
      }
    });
  }

  // --------------------------------------------------------
  // Smooth parallax-like depth on hero
  // --------------------------------------------------------
  function initHeroParallax() {
    const heroContent = document.querySelector('.hero__content');
    if (!heroContent) return;

    let ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const scrollY = window.scrollY;
          const heroHeight = window.innerHeight;

          if (scrollY < heroHeight) {
            const progress = scrollY / heroHeight;
            heroContent.style.opacity = 1 - progress * 1.2;
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --------------------------------------------------------
  // Active navigation link highlighting
  // --------------------------------------------------------
  function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav__link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('nav__link--active');
      }
    });
  }

  // --------------------------------------------------------
  // Year in footer copyright
  // --------------------------------------------------------
  function initCopyrightYear() {
    const yearEl = document.querySelector('.footer__year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // --------------------------------------------------------
  // Initialize everything on DOM ready
  // --------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initStaggerReveal();
    initNavScroll();
    initMobileNav();
    initHeroParallax();
    initActiveNavLink();
    initCopyrightYear();
  });
})();

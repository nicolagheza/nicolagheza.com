/* ============================================
   ZEN - Subtle Scroll Reveals & Navigation
   Like morning mist clearing, slowly.
   ============================================ */

(function () {
  'use strict';

  // --- Scroll Reveal via IntersectionObserver ---
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');

    if (!elements.length) return;

    // If IntersectionObserver is not supported, show everything
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Mobile Navigation Toggle ---
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked
    var links = navLinks.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initNav();
  });
})();

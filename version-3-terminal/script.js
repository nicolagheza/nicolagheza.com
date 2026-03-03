/* ============================================
   TERMINAL / HACKER THEME - script.js
   Personal Website for Nicola Gheza
   ============================================ */

(function () {
  'use strict';

  /* --- CRT Flicker on Page Load --- */
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('crt-flicker');

    // Remove flicker class after animation completes
    setTimeout(function () {
      document.body.classList.remove('crt-flicker');
    }, 900);

    // Initialize typing animations
    initTypingAnimations();

    // Initialize terminal prompt time
    updatePromptTime();
  });

  /* --- Typing Animation Engine --- */
  function initTypingAnimations() {
    var elements = document.querySelectorAll('[data-typing]');

    elements.forEach(function (el, index) {
      var fullText = el.getAttribute('data-typing');
      var speed = parseInt(el.getAttribute('data-typing-speed')) || 40;
      var delay = parseInt(el.getAttribute('data-typing-delay')) || (index * 600);
      var cursor = el.getAttribute('data-typing-cursor') !== 'false';

      el.textContent = '';
      el.classList.add('typing-text', 'typing-active');

      // Create cursor element
      var cursorEl = null;
      if (cursor) {
        cursorEl = document.createElement('span');
        cursorEl.className = 'cursor';
        el.parentNode.insertBefore(cursorEl, el.nextSibling);
      }

      setTimeout(function () {
        typeText(el, fullText, speed, cursorEl);
      }, delay);
    });
  }

  function typeText(element, text, speed, cursorEl) {
    var i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed + Math.random() * 30);
      } else {
        element.classList.remove('typing-active');
        // Keep cursor blinking at the end, or remove after delay
        if (cursorEl) {
          setTimeout(function () {
            // Only remove cursor if there are other typing elements still going
            var stillTyping = document.querySelectorAll('.typing-active');
            if (stillTyping.length === 0) {
              // Keep the last cursor visible
            }
          }, 1000);
        }
      }
    }

    type();
  }

  /* --- Sequential Output Reveal --- */
  function initSequentialReveal() {
    var blocks = document.querySelectorAll('[data-reveal]');

    blocks.forEach(function (block, index) {
      var delay = parseInt(block.getAttribute('data-reveal-delay')) || (index * 200);
      block.style.opacity = '0';
      block.style.transform = 'translateY(4px)';
      block.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      setTimeout(function () {
        block.style.opacity = '1';
        block.style.transform = 'translateY(0)';
      }, delay);
    });
  }

  // Initialize reveal when DOM is ready
  document.addEventListener('DOMContentLoaded', initSequentialReveal);

  /* --- Update Prompt Timestamps --- */
  function updatePromptTime() {
    var timeElements = document.querySelectorAll('.prompt-time');
    var now = new Date();
    var timeStr = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });

    timeElements.forEach(function (el) {
      el.textContent = timeStr;
    });
  }

  /* --- Scroll-triggered animations for output blocks --- */
  function initScrollReveal() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    var scrollElements = document.querySelectorAll('[data-scroll-reveal]');
    scrollElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', initScrollReveal);

  /* --- Easter egg: Konami code --- */
  var konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a',
  ];
  var konamiIndex = 0;

  document.addEventListener('keydown', function (e) {
    if (e.key === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        activateMatrixMode();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateMatrixMode() {
    document.documentElement.style.setProperty('--scanline-opacity', '0.06');
    document.body.style.filter = 'hue-rotate(0deg) saturate(2)';

    setTimeout(function () {
      document.documentElement.style.setProperty('--scanline-opacity', '0.03');
      document.body.style.filter = '';
    }, 5000);
  }

  /* --- Glitch effect on hover for ASCII art --- */
  document.addEventListener('DOMContentLoaded', function () {
    var asciiArt = document.querySelector('.ascii-art');
    if (!asciiArt) return;

    asciiArt.addEventListener('mouseenter', function () {
      var original = this.textContent;
      var glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
      var text = original.split('');
      var iterations = 0;
      var maxIterations = 3;

      var glitchInterval = setInterval(function () {
        if (iterations >= maxIterations) {
          clearInterval(glitchInterval);
          asciiArt.textContent = original;
          return;
        }

        var glitched = text.map(function (char, index) {
          if (char === ' ' || char === '\n') return char;
          if (Math.random() > 0.9) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        });

        asciiArt.textContent = glitched.join('');
        iterations++;
      }, 80);

      setTimeout(function () {
        asciiArt.textContent = original;
      }, 400);
    });
  });
})();

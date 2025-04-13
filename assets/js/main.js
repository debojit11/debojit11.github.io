// Typewriter effect
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("typewriter-text").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
      
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  
  // Start the typewriter effect
  function startTypewriter() {
    let texts = [
      "Building intelligent NLP systems",
      "Transforming text into insights",
      "Crafting efficient backend solutions"
    ];
    let i = 0;
    
    function typeNextText() {
      if (i < texts.length) {
        typeWriter(texts[i], 0, function() {
          setTimeout(function() {
            document.getElementById("typewriter-text").innerHTML = '';
            i++;
            if (i >= texts.length) i = 0;
            typeNextText();
          }, 1000);
        });
      }
    }
    
    typeNextText();
  }
  
  // Initialize particles.js
  function initializeParticles() {
    if (window.particlesJS) {
      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#3a86ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3a86ff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        }
      });
    }
  }
  
  // Project filtering
  function initializeProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.dataset.filter;
        
        // Show/hide projects based on filter
        projectCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else if (card.dataset.category.includes(filterValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Theme toggle
  function initializeThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on user preference
    if (prefersDarkScheme.matches) {
      document.body.classList.add('dark-theme');
      document.documentElement.style.setProperty('--show-sun', 'block');
      document.documentElement.style.setProperty('--show-moon', 'none');
    } else {
      document.documentElement.style.setProperty('--show-sun', 'none');
      document.documentElement.style.setProperty('--show-moon', 'block');
    }
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Toggle icons
        if (document.body.classList.contains('dark-theme')) {
          document.documentElement.style.setProperty('--show-sun', 'block');
          document.documentElement.style.setProperty('--show-moon', 'none');
        } else {
          document.documentElement.style.setProperty('--show-sun', 'none');
          document.documentElement.style.setProperty('--show-moon', 'block');
        }
      });
    }
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    startTypewriter();
    initializeParticles();
    initializeProjectFilters();
    initializeThemeToggle();
  });
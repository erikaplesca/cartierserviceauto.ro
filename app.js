// Service data
const servicesData = {
  'mecanica': {
    name: 'Mecanică',
    icon: 'fas fa-wrench',
    description: 'Oferim servicii complete de mecanică auto - transmisii, sisteme de suspensie și multe altele. Ne ocupăm de diagnoza și repararea tuturor componentelor mecanice ale vehiculului dumneavoastră, de la probleme simple până la intervenții complexe.'
  },
  'diagnoza': {
    name: 'Diagnoză computerizată',
    icon: 'fas fa-laptop',
    description: 'Folosim echipamente de diagnoză computerizată de ultimă generație pentru a identifica rapid și precis problemele vehiculului dumneavoastră. Scanarea electronică ne permite să detectăm erori în toate sistemele auto: motor, transmisie, frâne, airbag, ABS și multe altele. Oferim rapoarte detaliate și soluții eficiente pentru toate problemele detectate.'
  },
  'piese-auto': {
    name: 'Piese auto',
    icon: 'fas fa-cogs',
    description: 'Garantăm compatibilitatea și calitatea tuturor pieselor comercializate. Colaborăm cu furnizori de renume pentru a vă oferi cel mai bun raport calitate-preț.'
  },
  'geometrie-roti': {
    name: 'Geometrie roți',
    icon: 'fas fa-life-ring',
    description: 'Serviciile de geometrie roți includ alinierea precisă a roților pentru siguranță maximă și uzură uniformă a anvelopelor. Folosim echipamente profesionale pentru măsurători exacte ale unghiurilor de convergență, divergență și înclinare. O geometrie corectă îmbunătățește manevrabilitatea vehiculului, reduce consumul de combustibil și prelungește durata de viață a anvelopelor.'
  },
  'schimb-ulei': {
    name: 'Schimb ulei cutia automată',
    icon: 'fas fa-oil-can',
    description: 'Efectuăm schimbul profesional al uleiului din cutia de viteze automată folosind uleiuri de calitate și tehnici recomandate de producători. Serviciu esențial pentru longevitatea transmisiei, recomandat la intervale regulate. Verificăm și înlocuim filtrele, curățăm sistemul și efectuăm teste pentru funcționarea optimă a transmisiei automate.'
  },
  'electrica': {
    name: 'Electrică',
    icon: 'fas fa-bolt',
    description: 'Servicii complete de electrică auto: reparații sisteme electrice, înlocuire baterii, înlocuire alternatoare, starter, sisteme de iluminat și toate componentele electrice ale vehiculului. Diagnosticăm și reparăm probleme complexe din sistemul electric, de la probleme simple de cablaj până la defecțiuni ale centralelor electronice. Folosim echipamente specializate pentru diagnoza precisă.'
  },
  'verificare-frane': {
    name: 'Verificare sistem frânare',
    icon: 'fas fa-shield-alt',
    description: 'Efectuăm verificări complete ale sistemului de frânare: inspecția plăcuțelor, discurilor, tamburilor, lichidului de frână și a tuturor componentelor. Siguranța dumneavoastră este prioritatea noastră. Oferim servicii de înlocuire plăcuțe și discuri de frână, purjarea sistemului, verificarea pompei de frână și a servofrânei. Recomandăm verificări regulate pentru siguranță maximă.'
  },
  'ac-clima': {
    name: 'AC și clima freon',
    icon: 'fas fa-snowflake',
    description: 'Oferim servicii complete pentru sistemele de climatizare: reîncărcare freon, curățare sisteme, înlocuire filtre, reparații compresoare și toate componentele sistemului de aer condiționat. Diagnosticăm scurgeri, verificăm presiunea sistemului și efectuăm întreținerea preventivă pentru funcționarea optimă a climatizării. Lucrăm cu toate tipurile de sisteme AC auto.'
  },
  'reglaj-directie': {
    name: 'Reglaj direcție',
    icon: 'fas fa-steering-wheel',
    description: 'Servicii de reglaj și ajustare a sistemului de direcție pentru manevrabilitate optimă și siguranță în trafic. Verificăm și ajustăm toate componentele sistemului de direcție: caseta de direcție, bielele, rotulele și sistemul de asistare. Diagnosticăm problemele de direcție și oferim soluții profesionale pentru o manevrare precisă și confortabilă.'
  }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollEffects();
  initAnimations();
  initBackToTop();
  initSmoothScrolling();
  initReviewsSlider();
  initServiceModals();
  initServiceNavigation();
});

// // Navigation functionality
// function initNavigation() {
//   const navToggle = document.getElementById('navToggle');
//   const nav = document.getElementById('nav');
//   const navLinks = document.querySelectorAll('.nav-link');
//   const dropdowns = document.querySelectorAll('.dropdown');

//   // Mobile menu toggle
//   if (navToggle && nav) {
//     navToggle.addEventListener('click', function() {
//       navToggle.classList.toggle('active');
//       nav.classList.toggle('active');
      
//       // Prevent body scroll when menu is open
//       document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
//     });

//     // Close mobile menu when clicking on a link
//     navLinks.forEach(link => {
//       link.addEventListener('click', function() {
//         navToggle.classList.remove('active');
//         nav.classList.remove('active');
//         document.body.style.overflow = '';
//       });
//     });

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(e) {
//       if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
//         navToggle.classList.remove('active');
//         nav.classList.remove('active');
//         document.body.style.overflow = '';
//       }
//     });
//   }

//   // Handle dropdown menus on mobile
//   dropdowns.forEach(dropdown => {
//     const dropdownLink = dropdown.querySelector('.nav-link');
//     const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
//     if (dropdownLink && dropdownMenu) {
//       dropdownLink.addEventListener('click', function(e) {
//         if (window.innerWidth <= 768) {
//           e.preventDefault();
//           dropdownMenu.classList.toggle('active');
//         }
//       });
//     }
//   });

//   // Update active navigation link based on scroll position
//   updateActiveNavLink();
// }
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Function to close mobile menu
    function closeMobileMenu() {
        if (navToggle && nav) {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('active');
                }
                dropdown.classList.remove('active');
            });
        }
    }

    // Mobile menu toggle
    if (navToggle && nav) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const isActive = nav.classList.contains('active');
            
            if (isActive) {
                // Close menu
                navToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                
                // Close all dropdowns when menu closes
                dropdowns.forEach(dropdown => {
                    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                    if (dropdownMenu) {
                        dropdownMenu.classList.remove('active');
                    }
                });
            } else {
                // Open menu
                navToggle.classList.add('active');
                nav.classList.add('active');
                document.body.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Handle dropdown menus on mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownLink && dropdownMenu) {
            let lastInteractionTime = 0;
            const INTERACTION_DELAY = 300; // ms
            
            // Handle dropdown toggle
            const toggleDropdown = function(e, fromTouch) {
                const now = Date.now();
                
                // Prevent rapid double-firing
                if (now - lastInteractionTime < INTERACTION_DELAY) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
                
                // Only handle on mobile when menu is open
                if (window.innerWidth <= 768 && nav && nav.classList.contains('active')) {
                    e.preventDefault();
                    e.stopPropagation();
                    lastInteractionTime = now;
                    
                    // Toggle dropdown
                    const isActive = dropdownMenu.classList.contains('active');
                    dropdownMenu.classList.toggle('active');
                    dropdown.classList.toggle('active'); // Also toggle on parent for CSS arrow rotation
                    
                    // Close other dropdowns if opening this one
                    if (!isActive) {
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                                if (otherMenu) {
                                    otherMenu.classList.remove('active');
                                }
                                otherDropdown.classList.remove('active');
                            }
                        });
                    }
                    
                    return false;
                }
            };
            
            // Handle touch events for mobile (primary)
            dropdownLink.addEventListener('touchend', function(e) {
                if (window.innerWidth <= 768 && nav && nav.classList.contains('active')) {
                    toggleDropdown(e, true);
                }
            }, { passive: false });
            
            // Handle click events (fallback and desktop)
            dropdownLink.addEventListener('click', function(e) {
                toggleDropdown(e, false);
            });
        }
    });

    // Close mobile menu when clicking on a regular link (not dropdown triggers)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close menu for dropdown triggers on mobile - they handle their own clicks
            const isDropdownLink = this.closest('.dropdown');
            if (isDropdownLink && window.innerWidth <= 768) {
                // Dropdown link already handled above, don't close menu
                return;
            }
            
            // Close menu for regular links
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Close mobile menu when clicking on overlay (outside menu)
    if (nav) {
        // Use a single delegated event listener for better performance
        document.addEventListener('click', function(e) {
            // Only handle if menu is open and we're on mobile
            if (window.innerWidth <= 768 && nav && nav.classList.contains('active')) {
                // Don't close if clicking on nav toggle (it handles its own toggle)
                if (navToggle && navToggle.contains(e.target)) {
                    return;
                }
                
                // Don't close if clicking inside the menu itself
                if (nav.contains(e.target)) {
                    // Allow dropdown links to handle their own clicks
                    if (e.target.closest('.dropdown .nav-link')) {
                        return;
                    }
                    // For other nav links, they will close the menu (handled in navLinks forEach above)
                    return;
                }
                
                // Click is outside nav (on overlay) - close menu
                closeMobileMenu();
            }
        });
        
        // Also close menu when clicking on the overlay (::before pseudo-element)
        // Since we can't attach events to pseudo-elements, we handle it via the document click above
    }

    // Close mobile menu when pressing Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav && nav.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Update active navigation link based on scroll position
    updateActiveNavLink();
}

// Scroll effects
function initScrollEffects() {
  const header = document.getElementById('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class to header
    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Update active navigation link
    updateActiveNavLink();
    
    lastScrollTop = scrollTop;
  });
}

// Update active navigation link based on current section
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  const scrollPosition = window.pageYOffset + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Animation on scroll
function initAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Back to top button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        e.preventDefault();
        
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Reviews slider functionality
function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    
    if (!track || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll('.review-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();
    let autoPlayInterval;

    // Funcție pentru a determina câte carduri se afișează
    function getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 768) return 1;
        if (width <= 1024) return 2;
        return 2;
    }

    // Actualizează la resize
    function handleResize() {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            // Ajustează indexul dacă e necesar
            if (currentIndex >= totalCards - cardsPerView) {
                currentIndex = Math.max(0, totalCards - cardsPerView);
            }
            updateSlider();
        }
    }

    // Actualizează sliderul
    function updateSlider() {
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        currentIndex = Math.min(currentIndex, maxIndex);
        
        const translateX = -(currentIndex * (100 / cardsPerView));
        track.style.transform = `translateX(${translateX}%)`;
        
        // Actualizează starea butoanelor
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.disabled = currentIndex === 0;
        
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    // Slide următor
    function nextSlide() {
        const maxIndex = totalCards - cardsPerView;
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop la început
        }
        updateSlider();
    }

    // Slide anterior
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.max(0, totalCards - cardsPerView); // Loop la sfârșit
        }
        updateSlider();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Resize handler cu debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Touch support pentru mobile
    let startX = 0;
    let moveX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoPlay();
    }, { passive: true });

    track.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        moveX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', function() {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - moveX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startAutoPlay();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Pause auto-play pe hover
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // Inițializare
    updateSlider();
    startAutoPlay();
}


// Service modals functionality
function initServiceModals() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalIcon = document.getElementById('modalIcon');
  const modalDescription = document.getElementById('modalDescription');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBack = document.getElementById('modalBack');
  const serviceButtons = document.querySelectorAll('.service-details-btn');
  
  if (!modal) return;
  
  // Open modal
  function openModal(serviceId) {
    const service = servicesData[serviceId];
    if (!service) return;
    
    modalTitle.textContent = service.name;
    modalIcon.className = service.icon;
    modalDescription.textContent = service.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    modalClose.focus();
  }
  
  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Event listeners
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceId = this.getAttribute('data-service');
      openModal(serviceId);
    });
  });
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  modalBack.addEventListener('click', closeModal);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Contact button in modal
  const modalContact = modal.querySelector('.modal-contact');
  if (modalContact) {
    modalContact.addEventListener('click', function() {
      closeModal();
      // Smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}

// Service navigation from dropdown
function initServiceNavigation() {
  const dropdownLinks = document.querySelectorAll('.dropdown-link');
  
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service');
      
      if (servicesData[serviceId]) {
        // Close mobile menu if open
        const nav = document.getElementById('nav');
        const navToggle = document.getElementById('navToggle');
        
        if (nav && navToggle) {
          nav.classList.remove('active');
          navToggle.classList.remove('active');
          document.body.style.overflow = '';
        }
        
        // Scroll to services section first, then open modal
        const servicesSection = document.getElementById('servicii');
        if (servicesSection) {
          const headerHeight = document.getElementById('header').offsetHeight;
          const targetPosition = servicesSection.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Open modal after scroll
          setTimeout(() => {
            const modal = document.getElementById('serviceModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalIcon = document.getElementById('modalIcon');
            const modalDescription = document.getElementById('modalDescription');
            
            if (modal && modalTitle && modalIcon && modalDescription) {
              const service = servicesData[serviceId];
              modalTitle.textContent = service.name;
              modalIcon.className = service.icon;
              modalDescription.textContent = service.description;
              
              modal.classList.add('active');
              document.body.style.overflow = 'hidden';
            }
          }, 800);
        }
      }
    });
  });
}

// Service card interactions
function initServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    // Stagger animation delay
    card.style.transitionDelay = `${index * 0.1}s`;
    
    // Keyboard navigation
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const button = this.querySelector('.service-details-btn');
        if (button) {
          button.click();
        }
      }
    });
  });
}

// Phone number formatting
function formatPhoneNumber(input) {
  // Remove all non-numeric characters
  let number = input.value.replace(/\D/g, '');
  
  // Format Romanian phone number
  if (number.length <= 10) {
    if (number.length >= 4) {
      number = number.replace(/(\d{4})(\d{0,3})(\d{0,3})/, '$1 $2 $3').trim();
    }
  }
  
  input.value = number;
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close" aria-label="Închide notificarea">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles for notification
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
    color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
    border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1070;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  // Add notification to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeButton = notification.querySelector('.notification-close');
  closeButton.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Handle window resize
window.addEventListener('resize', debounce(() => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  
  // Reset mobile menu on resize
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset dropdown styles
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
      menu.classList.remove('active');
    });
  }
}, 250));

// Accessibility improvements
document.addEventListener('keydown', function(e) {
  // Close mobile menu on Escape key
  if (e.key === 'Escape') {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  }
  
  // Navigate through service cards with arrow keys
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    const activeElement = document.activeElement;
    if (activeElement.classList.contains('service-card')) {
      const serviceCards = Array.from(document.querySelectorAll('.service-card'));
      const currentIndex = serviceCards.indexOf(activeElement);
      let nextIndex;
      
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % serviceCards.length;
      } else {
        nextIndex = (currentIndex - 1 + serviceCards.length) % serviceCards.length;
      }
      
      serviceCards[nextIndex].focus();
      e.preventDefault();
    }
  }
});

// Initialize service cards
document.addEventListener('DOMContentLoaded', initServiceCards);

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if there are lazy images
if (document.querySelectorAll('img[data-src]').length > 0) {
  initLazyLoading();
}

// Enhanced error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
  // Could show user-friendly error message here
});

// Console message for developers
console.log('%cCartier Service Auto Website', 'color: #bb2b21; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ for COPLESERV Piatra Neamț', 'color: #666; font-size: 12px;');

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    servicesData,
    initNavigation,
    initReviewsSlider,
    initServiceModals,
    updateActiveNavLink,
    showNotification,
    debounce
  };
}
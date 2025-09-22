// Header Navigation Script with Enhanced Animations
class HeaderNavigation {
    constructor() {
      this.header = document.querySelector(".header")
      this.mobileToggle = document.getElementById("mobile-toggle")
      this.mobileMenu = document.getElementById("mobile-menu")
      this.navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")
      this.sections = []
      this.isScrolling = false
      this.scrollTimeout = null
  
      this.init()
    }
  
    init() {
      this.setupSections()
      this.setupScrollEffects()
      this.setupMobileMenu()
      this.setupSmoothScroll()
      this.setupActiveNavigation()
      this.setupAnimationEffects()
      this.preloadAnimations()
    }
  
    setupSections() {
      // Get all sections based on navigation links
      this.navLinks.forEach((link) => {
        const href = link.getAttribute("href")
        if (href && href.startsWith("#")) {
          const sectionId = href.substring(1)
          let section
  
          // Handle different section selectors
          if (sectionId === "home") {
            section = document.querySelector(".hero-section")
          } else {
            section =
              document.getElementById(sectionId) ||
              document.querySelector(`[id="${sectionId}"]`) ||
              document.querySelector(`section:has(#${sectionId}-heading)`)
          }
  
          if (section) {
            this.sections.push({
              id: sectionId,
              element: section,
              link: link,
            })
          }
        }
      })
    }
  
    setupScrollEffects() {
      let lastScrollY = window.scrollY
  
      // Throttle function para optimizar rendimiento
      const throttle = (func, wait) => {
        let timeout
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout)
            func(...args)
          }
          clearTimeout(timeout)
          timeout = setTimeout(later, wait)
        }
      }
  
      const handleScroll = () => {
        const currentScrollY = window.scrollY
  
        // Header background effect
        if (currentScrollY > 50) {
          this.header.classList.add("scrolled")
        } else {
          this.header.classList.remove("scrolled")
        }
  
        lastScrollY = currentScrollY
      }
  
      window.addEventListener("scroll", throttle(handleScroll, 50))
    }
  
    setupMobileMenu() {
      if (this.mobileToggle && this.mobileMenu) {
        this.mobileToggle.addEventListener("click", () => {
          this.toggleMobileMenu()
        })
  
        // Close mobile menu when clicking on links
        this.mobileMenu.querySelectorAll(".mobile-nav-link").forEach((link) => {
          link.addEventListener("click", () => {
            this.closeMobileMenu()
          })
        })
  
        // Close mobile menu when clicking outside
        document.addEventListener("click", (e) => {
          if (!this.header.contains(e.target) && this.mobileMenu.classList.contains("show")) {
            this.closeMobileMenu()
          }
        })
      }
    }
  
    toggleMobileMenu() {
      const isOpen = this.mobileMenu.classList.contains("show")
  
      if (isOpen) {
        this.closeMobileMenu()
      } else {
        this.openMobileMenu()
      }
    }
  
    openMobileMenu() {
      this.mobileMenu.classList.add("show")
      this.mobileToggle.classList.add("active")
      this.mobileToggle.setAttribute("aria-expanded", "true")
  
      // Prevent body scroll
      document.body.style.overflow = "hidden"
    }
  
    closeMobileMenu() {
      this.mobileMenu.classList.remove("show")
      this.mobileToggle.classList.remove("active")
      this.mobileToggle.setAttribute("aria-expanded", "false")
  
      // Restore body scroll
      document.body.style.overflow = ""
    }
  
    // Función de scroll suave personalizado con easing mejorado
    smoothScrollTo(target, duration = 1200) {
      const targetElement = typeof target === 'string' ? document.querySelector(target) : target
      if (!targetElement) return Promise.resolve()
      
      return new Promise((resolve) => {
        const targetPosition = targetElement.offsetTop - this.header.offsetHeight - 20
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        let startTime = null
        
        // Función de easing personalizada (ease-in-out-cubic)
        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }
        
        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)
          const ease = easeInOutCubic(progress)
          
          window.scrollTo(0, startPosition + distance * ease)
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          } else {
            resolve()
          }
        }
        
        requestAnimationFrame(animation)
      })
    }
  
    setupSmoothScroll() {
      this.navLinks.forEach((link) => {
        link.addEventListener("click", async (e) => {
          const href = link.getAttribute("href")
  
          if (href && href.startsWith("#")) {
            e.preventDefault()
  
            // Añadir animaciones de clic
            this.addClickAnimation(link)
  
            const targetId = href.substring(1)
            let targetSection
  
            if (targetId === "home") {
              targetSection = document.querySelector(".hero-section")
            } else {
              targetSection =
                document.getElementById(targetId) || 
                document.querySelector(`section:has(#${targetId}-heading)`)
            }
  
            if (targetSection) {
              // Añadir clase de scroll en progreso
              link.classList.add('scrolling')
              this.isScrolling = true
  
              // Realizar scroll suave
              await this.smoothScrollTo(targetSection)
              
              // Limpiar estados después del scroll
              setTimeout(() => {
                link.classList.remove('scrolling')
                this.isScrolling = false
              }, 100)
  
              // Actualizar navegación activa
              this.setActiveNavigation(targetId)
            }
          }
        })
      })
    }
  
    // Añadir animaciones de clic
    addClickAnimation(link) {
      // Efecto de clic inmediato
      link.classList.add('clicking')
      
      // Remover después de la animación
      setTimeout(() => {
        link.classList.remove('clicking')
      }, 300)
    }
  
    // Crear efecto de partículas al hacer clic
    createClickEffect(e) {
      const particles = []
      const particleCount = 6
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: 4px;
          height: 4px;
          background: #22c55e;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          animation: sparkle 0.8s ease-out forwards;
        `
        
        // Dirección aleatoria para cada partícula
        const angle = (Math.PI * 2 * i) / particleCount
        const velocity = 20 + Math.random() * 20
        const dx = Math.cos(angle) * velocity
        const dy = Math.sin(angle) * velocity
        
        particle.style.setProperty('--dx', `${dx}px`)
        particle.style.setProperty('--dy', `${dy}px`)
        
        document.body.appendChild(particle)
        particles.push(particle)
        
        setTimeout(() => {
          particle.remove()
        }, 800)
      }
    }
  
    setupActiveNavigation() {
      const observerOptions = {
        threshold: 0.3,
        rootMargin: `-${this.header.offsetHeight + 50}px 0px -50% 0px`,
      }
  
      const observer = new IntersectionObserver((entries) => {
        // Solo actualizar si no estamos haciendo scroll programático
        if (!this.isScrolling) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionData = this.sections.find((s) => s.element === entry.target)
              if (sectionData) {
                this.setActiveNavigation(sectionData.id)
              }
            }
          })
        }
      }, observerOptions)
  
      // Observe all sections
      this.sections.forEach((section) => {
        observer.observe(section.element)
      })
    }
  
    setActiveNavigation(activeId) {
      // Remove active class from all links
      this.navLinks.forEach((link) => {
        link.classList.remove("active")
      })
  
      // Add active class to current section links
      this.navLinks.forEach((link) => {
        const href = link.getAttribute("href")
        if (href === `#${activeId}` || (activeId === 'home' && href === '#')) {
          link.classList.add("active")
        }
      })
    }
  
    // Configurar efectos de animación adicionales
    setupAnimationEffects() {
      this.navLinks.forEach(link => {
        // Efecto hover mejorado
        link.addEventListener('mouseenter', () => {
          if (!link.classList.contains('scrolling')) {
            link.style.transform = 'translateY(-2px) scale(1.02)'
          }
        })
        
        link.addEventListener('mouseleave', () => {
          if (!link.classList.contains('scrolling')) {
            link.style.transform = ''
          }
        })
        
        // Efecto de partículas al hacer clic
        link.addEventListener('click', (e) => {
          if (link.getAttribute('href')?.startsWith('#')) {
            this.createClickEffect(e)
          }
        })
        
        // Efecto de focus mejorado para accesibilidad
        link.addEventListener('focus', () => {
          link.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.5)'
        })
        
        link.addEventListener('blur', () => {
          link.style.boxShadow = ''
        })
      })
    }
  
    // Precargar animaciones para mejor rendimiento
    preloadAnimations() {
      const style = document.createElement('style')
      style.textContent = `
        .nav-link, .mobile-nav-link {
          will-change: transform, background-color, box-shadow;
        }
        
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(0) translate(0, 0);
          }
          50% {
            opacity: 0.8;
            transform: scale(1) translate(var(--dx, 0), var(--dy, 0));
          }
          100% {
            opacity: 0;
            transform: scale(0) translate(calc(var(--dx, 0) * 2), calc(var(--dy, 0) * 2));
          }
        }
      `
      document.head.appendChild(style)
    }
  
    // Método para limpiar listeners (útil para SPA)
    destroy() {
      // Limpiar event listeners y observers si es necesario
      this.navLinks.forEach(link => {
        link.style.transform = ''
        link.style.boxShadow = ''
        link.classList.remove('clicking', 'scrolling', 'active')
      })
    }
  
    // Método público para actualizar secciones dinámicamente
    updateSections() {
      this.sections = []
      this.setupSections()
      this.setupActiveNavigation()
    }
  
    // Método público para scroll programático desde fuera
    async scrollToSection(sectionId) {
      const section = this.sections.find(s => s.id === sectionId)
      if (section) {
        this.isScrolling = true
        await this.smoothScrollTo(section.element)
        this.setActiveNavigation(sectionId)
        setTimeout(() => {
          this.isScrolling = false
        }, 100)
      }
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    window.headerNavigation = new HeaderNavigation()
  })
  
  // Handle page navigation (for Astro)
  document.addEventListener("astro:page-load", () => {
    // Limpiar instancia anterior si existe
    if (window.headerNavigation) {
      window.headerNavigation.destroy()
    }
    window.headerNavigation = new HeaderNavigation()
  })
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (window.headerNavigation) {
      window.headerNavigation.destroy()
    }
  })
// Debounce function for performance optimization
function debounce(func, wait) {
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

// Initialize project card interactions
function initProjectCards() {
  const cards = document.querySelectorAll(".project-card")

  cards.forEach((card) => {
    const toggleBtn = card.querySelector(".toggle-description")
    const shortDesc = card.querySelector(".description-short")
    const fullDesc = card.querySelector(".description-full")
    const toggleText = card.querySelector(".toggle-text")
    const toggleIcon = toggleBtn?.querySelector("svg")

    if (!toggleBtn || !shortDesc || !fullDesc) return

    // Toggle description with smooth animation
    toggleBtn.addEventListener("click", () => {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true"

      // Update ARIA attribute
      toggleBtn.setAttribute("aria-expanded", !isExpanded)

      // Toggle visibility with animation
      if (isExpanded) {
        fullDesc.classList.add("hidden")
        shortDesc.classList.remove("hidden")
        toggleText.textContent = "Ver detalles"
        toggleIcon?.style.setProperty("transform", "rotate(0deg)")
      } else {
        shortDesc.classList.add("hidden")
        fullDesc.classList.remove("hidden")
        toggleText.textContent = "Ver menos"
        toggleIcon?.style.setProperty("transform", "rotate(180deg)")
      }
    })

    // Keyboard navigation support
    toggleBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggleBtn.click()
      }
    })
  })
}

// Intersection Observer for lazy animations
function initIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(".project-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })
}

// Optimize scroll performance
let ticking = false
function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Add scroll-based effects here if needed
      ticking = false
    })
    ticking = true
  }
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initProjectCards()
    initIntersectionObserver()
  })
} else {
  initProjectCards()
  initIntersectionObserver()
}

// Add optimized scroll listener
window.addEventListener("scroll", debounce(handleScroll, 100), { passive: true })

// Preload critical images on hover for better UX
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener(
    "mouseenter",
    () => {
      const link = card.querySelector("a[href]")
      if (link) {
        // Prefetch the link for faster navigation
        const prefetchLink = document.createElement("link")
        prefetchLink.rel = "prefetch"
        prefetchLink.href = link.href
        document.head.appendChild(prefetchLink)
      }
    },
    { once: true },
  )
})

document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero-section")
  if (heroSection instanceof HTMLElement) {
    heroSection.style.opacity = "0"
    heroSection.style.transform = "translateY(20px)"
    heroSection.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"

    setTimeout(() => {
      heroSection.style.opacity = "1"
      heroSection.style.transform = "translateY(0)"
    }, 100)
  }

  const techPills = document.querySelectorAll(".tech-pill")
  techPills.forEach((pill, index) => {
    if (pill instanceof HTMLElement) {
      pill.style.opacity = "0"
      pill.style.transform = "translateY(10px)"
      pill.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"

      setTimeout(
        () => {
          pill.style.opacity = "1"
          pill.style.transform = "translateY(0)"
        },
        300 + index * 100,
      )
    }
  })
})

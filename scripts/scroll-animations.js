/**
 * Scroll Animations Module
 * Handles intersection observer-based fade-in animations for page sections
 */

// Initialize scroll-based reveal animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Only animate once for performance
      }
    });
  }, observerOptions);

  // Observe all fade-in sections
  document.querySelectorAll(".fade-in-section").forEach((section) => {
    // Check if element is already in viewport on load
    const rect = section.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      // Immediately show elements that are in viewport on load
      section.classList.add("is-visible");
    } else {
      // Observe elements that are not in viewport
      observer.observe(section);
    }
  });
}

// Export function for use in main app
window.ScrollAnimations = {
  initializeScrollAnimations,
};

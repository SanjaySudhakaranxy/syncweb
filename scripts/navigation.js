/**
 * Navigation Module
 * Handles navbar scroll effects, mobile menu functionality, and hybrid navigation
 */

// Smooth scroll to section
function smoothScrollToSection(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Handle hybrid navigation for About link
function initializeHybridNavigation() {
  const aboutLinks = document.querySelectorAll(
    "#about-link, #mobile-about-link",
  );

  aboutLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Check if we're on the home page
      const currentPage = window.location.pathname;
      const isHomePage =
        currentPage === "/" ||
        currentPage.endsWith("/index.html") ||
        currentPage === "/syncweb/" ||
        currentPage.endsWith("/syncweb/index.html");

      if (isHomePage) {
        // We're on home page, scroll to About section
        smoothScrollToSection("about");
      } else {
        // We're on another page, navigate to home page with hash
        window.location.href = "index.html#about";
      }
    });
  });

  // Handle logo click behavior on homepage
  const logoLinks = document.querySelectorAll('a[href="index.html"]');
  logoLinks.forEach((logo) => {
    logo.addEventListener("click", (e) => {
      const currentPage = window.location.pathname;
      const isHomePage =
        currentPage === "/" ||
        currentPage.endsWith("/index.html") ||
        currentPage === "/syncweb/" ||
        currentPage.endsWith("/syncweb/index.html");

      if (isHomePage) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  });

  // Always start at the top of the page when homepage loads
  // Remove any hash from URL to ensure homepage hero is shown first
  if (window.location.hash) {
    // Clear the hash without causing a page reload
    history.replaceState(null, null, window.location.pathname);
    // Scroll to top to show hero section
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// Navbar scroll effect - changes nav appearance on scroll
function initializeNavbarScrollEffect() {
  const nav = document.getElementById("main-nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      nav.classList.remove("pt-6", "pb-6");
      nav.classList.add("pt-4", "pb-4");
    } else {
      nav.classList.remove("scrolled");
      nav.classList.add("pt-6", "pb-6");
      nav.classList.remove("pt-4", "pb-4");
    }
  });
}

// Mobile menu toggle functionality
function initializeMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const icon = btn.querySelector("i");
  if (!btn || !menu) return;

  const mobileLinks = document.querySelectorAll(".mobile-link");
  let isMenuOpen = false;

  // Toggle mobile menu on button click
  btn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menu.classList.remove("opacity-0", "pointer-events-none");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.add("opacity-0", "pointer-events-none");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.style.overflow = "auto";
    }
  });

  // Close mobile menu when a navigation link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false;
      menu.classList.add("opacity-0", "pointer-events-none");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.style.overflow = "auto";
    });
  });
}

// Export functions for use in main app
window.Navigation = {
  initializeNavbarScrollEffect,
  initializeMobileMenu,
  initializeHybridNavigation,
};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initializeHybridNavigation();
  initializeNavbarScrollEffect();
  initializeMobileMenu();
});

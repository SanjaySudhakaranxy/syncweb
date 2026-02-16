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

// Mobile menu toggle — controls .active class (display:none/flex via CSS)
function initializeMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  const icon = btn.querySelector("i");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  let isMenuOpen = false;

  function closeMenu() {
    isMenuOpen = false;
    menu.classList.remove("active");
    if (icon) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle("active", isMenuOpen);
    if (icon) {
      icon.classList.toggle("fa-bars", !isMenuOpen);
      icon.classList.toggle("fa-times", isMenuOpen);
    }
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  });

  // Close menu when clicking the close button area (top-right)
  menu.addEventListener("click", (e) => {
    const rect = menu.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if click is in top-right close button area (60px from each edge)
    if (x > rect.width - 60 && y < 60) {
    link.addEventListener("click", () => {
      closeMenu();
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

/**
 * Ultra-smooth page transition effects
 * - GPU-accelerated fade + translateY
 * - Respects prefers-reduced-motion
 * - Non-destructive: preserves all routing logic
 * - 250ms duration for zero-lag feel
 */
function initializePageTransitionEffects() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;

  const body = document.body;
  if (!body) return;

  // Add transition class and start with enter state
  body.classList.add("page-transition", "page-enter");

  // Trigger enter animation on next frame (GPU-accelerated)
  requestAnimationFrame(() => {
    body.classList.remove("page-enter");
  });

  // Intercept internal navigation for smooth exit transitions
  document.addEventListener(
    "click",
    (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      // Skip external links, downloads, and no-transition links
      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.hasAttribute("data-no-transition")
      )
        return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return; // Allow hash navigation

      // Prevent page transitions from interfering with mobile menu
      if (
        link.closest("#mobile-menu") ||
        link.closest("#mobile-menu-btn") ||
        link.classList.contains("mobile-link")
      ) {
        return;
      }

      // Handle only same-origin internal navigation
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;

        e.preventDefault();
        body.classList.add("page-exit");

        // Navigate after exit animation (matches CSS duration)
        setTimeout(() => {
          window.location.href = url.href;
        }, 250);
      } catch (err) {
        // Fallback to default navigation on URL parsing errors
        return;
      }
    },
    { passive: false },
  );
}

// Initialize transition effects safely after other nav inits
document.addEventListener("DOMContentLoaded", () => {
  initializePageTransitionEffects();
});

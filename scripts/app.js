/**
 * Main Application Entry Point
 * Initializes all modules and functionality when the DOM is loaded
 */

// Postcard Stack Animation
function initializePostcardStack() {
  const postcardContainer = document.getElementById("postcard-stack");
  if (!postcardContainer) return;

  const postcards = postcardContainer.querySelectorAll(".postcard");
  if (postcards.length === 0) return;

  const positions = [
    { z: 4, x: -3, y: 2, rotate: -1.5 },
    { z: 3, x: 12, y: -4, rotate: 4.2 },
    { z: 2, x: -8, y: 18, rotate: -3.7 },
    { z: 1, x: 20, y: 28, rotate: 2.8 },
  ];

  let currentOrder = [0, 1, 2, 3];

  function updatePostcardPositions() {
    postcards.forEach((postcard, index) => {
      const currentIndex = currentOrder.indexOf(index);
      const position = positions[currentIndex];

      postcard.style.zIndex = position.z;
      postcard.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg)`;
    });
  }

  function handlePostcardClick() {
    // Move the top card (index 0) to the back
    const topCardIndex = currentOrder[0];
    currentOrder = [...currentOrder.slice(1), topCardIndex];

    updatePostcardPositions();
  }

  // Add click event listener to the container
  postcardContainer.addEventListener("click", handlePostcardClick);

  // Initialize positions
  updatePostcardPositions();
}

// Initialize all application modules
function initializeApp() {
  // Initialize navigation functionality
  if (window.Navigation) {
    window.Navigation.initializeNavbarScrollEffect();
    window.Navigation.initializeMobileMenu();
    window.Navigation.initializeHybridNavigation();
  }

  // Initialize scroll animations
  if (window.ScrollAnimations) {
    window.ScrollAnimations.initializeScrollAnimations();
  }

  // Initialize postcard stack animation
  initializePostcardStack();

  // Initialize shop size selector
  initializeShopSizeSelector();
}

// Shop size selector functionality
function initializeShopSizeSelector() {
  const sizeButtons = document.querySelectorAll(".size-btn");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove selected class from all buttons
      sizeButtons.forEach((btn) => btn.classList.remove("selected"));
      // Add selected class to clicked button
      button.classList.add("selected");
    });
  });
}

// Global show navigation function
function goToShow(showId) {
  window.location.href = `show-detail.html?show=${showId}`;
}

// Make show navigation available globally
window.goToShow = goToShow;

// Start the application when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);

// Fallback initialization if DOMContentLoaded has already fired
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

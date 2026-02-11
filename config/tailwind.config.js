/**
 * Tailwind CSS Configuration
 * Contains custom theme extensions for colors, fonts, and spacing
 * Color scheme optimized for 15:1 contrast ratio
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "sync-background": "#0A0A0A", // True Black
        "sync-surface": "#1A1A1A", // Card Background
        "sync-border": "#333333", // Subtle Borders
        "sync-text": "#FFFFFF", // Pure White
        "sync-text-secondary": "#A3A3A3", // Grey
        "sync-accent-blue": "#3B82F6", // Blue Accent
        "sync-accent-green": "#10B981", // Green Accent
        // Legacy colors for backward compatibility
        "ew-black": "#0A0A0A",
        "ew-gray": "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        header: ["Oswald", "sans-serif"],
        display: ["Anton", "sans-serif"],
      },
      letterSpacing: {
        "widest-xl": ".25em",
      },
    },
  },
};

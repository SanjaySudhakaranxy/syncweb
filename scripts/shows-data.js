/**
 * SYNC Shows Data
 * Central data store for all show information
 * Each show contains: metadata, story, gallery, setlist, and optional video
 */

const SHOWS_DATA = {
  "ashes-and-altar": {
    id: "ashes-and-altar",
    slug: "ashes-and-altar",

    // Hero & Metadata
    title: "ASHES & ALTAR",
    subtitle: "Where Surrender Met Unity",
    city: "Chennai",
    venue: "Mukundha Studios",
    location: "Egmore, Chennai",
    date: "December 21, 2025",
    dateShort: "DEC 21, 2025",
    year: "2025",

    // Stats
    attendance: "200",
    duration: "2h 30m",

    // Media
    heroImage: "assets/show1.jpg",
    heroVideo: null, // Optional: "assets/videos/ashes-hero.mp4"

    // Story Section
    story: {
      headline: "THE NIGHT",
      paragraphs: [
        "They came in slowly at first — groups talking quietly, some standing alone, some carrying expectations they couldn't quite explain. The sky was settling into darkness, and there was a stillness in the air, as if the night itself was waiting.",
        "When the lights came on, it wasn't noise that filled the space — it was attention.",
        "As Levites stepped onto the stage, something shifted. The songs weren't rushed. The moments weren't forced. Voices rose, hands lifted, and without anyone asking, the crowd moved together. Worship didn't feel like a performance; it felt like a response.",
        "Under the open night sky, the altar was no longer a structure — it was a gathering of surrendered hearts.",
        "Time moved differently after that.",
        "Later in the night, Exodus brought a sound that carried weight and fire. It was bold, expressive, alive — yet grounded in the same Spirit. Different style, same center. The energy surged, but the purpose remained unchanged.",
        "What stood out most was not how loud the music became, but how deeply it reached.",
        "People filled the space — more than we expected. Some sang every word. Some stood in silence. Some closed their eyes, as if holding onto a moment they didn't want to lose. No one needed to be told what to do. The night was leading itself.",
        "By the end, there was no rush to leave. Conversations were softer. Smiles lingered. Something had settled.",
        "Ashes & Altar became more than a name that night. Ashes became surrender. The altar became unity.",
        "And in that shared moment, many voices became one.",
      ],
      // Featured images for story section (right column)
      featuredImages: ["assets/show1.jpg", "assets/show2.jpg"],
    },

    // Gallery
    gallery: {
      images: [
        { src: "assets/show1.jpg", alt: "Worship moment" },
        { src: "assets/show2.jpg", alt: "Crowd gathered" },
        { src: "assets/show3.jpg", alt: "Stage lights" },
        { src: "assets/show5.jpg", alt: "Hands raised" },
        { src: "assets/show6.jpg", alt: "Community" },
        { src: "assets/show7.jpg", alt: "Night sky" },
        { src: "assets/show8.jpg", alt: "Closing moments" },
        { src: "assets/sync_bg.jpg", alt: "Venue atmosphere" },
      ],
      videos: [],
    },

    // Setlist / Key Moments
    setlist: [
      {
        time: "8:00 PM",
        title: "Opening Prayer",
        description: "Setting the heart for worship",
        artist: "SYNC Team",
      },
      {
        time: "8:05 PM",
        title: "Here As In Heaven",
        description: "Declaring God's presence",
        artist: "Levites",
      },
      {
        time: "8:20 PM",
        title: "O Come To The Altar",
        description: "Invitation and surrender",
        artist: "Levites",
      },
      {
        time: "8:35 PM",
        title: "Unity",
        description: "First performance — hearts united",
        artist: "SYNC Collective",
        highlight: true,
      },
      {
        time: "8:50 PM",
        title: "Graves Into Gardens",
        description: "Testimony and breakthrough",
        artist: "Exodus",
      },
      {
        time: "9:15 PM",
        title: "Closing Blessing",
        description: "One Spirit. One Sound. One Hope.",
        artist: "SYNC Team",
      },
    ],

    // Highlight Video (optional)
    highlightVideo: null, // "https://www.youtube.com/embed/VIDEO_ID"

    // Navigation
    order: 1,
  },
};

// Show order for navigation (newest first)
const SHOW_ORDER = ["ashes-and-altar"];

/**
 * Get show by slug
 */
function getShowBySlug(slug) {
  return SHOWS_DATA[slug] || null;
}

/**
 * Get all shows sorted by order
 */
function getAllShows() {
  return SHOW_ORDER.map((slug) => SHOWS_DATA[slug]).filter(Boolean);
}

/**
 * Get adjacent shows for navigation
 */
function getAdjacentShows(currentSlug) {
  const currentIndex = SHOW_ORDER.indexOf(currentSlug);
  return {
    prev: currentIndex > 0 ? SHOWS_DATA[SHOW_ORDER[currentIndex - 1]] : null,
    next:
      currentIndex < SHOW_ORDER.length - 1
        ? SHOWS_DATA[SHOW_ORDER[currentIndex + 1]]
        : null,
  };
}

/**
 * Get show from URL parameter
 */
function getShowFromURL() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("show");
  return slug ? getShowBySlug(slug) : null;
}

// Export for use
window.SHOWS_DATA = SHOWS_DATA;
window.SHOW_ORDER = SHOW_ORDER;
window.getShowBySlug = getShowBySlug;
window.getAllShows = getAllShows;
window.getAdjacentShows = getAdjacentShows;
window.getShowFromURL = getShowFromURL;

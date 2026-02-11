/**
 * Show Detail Script
 * Handles dynamic show content loading and navigation
 */

// Show Data Structure
const SHOWS_DATA = {
  "ashes-and-alter": {
    id: "ashes-and-alter",
    title: "ASHES & ALTER",
    city: "Egmore, Chennai",
    venue: "Mukundha Studios",
    date: "DEC 21, 2025",
    fullDate: "December 21, 2025",
    attendance: "200",
    heroImage: "assets/show1.jpg",
    story: {
      title: "THE NIGHT",
      content: [
        "They came in slowly at first — groups talking quietly, some standing alone, some carrying expectations they couldn't quite explain. The sky was settling into darkness, and there was a stillness in the air, as if the night itself was waiting.",
        "When the lights came on, it wasn't noise that filled the space — it was attention.",
        "As Levites stepped onto the stage, something shifted. The songs weren't rushed. The moments weren't forced. Voices rose, hands lifted, and without anyone asking, the crowd moved together. Worship didn't feel like a performance; it felt like a response. Under the open night sky, the altar was no longer a structure — it was a gathering of surrendered hearts.",
        "Time moved differently after that.",
        "Later in the night, Exodus brought a sound that carried weight and fire. It was bold, expressive, alive — yet grounded in the same Spirit. Different style, same center. The energy surged, but the purpose remained unchanged. What stood out most was not how loud the music became, but how deeply it reached.",
        "People filled the space — more than we expected. Some sang every word. Some stood in silence. Some closed their eyes, as if holding onto a moment they didn't want to lose. No one needed to be told what to do. The night was leading itself.",
        "By the end, there was no rush to leave. Conversations were softer. Smiles lingered. Something had settled.",
        "Ashes & Altar became more than a name that night. Ashes became surrender. The altar became unity.",
        "And in that shared moment, many voices became one.",
      ],
    },
    setlist: [
      {
        time: "8:00 PM",
        song: "Opening Prayer",
        description: "Setting the heart for worship",
      },
      {
        time: "8:05 PM",
        song: "Here As In Heaven",
        description: "Declaring God's presence",
      },
      {
        time: "8:20 PM",
        song: "O Come To The Altar",
        description: "Invitation and surrender",
      },
      {
        time: "8:35 PM",
        song: "Unity (New Song)",
        description: "First performance - hearts united",
      },
      {
        time: "8:50 PM",
        song: "Graves Into Gardens",
        description: "Testimony and breakthrough",
      },
      {
        time: "9:15 PM",
        song: "Closing Blessing",
        description: "One Spirit. One Sound. One Hope.",
      },
    ],
    images: [
      "assets/show1.jpg",
      "assets/show2.jpg",
      "assets/show3.jpg",
      "assets/show4.jpg",
    ],
    gallery: [
      "assets/show1.jpg",
      "assets/show2.jpg",
      "assets/show3.jpg",
      "assets/show4.jpg",
      "assets/show5.jpg",
      "assets/show6.jpg",
    ],
  },
  "hope-delhi-2024": {
    id: "hope-delhi-2024",
    title: "HOPE",
    city: "Delhi, India",
    venue: "Indira Gandhi Indoor Stadium",
    date: "FEB 28, 2024",
    fullDate: "February 28, 2024",
    attendance: "15,000",
    heroImage: "assets/show2.jpg",
    story: {
      title: "A NIGHT OF BREAKTHROUGH",
      content: [
        "Hope arrived in Delhi like a gentle storm. What began as whispered prayers became thunderous declarations of faith that echoed through the stadium.",
        "In a city known for its resilience, Hope became the soundtrack for breakthrough. Stories of healing, restoration, and renewed faith filled the night air.",
        "The worship was raw, honest, and powerful. Each song was a step closer to freedom, each moment a reminder that hope is not just a feeling – it's a person.",
        "Delhi will never be the same. Neither will we.",
      ],
    },
    setlist: [
      {
        time: "7:30 PM",
        song: "Call to Worship",
        description: "Gathering hearts together",
      },
      {
        time: "7:35 PM",
        song: "Great Are You Lord",
        description: "Recognition of His majesty",
      },
      {
        time: "7:50 PM",
        song: "Hope Has A Name",
        description: "Our new anthem of faith",
      },
      {
        time: "8:05 PM",
        song: "Do It Again",
        description: "Trusting in His faithfulness",
      },
      {
        time: "8:25 PM",
        song: "Goodness of God",
        description: "Testimony and thanksgiving",
      },
      {
        time: "8:45 PM",
        song: "Benediction",
        description: "Sent out with hope",
      },
    ],
    images: [
      "assets/show2.jpg",
      "assets/show1.jpg",
      "assets/show4.jpg",
      "assets/show5.jpg",
    ],
    gallery: [
      "assets/show2.jpg",
      "assets/show1.jpg",
      "assets/show3.jpg",
      "assets/show4.jpg",
      "assets/show5.jpg",
      "assets/show6.jpg",
    ],
  },
  "faith-bangalore-2024": {
    id: "faith-bangalore-2024",
    title: "FAITH",
    city: "Bangalore, India",
    venue: "Palace Grounds",
    date: "JAN 20, 2024",
    fullDate: "January 20, 2024",
    attendance: "18,000",
    heroImage: "assets/show3.jpg",
    story: {
      title: "WHEN FAITH MOVES MOUNTAINS",
      content: [
        "Faith descended on Bangalore like morning dew – gentle, yet transforming everything it touched. The Silicon Valley of India became the valley of dry bones.",
        "Technology could not contain what happened that night. Hearts connected not through networks, but through the Spirit. Faith became our WiFi.",
        'From the first chord to the final amen, we witnessed faith in action. Not the faith that asks "what if" but the faith that declares "even if."',
        "Bangalore taught us that faith is not the absence of doubt – it's worship in the presence of it.",
      ],
    },
    setlist: [
      {
        time: "7:45 PM",
        song: "Gathering Prayer",
        description: "Unity in the Spirit",
      },
      {
        time: "7:50 PM",
        song: "Build My Life",
        description: "Foundation on the Rock",
      },
      {
        time: "8:10 PM",
        song: "Faith (Original)",
        description: "Our declaration of trust",
      },
      {
        time: "8:30 PM",
        song: "Way Maker",
        description: "God's faithfulness proclaimed",
      },
      {
        time: "8:50 PM",
        song: "It Is Well",
        description: "Peace in the storm",
      },
      { time: "9:10 PM", song: "Commissioning", description: "Go in faith" },
    ],
    images: [
      "assets/show3.jpg",
      "assets/show6.jpg",
      "assets/show1.jpg",
      "assets/show2.jpg",
    ],
    gallery: [
      "assets/show3.jpg",
      "assets/show1.jpg",
      "assets/show2.jpg",
      "assets/show4.jpg",
      "assets/show5.jpg",
      "assets/show6.jpg",
    ],
  },
  "grace-chennai-2023": {
    id: "grace-chennai-2023",
    title: "GRACE",
    city: "Chennai, India",
    venue: "Nehru Indoor Stadium",
    date: "DEC 16, 2023",
    fullDate: "December 16, 2023",
    attendance: "14,000",
    heroImage: "assets/show4.jpg",
    story: {
      title: "GRACE THAT IS GREATER",
      content: [
        "Chennai opened its arms to Grace, and Grace responded with an embrace that changed everything. The city of culture became the city of mercy.",
        "We sang of grace, but more than that – we experienced it. In the faces around us, in the tears that fell, in the joy that rose.",
        "Grace is not just unmerited favor; it's the power to become who God says you are. Chennai saw that transformation firsthand.",
        "The music was beautiful, but the grace was breathtaking.",
      ],
    },
    setlist: [
      {
        time: "8:00 PM",
        song: "Welcome & Prayer",
        description: "Opening hearts to receive",
      },
      {
        time: "8:05 PM",
        song: "Amazing Grace",
        description: "The story we all share",
      },
      {
        time: "8:25 PM",
        song: "Grace Alone",
        description: "Our foundation and hope",
      },
      {
        time: "8:45 PM",
        song: "Nothing But The Blood",
        description: "The source of all grace",
      },
      {
        time: "9:05 PM",
        song: "How Deep The Father's Love",
        description: "Meditation on mercy",
      },
      {
        time: "9:25 PM",
        song: "Grace Upon Grace",
        description: "Overflow and abundance",
      },
    ],
    images: [
      "assets/show4.jpg",
      "assets/show3.jpg",
      "assets/show5.jpg",
      "assets/show6.jpg",
    ],
    gallery: [
      "assets/show4.jpg",
      "assets/show1.jpg",
      "assets/show2.jpg",
      "assets/show3.jpg",
      "assets/show5.jpg",
      "assets/show6.jpg",
    ],
  },
  "peace-kolkata-2023": {
    id: "peace-kolkata-2023",
    title: "PEACE",
    city: "Kolkata, India",
    venue: "Science City Auditorium",
    date: "NOV 11, 2023",
    fullDate: "November 11, 2023",
    attendance: "10,500",
    heroImage: "assets/show5.jpg",
    story: {
      title: "PEACE IN THE STORM",
      content: [
        "Kolkata, the city of joy, welcomed Peace with open hearts and hungry souls. In the midst of life's chaos, we found our center.",
        "Peace is not the absence of storms – it's the presence of Jesus in them. Kolkata taught us this truth through worship.",
        "As the evening unfolded, anxiety gave way to assurance, worry transformed into worship, and fear fled in the face of faith.",
        "We left different than we came. That's what Peace does – it changes everything.",
      ],
    },
    setlist: [
      {
        time: "7:30 PM",
        song: "Invocation",
        description: "Calling on the Prince of Peace",
      },
      {
        time: "7:35 PM",
        song: "Be Still My Soul",
        description: "Finding rest in God",
      },
      {
        time: "7:55 PM",
        song: "Peace Be Still",
        description: "Jesus calms every storm",
      },
      {
        time: "8:15 PM",
        song: "It Is Well",
        description: "Declaring peace over chaos",
      },
      {
        time: "8:35 PM",
        song: "In The Secret",
        description: "Intimacy brings peace",
      },
      {
        time: "8:55 PM",
        song: "Shalom",
        description: "The blessing of wholeness",
      },
    ],
    images: [
      "assets/show5.jpg",
      "assets/show4.jpg",
      "assets/show2.jpg",
      "assets/show6.jpg",
    ],
    gallery: [
      "assets/show5.jpg",
      "assets/show1.jpg",
      "assets/show2.jpg",
      "assets/show3.jpg",
      "assets/show4.jpg",
      "assets/show6.jpg",
    ],
  },
  "love-pune-2023": {
    id: "love-pune-2023",
    title: "LOVE",
    city: "Pune, India",
    venue: "Shree Shiv Chhatrapati Sports Complex",
    date: "OCT 07, 2023",
    fullDate: "October 07, 2023",
    attendance: "16,500",
    heroImage: "assets/show6.jpg",
    story: {
      title: "LOVE CAME DOWN",
      content: [
        "Love arrived in Pune not as a concept to understand, but as a Person to encounter. The Oxford of the East became the school of the heart.",
        "We didn't just sing about love – we felt it, shared it, and were transformed by it. Love is patient, kind, and life-changing.",
        "In a world growing colder, Pune became warmer. In a time of division, we found unity. In the presence of Perfect Love, fear had to go.",
        "Love never fails. Pune proved that truth once again.",
      ],
    },
    setlist: [
      {
        time: "7:45 PM",
        song: "Opening Blessing",
        description: "Preparing hearts for love",
      },
      {
        time: "7:50 PM",
        song: "How He Loves",
        description: "The overwhelming love of God",
      },
      {
        time: "8:15 PM",
        song: "Love Divine",
        description: "Classic hymn, fresh encounter",
      },
      {
        time: "8:35 PM",
        song: "Reckless Love",
        description: "Pursuit that never ends",
      },
      {
        time: "8:55 PM",
        song: "Love So Great",
        description: "Our response to His love",
      },
      {
        time: "9:15 PM",
        song: "Love One Another",
        description: "The commandment to live by",
      },
    ],
    images: [
      "assets/show6.jpg",
      "assets/show1.jpg",
      "assets/show3.jpg",
      "assets/show5.jpg",
    ],
    gallery: [
      "assets/show6.jpg",
      "assets/show1.jpg",
      "assets/show2.jpg",
      "assets/show3.jpg",
      "assets/show4.jpg",
      "assets/show5.jpg",
    ],
  },
};

// Show order for navigation
const SHOW_ORDER = ["ashes-and-alter"];

// Current show tracking
let currentShowId = null;

// Initialize show detail page
function initializeShowDetail() {
  // Get show ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const showId = urlParams.get("show");

  if (showId && SHOWS_DATA[showId]) {
    currentShowId = showId;
    loadShowContent(SHOWS_DATA[showId]);
    updateNavigationButtons();
  } else {
    // Fallback to Ashes & Alter show if no valid ID
    currentShowId = "ashes-and-alter";
    loadShowContent(SHOWS_DATA[currentShowId]);
    updateNavigationButtons();
  }
}

// Load show content into page
function loadShowContent(show) {
  console.log("Loading show content for:", show.title);

  // Update page title
  document.title = `${show.title} - ${show.city} | SYNC`;
  const showTitleEl = document.getElementById("show-title");
  if (showTitleEl) {
    showTitleEl.textContent = `${show.title} - ${show.city} | SYNC`;
  }

  // Update hero section
  const heroImage = document.getElementById("hero-image");
  const heroDate = document.getElementById("hero-date");
  const heroTitle = document.getElementById("hero-title");
  const heroCity = document.getElementById("hero-city");
  const heroVenue = document.getElementById("hero-venue");

  if (heroImage) heroImage.src = show.heroImage;
  if (heroImage) heroImage.alt = `${show.title} - ${show.city}`;
  if (heroDate) heroDate.textContent = show.date;
  if (heroTitle) heroTitle.textContent = show.title;
  if (heroCity) heroCity.textContent = show.city;
  if (heroVenue) heroVenue.textContent = show.venue;

  // Update metadata strip
  const metaDate = document.getElementById("meta-date");
  const metaVenue = document.getElementById("meta-venue");
  const metaCity = document.getElementById("meta-city");
  const metaAttendance = document.getElementById("meta-attendance");

  if (metaDate) metaDate.textContent = show.fullDate;
  if (metaVenue) metaVenue.textContent = show.venue;
  if (metaCity) metaCity.textContent = show.city;
  if (metaAttendance) metaAttendance.textContent = show.attendance;

  // Update story section
  const storyContent = document.getElementById("story-content");
  if (storyContent) {
    console.log(
      "Found story-content element, populating with",
      show.story.content.length,
      "paragraphs",
    );
    storyContent.innerHTML = "";
    show.story.content.forEach((paragraph, index) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      p.className = "mb-6";
      storyContent.appendChild(p);
      console.log(
        "Added paragraph",
        index + 1,
        ":",
        paragraph.substring(0, 50) + "...",
      );
    });
  } else {
    console.error("Could not find story-content element");
  }

  // Update story images
  const storyImages = document.getElementById("story-images");
  if (storyImages) {
    storyImages.innerHTML = "";
    show.images.forEach((image, index) => {
      const div = document.createElement("div");
      div.className =
        "aspect-square bg-sync-surface rounded-lg overflow-hidden";
      div.innerHTML = `
        <img
          src="${image}"
          alt="Show moment ${index + 1}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      `;
      storyImages.appendChild(div);
    });
  }

  // Update gallery
  const gallery = document.getElementById("media-gallery");
  if (gallery) {
    console.log(
      "Found media-gallery element, populating with",
      show.gallery.length,
      "images",
    );
    gallery.innerHTML = "";
    show.gallery.forEach((image, index) => {
      const div = document.createElement("div");
      div.className =
        "aspect-[4/3] bg-sync-surface overflow-hidden fade-in-section";
      div.innerHTML = `
        <img
          src="${image}"
          alt="Gallery image ${index + 1}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      `;
      gallery.appendChild(div);
      console.log("Added gallery image", index + 1, ":", image);
    });
    console.log("Gallery population completed");
  } else {
    console.error("Could not find media-gallery element");
  }

  // Update setlist
  const setlist = document.getElementById("setlist");
  if (setlist) {
    setlist.innerHTML = "";
    show.setlist.forEach((item) => {
      const div = document.createElement("div");
      div.className =
        "flex justify-between items-center py-4 border-b border-sync-border fade-in-section";
      div.innerHTML = `
        <div>
          <div class="font-header text-lg">${item.song}</div>
          <div class="font-body text-sm opacity-70">${item.description}</div>
        </div>
        <div class="font-body text-sm opacity-70">${item.time}</div>
      `;
      setlist.appendChild(div);
    });
  }
}

// Update navigation buttons
function updateNavigationButtons() {
  const currentIndex = SHOW_ORDER.indexOf(currentShowId);
  const prevBtn = document.getElementById("prev-show-btn");
  const nextBtn = document.getElementById("next-show-btn");

  // Update previous button
  if (currentIndex > 0) {
    const prevShow = SHOWS_DATA[SHOW_ORDER[currentIndex - 1]];
    prevBtn.innerHTML = `
      <i class="fas fa-chevron-left"></i>
      <span>PREVIOUS: ${prevShow.title}</span>
    `;
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "auto";
  } else {
    prevBtn.innerHTML = `
      <i class="fas fa-chevron-left"></i>
      <span>PREVIOUS SHOW</span>
    `;
    prevBtn.style.opacity = "0.5";
    prevBtn.style.pointerEvents = "none";
  }

  // Update next button
  if (currentIndex < SHOW_ORDER.length - 1) {
    const nextShow = SHOWS_DATA[SHOW_ORDER[currentIndex + 1]];
    nextBtn.innerHTML = `
      <span>NEXT: ${nextShow.title}</span>
      <i class="fas fa-chevron-right"></i>
    `;
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "auto";
  } else {
    nextBtn.innerHTML = `
      <span>NEXT SHOW</span>
      <i class="fas fa-chevron-right"></i>
    `;
    nextBtn.style.opacity = "0.5";
    nextBtn.style.pointerEvents = "none";
  }
}

// Navigate to previous/next show
function navigateToShow(direction) {
  const currentIndex = SHOW_ORDER.indexOf(currentShowId);
  let newIndex;

  if (direction === "prev" && currentIndex > 0) {
    newIndex = currentIndex - 1;
  } else if (direction === "next" && currentIndex < SHOW_ORDER.length - 1) {
    newIndex = currentIndex + 1;
  } else {
    return; // No navigation possible
  }

  const newShowId = SHOW_ORDER[newIndex];
  window.location.href = `show-detail.html?show=${newShowId}`;
}

// Global navigation function for shows page
function goToShow(showId) {
  window.location.href = `show-detail.html?show=${showId}`;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Only initialize if we're on the show detail page
  if (document.getElementById("hero-image")) {
    initializeShowDetail();
  }
});

// Export for global access
window.goToShow = goToShow;
window.navigateToShow = navigateToShow;

/**
 * Show Detail Renderer
 * Handles dynamic content loading for show detail pages
 */

(function () {
  "use strict";

  /**
   * Initialize the show detail page
   */
  function init() {
    const show = getShowFromURL();

    if (!show) {
      // Fallback to first show or redirect
      const firstShow = getAllShows()[0];
      if (firstShow) {
        renderShow(firstShow);
      } else {
        window.location.href = "shows.html";
      }
      return;
    }

    renderShow(show);
  }

  /**
   * Render all show content
   */
  function renderShow(show) {
    // Update page title
    document.title = `${show.title} — ${show.city} | SYNC`;

    // Render each section
    renderHero(show);
    renderMetadata(show);
    renderStory(show);
    renderGallery(show);
    renderSetlist(show);
    renderHighlightVideo(show);
    renderNavigation(show);
  }

  /**
   * Hero Section
   */
  function renderHero(show) {
    const heroImage = document.getElementById("hero-image");
    const heroDate = document.getElementById("hero-date");
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroCity = document.getElementById("hero-city");
    const heroVenue = document.getElementById("hero-venue");

    if (heroImage) {
      heroImage.src = show.heroImage;
      heroImage.alt = `${show.title} — ${show.city}`;
    }
    if (heroDate) heroDate.textContent = show.dateShort;
    if (heroTitle) heroTitle.textContent = show.title;
    if (heroSubtitle) heroSubtitle.textContent = show.subtitle || "";
    if (heroCity) heroCity.textContent = show.location;
    if (heroVenue) heroVenue.textContent = show.venue;
  }

  /**
   * Metadata Strip
   */
  function renderMetadata(show) {
    const metaDate = document.getElementById("meta-date");
    const metaVenue = document.getElementById("meta-venue");
    const metaCity = document.getElementById("meta-city");
    const metaAttendance = document.getElementById("meta-attendance");
    const metaDuration = document.getElementById("meta-duration");

    if (metaDate) metaDate.textContent = show.date;
    if (metaVenue) metaVenue.textContent = show.venue;
    if (metaCity) metaCity.textContent = show.location;
    if (metaAttendance)
      metaAttendance.textContent = show.attendance
        ? `${show.attendance} gathered`
        : "";
    if (metaDuration) metaDuration.textContent = show.duration || "";
  }

  /**
   * Story Section (Two-column layout)
   */
  function renderStory(show) {
    const storyHeadline = document.getElementById("story-headline");
    const storyContent = document.getElementById("story-content");
    const storyImages = document.getElementById("story-images");

    if (storyHeadline && show.story.headline) {
      storyHeadline.textContent = show.story.headline;
    }

    if (storyContent && show.story.paragraphs) {
      storyContent.innerHTML = "";
      show.story.paragraphs.forEach((paragraph, index) => {
        const p = document.createElement("p");
        p.className =
          index === 0
            ? "text-xl leading-relaxed mb-8 text-white"
            : "text-lg leading-relaxed mb-6 text-gray-300";
        p.textContent = paragraph;
        storyContent.appendChild(p);
      });
    }

    if (storyImages && show.story.featuredImages) {
      storyImages.innerHTML = "";
      show.story.featuredImages.forEach((src, index) => {
        const div = document.createElement("div");
        div.className = index === 0 ? "mb-4" : "";
        div.innerHTML = `
          <img 
            src="${src}" 
            alt="Show moment ${index + 1}" 
            class="w-full h-auto object-cover"
            style="aspect-ratio: 4/3;"
          />
        `;
        storyImages.appendChild(div);
      });
    }
  }

  /**
   * Media Gallery
   */
  function renderGallery(show) {
    const gallery = document.getElementById("media-gallery");

    if (!gallery || !show.gallery) return;

    gallery.innerHTML = "";

    show.gallery.images.forEach((image, index) => {
      const div = document.createElement("div");
      div.className = "gallery-item overflow-hidden bg-neutral-900";
      div.innerHTML = `
        <img 
          src="${image.src}" 
          alt="${image.alt || `Gallery image ${index + 1}`}" 
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      `;
      gallery.appendChild(div);
    });
  }

  /**
   * Setlist / Key Moments
   */
  function renderSetlist(show) {
    const setlist = document.getElementById("setlist-content");

    if (!setlist || !show.setlist) return;

    setlist.innerHTML = "";

    show.setlist.forEach((item) => {
      const div = document.createElement("div");
      div.className = `setlist-item py-6 border-b border-neutral-800 ${item.highlight ? "highlight" : ""}`;
      div.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div class="flex-1">
            <div class="flex items-center gap-4">
              ${item.highlight ? '<span class="text-xs uppercase tracking-widest text-white bg-white/10 px-2 py-1">Highlight</span>' : ""}
              <h4 class="font-header text-xl text-white">${item.title}</h4>
            </div>
            <p class="text-gray-400 mt-1">${item.description}</p>
            ${item.artist ? `<p class="text-gray-500 text-sm mt-1">${item.artist}</p>` : ""}
          </div>
          <div class="text-gray-500 font-mono text-sm md:text-right">
            ${item.time}
          </div>
        </div>
      `;
      setlist.appendChild(div);
    });
  }

  /**
   * Highlight Video (Optional)
   */
  function renderHighlightVideo(show) {
    const videoSection = document.getElementById("highlight-video-section");
    const videoEmbed = document.getElementById("highlight-video");

    if (!videoSection) return;

    if (show.highlightVideo) {
      videoSection.style.display = "block";
      if (videoEmbed) {
        videoEmbed.src = show.highlightVideo;
      }
    } else {
      videoSection.style.display = "none";
    }
  }

  /**
   * Navigation (Prev/Next)
   */
  function renderNavigation(show) {
    const { prev, next } = getAdjacentShows(show.slug);

    const prevBtn = document.getElementById("nav-prev");
    const nextBtn = document.getElementById("nav-next");

    if (prevBtn) {
      if (prev) {
        prevBtn.href = `show-detail.html?show=${prev.slug}`;
        prevBtn.innerHTML = `
          <i class="fas fa-arrow-left"></i>
          <div class="text-left">
            <div class="text-xs text-gray-500 uppercase tracking-widest">Previous</div>
            <div class="font-header">${prev.title}</div>
          </div>
        `;
        prevBtn.classList.remove("opacity-30", "pointer-events-none");
      } else {
        prevBtn.classList.add("opacity-30", "pointer-events-none");
      }
    }

    if (nextBtn) {
      if (next) {
        nextBtn.href = `show-detail.html?show=${next.slug}`;
        nextBtn.innerHTML = `
          <div class="text-right">
            <div class="text-xs text-gray-500 uppercase tracking-widest">Next</div>
            <div class="font-header">${next.title}</div>
          </div>
          <i class="fas fa-arrow-right"></i>
        `;
        nextBtn.classList.remove("opacity-30", "pointer-events-none");
      } else {
        nextBtn.classList.add("opacity-30", "pointer-events-none");
      }
    }
  }

  // Initialize on DOM ready
  document.addEventListener("DOMContentLoaded", init);
})();

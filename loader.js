const loader = document.getElementById("loader-overlay");

// 1. Hide the loader once the new page has fully loaded
window.addEventListener("load", () => {
  loader.classList.add("hidden");
});

// 2. Show the loader immediately when clicking a link to another page
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = link.getAttribute("href");

    // Ignore anchor links (#), external targets, or mailto/tel links
    if (
      target &&
      !target.startsWith("#") &&
      !target.startsWith("mailto:") &&
      !target.startsWith("tel:") &&
      link.target !== "_blank"
    ) {
      e.preventDefault();
      loader.classList.remove("hidden");

      // Wait briefly for the fade-in animation before changing pages
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    }
  });
});

// 3. Fix for browser "Back" button showing a stuck loader from cache
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    loader.classList.add("hidden");
  }
});
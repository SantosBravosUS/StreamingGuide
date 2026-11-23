console.log("SANTOS BRAVOS Streaming Guide is ready!");

// Spotify player expand / collapse
document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("spotifyPlayer");
  const toggle = document.getElementById("spotifyToggle");

  if (!player || !toggle) return;

  toggle.addEventListener("click", () => {
    const collapsed = player.classList.toggle("is-collapsed");

    toggle.textContent = collapsed ? "⌃" : "⌄";
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.setAttribute(
      "aria-label",
      collapsed ? "Expand player" : "Minimize player"
    );
  });
});

// Hide the floating Spotify player when the footer enters view
document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("spotifyPlayer");
  const footer = document.querySelector("footer");

  if (!player || !footer) return;

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        player.classList.toggle("is-footer-visible", entry.isIntersecting);
      });
    },
    { threshold: 0.1 }
  );

  footerObserver.observe(footer);
});

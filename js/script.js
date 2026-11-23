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

// GOOGLE TRANSLATE
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,pt,ko,ja',
        autoDisplay: false
    }, 'google_translate_element');
}

(function () {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
})();

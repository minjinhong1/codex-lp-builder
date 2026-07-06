const CTA_URL = "https://www.instagram.com/bread_today";

document.querySelectorAll("[data-cta]").forEach((link) => {
  link.setAttribute("href", CTA_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

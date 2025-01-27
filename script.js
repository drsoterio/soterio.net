document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta-button");

  // Add a simple animation to the CTA button when it's clicked
  ctaButton.addEventListener("click", () => {
    ctaButton.classList.add("clicked");
    setTimeout(() => ctaButton.classList.remove("clicked"), 300);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".publication-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
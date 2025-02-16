// Filter projects (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const currentYearNode = document.getElementById("year");
  if (currentYearNode) {
    currentYearNode.textContent = new Date().getFullYear();
  }
});

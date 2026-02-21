document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});

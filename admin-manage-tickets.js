document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`${btn.textContent} clicked`);
  });
});

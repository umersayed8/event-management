document.addEventListener("DOMContentLoaded", () => {
  // --- Logic for Password Toggle ---
  const toggleButtons = document.querySelectorAll(".password-toggle");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const passwordInput = button.previousElementSibling;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        button.textContent = "Show";
      }
    });
  });

  // --- Logic for Account Type Selector ---
  const accountTypeButtons = document.querySelectorAll(".account-type");
  accountTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // First, remove 'active' class from all buttons
      accountTypeButtons.forEach((btn) => btn.classList.remove("active"));
      // Then, add 'active' class to the one that was clicked
      button.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("login-message");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      // Validación mínima (puedes quitar esto también si no quieres nada)
      if (email && password) {
        message.style.color = "green";
        message.textContent = "Acceso simulado. Redirigiendo...";

        // Redirige sin autenticar realmente
        setTimeout(() => {
          window.location.href = "home.html";
        }, 1000);
      } else {
        message.style.color = "red";
        message.textContent = "Por favor, completa ambos campos.";
      }
    });
  }
});

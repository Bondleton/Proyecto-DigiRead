document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value.trim();
  const apellidoPaterno = document.getElementById("apellido_paterno").value.trim();
  const apellidoMaterno = document.getElementById("apellido_materno").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const telefono = document.getElementById("telefono").value.trim();
  const termsAccepted = document.getElementById("terms").checked;

  const messageBox = document.getElementById("signup-message");

  if (!termsAccepted) {
    alert("Debes aceptar los términos y condiciones.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Generar un ID único a partir del correo (solo para evitar caracteres no válidos en Firebase)
  const uid = correo.replace(/[.@]/g, "_");

  firebase.database().ref("usuarios/" + uid).set({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    correo,
    telefono,
    password // ⚠️ Solo para pruebas. En producción, nunca lo guardes en texto plano.
  }).then(() => {
    alert("Usuario registrado correctamente.");
    document.getElementById("signupForm").reset();
    window.location.href = "Index.html"; // Redirigir a login
  }).catch((error) => {
    console.error("Error al registrar usuario:", error);
    alert("Error al registrar. Intenta más tarde.");
  });
});

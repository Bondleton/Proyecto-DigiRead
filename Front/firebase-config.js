// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAf2eeB4gjhwyVh97IX1evJtUMt9tbEL_8",
  authDomain: "digiread-6b46c.firebaseapp.com",
  projectId: "digiread-6b46c",
  storageBucket: "digiread-6b46c.firebasestorage.app",
  messagingSenderId: "946737785537",
  appId: "1:946737785537:web:40b21029a67a24af8fc240"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Capturar el formulario
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value;
  const apellidoPaterno = document.getElementById("apellido_paterno").value;
  const apellidoMaterno = document.getElementById("apellido_materno").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const telefono = document.getElementById("telefono").value;

  const uid = correo.replace(/[.@]/g, "_");

  firebase.database().ref("usuarios/" + uid).set({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    correo,
    telefono,
    password // En producción, ¡nunca se debe guardar en texto plano!
  }).then(() => {
    alert("Usuario registrado correctamente");
    document.getElementById("signupForm").reset();
  }).catch((error) => {
    console.error("Error al registrar usuario:", error);
    alert("Error al registrar");
  });
});


// Función para guardar usuario
function guardarUsuario(uid, nombre, email) {
  set(ref(db, 'usuarios/' + uid), {
    nombre: nombre,
    correo: email
  }).then(() => {
    alert("Usuario guardado con éxito");
  }).catch((error) => {
    console.error("Error al guardar:", error);
  });
}

// Función para obtener usuario
function obtenerUsuario(uid) {
  const dbRef = ref(db);
  get(child(dbRef, `usuarios/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("Datos del usuario:", snapshot.val());
    } else {
      console.log("No existe el usuario");
    }
  }).catch((error) => {
    console.error("Error al leer:", error);
  });
}

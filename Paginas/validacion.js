document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    let mensaje = "";

    if (!usuario) {
      mensaje += "El campo usuario es obligatorio.\n";
    }

    if (!contrasena) {
      mensaje += "El campo contraseña es obligatorio.\n";
    } else if (contrasena.length < 6) {
      mensaje += "La contraseña debe tener al menos 6 caracteres.\n";
    }

    if (mensaje) {
      e.preventDefault();
      alert(mensaje);
    }
  });
});


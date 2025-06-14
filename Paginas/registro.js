document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const tarjeta = document.getElementById("tarjeta").value.trim();

    let mensaje = "";

    if (!nombre || !apellido || !correo || !usuario || !contrasena || !tarjeta) {
      mensaje += "Todos los campos son obligatorios.\n";
    }

    const correoRegex = /\S+@\S+\.\S+/;
    if (!correoRegex.test(correo)) {
      mensaje += "Correo no válido.\n";
    }

    if (contrasena.length < 6) {
      mensaje += "La contraseña debe tener al menos 6 caracteres.\n";
    }

    const tarjetaRegex = /^\d{16}$/;
    if (!tarjetaRegex.test(tarjeta)) {
      mensaje += "La tarjeta debe contener 16 dígitos numéricos.\n";
    }

    if (mensaje) {
      e.preventDefault();
      alert(mensaje);
    }
  });
});

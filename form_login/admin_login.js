document.getElementById("formulario__login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    
    var correo = document.getElementById("login__correo").value;
    var contrasena = document.getElementById("login__contrasena").value;

    // Realiza la validación de usuario y contraseña (puedes modificar esto según tus necesidades)
    if (correo === "correo_correcto" && contrasena === "contrasena_correcta") {
        // Redirige a la página deseada en caso de autenticación exitosa
        window.location.href = "file:///C:/Users/Usuario.DD3C4B06/Desktop/PROGRAMACION/OracleONE/AluraGeek/add_product/index.html";
    } else {
        // Muestra el mensaje de error en caso de autenticación fallida
        document.getElementById("mensaje").textContent = "Usuario no registrado";
    }
});

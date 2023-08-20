document.addEventListener("DOMContentLoaded", () => {
    const correoInput = document.getElementById("login__correo");
    const contrasenaInput = document.getElementById("login__contrasena");
    const formulario = document.getElementById("formulario__login");
    const mensajeError = document.querySelector(".mensaje_error");

    correoInput.addEventListener("input", () => {
        validarCorreo(correoInput);
    });

    contrasenaInput.addEventListener("input", () => {
        validarContrasena(contrasenaInput);
    });

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const correoValido = validarCorreo(correoInput);
        const contrasenaValida = validarContrasena(contrasenaInput);

        if (correoValido && contrasenaValida) {
            const correo = correoInput.value.trim();
            const contrasena = contrasenaInput.value.trim();

            if (correo === "admin@admin.com" && contrasena === "admin") {
                
                mensajeError.textContent = "Inicio de sesión exitoso";
                mensajeError.style.color = "green";
                window.location.href = "../add_product/index.html";

            } else {
                mensajeError.textContent = "Usuario no registrado";
                mensajeError.style.color = "red";
            }

        }
    });

    function validarCorreo(input) {
        const correoPattern = /^[A-Za-z.@\s]+$/;
        const correoValido = correoPattern.test(input.value.trim());

        if (!correoValido) {
            mensajeError.textContent = "Formato incorrecto";
            mensajeError.style.color = "red";
        } else {
            mensajeError.textContent = "";
        }

        return correoValido;
    }

    function validarContrasena(input) {
        const contrasenaValida = input.value.trim() !== "";

        if (!contrasenaValida) {
            mensajeError.textContent = "Formato incorrecto";
            mensajeError.style.color = "red";
        } else {
            mensajeError.textContent = "";
        }

        return contrasenaValida;
    }
});




const formulario = document.getElementById("formulario__contacto");
const inputNombre = document.getElementById("contact__nombre");
const textareaMensaje = document.getElementById("contact__mensaje");
const respuesta = document.getElementById("formulario__contacto__respuesta");
const completado = document.getElementById("completado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nombreValido = validarCampo(inputNombre);
  const mensajeValido = validarCampo(textareaMensaje);

  if (nombreValido && mensajeValido) {
    completado.textContent = "Envío exitoso";
    completado.style.display = "block";
    setTimeout(function () {
      formulario.submit();
    }, 1000);
  } else {
    completado.textContent = "Error en el envío";
  }

  respuesta.classList.remove("none");
});

function validarCampo(campo) {
  const tipoEntrada = campo.dataset.tipo;
  const errorMensaje = campo.nextElementSibling;

  if (campo.validity.valid) {
    campo.parentElement.classList.remove(
      "form__contacto__nombre-container--invalid"
    );
    errorMensaje.classList.add("none");
    return true;
  } else {
    campo.parentElement.classList.add(
      "form__contacto__nombre-container--invalid"
    );
    errorMensaje.classList.remove("none");
    return false;
  }
}

inputNombre.addEventListener("blur", () => {
  validarCampo(inputNombre);
});

textareaMensaje.addEventListener("blur", () => {
  validarCampo(textareaMensaje);
});

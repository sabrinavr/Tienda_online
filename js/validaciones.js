/*const nombre = document.getElementById("contact__nombre");
const mensaje = document.getElementById("contact__mensaje");

nombre.addEventListener("input", (event) => {
        if (event.target.validity.typeMismatch) {
            event.target.setCustomValidity("Nombre solamente acepta letras y espacios en blanco");
        } else {
            event.target.setCustomValidity("");
        }
    });

mensaje.addEventListener("input", (event) => {
    if (event.target.validity.typeMismatch) {
        event.target.setCustomValidity("Por favor escribe un mensaje de máximo 120 caracteres para que sepamos cómo ayudarte");
    } else {
        event.target.setCustomValidity("");
    }
});





/*
document.getElementById("form__data").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Verifica si los campos de nombre y mensaje son válidos
    if (nombre.checkValidity() && mensaje.checkValidity()) {
        // Mostrar el mensaje de respuesta
        document.querySelector(".formulario__contacto__respuesta").classList.remove("none");
        
    }
});

document.getElementById("form__data").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    if (!nombre.checkValidity() && !mensaje.checkValidity()) {
        // Mostrar el mensaje de respuesta
        document.querySelector(".formulario__contacto__error-mensaje").classList.remove("none");
        
    }
});

document.getElementById("form__data").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    if (!nombre.checkValidity() && !mensaje.checkValidity()) {
        // Mostrar el mensaje de respuesta
        document.querySelector(".formulario__contacto__error-nombre").classList.remove("none");
        
    }
}); */








/*document.getElementById("form__data").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Verifica si los campos de nombre y mensaje son inválidos
    if (!nombre.checkValidity()) {
        document.querySelector(".formulario__contacto__error-nombre").classList.remove("none");
    } else {
        document.querySelector(".formulario__contacto__error-nombre").classList.add("none");
    }

    if (!mensaje.checkValidity()) {
        document.querySelector(".formulario__contacto__error-mensaje").classList.remove("none");
    } else {
        document.querySelector(".formulario__contacto__error-mensaje").classList.add("none");
    }

    // Verifica si ambos campos son válidos para mostrar la respuesta
    if (nombre.checkValidity() && mensaje.checkValidity()) {
        document.querySelector(".formulario__contacto__respuesta").classList.remove("none");
    }
}); */
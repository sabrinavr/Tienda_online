const formulario = document.getElementById("formulario__contacto");
const input = document.getElementById("contact__nombre");
const textarea = document.getElementById("contact__mensaje");

input.addEventListener("blur", (evento) => {
    validaInput(evento.target);
});

textarea.addEventListener("blur", (evento) => {
    validaTextarea(evento.target);
});

function validaInput(input){
    const tipoEntrada = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove("form__contacto__nombre-container--invalid");
        input.parentElement.querySelector(".formulario__contacto__error-nombre").innerHTML="";
    } else {
        input.parentElement.classList.add("form__contacto__nombre-container--invalid");
        input.parentElement.querySelector(".formulario__contacto__error-nombre").innerHTML= mostrarMensajeError(tipoEntrada, input);
    }
};

function validaTextarea(textarea){
    const minLength = 4;
    const maxLength = parseInt(textarea.getAttribute("maxlength"));
    const contenido = textarea.value.trim(); 

    if(contenido.length >= minLength && contenido.length <= maxLength){
        textarea.parentElement.classList.remove("form__contacto__textarea-container--invalid");
        textarea.parentElement.querySelector(".formulario__contacto__error-mensaje").innerHTML = "";
    } else if(contenido === ""){
        textarea.parentElement.classList.add("form__contacto__textarea-container--invalid");
        textarea.parentElement.querySelector(".formulario__contacto__error-mensaje").innerHTML = "Este campo mensaje no puede estar vacío";
    } else {
        textarea.parentElement.classList.add("form__contacto__textarea-container--invalid");
        textarea.parentElement.querySelector(".formulario__contacto__error-mensaje").innerHTML = `Tu mensaje debe contener entre ${minLength} y ${maxLength} caracteres`;
    }
};

const errorTipo = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajeError = {
    input: {
        valueMissing: "El campo nombre no puede estar vacío",
        typeMismatch:"El nombre no es válido",
        patternMismatch:"Tu nombre debe contener entre 3 y 40 caracteres",
    }
};

function mostrarMensajeError(tipoEntrada, input) {
    let mensaje = '';
    errorTipo.forEach((error) => {
        if (input.validity[error] && input.pattern) {
            mensaje = mensajeError[tipoEntrada][error];
        }
    });
    return mensaje;
};

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let todoValido = true;
    let completado = document.querySelector('#completado');
    console.log(completado)

    if(!input.validity.valid){
        todoValido = false;
    }

    if(!textarea.validity.valid){
        todoValido = false;
    }

    if(todoValido){
        completado.innerHTML = "Acción completada y exitosa";
        completado.style.display = 'block';
        setTimeout( function () {formulario.submit();}, 1000);
    }
})





const inputImagen = document.getElementById("addproduct__url");
const imagenPrevia = document.getElementById("imagen-previa");
const formularioAdd = document.querySelector('.formulario__addproduct');
const formularioBtn = document.querySelector('.formulario__addproduct__boton');



formularioBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Validar campos
    const inputs = formularioAdd.querySelectorAll('input[data-url], input[data-nombre], input[data-precio]');
    let camposValidos = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        camposValidos = false;
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });

    if (camposValidos) {
      // Mostrar mensaje de éxito
      const mensajeExito = document.createElement('p');
      mensajeExito.textContent = 'Producto añadido';
      mensajeExito.classList.add('mensaje-exito');
      formularioAdd.appendChild(mensajeExito);

      // Reiniciar página después de 7 segundos
      setTimeout(() => {
        window.location.href = "../productos/index.html";
      }, 7000);
    } else {
      // Mostrar mensaje de error
      const mensajeError = document.createElement('p');
      mensajeError.textContent = 'Por favor, completa todos los campos correctamente.';
      mensajeError.classList.add('mensaje-error');
      formularioAdd.appendChild(mensajeError);
    }
  });

  //Hacer que se vea la imagen previa del archivo elegido
  inputImagen.addEventListener("change", function (evento) {
    const archivo = evento.target.files[0];
  
    if (archivo) {
      const lector = new FileReader();
  
      lector.onload = function (e) {
        imagenPrevia.src = e.target.result;
        imagenPrevia.style.display = "block";
        imagenPrevia.style.width = "25%"
      };
  
      lector.readAsDataURL(archivo);
    } else {
      imagenPrevia.src = "#";
      imagenPrevia.style.display = "none";
      
    }
  });


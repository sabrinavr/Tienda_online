import { productosServicios } from "../servicios/productos-servicios.js";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const imageUrl = document.querySelector("[data-url]").value; 
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcion]").value;
    
    

    productosServicios
    .crearProducto(imageUrl, name, price, description)
    .then(() => {
        window.location.href="../index.html";
        alert ("Producto agregado con éxito");
    })
    .catch((err) => {
        console.log(err);
    });

})
import { productosServicios } from "../servicios/productos-servicios.js";  

const formularioProducto = document.querySelector("[data-form");

formularioProducto.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const img = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(url,img,categoria,nombre,precio,descripcion);
    productosServicios.crearProducto(url,img,categoria,nombre,precio,descripcion).then(respuesta =>{
        console.log(respuesta)
    }).catch(err=> console.log(error))

})













/*
const nuevoProducto = (imageUrl, name, price, categoria, description, id) => {
    const card = document.createElement("div")
    const contenido = `
    <li>
    <img src="${imageUrl}" alt="${name}" />
    <h2>${name}</h2>
    <p>${price}</p>
    <a href="../productos.html?id=${id}">+ Info</a>
    </li>`

    card.innerHTML = contenido
    card.dataset.id = id

    return card
}

const productos = document.querySelector("[data-adminProducts]")
*/
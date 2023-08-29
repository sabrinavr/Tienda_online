import { productosServicios } from "../servicios/productos-servicios.js";
import { formatPrice } from "../formatPrice.js";

const nuevoProducto = (imageUrl, name, price, id,) => {
    const card = document.createElement("div");

    const contenido = `
    <div class="product__list_producto">
    <img src="${imageUrl}" alt="${name}"/>
    <h2>${name}</h2>
    <p>${price}</p>
    <a href="../productos.html?id=${id}">+ Info</a>
    </div>`
    ;

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

const productos = document.querySelector("[data-adminProducts]")

const render = async() => {
    try {
        const listaProductos = await productosServicios.listaProductos();

        listaProductos.forEach((elemento) => {
            productos.appendChild(
                nuevoProducto(
                elemento.imageUrl,
                elemento.name,
                elemento.price,
                elemento.id,
            ));
            
        });

    } catch(error){
        console.log(error);

    }
    
};

render();




//import { productosServicios } from "../servicios/productos-servicios.js"; 



//const formularioProducto = document.querySelector("[data-form]");

/*formularioProducto.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const imageUrl = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombre]").value;
    const price= document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcion]").value;
    
    productosServicios.crearProducto(imageUrl, categoria, name, price, description).then(respuesta =>{
        console.log(respuesta)
    }).catch(err=> console.log(err));

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
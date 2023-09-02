import { productosServicios } from "../servicios/productos-servicios.js";

const getProducts = (name, price ,imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
  <div class="product__list_producto">
  <img src=${imageUrl} alt="${name}" />
  <h2>${name}</h2>
  <p>${price}</p>
  <a href="#">+ Info</a>
</div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const renderProductosPorCategoria = async (categoria, contenedor) => {
  try {
    const listaProductos = await productosServicios.listaProductos();

    //Filtrar productos por categoría 
    const productosCategoria = listaProductos.filter((producto) =>{
        return producto.categoria === categoria;
    });

    productosCategoria.forEach((producto) => {
        contenedor.appendChild(
            getProducts(
                producto.name,
                producto.price,
                producto.imageUrl,
                producto.id
            )
        );
    });
  } catch(err) {
    console.log(err);
  }
};

// Obtener contenedores HTML para las diferentes secciones
const contenedorZeroWaste = document.querySelector("[data-cat1]");
const contenedorAceites = document.querySelector("[data-cat2]");
const contenedorCuidadoPersonal = document.querySelector("[data-cat3]");

// Llamar a la función para mostrar productos de cada sección
renderProductosPorCategoria("Productos Zero Waste", contenedorZeroWaste);
renderProductosPorCategoria("Aceites vírgenes", contenedorAceites);
renderProductosPorCategoria("Cuidado Personal", contenedorCuidadoPersonal);


    
    
          
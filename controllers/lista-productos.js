import { productosServicios } from "../servicios/productos-servicios.js";
import { formatPrice } from "../formatPrice.js" ;

const getProducts = (name, price ,imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="product__list_producto">
        <div class="product__list_producto_botones">

            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Borrar" />
            </button>
            
            <a href="../edit_product/edit_product.html?id=${id} ">
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            </a>
        </div>
        
        <img class="product__list_producto_img" src="${imageUrl}" alt="${name}">
        <h2 class="product-name"> ${name} </h1>
        <p class="precio">${formatPrice(price)}</p>
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-adminProducts]");

productos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;
    productosServicios
      .deleteProducto(id)
      .then((res) => {
        producto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const listaProductos = await productosServicios.listaProductos();

    listaProductos.forEach((producto) => {
      productos.appendChild(
        getProducts(
          producto.name,
          producto.price,
          producto.imageUrl,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
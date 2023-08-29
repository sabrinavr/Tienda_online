import { productosServicios } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const getProducts = (imageUrl, name, price, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="producto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Borrar" />
            </button>
            
            <a href="../screens/edit-product.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${imageUrl}" alt="${name}">
        <h1 class="product-name"> ${name} </h1>
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
    productoServices
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
          producto.imageUrl,
          producto.name,
          producto.price,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
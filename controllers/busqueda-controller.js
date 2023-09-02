import { productosServicios } from "../servicios/productos-servicios.js"; 

// Obtener referencias a los elementos del DOM
const searchInput = document.getElementById("search__items");
const searchButton = document.getElementById("search__action");
const productList = document.getElementById("productList"); // elemento para mostrar los resultados

// evento de clic en el botón de búsqueda
searchButton.addEventListener("click", () => {
  const searchText = searchInput.value.trim().toLowerCase(); // Obtener el texto de búsqueda y convertirlo a minúsculas

  // Verificar si el campo de búsqueda no está vacío
  if (searchText !== "") {
    // Realizar la búsqueda de productos
    productosServicios.listaProductos()
      .then((productos) => {
        // Filtrar los productos que coinciden con el texto de búsqueda
        const resultados = productos.filter((producto) => {
          return (
            producto.name.toLowerCase().includes(searchText) ||
            producto.description.toLowerCase().includes(searchText)
          );
        });

        // Mostrar los resultados en la lista de productos
        mostrarResultados(resultados);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos:", error);
      });
  } else {
    // El campo de búsqueda está vacío, puedes mostrar un mensaje de error o limpiar los resultados existentes
    productList.classList.add("hidden");
  }
});

// Función para mostrar los resultados de la búsqueda
function mostrarResultados(resultados) {
  // Limpiar la lista de resultados
  productList.innerHTML = "";

  // Mostrar los resultados en la lista
  resultados.forEach((producto) => {
    const option = document.createElement("option");
    option.value = producto.name;
    productList.appendChild(option);
  });

  // Si no se encontraron resultados, mostrar un mensaje
  if (resultados.length === 0) {
    const noResultsItem = document.createElement("option");
    option.text = "No se encontraron resultados";
    productList.appendChild(option);
  }
}

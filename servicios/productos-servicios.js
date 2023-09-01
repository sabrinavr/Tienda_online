//GET 

const listaProductos = () => 
    fetch("http://localhost:3000/productos")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => {
        return respuesta.json();
    });
};

//POST
const crearProducto = (imageUrl, name, price, description) => {
  return fetch(`http://localhost:3000/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl, name, price, description
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fue posible crear un producto");
  });
};

// PUT/PATCH
const alteraProducto = async (id, name, price, description) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id, name, price, description
      }),
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .catch((error) => console.log(error));
  };

  // DELETE
const deleteProducto = async (id) => {
    return await fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };



export const productosServicios = {
    listaProductos,
    listarUnProducto,
    crearProducto,
    alteraProducto,
    deleteProducto,
};
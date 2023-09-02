//GET 

const listaProductos = () => 
    fetch("https://fake-api-rust.vercel.app/productos")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
    return fetch(`https://fake-api-rust.vercel.app/productos/${id}`).then((respuesta) => {
        return respuesta.json();
    });
};

//POST
const crearProducto = (imageUrl, name, price, description) => {
  return fetch(`https://fake-api-rust.vercel.app/productos`, {
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
    return fetch(`https://fake-api-rust.vercel.app/productos/${id}`, {
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
    return await fetch(`https://fake-api-rust.vercel.app/productos/${id}`, {
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
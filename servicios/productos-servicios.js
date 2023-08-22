const listaProductos = () => {
    return fetch("http://localhost:3000/productos")
    .then(respuesta => respuesta.json());
}

const crearProducto = (imageUrl, name, price, categoria, description) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imageUrl, name, price, categoria, description, id:uuid.v4() }),
    });
};

export const productosServicios = {
    listaProductos,
    crearProducto,
};
const listaLogin = () =>{
    return fetch("https://fake-api-rust.vercel.app/users")
    .then((respuesta) => respuesta.json());
}

const crearLogin = (email, password) => {
    return fetch("https://fake-api-rust.vercel.app/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
}

export const loginServicios = {
    listaLogin,
    crearLogin
};
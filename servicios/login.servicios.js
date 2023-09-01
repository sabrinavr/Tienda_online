const listaLogin = () =>{
    return fetch("http://localhost:3000/users")
    .then((respuesta) => respuesta.json());
}

const crearLogin = (email, password) => {
    return fetch("http://localhost:3000/users", {
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
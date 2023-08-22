const listalogin = () =>{
    fetch("http://localhost:3000/users")
    .then((respuesta) => respuesta.json());
}

const crearLogin = (email, contrasena) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, contrasena})
    })
}

export const loginServicios = {
    listalogin,
    crearLogin
};

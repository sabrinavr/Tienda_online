import { loginServicios } from "../servicios/login.servicios.js";

const formularioLogin = document.querySelector("[data-form]");

formularioLogin.addEventListener("submit",async(evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const contrasena = document.querySelector("[data-password]").value;
    
    try {
        const usuarios = await loginServicios.listaLogin();
        
        const usuarioEncontrado = usuarios.find(usuario => 
            usuario.email === email && usuario.password === contrasena
        );

        if (usuarioEncontrado) {
            window.location.href = "../productos/index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (err) {
        console.log(err);
    }

});

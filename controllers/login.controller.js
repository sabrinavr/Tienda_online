import { loginServicios } from "../servicios/login.servicios";

const formularioLogin = document.querySelector("[data-form]");

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const contrasena = document.querySelector("[data-password]").value;
    
    if(email.value === "admin@admin.com" && contrasena.value === "admin") {
        window.location.href="../productos/index.html";
    } else {
        alert("Email o contraseña no válidos para administrar la página");
    }

});
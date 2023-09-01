import { loginServicios } from "../servicios/login.servicios.js";

const formularioLogin = document.querySelector("[data-form]");

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const contrasena = document.querySelector("[data-password]").value;
    
    if(email === "admin@admin.com" && contrasena === "admin") {
        window.location.href="../productos/index.html";
    } else {
        
    }

});
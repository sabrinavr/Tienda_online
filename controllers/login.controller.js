const formularioLogin = document.querySelector("[data-form]");

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const contrasena = document.querySelector("[data-password]").value;
    console.log(email, " - ", contrasena);

})
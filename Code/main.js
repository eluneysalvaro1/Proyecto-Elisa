let d = document;
let boton = d.querySelector("#submit_btn");
let nombre = d.querySelector("#nombre");
let email = d.querySelector("#email");


function check(){
    
    const nombreValue = nombre.value;
    const emailValue = email.value;

    if (nombreValue === '') {
        mostrarError(nombre);
    }else{
        mostrarBien(nombre);
    }
   
    if (emailValue === '') {
        mostrarError(email);
    }else if (!esEmail(emailValue)) {
        mostrarError(email);
    }else{
        mostrarBien(email);
    }


    function mostrarError(value){
        value.style.borderColor = "red";
    }
    
    function mostrarBien(value){
        value.style.borderColor = "green";
    }
    
    function esEmail(email){
        return (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/).test(email);
    }
}


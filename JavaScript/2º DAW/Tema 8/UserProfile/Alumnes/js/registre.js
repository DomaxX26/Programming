window.onload = main;

function main(){
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre(){
    let nom = document.getElementById("nom");
    
    if(!nom.checkValidity()){
        if(nom.validity.valueMissing){
            error2(nom,"Nom obligatori");
            return false;
        }
        if(nom.validity.patternMismatch){
            error2(nom, "El nom no esta dins del rang (6 - 255) caràcters");
            return false;
        }
        
    }
    return true;
}

function validarCorreo(){
    let correu = document.getElementById("email");

    if(!correu.checkValidity()){
        if(correu.validity.valueMissing){
            error2(correu, "Correu obligatori");
            return false;
        }
        if(correu.validity.patternMismatch){
            error2(correu, "No es correcte el correu electrònic introduït");
            return false;
        }
    }
    return true;
}

function validarContrasenya(){

}

function contrasenyaCorrecta(){

}

function registrar(){

}

function esborrarError() {
    let formulari = document.forms[0];
    for (let i = 0; i < formulari.elements.length-1; i++) {
            formulari.elements[i].className = "form-control";
    }
}

function error2(element, missatge) {
    document.getElementById("missatgeError").innerHTML = missatge;
    element.className = "error form-control";
    element.focus();
}

function validar(e){
    if (validarNombre() && validarCorreo() && validarContrasenya() && contrasenyaCorrecta()) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}
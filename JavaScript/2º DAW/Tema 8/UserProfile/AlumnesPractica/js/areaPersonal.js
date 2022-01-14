window.onload = main;

function main(){
    document.getElementById("enviar").addEventListener("click",validar, false);
    document.getElementById("enviarAvatar").addEventListener("click", canviarAvatar);
}

function validarNom(){
    let nom = document.getElementById("nom");

    if(!nom.checkvalidity){
        if(nom.validity.valueMissing){
            error2(nom,"Nom Obligatori");
            return false;
        }
        if(nom.validity.patternMismatch){
            error2(nom, "No es correcte el nom introduït");
            return false;
        }
    }
    return true;
}

function contrasenyaActual(){

}

function novaContrasenya(){

}

function validarContrasenya(){

}

function canviarAvatar(){

}

function actualitzar(){

}

function esborrarError() {
    let formulari = document.forms[0];
    for (let i = 0; i < formulari.elements.length - 1; i++) {
        formulari.elements[i].className = "form-control";
    }
    document.getElementById("missatgeError").innerHTML = "";
}

function error2(element, missatge) {
    document.getElementById("missatgeError").innerHTML = missatge;
    element.className = "error form-control";
}

function validar(e) {
    esborrarError();
    e.preventDefault();
    if (validarNom() && contrasenyaActual() && novaContrasenya() && validarContrasenya()) {
        actualitzar();
        return true;
    }  else {
        return false;
    }
}



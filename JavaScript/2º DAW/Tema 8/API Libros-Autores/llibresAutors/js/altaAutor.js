window.onload = main;

function main(){
    document.getElementById("btnGravar").addEventListener("click", validar, false);
}

function validarNom(){
    esborrarError();
    let nombre = document.getElementById("nom");
    let valorNombre = nombre.value;


if (!nombre.checkValidity()) {
    if (nombre.validity.valueMissing) {
        error2(nombre, "Deus d'introduïr un nom.");
        return false;
    }
    if (valorNombre.length < 2) {
        error2(nombre, "Ha de tindre almenys 2 caracters el nom.");
        return false;
    }
    if (valorNombre.length > 60) {
        error2(nombre,"Has arribat al màxim permés de càracters. (Màxim 60 càracters).");
        return false;
    }
}
return true;

}

function validarAnyNaixement(){
    let any = document.getElementById("anynaix");
}


function esborrarError() {
    let formulari = document.forms[0];
    for (let i = 0; i < formulari.elements.length; i++) {
        formulari.elements[i].className = "";
    }
}

function error2(element, missatge) {
    let error = document.getElementById("capaError");
    

    document.getElementById("missatgeError").innerHTML = missatge;
    element.className = "error";
    element.focus();
}

function validar(e) {
    esborrarError();
    if (validarNom() && validarAnyNaixement() && confirm("Confirma si vols enviar el formulari")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}
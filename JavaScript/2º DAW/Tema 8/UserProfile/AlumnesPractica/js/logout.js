window.onload = main;

function main() {
    document.getElementById("enviar").addEventListener("click", confirmar);
}

function confirmar(){
    let opcion = confirm("Vols ixir de la sessió?");
    if(opcion == true){
        borrarLocalStoratge();
        location.assign("index.html");
    }
    else{
        location.assign("areaPersonal.html");
    }
}


function borrarLocalStoratge(){
    localStorage.removeItem("token");
}

window.onload = main;

function main(){
    obtenirUsuaris();
}

function obtenirUsuaris(){
    fetch('https://serverred.es/api/usuarios')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mostrarUsuaris(data);
    })
}

function mostrarUsuaris(usuario){
    let files = document.getElementById("files");

    usuario.resultado.forEach(element => {
        console.log(element);
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onclick", "reservarLlibre(this)");
        checkbox.setAttribute("id", element._id);

        let nom = document.createTextNode(element.nombre);
        let telefono = document.createTextNode(element.telefono);
        let email = document.createTextNode(element.email);
        let direccion = document.createTextNode(element.direccion);

        td1.appendChild(checkbox);
        td2.appendChild(nom);
        td3.appendChild(telefono);
        td4.appendChild(email);
        td5.appendChild(direccion);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        files.appendChild(tr);

    });
}

function reservarLlibre(id){

}
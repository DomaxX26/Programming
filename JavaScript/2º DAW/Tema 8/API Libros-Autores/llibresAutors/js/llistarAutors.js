window.onload = main;

function main(){
    carregarAutors();
    document.getElementById("nouAutor").addEventListener("click", nouAutor);
}

function nouAutor() {
    document.location.href = "altaAutors.html";
}

function carregarAutors(){
    fetch('https://www.serverred.es/api/autores')
	.then(response => response.json())
	.then((data) => {
        console.log(data);
        mostrarAutors(data);
	});
}

function mostrarAutors(data){
    var files = document.getElementById("files");
    data.resultado.forEach((element, index) => {
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        let botonBorrar = document.createElement("button");
        let botonBorrarTexto = document.createTextNode("Esborrar");
        botonBorrar.setAttribute("class", "btn btn-primary btn-lg my-3");
        botonBorrar.setAttribute("onclick", "borrarAutors(this)");
        botonBorrar.setAttribute("id",element._id);
        botonBorrar.appendChild(botonBorrarTexto);

        let botonModificar = document.createElement("button");
        let botonModificarTexto = document.createTextNode("Modificar");
        botonModificar.setAttribute("class", "btn btn-primary btn-lg my-3");
        botonModificar.appendChild(botonModificarTexto);

        let nom = document.createTextNode(element.nombre);
        let any = document.createTextNode(element.año_nacimiento);
        
        td1.appendChild(botonBorrar);
        td2.appendChild(botonModificar);
        td3.appendChild(nom);
        td4.appendChild(any);

        tr.appendChild(td1);
        tr.appendChild(td2)
        tr.appendChild(td3);
        tr.appendChild(td4);

        files.appendChild(tr);
    });
}

function borrarAutors(element){
    fetch("https://www.serverred.es/api/autores/"+element.id,{
        method:'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function modificarAutors(){

}
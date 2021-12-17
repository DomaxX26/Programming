window.onload = main;

function main(){
    carregarLlibres();
    document.getElementById("nouLlibre").addEventListener("click", nouLlibre);
}

function nouLlibre() {
    document.location.href = "altaLlibres.html";
}

function carregarLlibres(){
    fetch('https://www.serverred.es/api/libros')
	.then(response => response.json())
	.then(data => {
        console.log(data);
        mostrarLlibres(data);
	});
}

function carregarAutors(){
    fetch('https://www.serverred.es/api/libros')
	.then(response => response.json())
	.then(data => {
        console.log(data);
        mostrarLlibres(data);
	});
}

function mostrarLlibres(data){
    var files = document.getElementById("files");
    data.resultado.forEach((element, index) => {
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");

        let botonBorrar = document.createElement("button");
        let botonBorrarTexto = document.createTextNode("Esborrar");
        botonBorrar.setAttribute("class", "btn btn-primary btn-lg my-3");
        botonBorrar.setAttribute("onclick", "borrarLlibre(this)")
        botonBorrar.appendChild(botonBorrarTexto);

        let botonModificar = document.createElement("button");
        let botonModificarTexto = document.createTextNode("Modificar");
        botonModificar.setAttribute("class", "btn btn-primary btn-lg my-3");
        botonModificar.appendChild(botonModificarTexto);

        let titulo = document.createTextNode(element.titulo);
        let editorial = document.createTextNode(element.editorial);
        let precio = document.createTextNode(element.precio);
        let autor = document.createTextNode(element.autor);
        
        td1.appendChild(botonBorrar);
        td2.appendChild(botonModificar);
        td3.appendChild(titulo);
        td4.appendChild(editorial);
        td5.appendChild(precio);
        td6.appendChild(autor);

        tr.appendChild(td1);
        tr.appendChild(td2)
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        files.appendChild(tr);
    });
}

function borrarLlibre(){

}
window.onload = main;

function main() {
    if (JSON.parse(localStorage.getItem("token") != null)) {
        getDatos();
    }
}

async function getDatos() {
    await carregarTaules();
    await carregarCamareros();
    await carregarComandas();
}

function carregarTaules() {
    fetch("https://restaurante.serverred.es/api/mesas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then(data => {
            data.data.data.forEach(element => {
                console.log(element);
                mostrarMesas(element);
            });
        })
        .catch((error) => {
            console.log("Error => ", error);
        })
}

function carregarCamareros() {
    fetch("https://restaurante.serverred.es/api/camareros", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then(data => {
            data.data.data.forEach(element => {
                //console.log(element);
                //mostrarCamareros(element);
            });
        })
        .catch((error) => {
            console.log("Error => ", error);
        })
}

function carregarComandas() {
    fetch("https://restaurante.serverred.es/api/comandas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then(data => {
            data.data.data.forEach(element => {
                console.log(element);
                //mostrarComandas(element);
            });
        })
        .catch((error) => {
            console.log("Error => ", error);
        })
}

function mostrarMesas(element){
    let files = document.getElementById("files");

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");

    //Botones para editar la comanda de bebidas
    let sumaBebida = document.createElement("i");
    sumaBebida.setAttribute("class", "fas fa-plus");

    let editarBebidas = document.createElement("button");
    editarBebidas.setAttribute("class", "btn btn-info btn-lg p-2");

    let textEditarBebidas = document.createTextNode("Bebidas");
    editarBebidas.appendChild(sumaBebida);
    editarBebidas.appendChild(textEditarBebidas);

    //Botón para editar la comanda de platos
    let sumaPlatos = document.createElement("i");
    sumaPlatos.setAttribute("class", "fas fa-plus");

    let editarPlatos = document.createElement("button");
    editarPlatos.setAttribute("class", "btn btn-info btn-lg p-2");

    let texteditarPlatos = document.createTextNode("Platos");
    editarPlatos.appendChild(sumaPlatos);
    editarPlatos.appendChild(texteditarPlatos);
    
    let mesa = document.createTextNode(element.numero);
    let comensales = document.createTextNode(element.comensales);

    td1.appendChild(editarBebidas);
    td2.appendChild(editarPlatos);
    td4.appendChild(mesa);


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td4);

    files.appendChild(tr);
}

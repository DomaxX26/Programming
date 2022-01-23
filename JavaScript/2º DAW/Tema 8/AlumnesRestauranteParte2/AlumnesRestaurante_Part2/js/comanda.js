window.onload = main;

function main(){
	if (JSON.parse(localStorage.getItem("token") != null)) {
		
	}
}

function carregarTaules(){
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
                mostrarMesas(element);
            });
        })
        .catch((error) => {
            console.log("Error => ", error);
        })
}

function carregarBegudes(){
	fetch("https://restaurante.serverred.es/api/bebidas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then(data => {
            data.data.data.forEach(element => {
                mostrarBebidas(element);
            });
        })
        .catch((error) => {
            console.log("Error => ", error);
        })
}

function carregarPlats(){
	fetch("https://restaurante.serverred.es/api/platos", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token")
		}
	})
		.then(response => response.json())
		.then(data => {
			data.data.data.forEach(element => {
				mostrarPlatos(element);
			});
		})
		.catch((error) => {
			console.log("Error => ", error);
		})
}
window.onload = main;

function main(){
    document.getElementById("carregar").addEventListener("click", carregarPoblacions);
}

function carregarPoblacions(){
    poblacionsCastello = new XMLHttpRequest();
    poblacionsValencia = new XMLHttpRequest();
    poblacionsAlacant = new XMLHttpRequest();

    poblacionsCastello.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let objecte = JSON.parse(this.responseText);
            objecte.forEach(element => {
                console.log(element.DMUN50);
            });
        }
    }
    poblacionsCastello.open("GET", "https://apiv1.geoapi.es/municipios?CPRO=12&type=JSON&key=&sandbox=1", true);
    poblacionsCastello.send();

    poblacionsValencia.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let objecte = JSON.parse(this.responseText);
            objecte.forEach(element => {
                console.log(element);
            });
        }
    }
    poblacionsValencia.open("GET", "https://apiv1.geoapi.es/municipios?CPRO=46&type=JSON&key=&sandbox=1", true);
    poblacionsValencia.send();

    poblacionsAlacant.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let objecte = JSON.parse(this.responseText);
            objecte.forEach(element => {
                console.log(element.DMUN50);
            });
        }
    }
    poblacionsAlacant.open("GET", "https://apiv1.geoapi.es/municipios?CPRO=03&type=JSON&key=&sandbox=1", true);
    poblacionsAlacant.send();
}
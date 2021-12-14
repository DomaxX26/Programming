window.onload = main;

var Castello = [];
var Valencia = [];
var Alacant = [];

function main(){
	carregarApi();
}

function carregarApi(){
    let fecha = new Date();
    let anyActual = fecha.getFullYear();
    let mesActual = fecha.getMonth() + 1; 
    let diaActual = fecha.getDate();
    let fechaActual = anyActual+"-" +mesActual+ "-" +diaActual;
    coronavirusComunitatValenciana = new XMLHttpRequest();

    coronavirusComunitatValenciana.onreadystatechange = function(){
        //console.log(this.readyState, this.status);
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let objecte = JSON.parse(this.responseText);
            //console.log(objecte.dates[fechaActual].countries.Spain.regions[6].sub_regions)
            objecte.dates[fechaActual].countries.Spain.regions[6].sub_regions.forEach((element, index) => {
                //console.log(element);
                separarComunitats(element)

            });
            
            
            
        }
    }
    coronavirusComunitatValenciana.open("GET", "https://api.covid19tracking.narrativa.com/api/"+fechaActual+"/country/spain", true);
    coronavirusComunitatValenciana.send();
}


function separarComunitats(comunitats){
    for(let i = 0; i < comunitats.lenght; i++){
        let totalInfectats = document.getElementsByClassName["totalInfectats"][i];
        let totalDefuncions = document.getElementsByClassName["totalDefuncions"][i];
        let nousInfectats = document.getElementsByClassName["nousInfectats"][i];
        let nousDefuncions = document.getElementsByClassName["nousDefuncions"][i];
    }
}
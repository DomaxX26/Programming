
let arrPoke = new Array;
window.onload = main;

let element = 10;
let pagina = 0;
var scroll = 0;

function main  (){
  document.addEventListener("scroll", ()=>{
    console.log("Conttol Scrool",document.body.scrollHeight - window.innerHeight, window.scrollY);
    
    scroll = document.body.scrollHeight - window.innerHeight - 500;
    console.log(scroll)
    if(window.scrollY > (document.body.scrollHeight - window.innerHeight) - 500){
      cargarLista();
    }
  });

// cridar al api 
fetch('https://pokeapi.co/api/v2/pokemon?limit=1100&offset=0')
  .then(response => response.json())
  .then(data =>{
    arrPoke = data.results;    
    cargarLista();
  });
}

function cargarLista (){
// recorrer Array
for(var i=pagina;i<element; i++){
  cargarPagina(arrPoke[i],i);
};
pagina = element;
element += element;
scroll = document.body.scrollHeight - window.innerHeight - 500;
}


function cargarPagina (element, ind){

    fetch(element.url)
    .then(response => response.json())
    .then(data =>{
        
      // Afegir dades
      document.getElementById("listado").innerHTML += '<div id="card'+ind+'" class="card mb-4">' +
      '<a href="#!"><img class="card-img-top" src="'+  data.sprites.front_default + '" alt="..." /></a>' +
      '<div class="card-body">' +
          '<h2 class="card-title">' + data.name +'</h2>' +
          '<div class="row">'+
              '<div class="col p-3 text-center"><strong>Peso: ' + data.weight + ' </strong></div>'+  
              '<div class="col p-3 text-center"><strong>Altura: ' +  data.height + ' </strong></div>'+      
          '</div>'+
      '</div>' +
  '</div>';
});
};


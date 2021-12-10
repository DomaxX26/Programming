window.onload = main;

function main(){
    document.getElementById("carregar").addEventListener("click", carregarPoblacions);
}

function carregarPoblacions(){
    poblacionsAlacant = new XMLHttpRequest();
    poblacionsValencia = new XMLHttpRequest();
}
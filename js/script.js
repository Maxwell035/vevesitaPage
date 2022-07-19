//Activar menú responsive

document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
document.getElementById("nav").addEventListener("click", ocultar_menu);

nav=document.getElementById("nav");

function mostrar_menu(){
    nav.style.top="82px"
}

function ocultar_menu(){
    nav.style.top="-500px"
}
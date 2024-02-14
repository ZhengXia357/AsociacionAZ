var nombre = document.getElementById('nombreInput');
console.log(nombre)

var pop = document.getElementById('popUp')
console.log(pop);
var inputs = document.getElementsByTagName('input')
console.log(inputs);

function mostrarPopUp(){

    pop.classList.add("mostrar-pop");
    document.getElementById('nombrePopUp').innerHTML= nombre.value;

}
function cerrarPopUp(){
    pop.classList.remove("mostrar-pop");
}



function validarInput(){

    var completos = true;
    for(let i = 0;i<inputs.length-2;i++){

        if(inputs[i].value.trim()==""){

            completos = false;
        }

    }

    if(completos){
        mostrarPopUp();
    }else{
        alert("Debes llenar todo los campos")
    }
    

}
/** 
var imagen = document.getElementById('imagen')
var x =0;
var y =0;
function moverImagen(){
    x +=1;
    y +=1;
    imagen.style.left = x+ "px";
    imagen.style.top = y+ "px"
}
document.addEventListener("mousemove",function(event){
    var x = event.clientX;
    var y = event.clientY;
    imagen.style.left=x+"px"
    imagen.style.top=y+"px"


})** /
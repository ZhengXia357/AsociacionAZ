var nombre = document.getElementById('nombreInput');
console.log(nombre)
var check = document.getElementById('check');

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
    var checki = check.checked;

    if(completos && checki){
        mostrarPopUp();
    }else{
        alert("Debes llenar todo los campos")
    }
    

}
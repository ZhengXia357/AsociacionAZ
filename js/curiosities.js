document.addEventListener("DOMContentLoaded", function () {
    var destinoSelect = document.getElementById("destino");
    var distanciaInput = document.getElementById("distancia");

    destinoSelect.addEventListener("change", function () {
        var destinoSeleccionado = destinoSelect.value;

        switch (destinoSeleccionado) {
            case "planetaAurora":
                distanciaInput.value = 4.36;
                distanciaInput.disabled = true;
                break;
            case "nebulosaCelestial":
                distanciaInput.value = 1670;
                distanciaInput.disabled = true;
                break;
            case "galaxiaEspejismo":
                distanciaInput.value = 5000;
                distanciaInput.disabled = true;
                break;
            case "lunaEspectral":
                distanciaInput.value = 0.00047273;
                distanciaInput.disabled = true;
                break;
            case "otro":
                distanciaInput.value = "";
                distanciaInput.disabled = false;
                break;
            default:
        }
    });
});

function calcularTiempoDeViaje() {
    var distancia = document.getElementById("distancia").value;
    var velocidad = document.getElementById("velocidad").value / 100;
    var span = document.getElementById("resultado");

    if (velocidad > 1) {
        alert("No se puede ir más rápido que la luz");
    } else {
        var tiempo = distancia / velocidad;
        document.getElementById("calculadora").hidden = true;
        span.textContent = "El tiempo de viaje es de " + tiempo + " años.";
    }
}

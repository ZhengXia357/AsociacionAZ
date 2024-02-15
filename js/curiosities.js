document.addEventListener("DOMContentLoaded", function () {
    var destinoTiempo = document.getElementById("destinoTiempo");
    var distanciaInput = document.getElementById("distancia");
    var destinoPeso = document.getElementById("destinoPeso");
    var gravedad = document.getElementById("gravedad");

    destinoTiempo.addEventListener("change", function () {
        var destinoSeleccionado = destinoTiempo.value;

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

    destinoPeso.addEventListener("change", function () {
        var destinoSeleccionado = destinoPeso.value;
        switch (destinoSeleccionado) {
            case "mercurio":
                gravedad.value = 3.7;
                gravedad.disabled = true;
                break;
            case "venus":
                gravedad.value = 8.87;
                gravedad.disabled = true;
                break;
            case "marte":
                gravedad.value = 3.71;
                gravedad.disabled = true;
                break;
            case "jupiter":
                gravedad.value = 24.79;
                gravedad.disabled = true;
                break;
            case "saturno":
                gravedad.value = 10.44;
                gravedad.disabled = true;
                break;
            case "urano":
                gravedad.value = 8.69;
                gravedad.disabled = true;
                break;
            case "neptuno":
                gravedad.value = 11.15;
                gravedad.disabled = true;
                break;
            case "otro":
                gravedad.value = "";
                gravedad.disabled = false;
                break;
            default:
        }
    });
});

function calcularTiempoDeViaje() {
    var distancia = document.getElementById("distancia").value;
    var velocidad = document.getElementById("velocidad").value / 100;
    var span = document.getElementById("resultadoTiempo");

    if (velocidad > 1) {
        alert("No se puede ir más rápido que la luz");
    } else {
        var tiempo = distancia / velocidad;
        var mensaje = "El tiempo de viaje es de " + tiempo + " años.";
        document.getElementById("calculadoraTiempo").hidden = true;
        if (tiempo == 0) {
            span.textContent = "¡Ya estás aquí!";
        } else if (tiempo < 0) {
            span.textContent = mensaje + " Tendrás que viajar en el tiempo.";
        } else {
            span.textContent = mensaje;
        }
    }
}

function calcularPeso() {
    var pesoTierra = parseFloat(document.getElementById('pesoTierra').value);
    var gravedad = document.getElementById('gravedad').value;
    span = document.getElementById('resultadoPeso');

    if (pesoTierra > 0) {
      var pesoPlaneta = (pesoTierra * gravedad) / 9.81;
      span.textContent = "Tu peso será aproximadamente " + pesoPlaneta.toFixed(2) + " kg.";
      document.getElementById("calculadoraPeso").hidden = true;
    } else {
      alert('Por favor, ingresa un peso válido.');
    }
  }

function mostrarDatoCurioso() {
    const datosCuriosos = [
        "En algún rincón remoto del espacio, existe la 'Catarata de Estrellas', una región donde las estrellas caen como cascadas de luz, creando un espectáculo celestial único.",
        "Según las leyendas interestelares, cada planeta y luna emite una melodía única mientras orbita en el espacio, formando una sinfonía celestial conocida como la 'Música de las Esferas'.",
        "En la Nebulosa de Sueños Luminosos, las partículas de polvo resplandecen con los sueños y deseos de seres de toda la galaxia, creando un paisaje resplandeciente lleno de esperanza.",
        "En la luna espectral Tritón, existen 'Puentes de Géiseres', estructuras naturales que conectan áreas distantes del terreno, creando rutas pintorescas sobre los géiseres helados.",
        "Algunos exploradores espaciales aseguran haber encontrado 'Agujeros de Gusano de Bolsillo', portales que te llevan a dimensiones sorprendentemente pequeñas, como si el espacio mismo se plegara como un mapa.",
        "Se rumorea que existe una estrella en la constelación de Orión que emite señales que parecen ser mensajes codificados. Los astrónomos aficionados se divierten decodificando lo que llaman 'La Estrella Parlante'.",
        "En un sistema estelar lejano, hay un planeta conocido como 'Espejo de Reflejos'. Su superficie actúa como un espejo gigante que refleja eventos históricos de la galaxia en tiempo real.",
        "En ciertos sistemas estelares, las lunas parecen bailar entre sí en un juego cósmico. Se cree que este fenómeno está relacionado con la danza gravitacional entre estos cuerpos celestiales.",
    ];
    var numAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    document.getElementById("datoCurioso").textContent = datosCuriosos[numAleatorio];
}

let puntuacion = 0;
let indicePregunta = 1;

function mostrarPregunta(numPregunta) {
    document.getElementById(`pregunta${numPregunta}`).hidden = false;
}

function ocultarPregunta(numPregunta) {
    document.getElementById(`pregunta${numPregunta}`).hidden = true;
}

function verificarRespuesta(numPregunta) {
    const respuestaSeleccionada = document.querySelector(`input[name="respuesta${numPregunta}"]:checked`);

    if (respuestaSeleccionada) {
        const respuesta = respuestaSeleccionada.value;
        switch (numPregunta) {
            case 1:
                if (respuesta == 2) puntuacion++;
                break;
            case 2:
                if (respuesta == 2) puntuacion++;
                break;
            case 3:
                if (respuesta == 1) puntuacion++;
                break;
            case 4:
                if (respuesta == 1) puntuacion++;
                break;
            case 5:
                if (respuesta == 3) puntuacion++;
                break;
        }

        indicePregunta++;

        if (indicePregunta <= 5) {
            ocultarPregunta(indicePregunta - 1);
            mostrarPregunta(indicePregunta);
        } else {
            ocultarPregunta(indicePregunta - 1);
            document.getElementById("resultadoQuiz").hidden = false;
            document.getElementById("puntuacion").textContent = puntuacion;
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

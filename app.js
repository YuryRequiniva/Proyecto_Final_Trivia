//Función que captura datos desde el formulario

function captura() {
  var nombrees = document.getElementById("nombre").value;
  if (nombrees == "") {
    alert("El Nombre es obligatorio");
    document.getElementById("nombrees").focus();
  }
}
alert("nombrees");

//Ocultando al hacer click en Enviar
hideButton.addEventListener ("click()" =>{
  let hideInfo =document.getElementById
})

//Arreglo que contiene las respuestas correctas

let correctas = [3, 1, 2, 2, 3];

//Arreglo donde se guardan las respuestas del usuario

let opcion_elegida = [];
let cantidad_correctas = 0;

//Función que toma el número de pregunta y el input elegido de esa pregunta

function respuesta(num_pregunta, seleccionada) {
  //Guardo la respuesta elegida

  opcion_elegida[num_pregunta] = seleccionada.value;

  //El siguiente código es para colocar en color blanco
  //El fondo de los inputs para cuando elige otra opción

  //Armo el id para seleccionar el section correspondiente

  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgraundColor = "white";
  labels[5].style.backgraundColor = "white";
  labels[7].style.backgraundColor = "white";

  //Doy el color al label seleccionado

  seleccionada.parentNode.style.backgraundColor = "#cec0fc";
}

//Función que compara los arreglos para saber cuántas estuvieron correctas

function corregir() {
  cantidad_correctas = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    }
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}

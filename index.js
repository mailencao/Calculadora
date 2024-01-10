//escacha evento al DOM para que funcione luego de cargar todo el html
document.addEventListener('DOMContentLoaded', () => {
   // traigo todos los botones y hago que se reflejen en consola
  var botones = document.getElementsByClassName("numero")
  var operadores = document.getElementsByClassName("operador")
  var operaciones = document.getElementById('valorAnterior')
  var eliminar = document.getElementById('borrar')
  var restaurar = document.getElementById('restaurar')
  

  for (let i = 0; i < botones.length; i++) {
     botones[i].addEventListener('click', function () {
      operacion(botones[i].value);   
    });
  };
  for (let j = 0; j < operadores.length; j++) {
    operadores[j].addEventListener('click', function () {
      operacion(operadores[j].value);   
    }); 
  };

  /* -Number.parseInt() convierte los num. de un string en datos numericos,
  ignoralos demas simbolos y los redondea
  ej: "7.50Ls" = 7
  -Number.parseFloat() convierte los numeros de un string 
  en datos numerico ignorando los demas simbolos.
  ej: "7.50Ls" = 7.50 */
  
  restaurar.addEventListener('click', borrarTodo)

  function borrarTodo() {
    operaciones.textContent = "";
  }

  function operacion(valor) {
    operaciones.textContent =  operaciones.textContent + valor;    
  };

  //escucha el nodo html y ejecuta la funcion al clickar
  eliminar.addEventListener('click', eliminarNum)
  //elimina el ultimo caracter de un string
  function eliminarNum() {
    operaciones.textContent = operaciones.textContent.slice(0, -1);
  }
   
});




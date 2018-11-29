//Declaración variables
let numPiezas = 0;
let puntuacion = 0;
let relacionAspecto = 0;

/**
 * Función Inicio Programa Pedimos un Número Válido al Usuario
 */
function getNumberPiecesFromUser() {
    var num = windows.prompt(
        "Bienvenidos al juego de puzzle \n" +
        " Introduce un número válido para empezar el juego");

    if (num < 10) {
        alert("Debe de introducir un número mayor que 10 y sea válido");
        return false;
    }
    if (Math.sqrt(num) == parseInt(Math.sqrt(num))) {
        alert("Número Correcto\n" +
            "El número introducido es: " + num);
        puznumPiezaszle = num;
        return true;
    } else {
        alert("Debe de introducir un número válido");
        return false;
    }
}

/** @description  Devuelve el doble del número de entrada
 * @param {number} numPiezas Número de piezas  
 * @return {number} Devuelve el doble del número de entrada
 */
function getMaxScore(_numPiezas) {
    return _numPiezas * 2;
}

/** @description  Devuelve la puntuación
 * @return {number} Devuelve la puntuación
 */
function getScore() {
    return puntuacion;
}

/** @description Actualizamos la puntuación
 * @param {number} nuevaPuntuacion Recoge la nueva puntuación 
 */
function updateScore(_nuevaPuntuacion) {
    puntuacion = _nuevaPuntuacion;
    document.getElementById("score").textContent = puntuacion;
}

/** @description Actualizamos la puntuación
 * @param {number} nuevaPuntuacion Le pasamos un número para restar a la puntuación
 */
function decreaseScore(_nuevaPuntuacion) {
    document.getElementById("score").textContent = puntuacion - _nuevaPuntuacion;
}

/** @description  Devuelve la anchura y altura
 * @param {number} altura Le pasamos una altura 
 * @param {number} anchura Le pasamos una anchura
 * @return {number,number} Devuelve una altura y anchura manteniendo la relación de aspecto
 */
function getNewSizes(anchura, altura) {
    if (anchura > 200)
        anchura = 200;

    relacionAspecto = anchura / altura;
    return {
        anchura: anchura,
        altura: altura
    };
}

/** @description  Barajará los elementos de forma aleatoria
 * @param {array} arrayObjetos Le pasamos un array de objetos
 */
function shuffle(arrayObjetos) {
    let cantidad = arrayObjetos.length;
    let contador = 0;
    let num_ale = 0;
    let temp = 0;

    contador = cantidad - 1;
    while (contador > 1) {
        num_ale = Math.floor((Math.random() * contador) + 0);
        temp = arrayObjetos[num_ale];
        arrayObjetos[num_ale] = arrayObjetos[contador];
        arrayObjetos[contador] = temp;
        contador--;
    }
}

/** @description  Devuelve la fila y columna
 * @param {number} pieza Le pasamos la pieza
 * @param {number} totalPiezas Le pasamos el total de piezas
 * @return {array} Devolverá un array con las posiciones en fila x columna
 */
function pieceNumberToRowsColumns(pieza, totalPiezas) {
    let raiz = 0;

    if (pieza >= 0 && pieza <= totalPiezas && Number.isInteger(Math.sqrt(totalPiezas))) {
        raiz = Math.sqrt(totalPiezas);
    } else {
        throw Error("Ha introducido valores no válidos");
    }
    let fila = 0;
    let columna = 0;
    let array = [];

    while (fila < raiz) {
        for (let i = 0; i < raiz; i++) {
             array.push(columna + "," + i);
        }
        fila++;
        columna++;
    }    
    return array[pieza - 1];
}


/** @description  Añadirá una tabla con las filas y columnas
 * @param {number} totalPiezas Le pasamos el total de piezas
 * @param {number} anchura Le pasamos la anchura del puzzle
 * @param {number} altura Le pasamos la altura del puzzle
 * @param {number} direccion Le pasamos la dirección de la imagen

 */
function createPuzzleLayout(totalPiezas, anchura, altura, direccion)
{
    let raiz = Math.sqrt(totalPiezas);
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
   
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.width =anchura;


    var tblBody = document.createElement("tbody");
   
    // Crea las celdas
    for (var i = 0; i < raiz; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
   
      for (var j = 0; j < raiz; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        celda.setAttribute("id",i+","+j);
        celda.height = altura;
        var textoCelda = document.createTextNode(i+","+j);
        
        celda.style = "border: 3px solid black"; 
        celda.style.backgroundImage = "url('./../cat.jpg')";

        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
   
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";

  //  tabla.setAttribute("border", "3px", "solid");
    //tabla.setAttribute("style", "border: 3px solid ;");
  }


//MAIN
//Llamada función inicio del programa
/*while (getNumberPiecesFromUser() === false) {
    getNumberPiecesFromUser();
}*/

//PRUEBAS

createPuzzleLayout(25, 800,100,2);
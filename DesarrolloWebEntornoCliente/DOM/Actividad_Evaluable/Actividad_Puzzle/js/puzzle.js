//Declaración variables
let numPiezas = 0;
let puntuacion = 20;
let relacionAspecto = 0;
let time = false;

/**
 * Función Inicio Programa Pedimos un Número Válido al Usuario
 */
function getNumberPiecesFromUser() {

    let valid = false;
    while (valid === false) {
        console.log(Math.sqrt(numPiezas));

        var num = window.prompt(
            "Bienvenidos al juego de puzzle \n" +
            " Introduce un número válido para empezar el juego");

        if (num < 3) {
            alert("Debe de introducir un número mayor que 3 y sea válido");
            valid = false;
        } else if (Math.sqrt(num) == parseInt(Math.sqrt(num))) {
            alert("Número Correcto\n" +
                "El número introducido es: " + num);
            valid = true;

            numPiezas = num;
            initGame("./../cat.jpg", numPiezas);

        } else {
            alert("Debe de introducir un número válido");
            valid = false;
        }
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

/** @description Actualizamos la puntuación sumando
 * @param {number} nuevaPuntuacion Recoge la nueva puntuación 
 */
function updateScore(_nuevaPuntuacion) {
    puntuacion = _nuevaPuntuacion;
    document.getElementById("score").textContent = puntuacion;
}

/** @description Actualizamos la puntuación restando
 * @param {number} _nuevaPuntuacion Le pasamos un número para restar a la puntuación
 */
function decreaseScore(_nuevaPuntuacion) {
    document.getElementById("score").textContent = puntuacion - _nuevaPuntuacion;
    puntuacion = puntuacion - _nuevaPuntuacion;
}

/** @description Actualizamos la puntuación sumando
 * @param {number} _nuevaPuntuacion Le pasamos un número para sumar a la puntuación
 */
function increaseScore(_nuevaPuntuacion) {
    document.getElementById("score").textContent = puntuacion + _nuevaPuntuacion;
    puntuacion = puntuacion + _nuevaPuntuacion;
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
    return array[pieza];
}


/** @description  Añadirá una tabla con las filas y columnas
 * @param {number} totalPiezas Le pasamos el total de piezas
 * @param {number} anchura Le pasamos la anchura del puzzle
 * @param {number} altura Le pasamos la altura del puzzle
 * @param {number} direccion Le pasamos la dirección url de la imagen
 */
function createPuzzleLayout(totalPiezas, anchura, altura, direccion) {
    let raiz = Math.sqrt(totalPiezas);
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
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
            celda.setAttribute("id", i + "," + j);
            celda.height = altura / raiz;
            celda.width = anchura / raiz;

            var textoCelda = document.createTextNode(i + "," + j);

            celda.style = "border: 3px solid black";
            celda.style.backgroundImage = direccion;

            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
}

/** @description  Desplazamiento de las piezas del puzzle
 * @param {number} numPieza Le pasamos el total de piezas
 * @param {number} totalPiezas Le pasamos el total de piezas
 * @param {number} anchura Le pasamos la anchura del puzzle
 * @param {number} altura Le pasamos la altura del puzzle
 * @return {number} desplazamiento Le devolveremos el desplazamiento de la pieza
 **/
function pieceToOffset(numPieza, totalPiezas, anchura, altura) {

    let desplazamiento = {
        "x": numPieza.x,
        "y": numPieza.y
    };
    let alturaPieza = altura / Math.sqrt(totalPiezas);
    let anchuraPieza = anchura / Math.sqrt(totalPiezas);

    desplazamiento.x = numPieza.y * anchuraPieza;
    desplazamiento.y = numPieza.x * alturaPieza;

    return desplazamiento;
}

/** @description  Devolverá un array con el desplazamiento (offset) 
 * @param {number} totalPiezas Le pasamos el total de piezas
 * @param {number} anchura Le pasamos la anchura del puzzle
 * @param {number} altura Le pasamos la altura del puzzle
 * @return {array} array con el desplazamiento (offset) 
 **/
function createReferenceSolution(totalPiezas, anchura, altura) {
    let arrayPiezasPosc = [];
    for (let j = 0; j < totalPiezas; j++) {
        arrayPiezasPosc[j] = pieceNumberToRowsColumns(j, totalPiezas);
        arrayPiezasPosc[j] = arrayPiezasPosc[j].split(",");
    }

    for (let i = 0; i < totalPiezas; i++) {
        arrayPiezasPosc[i] = pieceToOffset({
            "x": arrayPiezasPosc[i][0],
            "y": arrayPiezasPosc[i][1]
        }, totalPiezas, anchura, altura);
    }
    return arrayPiezasPosc;
}
/** @description  Devolverá un array con el desplazamiento (offset) 
 * @param {array} arrayPosc Le pasamos el total de piezas
 **/
function drawContentPuzzle(arrayPosc) {
    let arrayPiezasPosc = [];
    for (let j = 0; j < arrayPosc.length; j++) {
        arrayPiezasPosc[j] = pieceNumberToRowsColumns(j, arrayPosc.length);
        arrayPiezasPosc[j] = arrayPiezasPosc[j].split(",");
    }
    for (let j = 0; j < arrayPosc.length; j++) {
        document.getElementById(arrayPiezasPosc[j][0] + "," + arrayPiezasPosc[j][1]).style.backgroundPosition = "-" + arrayPosc[j].x + "px" + " " + "-" + arrayPosc[j].y + "px";
    }
}
//LÓGICA DEL JUEGO
/** @description  Devolverá si el puzzle está terminado 
 * @param {array} solucion Le pasamos la solución del puzzle
 * @param {array} estado Le pasamos el estado del puzzle
 * @returns {bool} acabado devoveremos si esta acabado o no
 **/
function checkIfSolution() {}

/** @description  Carga la imagen
 * @param {array} imageURL Url de la image
 * @param {array} numberOfPieces Número de piezas
 **/
function initGame(imageURL, numberOfPieces) {
    let img = new Image();
    img.addEventListener("load", function () {
       // createTableScore();
        gameLogic(img, numberOfPieces);
    });
    img.src = imageURL;
}

/** @description  Función lógica del "juego"
 * @param {array} imagen Url de la image
 * @param {array} numberOfPieces Número de piezas
 **/
function gameLogic(imagen, numberOfPieces) {
    let arrayPuzzleResuelto = [];
    cuentaAtras(false);
    updateScore(20);
    createPuzzleLayout(numberOfPieces, imagen.width, imagen.height, "url(" + imagen.getAttribute("src") + ")");
    let array = createReferenceSolution(numberOfPieces, imagen.width, imagen.height);
    arrayPuzzleResuelto = createReferenceSolution(numberOfPieces, imagen.width, imagen.height);

    shuffle(array);
    drawContentPuzzle(array);

    let table = document.getElementsByTagName("table");
    let contador = 0;
    let seleccion = "";
    let w = 0;
    let q = 0;

    for (let j = 0; j < table[0].rows.length; j++)
        for (let i = 0; i < table[0].rows.length; i++) {
            if (q > 0)
                q = table[0].rows.length * j + (i);
            else
                q = (j + i);

            if (parseInt(arrayPuzzleResuelto[q].x) === Math.abs(parseInt(document.getElementById(j + "," + i).style.backgroundPositionX)) &&
                parseInt(arrayPuzzleResuelto[q].y) === Math.abs(parseInt(document.getElementById(j + "," + i).style.backgroundPositionY))) {
                document.getElementById(j + "," + i).style.borderColor = "green";
            }

            table[0].rows[j].cells[i].addEventListener("click", function (e) {

                if (getScore() > 0 && time === false) {
                    if (j > 0)
                        w = table[0].rows.length * j + (i);
                    else
                        w = (j + i);

                    if (contador === 0) {
                        document.getElementById(e.target.id).style.borderColor = "red";
                        seleccion = e.target.id;
                        contador = 1;
                    } else if (contador === 1 && seleccion === e.target.id) {
                        document.getElementById(e.target.id).style.borderColor = "black";
                        contador = 0;
                    } else if (seleccion !== e.target.id) {
                        let selec = e.target.style.backgroundPosition;
                        e.target.style.backgroundPosition = document.getElementById(seleccion).style.backgroundPosition;
                        document.getElementById(seleccion).style.backgroundPosition = selec;
                        document.getElementById(seleccion).style.borderColor = "black";
                        contador = 0;
                        decreaseScore(5);
                    }
                    if (Math.abs(parseInt(document.getElementById(e.target.id).style.backgroundPositionX)) === parseInt(arrayPuzzleResuelto[w].x) &&
                        Math.abs(parseInt(document.getElementById(e.target.id).style.backgroundPositionY)) === parseInt(arrayPuzzleResuelto[w].y)) {
                        document.getElementById(e.target.id).style.borderColor = "green";
                        contador = 0;
                        increaseScore(5);
                    }

                    table[0].rows[j].cells[i].addEventListener("mouseout", function () {
                        let aciertos = 0;
                        for (let j = 0; j < table[0].rows.length; j++)
                            for (let i = 0; i < table[0].rows.length; i++) {
                                if (q > 0)
                                    q = table[0].rows.length * j + (i);
                                else
                                    q = (j + i);

                                if (parseInt(arrayPuzzleResuelto[q].x) === Math.abs(parseInt(document.getElementById(j + "," + i).style.backgroundPositionX)) &&
                                    parseInt(arrayPuzzleResuelto[q].y) === Math.abs(parseInt(document.getElementById(j + "," + i).style.backgroundPositionY))) {
                                    document.getElementById(j + "," + i).style.borderColor = "green";
                                    aciertos++;
                                }
                            }

                        if (aciertos === parseInt(numberOfPieces)) {
                            cuentaAtras(true);
                        }
                    });

                } else {
                    table[0].rows[j].cells[i].removeEventListener("mousemove", function () {
                        cuentaAtras(true);
                    });
                }
            });
        }
}


/** @description  Función para crear la tabla de Puntuaciones
 **/
function createTableScore() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    tabla.style.cssFloat="right";
    var tblBody = document.createElement("tbody");
    var th = document.createElement("th");
    th.textContent = "PUNTUACIONES";
    var hilera = document.createElement("tr");

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(puntuacion);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    tblBody.appendChild(th);
    tblBody.appendChild(hilera);


    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}

/** @description  Función Cuenta Atrás Empezará el contador de tiempo y la finalización de la partida
 * @param {bool} acabado Url de la image
 **/
function cuentaAtras(acabado) {
    let count = 30;
    let label = document.createElement("label");
    label.textContent = "Time: " + 0;
    document.body.appendChild(label);

    var intervalo = 0;
    if (acabado === false) {
        intervalo = setInterval(function () {
            count--;
            label.innerHTML = "Time: " + count;
            if (count == 0) {
                clearInterval(intervalo);
                if (confirm("El tiempo ha terminado.\n¿ Deseas volver a jugar ?")) {
                    location.reload();

                } else {
                    alert("Fin del Juego");
                }
                time = true;
            }
        }, 1000);
    } else {
        clearInterval(intervalo);
        if (confirm("Enorabuena Has Ganado.\n¿ Deseas volver a jugar ?")) {
            location.reload();
        } else {
            alert("Fin del Juego");
        }
    }
}

//MAIN
getNumberPiecesFromUser();



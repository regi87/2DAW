autor = require("../src/clases/autor").autor;
patente_cientifica = require("../src/clases/patente_cientifica").patente_cientifica;
articulos_revista = require("../src/clases/articulos_revista").articulos_revista;
articulos_conferencia = require("../src/clases/articulos_conferencia").articulos_conferencia;

const rl = require('readline-sync');
//objects
autor = new autor();
patente_cientifica = new patente_cientifica();
articulos_revista = new articulos_revista();
articulos_conferencia = new articulos_conferencia();

////MENUS PRINCIPALES
//Inicio
menuPrincipal();

function menuPrincipal() {

    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4 && opcion !== 5) {

        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir\n' +
            '2) Modificar\n' +
            '3) Dar de baja\n' +
            '4) Buscar\n' +
            '5) Calcular el número de producciones científicas de un autor\n' +
            '6) Calcular el factor de impacto acumulado por el autor en los últimos años\n' +

            '7) Salir\n');

        if (opcion === '1') {
            menuAyadir();
        }
        else if (opcion === '2') {
            menuModificar();
        }
        else if (opcion === '3') {
            menuBaja();
        }
        else if (opcion === '4') {
            menuBuscar();
        }
        else if (opcion === '5') {
            numProduccionesCientíficas();
        }
        else if (opcion === '6') {
            consultar();
        }
        else if (opcion === '7') {
            break;
        }
    }
}

function menuAyadir() {
    let opcion = "";

    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir Autor\n' +
            '2) Volver\n');
        if (opcion === '1') {
            introduceAutores();
        }
        else if (opcion === '2') {
            menuPrincipal();
        }
    }
}

//menu Modificar
function menuModificar() {
    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4 && opcion !== 5) {

        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) Modificar Autor\n' +
            '2) Modificar Patente\n' +
            '3) Modificar Artículo Revista\n' +
            '4) Modificar Artículo Conferencia\n' +
            '5) Volver\n');

        if (opcion === '1') {
            modificarAutor();
        }
        if (opcion === '2') {
            modificarPatente();
        }
        if (opcion === '3') {
            modificarArticulo("revista");
        }
        if (opcion === '4') {
            modificarArticulo("conferencia");
        }
        else if (opcion === '5') {
            menuPrincipal();
        }
    }
}

function menuBaja() {
    let opcion = "";
    //patente del autor y articulos relacionados
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
        opcion = rl.question('Introduce la accion a realizar:\n' +

            '1) Dar de baja a un autor\n' +
            '2) Dar de baja a una patente\n' +
            '3) Dar de baja a un artículo de revista\n' +
            '4) Dar de baja a un artículo de conferencia\n' +
            '5) No Añadir nada\n');

        if (opcion === '1') {
            bajaAutor();
        }
        else if (opcion === '2') {
            bajaPatente();
        }
        else if (opcion === '3') {
            bajaArticulo("revista");
        }
        else if (opcion === '4') {
            bajaArticulo("conferencia");
        }
        else if (opcion === '5') {
            menuPrincipal();
        }
    }

}

function menuBuscar() {
    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4 && opcion !== 5) {
        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) Buscar autor\n' +
            '2) Buscar todo por año de publicación\n' +
            '3) Buscar por tipo de publicación\n' +
            '4) Buscar por autor, año de publicación y tipo de publicación\n' +
            '5) Volver\n');

        if (opcion === '1') {
            buscarAutor();
        }
        else if (opcion === '2') {
            buscarAnyoPubli();
        }
        else if (opcion === '3') {
            buscarTipoPubli();
        }
        else if (opcion === '4') {
            buscarAutorAnyioPubliTipo();
        }
        else if (opcion === '5') {
            menuPrincipal();
        }
    }
}
////MENUS PRINCIPALES //////

//MENUS SECUNDARIOS INTRODUCCIÓN DATOS
function introduceAutores() {
    const rl = require('readline-sync');

    let nombre = rl.question("Introduce el nombre de un nuevo autor:");
    let apellidos = rl.question("Introduce el apellido del nuevo autor:");
    console.log("\n");

    autor.setNombre(nombre);
    autor.setApellidos(apellidos);
    autor.setAutores({ 'nombre': nombre, 'apellidos': apellidos, "id": 0 });

    let opcion = "";
    let _idAutor = autor.getId();

    //patente del autor y articulos relacionados
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) 
        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir Patente al autor\n' +
            '2) AÃ±adir Articulo al autor\n' +
            '3) No Añadir nada\n' +
            '4) Volver\n');

        if (opcion === '1') {
            introducePatente(_idAutor);
        }
        else if (opcion === '2') {
            introduceArticulo(_idAutor);
        }
        else if (opcion === '3') {
        }
        else if (opcion === '4') {
            menuAyadir();
        }
    }
}

//Introduce Patente
function introducePatente(_idAutor) {
    const rl = require('readline-sync');

    let nombre = rl.question("Introduce el nombre de la patente:");
    let anyo_publi = rl.question("Introduce el año de publicación de la patente:");
    let anyo_vencimiento = rl.question("Introduce el año de vencimiento de la patente:");
    console.log("\n");

    patente_cientifica.setAnyoPubli(anyo_publi);
    patente_cientifica.getAnyoVencimiento(anyo_vencimiento);
    patente_cientifica.setPatentes({ "nombre": nombre, "anyo_publi": anyo_publi, "anyo_vencimiento": anyo_vencimiento, "id_autor": _idAutor });

    let opcion = "";

    //patente del autor y articulos relacionados
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {

        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir Articulo al autor\n' +
            '2) AÃ±adir otro autor\n' +
            '3) No Añadir nada\n');

        if (opcion === '1') {
            introduceArticulo(_idAutor);
        }
        else if (opcion === '2') {
            introduceAutores();
        }
        else if (opcion === '3') {
            menuPrincipal();
        }
    }
}

//Introduce Artículo
function introduceArticulo(_idAutor) {

    let opcion = "";

    //patente del autor y articulos relacionados
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {

        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir articulo revista\n' +
            '2) AÃ±adir articulo de conferencia \n' +
            '3) Vover\n');

        if (opcion === '1') {
            introduceArticuloTipo(_idAutor, "revista");
        }
        else if (opcion === '2') {
            introduceArticuloTipo(_idAutor, "conferencia");
        }
        else if (opcion === '3') {
            menuAyadir();
        }
    }
}
//Introduce articulo Tipo
function introduceArticuloTipo(_idAutor, tipo) {
    const rl = require('readline-sync');

    let title = rl.question("Introduce el nombre del artículo:");
    let num_paginas = rl.question("Introduce el número de páginas :");
    let anyo_publi = rl.question("Introduce el año de publicación :");
    let num_menciones = rl.question("Introduce el número de menciones :");

    if (tipo === "revista") {
        let nombre_conf = rl.question("Introduce el nombre de la conferencia :");
        let celebracion = rl.question("Introduce el nombre de la celebración :");
        console.log("\n");

        articulos_revista.setArticulo({ "title": title, "num_paginas": num_paginas, "anyo_publi": anyo_publi, "num_menciones": num_menciones, "nombre_conf": nombre_conf, "celebracion": celebracion, "id_autor": _idAutor });

        let opcion = "";
        //patente del autor y articulos relacionados
        while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
            opcion = rl.question('Introduce la accion a realizar:\n' +
                '1) Añadir patente\n' +
                '2) Añadir articulo Conferencia\n' +
                '3) AÃ±adir otro autor\n' +
                '4) No Añadir nada\n');

            if (opcion === '1') {
                introducePatente(_idAutor);
            }
            else if (opcion === '2') {
                introduceArticuloTipo(_idAutor, "conferencia");
            }
            else if (opcion === '3') {
                introduceAutores();
            }
            else if (opcion === '4') {
                menuPrincipal();
            }
        }

    }
    else {
        let editorial = rl.question("Introduce el nombre de la editorial :");
        let factor_impacto = rl.question("Introduce el factor impacto :");
        console.log("\n");

        articulos_conferencia.setArticulo({ "title": title, "num_paginas": num_paginas, "anyo_publi": anyo_publi, "num_menciones": num_menciones, "editorial": editorial, "factor_impacto": factor_impacto, "id_autor": _idAutor });

        let opcion = "";
        //patente del autor y articulos relacionados
        while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
            opcion = rl.question('Introduce la accion a realizar:\n' +
                '1) Añadir patente\n' +
                '2) Añadir articulo Revista\n' +
                '3) AÃ±adir otro autor\n' +
                '4) No Añadir nada\n');

            if (opcion === '1') {
                introducePatente(_idAutor);
            }
            else if (opcion === '2') {
                introduceArticuloTipo(_idAutor, "revista");
            }
            else if (opcion === '3') {
                introduceAutores();
            }
            else if (opcion === '4') {
                menuPrincipal();
            }
        }
    }
}
//MENUS SECUNDARIOS INTRODUCCIÓN DATOS

//MENUS SECUNDARIOS MODIFICACIÓN DE DATOS

//Modificación del Autor
function modificarAutor() {
    let autores = autor.getAutores();
    let pregunta = rl.question("Introduce el nombre del autor que quieras buscar :");
    console.log("\n");
    let indice = "";
    for (let autor in autores) {
        if (autores[autor].nombre === pregunta) {
            indice = autor;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe el autor buscado\n");
        return;
    }
    let nombre = rl.question("Introduce el nuevo nombre :");
    let apellidos = rl.question("Introduce el nuevo apellido :");

    autor.modificarAutor(indice, { "nombre": nombre, "apellidos": apellidos });
    menuPrincipal();
}

//Modificación de la Patente
function modificarPatente() {
    let patentes = patente_cientifica.getPatentes();
    let pregunta = rl.question("Introduce el nombre de la patente que quieras buscar :");
    console.log("\n");
    let indice = "";
    for (let patente in patentes) {
        if (patentes[patente].nombre === pregunta) {
            indice = patente;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe la patente buscada\n");
        return;
    }
    let nombre = rl.question("Introduce el nuevo nombre de la patente :");
    let anyo_publi = rl.question("Introduce el año de publicación de la patente :");
    let anyo_vencimiento = rl.question("Introduce el año de vencimiento de la patente :");

    patente_cientifica.modificarPatente(indice, { "nombre": nombre, "anyo_publi": anyo_publi, "anyo_vencimiento": anyo_vencimiento, });
    menuPrincipal();
}
//Modificación de los articulos
function modificarArticulo(_tipo) {
    let articulos = "";
    if (_tipo === "revista")
        articulos = articulos_revista.getArticulo();
    else
        articulos = articulos_conferencia.getArticulo();

    let pregunta = rl.question("Introduce el nombre del artículo que quieras buscar :");
    console.log("\n");
    let indice = "";

    for (let articulo in articulos) {
        if (articulos[articulo].title === pregunta) {
            indice = articulo;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe el artículo buscado\n");
        return;
    }
    let title = rl.question("Introduce el nuevo nombre del artículo:");
    let num_paginas = rl.question("Introduce el número de páginas:");
    let anyo_publi = rl.question("Introduce el año de publicación del artículo :");
    let num_menciones = rl.question("Introduce el número de menciones :");

    //si es Artículo Revista
    if (_tipo === "revista") {
        let nombre_conf = rl.question("Introduce el nombre de la conferencia :");
        let celebracion = rl.question("Introduce el nombre de la celebración :");
        articulos_revista.modificarArticulo(indice, { "title": title, "num_paginas": num_paginas, "anyo_publi": anyo_publi, "num_menciones": num_menciones, "nombre_conf": nombre_conf, "celebracion": celebracion, });
    }
    //si es Artículo Conferencia
    else {
        let factor_impacto = rl.question("Introduce el factor de impacto :");
        let art_conferencia = rl.question("Introduce el nombre de la conferencia :");
        articulos_conferencia.modificarArticulo(indice, { "title": title, "num_paginas": num_paginas, "anyo_publi": anyo_publi, "num_menciones": num_menciones, "factor_impacto": factor_impacto, "art_conferencia": art_conferencia, });
    }
    menuPrincipal();
}
//MENUS SECUNDARIOS MODIFICACIÓN DE DATOS

//MENUS SECUNDARIOS BAJAS
//Baja autor
function bajaAutor() {
    let autores = autor.getAutores();
    let pregunta = rl.question("Introduce el nombre del autor que quieras dar de baja :");
    console.log("\n");
    let indice = "";
    for (let autor in autores) {
        if (autores[autor].nombre === pregunta) {
            indice = autor;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe el autor buscado\n");
        return;
    }
    autor.eliminarAutor(indice);
}

//Baja Patente
function bajaPatente() {
    let patentes = patente_cientifica.getPatentes();
    let pregunta = rl.question("Introduce el nombre de la patente que quieras dar de baja :");
    console.log("\n");
    let indice = "";
    for (let patente in patentes) {
        if (patentes[patente].nombre === pregunta) {
            indice = autor;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe la patente buscada\n");
        return;
    }
    patente_cientifica.eliminarPatente(indice);
}

function bajaArticulo(_tipo) {
    let articulos = "";
    if (_tipo === "revista")
         articulos = articulos_revista.getArticulo();
    else
         articulos = articulos_conferencia.getArticulo();

    let pregunta = rl.question("Introduce el nombre del articulo que quieras dar de baja :");
    console.log("\n");
    let indice = "";
    for (let articulo in articulos) {
        if (articulos[articulo].title === pregunta) {
            indice = autor;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe el articulo buscado\n");
        return;
    }
    if (_tipo === "revista")
        articulos_revista.eliminarArticulo(indice);
    else
        articulos_conferencia.eliminarArticulo(indice);
}
//MENUS SECUNDARIOS BAJAS

//MENUS SECUNDARIOS DE BUSCAR
//busqueda de Autor
function buscarAutor() {
    let autores = autor.getAutores();
    let pregunta = rl.question("Introduce el autor a buscar :");

    if (autores[0] !== undefined)
        for (let autor in autores) {
            if (pregunta === autores[autor].nombre)
                console.log("Nombre : " + autores[autor].nombre);
            console.log("Apellidos : " + autores[autor].apellidos + "\n");
        }
    else {
        console.log("No hay resultados\n");
        return;
    }
}

//busqueda por año
function buscarAnyoPubli() {
    let pregunta = rl.question("Introduce el año para buscar la información :");
    let _articuloRevista = articulos_revista.getArticulo();
    let patentes = patente_cientifica.getPatentes();
    let _articulos_conferencia = articulos_conferencia.getArticulo();
    let encontrado = false;

    if (_articuloRevista[0] !== undefined)
        for (let articulo in _articuloRevista) {
            if (pregunta === _articuloRevista[articulo].anyo_publi) {
                encontrado = true;
                console.log("\nArticulo Revista : " + _articuloRevista[articulo].title);
            }
        }
    if (encontrado === false) {
        console.log("\nNo hay articulos de revista de ese año");
        encontrado = false;
    }
    if (_articulos_conferencia[0] !== undefined)
        for (let articulo in _articulos_conferencia) {
            if (pregunta === _articulos_conferencia[articulo].anyo_publi) {
                encontrado = true;
                console.log("Articulo Conferencia : " + _articulos_conferencia[articulo].title);
            }
        }
    if (encontrado === false) {
        console.log("\nNo hay articulos de conferencia de ese año");
        encontrado = false;
    }
    if (patentes[0] !== undefined)
        for (let patente in patentes) {
            if (pregunta === patentes[patente].anyo_publi) {
                encontrado = true;
                console.log("Nombre Patente : " + patentes[patente].nombre + "\n");
            }
        }
    if (encontrado === false) {
        console.log("\nNo hay patentes de ese año\n");
        encontrado = false;
    }
}

//buscar tipo
function buscarTipoPubli() {
    let pregunta = rl.question("Introduce el tipo de publicación a buscar articulo o patente, respete la sintaxis :");

    if (pregunta === "articulo") {
        listaActiculos();
    }
    else {
        listaPatentes();
    }
}

//buscar por autor año de publicación y tipo de busqueda
function buscarAutorAnyioPubliTipo() {
    let pregunta_1 = rl.question("Introduce el nombre del autor :");
    let pregunta_2 = rl.question("Introduce el tipo de información a buscar (articulo o patente):");
    let pregunta_3 = rl.question("Introduce el año para buscar la información :");

    let _articuloRevista = articulos_revista.getArticulo();
    let patentes = patente_cientifica.getPatentes();
    let _articulos_conferencia = articulos_conferencia.getArticulo();
    let autores = autor.getAutores();
    let _autor = [];
    let info = [];
    let info_2 = [];
    let info_3 = [];

    if (autores[0] !== undefined) {
        for (let autor in autores) {
            if (pregunta_1 === autores[autor].nombre) {
                _autor[0] = { "id": autores[autor].id, "nombre": autores[autor].nombre };
                console.log("\n Autor : " + autores[autor].nombre);
            }
            else {
                console.log("No se ha encontrado el autor\n");
                return;
            }
        }
    }
    if (pregunta_2 === "patente") {
        if (patentes[0] !== undefined) {
            for (let patente in patentes) {
                if (_autor[0].id === patentes[patente].id_autor && pregunta_3) {
                    if (patentes[patente].anyo_publi === pregunta_3) {
                        info[patente] = { "nombre": patentes[patente].nombre, "anyo_publi": patentes[patente].anyo_publi };
                        console.log("Patente: " + patentes[patente].nombre + "\n");
                    }
                }
            }
        }
    }
    if (pregunta_2 === "articulo") {
        if (_articuloRevista[0] !== undefined) {
            for (let articulo in _articuloRevista) {
                if (_autor[0].id === _articuloRevista[articulo].id_autor && pregunta_3 === _articuloRevista[articulo].anyo_publi) {
                    info_2[articulo] = { "title": _articuloRevista[articulo].title, "anyo_publi": _articuloRevista[articulo].anyo_publi };
                    console.log("Articulo Revista: " + _articuloRevista[articulo].title);
                }
                else {
                    console.log("No hay artículos de revista\n");
                }
            }
        }
        else {
            console.log("No hay artículos de revista\n");
        }
        if (_articulos_conferencia[0] !== undefined)
            for (let articulo in _articulos_conferencia) {
                if (_autor[0].id === _articulos_conferencia[articulo].id_autor && pregunta_3 === _articulos_conferencia[articulo].anyo_publi) {
                    info_3[articulo] = { "title": _articulos_conferencia[articulo].title, "anyo_publi": _articulos_conferencia[articulo].anyo_publi };
                    console.log("Articulo Conferencia: " + _articulos_conferencia[articulo].title + "\n");
                }
                else {
                    console.log("No hay artículos de conferencia\n");
                }
            }
        else {
            console.log("No hay artículos de conferencia\n");
        }
    }
}

//Listar Patente
function listaPatentes() {
    let patentes = patente_cientifica.getPatentes();
    if (patentes[0] === undefined || patentes.length === 0) {
        console.log("No hay patentes");
        return;
    }
    else {
        console.log(patentes);
        console.log("\n");
    }
}

//Listar Articulos
function listaActiculos() {
    let _articulos_revista = articulos_revista.getArticulo();
    let _articulos_conferencia = articulos_conferencia.getArticulo();

    if (_articulos_revista[0] === undefined && _articulos_conferencia[0] === undefined) {
        console.log("No hay articulos");

    }
    else if (_articulos_revista.length > 0) {
        console.log("Articulos Revista")
        console.log(_articulos_revista);
        console.log("\n");
    }
    else if (_articulos_conferencia.length > 0) {
        console.log("Articulos Conferencia")
        console.log(_articulos_conferencia);
        console.log("\n");
    }
}
//MENUS SECUNDARIOS DE BUSCAR

//MENUS SECUNDARIOS INFORMACIÓN
//Listar Autores
function numProduccionesCientíficas() {
    let nombrePreg = rl.question("Introduce el nombre del autor para buscar el total de producciones científicas:");
    let id_autor = 0;
    let autores = autor.getAutores();
    let patentes = patente_cientifica.getPatentes();
    let _articulos_revista = articulos_revista.getArticulo();
    let _articulos_conferencia = articulos_conferencia.getArticulo();

    if (autores[0] === undefined || autores.length === 0) {
        console.log("No hay autores");
        return;
    }
    else {
        console.log("\n");
    }
    let contadorPatente = 0;
    let contadorArtRevis = 0;
    let contadorArtConf = 0;

    for (let autor in autores) {
        if (nombrePreg === autores[autor].nombre) {
            id_autor = autores[autor].id;
            break;
        }
    }
    for (let patente in patentes) {
        if (id_autor === patentes[patente].id_autor)
            contadorPatente++;
    }
    for (let articulo in _articulos_revista) {
        if (id_autor === _articulos_revista[articulo].id_autor)
            contadorArtRevis++;
    }
    for (let articulo in _articulos_conferencia) {
        if (id_autor === _articulos_conferencia[articulo].id_autor)
            contadorArtConf++;
    }
    console.log("Autor : " + nombrePreg + "\n" + "Número de Patentes: " + contadorPatente + "\n" + "Número de Artículos de Revista: " + contadorArtRevis + "\n" + "Número de Artículos de Conferencia: " + contadorArtConf+"\n");
}

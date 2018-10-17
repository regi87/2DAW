//requires classes
const autor = require("../src/clases/autor").autor;
listados = require("../src/clases/listados").listados;
const patente_cientifica = require("../src/clases/patente_cientifica").patente_cientifica;
const articulos_revista = require("../src/clases/articulos_revista").articulos_revista;
const articulos_conferencia = require("../src/clases/articulos_conferencia").articulos_conferencia;
const rl = require('readline-sync');
listados = new listados();
//Indices
var id_Autor = 0;
//Inicio
menuPrincipal();
////MENUS PRINCIPALES //////
//Menu Principal
function menuPrincipal() {
    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4 && opcion !== 5) {
        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) Añadir\n' +
            '2) Modificar\n' +
            '3) Dar de baja\n' +
            '4) Buscar\n' +
            '5) Calcular el número de producciones científicas de un autor\n' +
            '6) Calcular el factor de impacto acumulado por el autor en los últimos años\n' +
            '7) Calcular el indice h de un actor\n' +
            '8) Salir\n');

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
            factordeImpacto();
        }
        else if (opcion === '7') {
            indiceH();
        }
        else if (opcion === '8') {
            break;
        }
    }
}
//Menu Añadir
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
//Menu para dar de baja
function menuBaja() {
    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) Dar de baja a un autor\n' +
            '2) Dar de baja a una patente\n' +
            '3) Dar de baja a un artículo de revista\n' +
            '4) Dar de baja a un artículo de conferencia\n' +
            '5) Volver\n');

        if (opcion === '1') {
            baja("autor");
        }
        else if (opcion === '2') {
            baja("patente");
        }
        else if (opcion === '3') {
            baja("revista");
        }
        else if (opcion === '4') {
            baja("conferencia");
        }
        else if (opcion === '5') {
            menuPrincipal();
        }
    }
}
//Menu para realizar Busquedas
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
//Menu para introducir autores
function introduceAutores() {
    const rl = require('readline-sync');
    let nombre = rl.question("Introduce el nombre de un nuevo autor:");
    let apellidos = rl.question("Introduce el apellido del nuevo autor:");
    console.log("\n");
    id_Autor++;
    let _autor = new autor(nombre, apellidos, id_Autor);
    //añadimos información al autor
    _autor.setNombre(nombre);
    _autor.setApellidos(apellidos);
    //añadimos al listado el objeto a un array
    listados.setAutores(_autor.getAutor());
    console.log(listados.getAutores());
    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3) {
        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir Patente al autor\n' +
            '2) AÃ±adir Articulo al autor\n' +
            '3) Volver\n');

        if (opcion === '1') {
            introducePatente(id_Autor);
        }
        else if (opcion === '2') {
            introduceArticulo(id_Autor);
        }
        else if (opcion === '3') {
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
    let _patente_cientifica = new patente_cientifica(nombre, anyo_publi, anyo_vencimiento, id_Autor);
    _patente_cientifica.setNombre(nombre);
    _patente_cientifica.setAnyoPubli(anyo_publi);
    _patente_cientifica.setAnyoVencimiento(anyo_vencimiento);
    listados.setPatentes(_patente_cientifica.getPatente());

    let opcion = "";
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {

        opcion = rl.question('Introduce la accion a realizar:\n' +
            '1) AÃ±adir otra Patente al autor\n' +
            '2) AÃ±adir Articulo al autor\n' +
            '3) AÃ±adir otro autor\n' +
            '4) No Añadir nada\n');

        if (opcion === '1') {
            introducePatente(_idAutor);
        }
        if (opcion === '2') {
            introduceArticulo(_idAutor);
        }
        else if (opcion === '3') {
            introduceAutores();
        }
        else if (opcion === '4') {
            menuPrincipal();
        }
    }
}
//Introduce Artículo
function introduceArticulo(_idAutor) {
    let opcion = "";
    //patente del autor y articulos relacionados
    while (opcion !== 1 && opcion !== 2 && opcion !== 3) {
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
    let title = rl.question("Introduce el nombre del artículo:");
    let num_paginas = rl.question("Introduce el número de páginas :");
    let anyo_publi = rl.question("Introduce el año de publicación :");
    let num_menciones = rl.question("Introduce el número de menciones :");

    if (tipo === "revista") {
        let nombre_conf = rl.question("Introduce el nombre de la conferencia :");
        let celebracion = rl.question("Introduce el nombre de la celebración :");
        console.log("\n");
        let _articulos_revista = new articulos_revista(title, num_paginas, anyo_publi, num_menciones, nombre_conf, celebracion, _idAutor);
        _articulos_revista.setTitulo(title);
        _articulos_revista.setNum_paginas(num_paginas);
        _articulos_revista.setAnyo_publi(anyo_publi);
        _articulos_revista.setNum_menciones(num_menciones);
        _articulos_revista.setNombreConf(nombre_conf);
        _articulos_revista.setCelebracion(celebracion);
        //rellenamos la lista
        listados.setArticulo(_articulos_revista.getArticulo(), "revista");

        let opcion = "";
        while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4 && opcion !== 5) {
            opcion = rl.question('Introduce la accion a realizar:\n' +
                '1) Añadir patente\n' +
                '2) Añadir artículo Conferencia\n' +
                '3) Añadir otro artículo Revista\n' +
                '4) AÃ±adir otro autor\n' +
                '5) No Añadir nada\n');

            if (opcion === '1') {
                introducePatente(_idAutor);
            }
            else if (opcion === '2') {
                introduceArticuloTipo(_idAutor, "conferencia");
            }

            else if (opcion === '3') {
                introduceArticuloTipo(_idAutor, "revista");
            }

            else if (opcion === '4') {
                introduceAutores();
            }
            else if (opcion === '5') {
                menuPrincipal();
            }
        }
    }
    else {
        let editorial = rl.question("Introduce el nombre de la editorial :");
        let factor_impacto = rl.question("Introduce el factor impacto :");
        let _articulos_conferencia = new articulos_conferencia(title, num_paginas, anyo_publi, num_menciones, editorial, factor_impacto, _idAutor);
        _articulos_conferencia.setTitulo(title);
        _articulos_conferencia.setNum_paginas(num_paginas);
        _articulos_conferencia.setAnyo_publi(anyo_publi);
        _articulos_conferencia.setNum_menciones(num_menciones);
        _articulos_conferencia.setEditorial(editorial);
        _articulos_conferencia.setFactImp(factor_impacto);
        //rellenamos la lista
        listados.setArticulo(_articulos_conferencia.getArticulo(), "conferencia");

        let opcion = "";
        while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {
            opcion = rl.question('\nIntroduce la accion a realizar:\n' +
                '1) Añadir patente\n' +
                '2) Añadir articulo Revista\n' +
                '3) Añadir otro articulo de Conferencia\n' +
                '4) AÃ±adir otro autor\n' +
                '5) No Añadir nada\n');

            if (opcion === '1') {
                introducePatente(_idAutor);
            }
            else if (opcion === '2') {
                introduceArticuloTipo(_idAutor, "revista");
            }
            else if (opcion === '3') {
                introduceArticuloTipo(_idAutor, "conferencia");
            }
            else if (opcion === '4') {
                introduceAutores();
            }
            else if (opcion === '5') {
                menuPrincipal();
            }
        }
    }
}
//MENUS SECUNDARIOS INTRODUCCIÓN DATOS
//MENUS SECUNDARIOS MODIFICACIÓN DE DATOS
//Modificación del Autor
function modificarAutor() {
    let autores = listados.getAutores();
    let pregunta = rl.question("Introduce el nombre del autor que quieras buscar :");
    console.log("\n");
    let id = "";
    let indice = "";

    for (let autor in autores) {
        if (autores[autor].nombre === pregunta) {
            id = autor.id;
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
    //modificamos los campos
    autor.setNombre(nombre);
    autor.setApellidos(apellidos);
    //modificamos listado
    listados.modificar(indice, autor.getAutor(), "autores");
    menuPrincipal();
}
//Modificación de la Patente
function modificarPatente() {
    let patentes = listados.getPatentes();
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
    //modificamos los campos
    patente_cientifica.setNombre(nombre);
    patente_cientifica.setAnyoPubli(anyo_publi);
    patente_cientifica.setAnyoVencimiento(anyo_vencimiento);
    //modificamos listado
    listados.modificar(indice, patente_cientifica.getPatente(), "patentes");
    menuPrincipal();
}
//Modificación de los articulos
function modificarArticulo(_tipo) {
    let articulos = "";
    if (_tipo === "revista")
        articulos = listados.getArticulos("revista");
    else
        articulos = listados.getArticulos("conferencia");

    let pregunta = rl.question("Introduce el nombre del artículo que quieras buscar :");
    console.log("\n");
    let indice = "";
    let id_autor = 0;
    for (let articulo in articulos) {
        if (articulos[articulo].title === pregunta) {
            indice = articulo;
            id_autor = articulos[articulo].id_autor;
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
        let _articulos_revista = new articulos_revista(title, num_paginas, anyo_publi, num_menciones, nombre_conf, celebracion, id_autor);
        //modificamos los campos
        _articulos_revista.setTitulo(title);
        _articulos_revista.setNum_paginas(num_paginas);
        _articulos_revista.setAnyo_publi(anyo_publi);
        _articulos_revista.setNum_menciones(num_menciones);
        _articulos_revista.setNombreConf(nombre_conf);
        _articulos_revista.setCelebracion(celebracion);
        //actualizamos listado
        listados.modificar(indice, _articulos_revista.getArticulo(), "revistas");
    }
    //si es Artículo Conferencia
    else {
        let factor_impacto = rl.question("Introduce el factor de impacto :");
        let editorial = rl.question("Introduce el nombre de la editorial :");
        let _articulos_conferencia = new articulos_conferencia(title, num_paginas, anyo_publi, num_menciones, factor_impacto, editorial, id_autor);
        //modificamos los campos
        _articulos_conferencia.setTitulo(title);
        _articulos_conferencia.setNum_paginas(num_paginas);
        _articulos_conferencia.setAnyo_publi(anyo_publi);
        _articulos_conferencia.setNum_menciones(num_menciones);
        _articulos_conferencia.setFactImp(factor_impacto);
        _articulos_conferencia.setEditorial(editorial);
        //actualizamos listado
        listados.modificar(indice, _articulos_conferencia.getArticulo(), "conferencia");
    }
    menuPrincipal();
}
//MENUS SECUNDARIOS MODIFICACIÓN DE DATOS
//MENUS SECUNDARIOS BAJAS
//Baja autor
function baja(_tipo) {
    //listados
    let array = [];
    let pregunta = "";
    if (_tipo === "autor") {
        array = listados.getAutores();
        pregunta = rl.question("Introduce el nombre del autor que quieras dar de baja :");
    }
    else if (_tipo === "patente") {
        array = listados.getPatentes();
        pregunta = rl.question("Introduce el nombre de la patente que quieras dar de baja :");
    }
    else if (_tipo === "revista") {
        array = listados.getArticulos("revista");
        pregunta = rl.question("Introduce el nombre del articulo que quieras dar de baja :");
    }
    else {
        array = listados.getArticulos("conferencia");
        pregunta = rl.question("Introduce el nombre del articulo que quieras dar de baja :");
    }

    console.log("\n");
    let indice = "";
    for (let _indice in array) {
        if (_tipo === "autor" || _tipo === "patente") {
            if (array[_indice].nombre === pregunta) {
                indice = _indice;
                break;
            }
        }
        else if (array[_indice].title === pregunta) {
            indice = _indice;
            break;
        }
    }
    if (indice === "") {
        console.log("No se ha encontrado o no existe\n");
        return;
    }
    listados.eliminar(indice, _tipo);
}
//MENUS SECUNDARIOS BAJAS
//MENUS SECUNDARIOS DE BUSCAR
//busqueda de Autor
function buscarAutor() {
    let autores = listados.getAutores();
    let pregunta = rl.question("Introduce el autor a buscar :");

    if (autores[0] !== undefined)
        for (let autor in autores) {
            if (pregunta === autores[autor].nombre) {
                console.log("Nombre : " + autores[autor].nombre);
                console.log("Apellidos : " + autores[autor].apellidos + "\n");
            }
            else
                console.log("No se ha encontrado o no existe");
        }
    else {
        console.log("No hay resultados\n");
        return;
    }
}
//busqueda por año
function buscarAnyoPubli() {
    let pregunta = rl.question("Introduce el año para buscar la información :");
    let _articuloRevista = listados.getArticulos("revista");
    let _articulos_conferencia = listados.getArticulos("conferencia");
    let patentes = listados.getPatentes();
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
    encontrado = false;
    if (_articulos_conferencia[0] !== undefined)
        for (let articulo in _articulos_conferencia) {
            if (pregunta === _articulos_conferencia[articulo].anyo_publi) {
                encontrado = true;
                console.log("\nArticulo Conferencia : " + _articulos_conferencia[articulo].title);
            }
        }
    if (encontrado === false) {
        console.log("\nNo hay articulos de conferencia de ese año");
        encontrado = false;
    }
    encontrado = false;
    if (patentes[0] !== undefined)
        for (let patente in patentes) {
            if (pregunta === patentes[patente].anyo_publi) {
                encontrado = true;
                console.log("\nNombre Patente : " + patentes[patente].nombre + "\n");
            }
        }
    if (encontrado === false) {
        console.log("\nNo hay patentes de ese año\n");
        encontrado = false;
    }
}
//buscar por tipo (Patentes, Artículos)
function buscarTipoPubli() {
    let pregunta = "";
    let arrayLista = [];
    while (pregunta !== "A" && pregunta !== "B" && pregunta !== "C") {
        pregunta = rl.question("Introduce el tipo de publicación a buscar A (articulo revista), B (artículo conferencia) o C(patente), respete la sintaxis A,B,C :\n");
    }
    //Dependiendo de la opción escogida les mostraremos la información
    if (pregunta === "A") {
        arrayLista = listados.getArticulos("revista");
        if (arrayLista.length !== 0) {
            for (let articulo in arrayLista)
                console.log("Artículo Revista : " + arrayLista[articulo].nombre + "  " + "Año :" + arrayLista[articulo].anyo_publi);
        }
        else
            console.log("No hay artículos de revista");
    }
    else if (pregunta === "B") {
        arrayLista = listados.getArticulos("conferencia");
        if (arrayLista.length !== 0) {
            for (let articulo in arrayLista)
                console.log("Artículo Conferencia : " + arrayLista[articulo].nombre + "  " + "Año :" + arrayLista[articulo].anyo_publi);
        }
        else
            console.log("No hay artículos de revista");
    }
    else {
        arrayLista = listados.getPatentes();
        if (arrayLista.length !== 0) {
            for (let articulo in arrayLista)
                console.log("Nombre Patente : " + arrayLista[articulo].nombre + "  " + "Año :" + arrayLista[articulo].anyo_publi);
        }
        else
            console.log("No hay artículos de revista");
    }
}
//buscar por autor año de publicación y tipo de busqueda
function buscarAutorAnyioPubliTipo() {
    let pregunta_1 = rl.question("Introduce el nombre del autor :");
    let pregunta_2 = rl.question("Introduce el tipo de información a buscar (articulo o patente):");
    let pregunta_3 = rl.question("Introduce el año para buscar la información :");
    //listados
    let autores = listados.getAutores();
    let patentes = listados.getPatentes();
    let _articulos_conferencia = listados.getArticulos("conferencia");
    let _articuloRevista = listados.getArticulos("revista");
    let _autor = [];

    if (autores.length > 0) {
        for (let autor in autores) {
            if (pregunta_1 === autores[autor].nombre) {
                id_autor = autores[autor].id;
                _autor[0] = { "id": autores[autor].id, "nombre": autores[autor].nombre };
                console.log("\n Autor : " + autores[autor].nombre);
            }
            else {
                console.log("No se ha encontrado el autor\n");
                return;
            }
        }
    }
    else {
        console.log("No hay autores\n");
        return;
    }
    if (pregunta_2 === "patente") {
        if (patentes.length > 0) {
            for (let patente in patentes) {
                if (_autor[0].id === patentes[patente].id_autor && patentes[patente].anyo_publi === pregunta_3) {
                    patentes[patente] = { "nombre": patentes[patente].nombre, "anyo_publi": patentes[patente].anyo_publi };
                    console.log("Patente: " + patentes[patente].nombre + "\n");
                }
                else {
                    console.log("No se ha encontrado la patente\n");
                    return;
                }
            }
        }
        else {
            console.log("No hay patente\n");
            return;
        }
    }
    if (pregunta_2 === "articulo") {
        if (_articuloRevista.length > 0) {
            for (let articulo in _articuloRevista) {
                if (_autor[0].id === _articuloRevista[articulo].id_autor && pregunta_3 === _articuloRevista[articulo].anyo_publi) {
                    console.log("Articulo Revista: " + _articuloRevista[articulo].title);
                }
                else {
                    console.log("No se ha encontrado artículos de revista\n");
                }
            }
        }
        else {
            console.log("No hay artículos de revista\n");
        }
        if (_articulos_conferencia.length > 0)
            for (let articulo in _articulos_conferencia) {
                if (_autor[0].id === _articulos_conferencia[articulo].id_autor && pregunta_3 === _articulos_conferencia[articulo].anyo_publi) {
                    console.log("Articulo Conferencia: " + _articulos_conferencia[articulo].title + "\n");
                }
                else {
                    console.log("No se ha encontrado artículos de conferencia\n");
                }
            }
        else {
            console.log("No hay artículos de conferencia\n");
        }
    }
}
//MENUS SECUNDARIOS DE BUSCAR
//MENUS SECUNDARIOS INFORMACIÓN
//Numero de producciones científicas
function numProduccionesCientíficas() {
    let nombrePreg = rl.question("Introduce el nombre del autor para buscar el total de producciones científicas:");
    let id_autor = 0;
    //listados
    let patentes = listados.getPatentes();
    let _articulos_revista = listados.getArticulos("revista");
    let _articulos_conferencia = listados.getArticulos("conferencia");
    let autores = listados.getAutores();
    let contadorPatente = 0;
    let contadorArtRevis = 0;
    let contadorArtConf = 0;

    if (autores.length === 0) {
        console.log("No hay autores");
        return;
    }
    else {
        console.log("\n");
    }
    for (let autor in autores) {
        if (autores[autor].nombre === nombrePreg)
            id_autor = autores[autor].id;
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
    console.log("Autor : " + nombrePreg + "\n" + "Número de Patentes: " + contadorPatente + "\n" + "Número de Artículos de Revista: " + contadorArtRevis + "\n" + "Número de Artículos de Conferencia: " + contadorArtConf + "\n");
}
//factor de impacto de articulos dependiendo del año
function factordeImpacto() {
    let nombrePreg = rl.question("Introduce el nombre del autor para calcular el factor de impacto:");
    let anyoPregu = rl.question("Introduce el año para calcular el factor de impacto:");
    let id_autor = 0;
    let _articulos_conferencia = listados.getArticulos("conferencia");
    let autores = listados.getAutores();
    let factor_impacto_conferencia = 0;

    for (let autor in autores) {
        if (autores[autor].nombre === nombrePreg)
            id_autor = autores[autor].id;
    }

    if (id_autor === 0) {
        console.log("\nNo se ha encontrado el autor \n");
        return;
    }
    for (let articulo in _articulos_conferencia) {
        if (id_autor === _articulos_conferencia[articulo].id_autor && anyoPregu === _articulos_conferencia[articulo].anyo_publi)
            factor_impacto_conferencia += parseInt(_articulos_conferencia[articulo].factor_impacto);
    }
    console.log("\nbAutor : " + nombrePreg + "\n" + "Factor de Impacto: " + factor_impacto_conferencia + "\n");
}
//indice H
function indiceH() {
    let nombrePreg = rl.question("Introduce el nombre del autor para buscar el total de producciones científicas:");
    let id_autor = 0;
    let _articulos_conferencia = listados.getArticulos("conferencia");
    let _articulos_revista = listados.getArticulos("revista");
    let autores = listados.getAutores();
    let arrayArtRevista = [];
    let arrayArtConferencia = [];

    for (let autor in autores) {
        if (autores[autor].nombre === nombrePreg)
            id_autor = autores[autor].id;
    }
    if (_articulos_conferencia.length > 0) {
        for (let articulo in _articulos_conferencia) {
            if (id_autor === _articulos_conferencia[articulo].id_autor)
                arrayArtConferencia[articulo] = _articulos_conferencia[articulo];
        }
        arrayArtConferencia.sort(function (a, b) {
            return (b.num_menciones - a.num_menciones)
        })//Calculo del Inidice H
        if (arrayArtConferencia.length > 1)
            console.log("Articulo Conferencia Indice H: " + arrayArtConferencia[arrayArtConferencia.length - 2].num_menciones + "\n");
    }
    if (_articulos_revista.length > 0) {
        for (let articulo in _articulos_revista) {
            if (id_autor === _articulos_revista[articulo].id_autor)
                arrayArtRevista[articulo] = _articulos_revista[articulo];
        }
        arrayArtRevista.sort(function (a, b) {
            return (b.num_menciones - a.num_menciones)
        })//Calculo del Inidice H
        if (arrayArtRevista.length > 1)
            console.log("Articulos Revista Indice H: " + arrayArtRevista[arrayArtRevista.length - 2].num_menciones + "\n");
    }
}
//MENUS SECUNDARIOS INFORMACIÓN
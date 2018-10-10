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

//Inicio
menuPrincipal();

function menuPrincipal() {

  let opcion = "";
  while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4 && opcion !== 5) {

    opcion = rl.question('Introduce la accion a realizar:\n' +
      '1) AÃ±adir\n' +
      '2) Modificar\n' +
      '3) Dar de baja\n' +
      '4) Listar\n' +
      '5) Buscar\n' +
      '6) Inforamción autor, numero patentes o artículos\n' +
      '7) Salir\n');

    if (opcion === '1') {
      menuAyadir();
    }
    else if (opcion === '2') {
      menuModificar();
    }
    else if (opcion === '3') {
      baja();
    }
    else if (opcion === '4') {
      listar();
    }
    else if (opcion === '5') {
      buscar();
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
      // '2) AÃ±adir Patente\n' +
      // '3) Añadir Articulo\n' +
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
      modificarArticuloRevista();
    }
    if (opcion === '4') {
      modificarArticuloConferencia();
    }
    else if (opcion === '5') {
      menuPrincipal();
    }
  }
}

//Introduce Autores
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
  while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {

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
      introduceArticuloRevista(_idAutor);
    }
    else if (opcion === '2') {
      introduceArticuloConferencia(_idAutor);
    }
    else if (opcion === '3') {
      menuAyadir();
    }
  }
}

function introduceArticuloRevista(_idAutor) {
  const rl = require('readline-sync');

  let title = rl.question("Introduce el nombre del artículo:");
  let num_paginas = rl.question("Introduce el número de páginas :");
  let anyo_publi = rl.question("Introduce el año de publicación :");
  let num_menciones = rl.question("Introduce el número de menciones :");
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
      introduceArticuloConferencia(_idAutor);
    }
    else if (opcion === '3') {
      introduceAutores();
    }
    else if (opcion === '4') {
      menuPrincipal();
    }
  }
}

function introduceArticuloConferencia(_idAutor) {
  const rl = require('readline-sync');

  let title = rl.question("Introduce el nombre del artículo :");
  let num_paginas = rl.question("Introduce el número de páginas :");
  let anyo_publi = rl.question("Introduce el año de publicación :");
  let num_menciones = rl.question("Introduce el número de menciones :");
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
      introduceArticuloRevista(_idAutor);
    }
    else if (opcion === '3') {
      introduceAutores();
    }
    else if (opcion === '4') {
      menuPrincipal();
    }
  }
}

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

function modificarArticuloRevista() {
  let articulos = articulos_revista.getArticulo();
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
  let nombre_conf = rl.question("Introduce el nombre de la conferencia :");
  let celebracion = rl.question("Introduce el nombre de la celebración :");

  articulos_revista.modificarArticulo(indice, { "title": title, "num_paginas": num_paginas, "anyo_publi": anyo_publi, "num_menciones": num_menciones, "nombre_conf": nombre_conf, "celebracion": celebracion, });
  menuPrincipal();
}


function modificarArticuloConferencia() {
  let articulos = articulos_conferencia.getArticulo();
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
  let factor_impacto = rl.question("Introduce el factor de impacto :");
  let art_conferencia = rl.question("Introduce el nombre de la conferencia :");

  articulos_conferencia.modificarArticulo(indice, { "title": title, "num_paginas": num_paginas, "anyo_publi": anyo_publi, "num_menciones": num_menciones, "factor_impacto": factor_impacto, "art_conferencia": art_conferencia, });
  menuPrincipal();
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
      bajaArtRevista();
    }
    else if (opcion === '4') {
      bajaArtConferencia();
    }
    else if (opcion === '5') {
      menuPrincipal();
    }
  }

}

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

function bajaArtRevista() {
  let articulos = articulos_revista.getArticulo();
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
  articulos_revista.eliminarArticulo(indice);
}

function bajaArtConferencia() {
  let articulos = articulos_conferencia.getArticulo();
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
  articulos_conferencia.eliminarArticulo(indice);
}

function listar() {
  let opcion = "";

  //patente del autor y articulos relacionados
  while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {

    opcion = rl.question('Introduce la accion a realizar:\n' +
      '1) Listar Autores\n' +
      '2) Listar Patentes\n' +
      '3) Listar Articulos \n' +
      '4) Listar Autores y patentes\n' +
      '5) Listar Autores y artículos de revista\n' +
      '6) Listar Autores y artículos de conferencia\n' +
      '7) Volver\n');

    if (opcion === '1') {
      listaAutores();
    }
    else if (opcion === '2') {
      listaPatentes();
    }
    else if (opcion === '3') {
      listaActiculos();
    }
    else if (opcion === '4') {
      listaAutoresPatentes();
    }
    else if (opcion === '5') {
      listaAutoresRevista();
    }
    else if (opcion === '6') {
      listaAutoresConferencia();
    }
    else if (opcion === '7') {
      menuPrincipal();
    }
  }
}

//Listar Autores
function listaAutores() {
  let autores = autor.getAutores();
  if (autores[0] === undefined || autores.length === 0) {
    console.log("No hay autores");
    return;
  }
  else {
    console.log(autores);
    console.log("\n");
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

//Listar Autores con sus Patentes
function listaAutoresPatentes() {

  let autores = autor.getAutores();
  let patentes = patente_cientifica.getPatentes();

  if (autores[0] === undefined) {
    console.log("No hay datos \n");
    return;
  }

  for (let autor in autores) {
    for (let patente in patentes) {
      if (autores[autor].id === patentes[patente].id_autor) {
        console.log("Autor: " + autores[autor].nombre + " " + autores[autor].apellidos);
        console.log("Patente: " + patentes[patente].nombre + " Año patente: " + patentes[patente].anyo_publi + " Año Vencimiento: " + patentes[patente].anyo_vencimiento) + "\n";
      }
    }
  }
  console.log("\n");
}


//Listar Autores con sus Patentes
function listaAutoresRevista() {

  let autores = autor.getAutores();
  let articuloRevista = articulos_revista.getArticulo();

  if (autores[0] === undefined || articuloRevista[0] === undefined) {
    console.log("No hay datos \n");
    return;
  }

  for (let autor in autores) {
    for (let articuloRe in articuloRevista) {
      if (autores[autor].id === articuloRevista[articuloRe].id_autor) {
        console.log("Autor: " + autores[autor].nombre + " " + autores[autor].apellidos);
        console.log("Artículo: " + articuloRevista[articuloRe].title);
      }
    }
  }
  console.log("\n");
}

//Listar Autores con sus Patentes
function listaAutoresConferencia() {

  let autores = autor.getAutores();
  let _articulos_conferencia = articulos_conferencia.getArticulo();

  if (autores[0] === undefined || _articulos_conferencia[0] === undefined) {
    console.log("No hay datos \n");
    return;
  }

  for (let autor in autores) {
    for (let articuloCo in _articulos_conferencia) {
      if (autores[autor].id === _articulos_conferencia[articuloCo].id_autor) {
        console.log("Autor: " + autores[autor].nombre + " " + autores[autor].apellidos);
        console.log("Artículo: " + _articulos_conferencia[articuloCo].title);
      }
    }
  }
  console.log("\n");
}

function buscar() {
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

function buscarTipoPubli() {
  let pregunta = rl.question("Introduce el tipo de publicación a buscar articulo o patente, respete la sintaxis :");

  if (pregunta === "articulo") {
    listaActiculos();
  }
  else {
    listaPatentes();
  }

}

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
function consultar()
{
  let pregunta = rl.question('Introduce el nombre del autor:\n');

  let opcion = "";
  //número patentes o artículos
  while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4) {

    opcion = rl.question('Introduce la accion a realizar:\n' +

      '1) Número de patentes\n' +
      '2) Número de artículos de Revista\n' +
      '3) Número de artículos de Conferencia\n' +
      '4) Volver\n');

    if (opcion === '1') {
      introducePatente(_idAutor);
    }
    else if (opcion === '2') {
      introduceArticuloRevista(_idAutor);
    }
    else if (opcion === '3') {
      introduceAutores();
    }
    else if (opcion === '4') {
      menuPrincipal();
    }
  }
}
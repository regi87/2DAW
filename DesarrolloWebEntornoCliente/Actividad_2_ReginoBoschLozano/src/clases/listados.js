const autor = require("./autor").autor;
const patente_cientifica = require("./patente_cientifica").patente_cientifica;
const articulos_revista = require("./articulos_revista").articulos_revista;
const articulos_conferencia = require("./articulos_conferencia").articulos_conferencia;

class listados {
    constructor() {
        //Variable para acceder al fichero JSON
        this.fs = require('fs');
        //Inicializamos con el JSON listado autores
        this.autores = [];
        this.autoresJSOn = JSON.parse(this.fs.readFileSync('../src/json/autores.json'));
        for (let autorJSON of this.autoresJSOn) {
            this.autores.push(new autor(autorJSON.nombre, autorJSON.apellidos, autorJSON.id));
        }
        if (this.autores.length === 0)
            this.autores = [];
        //Inicializamos con el JSON listado articulos revista
        this.art_revista = [];
        this.artRevistaJSOn = JSON.parse(this.fs.readFileSync('../src/json/artRevista.json'));
        for (let revistaJSON of this.artRevistaJSOn) {
            this.art_revista.push(new articulos_revista(revistaJSON.title, revistaJSON.num_paginas, revistaJSON.anyo_publi, revistaJSON.num_menciones, revistaJSON.nombre_conf, revistaJSON.celebracion, revistaJSON.id_autor));
        }
        
        if (this.art_revista.length === 0)
            this.art_revista = [];
        //Inicializamos con el JSON listado articulos conferencia
        this.art_confe = [];
        this.artConfeJSOn = JSON.parse(this.fs.readFileSync('../src/json/artConferencia.json'));
        for (let conferenciaJSON of this.artConfeJSOn) {
            this.art_confe.push(new articulos_conferencia(conferenciaJSON.title, conferenciaJSON.num_paginas, conferenciaJSON.anyo_publi, conferenciaJSON.num_menciones, conferenciaJSON.editorial, conferenciaJSON.factor_impacto, conferenciaJSON._idAutor));
        }        
        if (this.art_confe.length === 0)
            this.art_confe = [];
        //Inicializamos con el JSON listado patentes
        this.patentes = [];
        this.patentesJSOn = JSON.parse(this.fs.readFileSync('../src/json/patentes.json'));
        for (let patenteJSON of this.patentesJSOn) {
            this.patentes.push(new patente_cientifica(patenteJSON.nombre, patenteJSON.anyo_publi, patenteJSON.anyo_vencimiento, patenteJSON.id_autor));
        }
        if (this.patentes.length === 0)
            this.patentes = [];
        //comprobamos si hay autores guardados o no        
        if (this.autores.length > 0) {
            //comprobamos el ultimo id del listado y le sumamos 1 para si quiere añadir uno nuevo
            this.id = this.autores[this.autores.length - 1].id + 1;
        }
        else
            this.id = 0;

    }
    //devuelve ID
    getId() {
        return this.id;
    }
    //introduce datos dentro del array de autores
    setAutores(_autor) {
        this.autores.push(_autor);
    }
    //devuelve array
    getAutores() {
        return this.autores;
    }

    //introduce datos en el array
    setPatentes(_patentes) {
        this.patentes.push(_patentes);
    }
    //devuelve datos del array
    getPatentes() {
        return this.patentes;
    }

    //introduce los datos en el array
    setArticulo(_art, _tipo) {
        if (_tipo === "revista")
            this.art_revista.push(_art);
        else
            this.art_confe.push(_art);
    }
    //devuelve los datos en el array
    getArticulos(_tipo) {
        if (_tipo === "revista")
            return this.art_revista;
        else
            return this.art_confe;
    }

    salir() {
        //guardamos la información en JSON de autores
        let json_1 = JSON.stringify(this.autores);
        this.fs.writeFileSync('../src/json/autores.json', json_1, 'utf8');
        //guardamos la información en JSON de artículos de revista
        let json_2 = JSON.stringify(this.art_revista);
        this.fs.writeFileSync('../src/json/artRevista.json', json_2, 'utf8');
        //guardamos la información en JSON de artículos de conferencia
        let json_3 = JSON.stringify(this.art_confe);
        this.fs.writeFileSync('../src/json/artConferencia.json', json_3, 'utf8');
        //guardamos la información en JSON de patentes
        let json_4 = JSON.stringify(this.patentes);
        this.fs.writeFileSync('../src/json/patentes.json', json_4, 'utf8');

    }
    //función para modificar los listados de autores / artículos
    modificar(indice, _objModi, _tipo) {
        if (_tipo === "autores") { this.autores[indice] = _objModi; }
        else if (_tipo === "patentes")
            this.patentes[indice] = _objModi;

        else if (_tipo === "revistas")
            this.art_revista[indice] = _objModi;
        else
            this.art_confe[indice] = _objModi;
    }

    //elimina autor
    eliminar(i, _tipo) {
        //elimina elemento de array
        if (_tipo === "autor")
            this.autores.splice(i, 1);
        else if (_tipo === "revista")
            this.art_revista.splice(i, 1);
        else if (_tipo === "conferencia")
            this.art_confe.splice(i, 1);
        else
            this.patentes.splice(i, 1);
    }
}

exports.listados = listados;

class listados {
    constructor() {

        this.autores = [];
        this.patentes = [];
        this.art_revista = [];
        this.art_confe = [];


/*
        //Inicializamos con el JSON listado autores
        this.autores = require('../json/autores.json');

        //Inicializamos con el JSON listado articulos revista
        this.artRevista = require('../json/ArtRevista.json');

        //Inicializamos con el JSON listado articulos revista
        this.artConfe = require('../json/ArtConferencia.json');

        //Variables JSON
        //guardamos la información en JSON
        this.fs = require('fs');
        this.json = {};
        //comprobamos si hay autores guardados o no
        if (this.autores[0] !== undefined)
            this.id = this.autores[this.autores.length - 1].id;
        else
            this.id = 0;

            */
    }

    //introduce datos dentro del array de autores
    setAutores(_autor) {
        //contador id
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
       if(_tipo === "revista")
        this.art_revista.push(_art);
        else
        this.art_confe.push(_art);
    }
    //devuelve los datos en el array
    getArticulos(_tipo) {
        if(_tipo === "revista")
         return this.art_revista;
         else
            return this.art_confe;
    }

    salir() {
        //guardamos la información en JSON de autores
        this.json = JSON.stringify(this.autores);
        this.fs.writeFileSync('../src/json/autores.json', this.json, 'utf8');
    }
    //función para modificar los listados de autores / artículos
    modificar(indice, _objModi, _tipo)
    {
        if(_tipo === "autores")
            this.autores[indice] =  _objModi;
        else if (_tipo === "patentes")
             this.patentes[indice] =  _objModi;

        else if (_tipo === "revistas")
            this.art_revista[indice] =  _objModi;
        else
            this.art_confe[indice] =  _objModi;
    }

    //elimina autor
    eliminar(i, _tipo) {
        //elimina elemento de array
        if(_tipo === "autor")
          this.autores.splice(i, 1);
          else if(_tipo === "revista")
            this.art_revista.splice(i, 1);
            else
            this.art_confe.splice(i, 1);
    }
}

exports.listados = listados;

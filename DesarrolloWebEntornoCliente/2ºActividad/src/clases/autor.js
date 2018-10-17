class autor {

    constructor() {
        this.nombre = "";
        this.apellidos = 0;
       
        //Inicializamos con el JSON
        this.autores = require('../json/autores.json');
        //Variables JSON
         //guardamos la información en JSON
         this.fs = require('fs');
         this.json = {};
         //comprobamos si hay autores guardados o no
         if(this.autores[0] !== undefined)
            this.id = this.autores[this.autores.length - 1].id;     
         else
             this.id = 0;     
    }
    //introduce el nombre
    setNombre(_nombre) {
        this.nombre = _nombre;
    }
    //devuelve el nombre

    getNombre() {
        return this.nombre;
    }
    //introduce los apellidos

    setApellidos(_apellidos) {
        this.apellidos = _apellidos;
    }
    //devuelve el nombre

    getApellidos() {
        return this.apellidos;
    }
    //introduce datos dentro del array
    setAutores(_autor) {
        //contador id
        this.id++;
        _autor.id = this.id;
        this.autores.push(_autor);

        //guardamos la información en JSON
        this.json = JSON.stringify(this.autores);
        this.fs.writeFileSync('../src/json/autores.json', this.json, 'utf8');
    }
    //devuelve array
    getAutores() {
        return this.autores;
    }
    //devuelve id
    getId() {
        return this.id;
    }
    //modifica la información del autor
    modificarAutor(i, _autor) {
        this.autores[i].nombre = _autor.nombre;
        this.autores[i].apellidos = _autor.apellidos;

        //guardamos la información en JSON
        this.json = JSON.stringify(this.autores);
        this.fs.writeFileSync('../src/json/autores.json', this.json, 'utf8');
    }
    //elimina autor
    eliminarAutor(i) {
        this.autores.splice(i, 1)
    }

}

exports.autor = autor;

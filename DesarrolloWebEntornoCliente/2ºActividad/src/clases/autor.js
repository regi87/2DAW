class autor {

    constructor() {
        this.nombre = "";
        this.apellidos = 0;
        this.autores = [];
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
    }
    //elimina autor
    eliminarAutor(i) {
        this.autores.splice(i, 1)
    }

}

exports.autor = autor;

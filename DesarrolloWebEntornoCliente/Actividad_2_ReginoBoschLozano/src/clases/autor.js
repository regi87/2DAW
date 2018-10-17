class autor {

    constructor(_nombre, _apellidos, _id) {
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.id = _id;
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
    //devuelve id
    getId() {
        return this.id;
    }

    //devuelve el autor orginal
    getAutor() {
        return { "nombre": this.nombre, "apellidos": this.apellidos, "id": this.id };
    }
}

exports.autor = autor;

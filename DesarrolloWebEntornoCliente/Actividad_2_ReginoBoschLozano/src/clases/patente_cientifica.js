
class patente_cientifica {

    constructor(_nombre, _anyo_publi, _anyo_vencimiento, _idAutor) {
        this.nombre = _nombre;
        this.anyo_publi = _anyo_publi
        this.anyo_vencimiento = _anyo_vencimiento;
        this.id_autor = _idAutor;
    }
    //introduce el nombre de la patente
    setNombre(_nombre)
    {
        this.nombre = _nombre;
    }
    //devuelve el nombre de la patente
    getNombre()
    {
        return this.nombre;
    }
    //introduce el año de publicación
    setAnyoPubli(_anyo_publi) {
        this.anyo_publi = _anyo_publi;
    }
    //devuelve el año de publicación
    getAnyoPubli() {
        return this.anyo_publi;
    }
    //introduce el año de vencimiento
    setAnyoVencimiento(_anyo_vencimiento) {
        this.anyo_vencimiento = _anyo_vencimiento;
    }
    //devuelve el año de vencimiento
    getAnyoVencimiento() {
        return this.anyo_vencimiento;
    }
   
      //devuelve el autor orginal
      getPatente() {
        return { "nombre": this.nombre, "anyo_publi": this.anyo_publi, "anyo_vencimiento": this.anyo_vencimiento, "id_autor": this.id_autor };
    }

    //funcion para modificar un articulo
    modificarPatente( _patente) {
        this.nombre = _patente.nombre;
        this.anyo_publi = _patente.anyo_publi;
        this.anyo_vencimiento = _patente.anyo_vencimiento;
    }

     

}

exports.patente_cientifica = patente_cientifica;

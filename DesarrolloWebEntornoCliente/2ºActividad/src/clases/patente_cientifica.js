
class patente_cientifica {

    constructor() {
        this.nombre = "";
        this.anyo_publi = "";
        this.anyo_vencimiento = "";
        this.patentes = [];
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
    //introduce datos en el array
    setPatentes(_patentes) {
        //contador id 
        this.patentes.push(_patentes);
    }
    //devuelve datos del array
    getPatentes() {
        return this.patentes;
    }
    //funcion para modificar un articulo
    modificarPatente(i, _patente) {
        this.patentes[i].nombre = _patente.nombre;
        this.patentes[i].anyo_publi = _patente.anyo_publi;
        this.patentes[i].anyo_vencimiento = _patente.anyo_vencimiento;
    }
    //elimina patente dependiendo del index
    eliminarPatente(i) {
        this.patentes.splice(i, 1)
    }

}

exports.patente_cientifica = patente_cientifica;

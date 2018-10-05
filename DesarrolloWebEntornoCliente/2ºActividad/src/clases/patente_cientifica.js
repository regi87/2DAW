
class patente_cientifica {

    constructor() {
        this.nombre = "";
        this.anyo_publi = "";
        this.anyo_vencimiento = "";
        this.patentes = [];
    }

    setAnyoPubli(_anyo_publi) {
        this.anyo_publi = _anyo_publi;
    }

    getAnyoPubli() {
        return this.anyo_publi;
    }

    setAnyoVencimiento(_anyo_vencimiento) {
        this.anyo_vencimiento = _anyo_vencimiento;
    }

    getAnyoVencimiento() {
        return this.anyo_vencimiento;
    }

    setPatentes(_patentes) {
        //contador id 
        this.patentes.push(_patentes);
    }

    getPatentes() {
        return this.patentes;
    }

    modificarPatente(i, _patente)
    {
     this.patentes[i].nombre = _patente.nombre;
     this.patentes[i].anyo_publi = _patente.anyo_publi;
     this.patentes[i].anyo_vencimiento = _patente.anyo_vencimiento;
    }

    eliminarPatente(i)
    {
     this.patentes.splice(i,1)
    }

}

exports.patente_cientifica = patente_cientifica;

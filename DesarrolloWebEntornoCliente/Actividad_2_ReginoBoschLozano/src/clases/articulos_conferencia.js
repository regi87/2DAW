const articulos_cientificos = require("./articulos_cientificos").articulos_cientificos;

class articulos_conferencia extends articulos_cientificos {


    constructor(title, num_paginas, anyo_publi, num_menciones, _editorial, _factor_impacto, _idAutor) {
        super(title, num_paginas, anyo_publi, num_menciones);

        this.editorial = _editorial;
        this.factor_impacto = _factor_impacto;
        this._idAutor= _idAutor;

    }
    //introduce la editorial de publicación
    setEditorial(_editorial) {
        this.editorial = _editorial;
    }
    //devuelve la editorial de publicación
    getEditorial() {
        return this.editorial;
    }
    //introduce la factor de impacto
    setFactImp(_factor_impacto) {
        this.factor_impacto = _factor_impacto;
    }
    //devuelve la factor de impacto
    getFactImp() {
        return this.factor_impacto;
    }
    getArticulo ()
    {
        return { "title": this.title, "num_paginas":  this.num_paginas, "anyo_publi": this.anyo_publi, "num_menciones": this.num_menciones, "editorial":  this.editorial, "factor_impacto":  this.factor_impacto, "id_autor":  this._idAutor };
    }
    //función modificar articulo por indice
    modificarArticulo(i, _articulo) {
        this.title = _articulo.title;
        this.num_paginas = _articulo.num_paginas;
        this.anyo_publi = _articulo.anyo_publi;
        this.num_menciones = _articulo.num_menciones;
        this.editorial = _articulo.editorial;
        this.factor_impacto = _articulo.factor_impacto;
    }
}

exports.articulos_conferencia = articulos_conferencia;

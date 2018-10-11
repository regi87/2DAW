const articulos_cientificos = require("./articulos_cientificos").articulos_cientificos;

class articulos_conferencia extends articulos_cientificos {


    constructor(title, num_paginas, anyo_publi, num_menciones) {
        super(title, num_paginas, anyo_publi, num_menciones);

        this.editorial = "";
        this.factor_impacto = 0;
        this.art_conferencia = [];

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

    //introduce los datos dentro del array
    setArticulo(_art_conferencia) {
        //contador id 
        this.art_conferencia.push(_art_conferencia);
    }
    //devuelve los datos dentro del array
    getArticulo() {
        return this.art_conferencia;
    }
    //función modificar articulo por indice
    modificarArticulo(i, _articulo) {
        this.art_conferencia[i].title = _articulo.title;
        this.art_conferencia[i].num_paginas = _articulo.num_paginas;
        this.art_conferencia[i].anyo_publi = _articulo.anyo_publi;
        this.art_conferencia[i].num_menciones = _articulo.num_menciones;
        this.art_conferencia[i].editorial = _articulo.editorial;
        this.art_conferencia[i].factor_impacto = _articulo.factor_impacto;
    }
    //elimina articulo por index
    eliminarArticulo(i) {
        this.art_conferencia.splice(i, 1)
    }

}

exports.articulos_conferencia = articulos_conferencia;

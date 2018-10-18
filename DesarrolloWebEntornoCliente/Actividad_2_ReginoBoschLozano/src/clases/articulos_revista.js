const articulos_cientificos = require("./articulos_cientificos").articulos_cientificos;

class articulos_revista extends articulos_cientificos {


    constructor(title, num_paginas, anyo_publi, num_menciones, _nombre_conf ,_celebracion, _idAutor) {
        super(title, num_paginas, anyo_publi, num_menciones);

        this.nombre_conf = _nombre_conf;
        this.celebracion = _celebracion;
        this.id_autor = _idAutor;

    }
  
   setNombreConf(_nombre_conf)
   {
     this.nombre_conf = _nombre_conf;
   }
   getNombreConf()
   {
       return this.nombre_conf;
   }

   setCelebracion(_celebracion)
   {
       this.celebracion = _celebracion;
   }
   getCelebracion()
   {
       return this.celebracion;
   }
    //modificar articulo que queremos
    modificarArticulo( _articulo) {
        this.title = _articulo.title;
        this.num_paginas = _articulo.num_paginas;
        this.anyo_publi = _articulo.anyo_publi;
        this.num_menciones = _articulo.num_menciones;
        this.nombre_conf = _articulo.nombre_conf;
        this.celebracion = _articulo.celebracion;
    }
}

exports.articulos_revista = articulos_revista;

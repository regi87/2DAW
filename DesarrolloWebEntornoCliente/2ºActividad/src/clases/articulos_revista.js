const articulos_cientificos = require ("./articulos_cientificos").articulos_cientificos;

class articulos_revista extends articulos_cientificos{
    

    constructor(title, num_paginas, anyo_publi, num_menciones) {
        super(title, num_paginas, anyo_publi, num_menciones);

        this.nombre_conf="";
        this.celebracion="";
        this.art_revista = [];

    }
  
    setNomConf(_nombre_conf)
    {
        this.nombre_conf = _nombre_conf;
    }

    getNomConf()
    {
        return this.nombre_conf;
    }

    setArticulo(_art_revista) {
        //contador id 
        this.art_revista.push(_art_revista);
    }

    getArticulo() {
        return this.art_revista;
    }

    modificarArticulo(i, _articulo)
    {
     this.art_revista[i].title = _articulo.title;
     this.art_revista[i].num_paginas = _articulo.num_paginas;
     this.art_revista[i].anyo_publi = _articulo.anyo_publi;
     this.art_revista[i].num_menciones = _articulo.num_menciones;
     this.art_revista[i].nombre_conf = _articulo.nombre_conf;
     this.art_revista[i].celebracion = _articulo.celebracion;
    }

    eliminarArticulo(i)
    {
     this.art_revista.splice(i,1)
    }
    
  }

  exports.articulos_revista = articulos_revista;

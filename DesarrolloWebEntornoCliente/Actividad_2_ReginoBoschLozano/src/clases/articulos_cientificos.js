class articulos_cientificos {

    constructor(_title, _num_paginas, _anyo_publi, _num_menciones) {

    this.title = _title;
    this.num_paginas= _num_paginas;
    this.anyo_publi = _anyo_publi;
    this.num_menciones = _num_menciones;
     
    }

    setTitulo(_title)
    {
        this.title = _title;
    }

    getTitulo()
    {
        return this.title;
    }

    setNum_paginas(_num_paginas)
    {
        this.num_paginas = _num_paginas;
    }

    getNum_paginas()
    {
        return this.num_paginas;
    }

    setAnyo_publi(_anyo_publi)
    {
        this.anyo_publi = _anyo_publi;
    }

    getAnyo_publi()
    {
        return this.anyo_publi;
    }

    setNum_menciones(_num_menciones)
    {
        this.num_menciones = _num_menciones;
    }

    getNum_menciones()
    {
        return this.num_menciones;
    }
    
  }

  exports.articulos_cientificos = articulos_cientificos;

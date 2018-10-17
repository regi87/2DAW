class listados {
    constructor() {
        //Variable para acceder al fichero JSON
        this.fs = require('fs');
        //Inicializamos con el JSON listado autores
        this.autores = [];
        this.autores = JSON.parse(this.fs.readFileSync('../src/json/autores.json'));
        if (this.autores.length === 0)
            this.autores = [];
        //Inicializamos con el JSON listado articulos revista
        this.art_revista = [];
        this.art_revista= JSON.parse(this.fs.readFileSync('../src/json/artRevista.json'));
        if (this.art_revista.length === 0)
            this.art_revista = [];
        //Inicializamos con el JSON listado articulos revista
        this.art_confe =[];
        this.art_confe = JSON.parse(this.fs.readFileSync('../src/json/artConferencia.json'));
        if (this.art_confe.length === 0)
            this.art_confe = [];
        //Inicializamos con el JSON listado patentes
        this.patentes =[];
        this.patentes= JSON.parse(this.fs.readFileSync('../src/json/patentes.json'));
        if (this.patentes.length === 0)
            this.patentes = [];
        //comprobamos si hay autores guardados o no        
        if (this.autores.length > 0)
        {
            //comprobamos el ultimo id del listado y le sumamos 1 para si quiere añadir uno nuevo
            this.id = this.autores[this.autores.length - 1].id +1;
        }
        else
            this.id = 0;
         
    }
    //devuelve ID
    getId()
    {
        return this.id;
    }
    //introduce datos dentro del array de autores
    setAutores(_autor) {      
        this.autores.push(_autor);
    }
    //devuelve array
    getAutores() {
        return this.autores;
    }

    //introduce datos en el array
    setPatentes(_patentes) {
        this.patentes.push(_patentes);
    }
    //devuelve datos del array
    getPatentes() {
        return this.patentes;
    }

    //introduce los datos en el array
    setArticulo(_art, _tipo) {
        if (_tipo === "revista")
            this.art_revista.push(_art);
        else
            this.art_confe.push(_art);
    }
    //devuelve los datos en el array
    getArticulos(_tipo) {
        if (_tipo === "revista")
            return this.art_revista;
        else
            return this.art_confe;
    }

    salir() {
        //guardamos la información en JSON de autores
        let json_1 = JSON.stringify(this.autores);
        this.fs.writeFileSync('../src/json/autores.json', json_1, 'utf8');
         //guardamos la información en JSON de artículos de revista
         let json_2 = JSON.stringify(this.art_revista);
         this.fs.writeFileSync('../src/json/artRevista.json', json_2, 'utf8');
          //guardamos la información en JSON de artículos de conferencia
        let json_3 = JSON.stringify(this.art_confe);
        this.fs.writeFileSync('../src/json/artConferencia.json', json_3, 'utf8');
        //guardamos la información en JSON de patentes
        let json_4 = JSON.stringify(this.patentes);
        this.fs.writeFileSync('../src/json/patentes.json', json_4, 'utf8');

    }
    //función para modificar los listados de autores / artículos
    modificar(indice, _objModi, _tipo) {
        if (_tipo === "autores")
            {this.autores[indice] = _objModi;}
        else if (_tipo === "patentes")
            this.patentes[indice] = _objModi;

        else if (_tipo === "revistas")
            this.art_revista[indice] = _objModi;
        else
            this.art_confe[indice] = _objModi;
    }

    //elimina autor
    eliminar(i, _tipo) {
        //elimina elemento de array
        if (_tipo === "autor")
            this.autores.splice(i, 1);
        else if (_tipo === "revista")
            this.art_revista.splice(i, 1);
        else if (_tipo === "conferencia")
            this.art_confe.splice(i, 1);
            else
                this.patentes.splice(i, 1);
    }
}

exports.listados = listados;

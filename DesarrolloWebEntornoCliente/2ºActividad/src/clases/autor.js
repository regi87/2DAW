class autor {

    constructor() {     
        this.nombre = "";
        this.apellidos = 0;
        this.autores=[];
        this.id = 0;
    }

    setNombre(_nombre)
    {
        this.nombre = _nombre;
    }
    getNombre()
    {
        return this.nombre;
    }

    setApellidos(_apellidos)
    {
        this.apellidos = _apellidos;
    }
    getApellidos()
    {
        return this.apellidos;
    }

    setAutores(_autor)
   {
       //contador id
       this.id++;
       _autor.id = this.id;
        this.autores.push(_autor);
   } 

   getAutores()
   {
    return this.autores;
   }

   getId()
   {
       return this.id;
   }

   modificarAutor(i, _autor)
   {
    this.autores[i].nombre = _autor.nombre;
    this.autores[i].apellidos = _autor.apellidos;
   }
  
   eliminarAutor(i)
   {
    this.autores.splice(i,1)
   }
    
  }

  exports.autor = autor;

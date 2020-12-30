const config = require("./dbconfig")

class Alumno{
    constructor(id,nombre,pais,fecha,sexo,curso){
        this.id=id;
        this.nombre=nombre;
        this.pais=pais;
        this.fecha = fecha;
        this.sexo=sexo;
        this.curso=curso;
    }
}

module.exports = Alumno;
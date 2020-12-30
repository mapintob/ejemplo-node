const config = require("./dbconfig")

class Persona{
    constructor(rut,nombre,fechaNac,edad,activo){
        this.pers_rut=rut;
        this.pers_nomb=nombre;
        this.pers_fnac=fechaNac;
        this.pers_edad = edad;
        this.pers_acti=activo;        
    }
}

module.exports = Persona;
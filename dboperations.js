//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');

async function getAlumnos(){
    try{
        let pool = await sql.connect(config);
        let alumnos = await pool.request().query("select * from alumnos");
        return alumnos.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getAlumnos : getAlumnos
}
//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var Cliente = require('./cliente');
async function getAlumnos(){
    try{
        let pool = await sql.connect(config);
        let alumnos = await pool.request().query("select * from alumnos");
        return alumnos.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getPersonas(){
    try{
        let pool = await sql.connect(config);
        let personas = await pool.request().query("select * from personas");
        return personas.recordsets;
    }catch(error){
        console.log(error);
    }
}


async function getPedidos(){
    try{
        let pool = await sql.connect(config);
        let pedidos = await pool.request().query("select * from pedidos");
        return pedidos.recordsets;
    }catch(error){
        console.log(error);
    }
}

//procedimientos del cliente

async function getClientes() {

    try {
        let pool = await sql.connect(config);
        let obtenerClientes = await pool.request()
            .execute('getClientes');
        return obtenerClientes.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function addCliente(Cliente) {

    try {
        let pool = await sql.connect(config);
        let insertarCliente = await pool.request()
            .input('id_cliente', sql.Int, Cliente.id_cliente)
            .input('nombre', sql.NVarChar, Cliente.nombre)
            .input('contacto', sql.Int, Cliente.contacto)
            .execute('addCliente');
        return insertarCliente.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}


async function getCliente(idCliente) {
    try {
        let pool = await sql.connect(config); 
        let obtenerCliente = await pool.request()
            .input('clienteID', sql.Int, idCliente)
            .execute('getCliente');
        return obtenerCliente.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}



module.exports={
    getAlumnos : getAlumnos,
    getPersonas: getPersonas,
    getPedidos: getPedidos,
    addCliente: addCliente,
    getCliente: getCliente,
    getClientes: getClientes      
}
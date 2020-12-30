var db = require('./dboperations');
var Alumno = require('./alumno');
var Cliente = require('./cliente');

const operaciones = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api',router);

router.use((request,response,next) => {
    console.log('api de servicios');
    next();
})

/*router.use('/alumnos').get((request,response)=>{
    var resultado = await operaciones.getAlumnos();
    response.send(resultado);
})*/

async function obtenerAlumnos(request,response){
    var resultado = await operaciones.getAlumnos();
    response.send(resultado);    
 }
app.get('/obtenerAlumnos', obtenerAlumnos)


async function obtenerPersonas(request,response){
    var resultado = await operaciones.getPersonas();
    response.send(resultado);    
 }
app.get('/obtenerPersonas', obtenerPersonas)


async function obtenerPedidos(request,response){
    var resultado = await operaciones.getPedidos();
    response.send(resultado);    
 }
app.get('/obtenerPedidos', obtenerPedidos)


//------------------------------------------------

async function agregarCliente(request,response){
    let cliente = {...request.body}
    console.log(cliente);
    var resultado = await operaciones.addCliente(cliente);
    response.send(resultado);    
 }
app.post('/agregarCliente', agregarCliente)


async function obtenerCliente(request,response){
    var resultado = await operaciones.getCliente(request.params.id);
    //console.log(request);
    response.send(resultado);    
 }
app.get('/clientes/:id', obtenerCliente)

async function obtenerClientes(request,response){
    var resultado = await operaciones.getClientes();
    response.send(resultado);    
 }
app.get('/clientes', obtenerClientes)


var puerto = process.env.PORT || 8090;
app.listen(puerto);
console.log(' La API esta corriendo en el puerto: '+puerto);


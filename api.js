var db = require('./dboperations');
var Alumno = require('./alumno');

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
app.get('/alumnos', obtenerAlumnos)

var puerto = process.env.PORT || 8090;
app.listen(puerto);
console.log(' La API esta corriendo en el puerto: '+puerto);


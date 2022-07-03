const express = require('express');
const bodyParser = require('body-parser');
const ConfigEnv = require('./config');
const HTTP_PORT = ConfigEnv.HTTP_PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var datos = [
  {"nombre": "Nombre1", "apellido": "Apellido1", "cuil": "23-00000001-9", "dni": "00000001", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre2", "apellido": "Apellido2", "cuil": "23-00000012-9", "dni": "00000012", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre3", "apellido": "Apellido3", "cuil": "23-00000023-9", "dni": "00000023", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre4", "apellido": "Apellido4", "cuil": "23-00000034-9", "dni": "00000034", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre5", "apellido": "Apellido5", "cuil": "23-00000045-9", "dni": "00000045", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre6", "apellido": "Apellido6", "cuil": "23-00000056-9", "dni": "00000056", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre7", "apellido": "Apellido7", "cuil": "23-00000067-9", "dni": "00000067", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre8", "apellido": "Apellido8", "cuil": "23-00000078-9", "dni": "00000078", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre9", "apellido": "Apellido9", "cuil": "23-00000089-9", "dni": "00000089", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre10", "apellido": "Apellido10", "cuil": "23-00000090-9", "dni": "00000090", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre11", "apellido": "Apellido11", "cuil": "23-00000101-9", "dni": "00000101", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre12", "apellido": "Apellido12", "cuil": "23-00000112-9", "dni": "00000112", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre13", "apellido": "Apellido13", "cuil": "23-00000123-9", "dni": "00000123", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre14", "apellido": "Apellido14", "cuil": "23-00000134-9", "dni": "00000134", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre15", "apellido": "Apellido15", "cuil": "23-00000145-9", "dni": "00000145", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre16", "apellido": "Apellido16", "cuil": "23-00000156-9", "dni": "00000156", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre17", "apellido": "Apellido17", "cuil": "23-00000167-9", "dni": "00000167", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre18", "apellido": "Apellido18", "cuil": "23-00000178-9", "dni": "00000178", "sexo": "M", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre19", "apellido": "Apellido19", "cuil": "23-00000189-9", "dni": "00000189", "sexo": "F", "nro_tramite" : "00123456789" },
  {"nombre": "Nombre20", "apellido": "Apellido20", "cuil": "23-00000190-9", "dni": "00000190", "sexo": "M", "nro_tramite" : "00123456789" }  
];


const routerControl = express.Router();
routerControl.use((req, res, next) => {
  if (req.body.usuario === ConfigEnv.USER_API && req.body.contrasena === ConfigEnv.PASS_API) {
    next();
  } else {
    res.send({ 
        mensaje: 'Usuario o contraseña invalido.'
    });
  }
});

app.post('/verificar', routerControl, (req, res) => {
  var dato = [];
  for(let i = 0; i < datos.length; i ++){
    if(req.body.dni == datos[i].dni && req.body.nro_tramite == datos[i].nro_tramite && req.body.sexo == datos[i].sexo){
      dato = datos[i];
    }
  }
  res.json(dato);
});


app.listen(HTTP_PORT, () => console.log(`Escuchando en el puerto ${HTTP_PORT}`));


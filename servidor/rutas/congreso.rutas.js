;
'use strict'
const express = require('express'),
    multiParty = require('connect-multiparty'),
    passwordcontrol = require('../auntentica/password'),
    autenticacioncontrol = require('../auntentica/autenticacion'),
    rolescontrol = require('../auntentica/rol');
let api = express.Router(),
    congresoControl = require('../controller/congresos.controller');

api.get('/congreso', autenticacioncontrol.autentificar, congresoControl.getCongresos)
api.put('/update_congreso/:id', autenticacioncontrol.autentificar, congresoControl.updateOne)
api.delete('/delete_congreso/:id', autenticacioncontrol.autentificar, congresoControl.deleteOne)
api.post('/insert_congreso', congresoControl.getCongresos)
api.post('/create_congreso', autenticacioncontrol.autentificar ,congresoControl.nuevoCongreso)
module.exports = api
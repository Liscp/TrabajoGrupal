;
'use strict'
const express = require('express'),
    multiParty = require('connect-multiparty'),
    passwordcontrol = require('../auntentica/password'),
    autenticacioncontrol = require('../auntentica/autenticacion'),
    rolescontrol = require('../auntentica/rol');
let api = express.Router(),
    ponenciaControl = require('../controller/ponencias.controller');

api.get('/ponencia', autenticacioncontrol.autentificar, ponenciaControl.getPonencias)
api.put('/update_ponencia/:id', autenticacioncontrol.autentificar, ponenciaControl.updateOne)
api.delete('/delete_ponencia/:id', autenticacioncontrol.autentificar, ponenciaControl.deleteOne)
api.post('/insert_ponencia', ponenciaControl.getPonencias)
api.post('/create_ponencia', autenticacioncontrol.autentificar ,ponenciaControl.nuevoPonencia)
module.exports = api
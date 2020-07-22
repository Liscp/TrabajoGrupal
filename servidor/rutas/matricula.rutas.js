;
'use strict'
const express = require('express'),
    multiParty = require('connect-multiparty'),
    passwordcontrol = require('../auntentica/password'),
    autenticacioncontrol = require('../auntentica/autenticacion'),
    rolescontrol = require('../auntentica/rol')
let api = express.Router(),
    matriculaControl = require('../controller/matricula.controller');
    // rolControl = require('../autentica/rol');

api.get('/matriculas', autenticacioncontrol.autentificar, matriculaControl.getMatricula)
api.put('/update_matricula/:id', autenticacioncontrol.autentificar, matriculaControl.updateOne)
api.delete('/matricula_delete/:id', autenticacioncontrol.autentificar, matriculaControl.deleteOne)
api.post('/insert_matricula', matriculaControl.nuevaMatricula)
module.exports = api
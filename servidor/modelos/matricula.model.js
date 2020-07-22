;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const matricula_model = new Schema({
    codigo: { type: String },
    estudianteId: { type: String },
    cursoId: { type: String }
});

module.exports = mongoose.model('matriculas', matricula_model);
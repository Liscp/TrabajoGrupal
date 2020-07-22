;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const congresos_modelo = new Schema({
    nombre: { type: String },
    congresos: { type: String },
    tema: { type: String },
 });

module.exports = mongoose.model('congresos', congresos_modelo);
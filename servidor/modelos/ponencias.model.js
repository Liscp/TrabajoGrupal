;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ponencias_modelo = new Schema({
    titulo: { type: String },
    area: { type: String },
    resumen: { type: String },
 });

module.exports = mongoose.model('ponencias', ponencias_modelo);
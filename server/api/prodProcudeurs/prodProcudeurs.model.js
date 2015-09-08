'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodProcudeurs = new Schema({
    'IdProdProcudeurs': { type: String, required: true, unique: true },
    'ProdProcudeurs': String,
    'ProdProcudeursCateg': String
});

module.exports = mongoose.model('ProdProcudeurs', prodProcudeurs);

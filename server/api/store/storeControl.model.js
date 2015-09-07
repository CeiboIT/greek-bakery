'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var populatePlugin = require('mongoose-power-populate')(mongoose);

var storeControl = new Schema({
	'IDStoreControl': { type: String, required: true, unique: true },
	'IDMarketer': { type: Schema.Types.String, ref: 'Marketer' },
	'Date': Date,
	'NoApod': Number,
	'Incam': Number
});

storeControl.plugin(populatePlugin, {
    IDMarketer: {
      ref: 'Marketer',
      foreignKey: 'IDMarketer',
      localKey: 'IDMarketer',
      singular: true
    }
});

module.exports = mongoose.model('StoreControl', storeControl);
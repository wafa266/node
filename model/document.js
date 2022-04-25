var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Document = new Schema({
	Titre : String,
	Description : String,
	Format : String
});

module.exports = mongoose.model('document', Document);
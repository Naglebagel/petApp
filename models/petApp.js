const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: String,
	color: String,
	age: Number,
	type: String
});

module.exports = mongoose.model('Pet', PetSchema);
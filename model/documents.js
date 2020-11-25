const mongoose = require('mongoose');

// Schema for AddressBook
const documentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
})

//Creating the collection Address
const Document = mongoose.model('documents', documentSchema)

module.exports = Document;
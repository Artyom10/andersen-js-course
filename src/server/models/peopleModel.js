const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  wealth: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Person', PersonSchema);

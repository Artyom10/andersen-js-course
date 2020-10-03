const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  assets: {
    type: Number,
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Company', CompanySchema);

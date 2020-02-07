const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surName: {
    type: String,
    required: true
  },
  birthPlace: {
    type: String,
    required: true
  },
  birthYear: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model('user', UserSchema);

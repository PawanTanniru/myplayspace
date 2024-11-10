const mongoose = require('mongoose');

const groundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  // Add more fields as needed: amenities, pricing, availability, etc.
});

module.exports = mongoose.model('Ground', groundSchema);
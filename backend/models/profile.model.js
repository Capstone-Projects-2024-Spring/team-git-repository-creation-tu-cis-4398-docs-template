const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  language: String,
  location: {
    city: String,
    country: String
  },
  // Add other profile fields as needed
});

module.exports = profileSchema;
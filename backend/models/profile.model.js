const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  languages: {
    type: [String],
    required: true // must have initial language, i.e. array length of 1.
  },
  location: {
    city: String,
    country: String
  }
}, {
  timestamps: true
});

profileSchema.pre('save', async function (next) {
  next();
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
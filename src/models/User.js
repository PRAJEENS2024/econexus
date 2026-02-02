const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ['provider', 'consumer', 'admin'],
    default: 'consumer'
  },
  companyName: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number] // [longitude, latitude]
  },
  createdAt: { type: Date, default: Date.now }
});

// PRE-SAVE HOOK: Encrypt password before saving to DB
userSchema.pre('save', async function() {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return;

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
});

// Method to check password
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model('User', userSchema);
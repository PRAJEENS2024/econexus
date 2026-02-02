const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A resource must have a title'],
    trim: true
  },
  category: {
    type: String,
    enum: ['machinery', 'labor', 'warehouse', 'scrap'],
    required: [true, 'A resource must have a category']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  price: {
    type: Number,
    required: [true, 'A resource must have a price']
  },
  priceUnit: {
    type: String,
    required: true,
    enum: ['per_hour', 'per_day', 'per_piece', 'per_kg', 'fixed']
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A resource must belong to a user']
  },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], // [lng, lat]
    address: String
  },
  status: {
    type: String,
    enum: ['active', 'booked', 'maintenance'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// INDEXING: Important for "Find resources near me"
resourceSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Resource', resourceSchema);
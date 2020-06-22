const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  authorName: {
    type: String,
    required: true
  },

  comment: {
    type: String,
    required: true
  }
}, 

{ timestamps: {
  createdAt: 'orderDate',
  updatedAt: 'orderUpdate'
} } 

);

module.exports = mongoose.model('Review', schema);

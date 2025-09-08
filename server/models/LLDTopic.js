const mongoose = require('mongoose');

const lldTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  intent: {
    type: String,
    required: true
  },
  structure: {
    type: String,
    required: true
  },
  useCases: {
    type: String,
    required: true
  },
  cppExample: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('LLDTopic', lldTopicSchema);

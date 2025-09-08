const mongoose = require('mongoose');

const hldTopicSchema = new mongoose.Schema({
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
  coreConcepts: {
    type: String,
    required: true
  },
  architectureDiagram: {
    url: {
      type: String
    },
    alt: {
      type: String
    }
  },
  tradeoffs: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('HLDTopic', hldTopicSchema);

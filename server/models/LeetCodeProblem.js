const mongoose = require('mongoose');

const leetCodeProblemSchema = new mongoose.Schema({
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
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard']
  },
  problemStatement: {
    type: String,
    required: true
  },
  example: {
    type: String,
    required: true
  },
  constraints: {
    type: String,
    required: true
  },
  solution: {
    cppCode: {
      type: String,
      required: true
    },
    explanation: {
      type: String,
      required: true
    },
    timeComplexity: {
      type: String,
      required: true
    },
    spaceComplexity: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('LeetCodeProblem', leetCodeProblemSchema);

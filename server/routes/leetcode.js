const express = require('express');
const router = express.Router();
const LeetCodeProblem = require('../models/LeetCodeProblem');

// GET /api/leetcode - Get all LeetCode problems (lightweight list)
router.get('/', async (req, res) => {
  try {
    const problems = await LeetCodeProblem.find()
      .select('title slug category difficulty')
      .sort({ category: 1, difficulty: 1 });
    
    res.json(problems);
  } catch (error) {
    console.error('Error fetching LeetCode problems:', error);
    res.status(500).json({ error: 'Failed to fetch LeetCode problems' });
  }
});

// GET /api/leetcode/:slug - Get a specific LeetCode problem by slug
router.get('/:slug', async (req, res) => {
  try {
    const problem = await LeetCodeProblem.findOne({ slug: req.params.slug });
    
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    
    res.json(problem);
  } catch (error) {
    console.error('Error fetching LeetCode problem:', error);
    res.status(500).json({ error: 'Failed to fetch LeetCode problem' });
  }
});

module.exports = router;

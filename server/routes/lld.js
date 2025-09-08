const express = require('express');
const router = express.Router();
const LLDTopic = require('../models/LLDTopic');

// GET /api/lld - Get all LLD topics (lightweight list)
router.get('/', async (req, res) => {
  try {
    const topics = await LLDTopic.find()
      .select('title slug category')
      .sort({ category: 1, title: 1 });
    
    res.json(topics);
  } catch (error) {
    console.error('Error fetching LLD topics:', error);
    res.status(500).json({ error: 'Failed to fetch LLD topics' });
  }
});

// GET /api/lld/:slug - Get a specific LLD topic by slug
router.get('/:slug', async (req, res) => {
  try {
    const topic = await LLDTopic.findOne({ slug: req.params.slug });
    
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    
    res.json(topic);
  } catch (error) {
    console.error('Error fetching LLD topic:', error);
    res.status(500).json({ error: 'Failed to fetch LLD topic' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const HLDTopic = require('../models/HLDTopic');

// GET /api/hld - Get all HLD topics (lightweight list)
router.get('/', async (req, res) => {
  try {
    const topics = await HLDTopic.find()
      .select('title slug category')
      .sort({ category: 1, title: 1 });
    
    res.json(topics);
  } catch (error) {
    console.error('Error fetching HLD topics:', error);
    res.status(500).json({ error: 'Failed to fetch HLD topics' });
  }
});

// GET /api/hld/:slug - Get a specific HLD topic by slug
router.get('/:slug', async (req, res) => {
  try {
    const topic = await HLDTopic.findOne({ slug: req.params.slug });
    
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    
    res.json(topic);
  } catch (error) {
    console.error('Error fetching HLD topic:', error);
    res.status(500).json({ error: 'Failed to fetch HLD topic' });
  }
});

module.exports = router;

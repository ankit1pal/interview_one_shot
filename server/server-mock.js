const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load data from JSON files
const leetcodeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'leetcode.json'), 'utf8'));
const hldData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'hld.json'), 'utf8'));
const lldData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'lld.json'), 'utf8'));

// LeetCode routes
app.get('/api/leetcode', (req, res) => {
  const lightweightList = leetcodeData.map(item => ({
    title: item.title,
    slug: item.slug,
    category: item.category,
    difficulty: item.difficulty
  }));
  res.json(lightweightList);
});

app.get('/api/leetcode/:slug', (req, res) => {
  const problem = leetcodeData.find(p => p.slug === req.params.slug);
  if (!problem) {
    return res.status(404).json({ error: 'Problem not found' });
  }
  res.json(problem);
});

// HLD routes
app.get('/api/hld', (req, res) => {
  const lightweightList = hldData.map(item => ({
    title: item.title,
    slug: item.slug,
    category: item.category
  }));
  res.json(lightweightList);
});

app.get('/api/hld/:slug', (req, res) => {
  const topic = hldData.find(t => t.slug === req.params.slug);
  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' });
  }
  res.json(topic);
});

// LLD routes
app.get('/api/lld', (req, res) => {
  const lightweightList = lldData.map(item => ({
    title: item.title,
    slug: item.slug,
    category: item.category
  }));
  res.json(lightweightList);
});

app.get('/api/lld/:slug', (req, res) => {
  const topic = lldData.find(t => t.slug === req.params.slug);
  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' });
  }
  res.json(topic);
});

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Interview Prep Platform API is running!' });
});

app.listen(PORT, () => {
  console.log(`Mock server is running on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`- GET /api/leetcode - List all LeetCode problems`);
  console.log(`- GET /api/leetcode/:slug - Get specific LeetCode problem`);
  console.log(`- GET /api/hld - List all HLD topics`);
  console.log(`- GET /api/hld/:slug - Get specific HLD topic`);
  console.log(`- GET /api/lld - List all LLD topics`);
  console.log(`- GET /api/lld/:slug - Get specific LLD topic`);
});



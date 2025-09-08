const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const leetcodeRouter = require('./routes/leetcode');
const hldRouter = require('./routes/hld');
const lldRouter = require('./routes/lld');

app.use('/api/leetcode', leetcodeRouter);
app.use('/api/hld', hldRouter);
app.use('/api/lld', lldRouter);

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Interview Prep Platform API is running!' });
});

// Database connection
mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost:27017/interview-prep', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});


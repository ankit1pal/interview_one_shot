const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import models
const LeetCodeProblem = require('./models/LeetCodeProblem');
const HLDTopic = require('./models/HLDTopic');
const LLDTopic = require('./models/LLDTopic');

// Database connection
mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost:27017/interview-prep', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB for seeding');
  seedDatabase();
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    
    // Clear existing data
    await LeetCodeProblem.deleteMany({});
    await HLDTopic.deleteMany({});
    await LLDTopic.deleteMany({});
    console.log('Cleared existing data');
    
    // Read and insert LeetCode problems
    const leetcodeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'leetcode.json'), 'utf8'));
    await LeetCodeProblem.insertMany(leetcodeData);
    console.log(`Inserted ${leetcodeData.length} LeetCode problems`);
    
    // Read and insert HLD topics
    const hldData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'hld.json'), 'utf8'));
    await HLDTopic.insertMany(hldData);
    console.log(`Inserted ${hldData.length} HLD topics`);
    
    // Read and insert LLD topics
    const lldData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'lld.json'), 'utf8'));
    await LLDTopic.insertMany(lldData);
    console.log(`Inserted ${lldData.length} LLD topics`);
    
    console.log('Database seeding completed successfully!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed');
  }
}


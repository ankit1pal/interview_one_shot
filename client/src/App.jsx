import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TopicPanel from './components/TopicPanel';
import ContentDisplay from './components/ContentDisplay';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  // State for topic lists
  const [leetcodeTopics, setLeetcodeTopics] = useState([]);
  const [hldTopics, setHldTopics] = useState([]);
  const [lldTopics, setLldTopics] = useState([]);
  
  // State for selected topic and its data
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch initial topic lists
  useEffect(() => {
    const fetchTopicLists = async () => {
      try {
        const [leetcodeRes, hldRes, lldRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/leetcode`),
          axios.get(`${API_BASE_URL}/hld`),
          axios.get(`${API_BASE_URL}/lld`)
        ]);
        
        setLeetcodeTopics(leetcodeRes.data);
        setHldTopics(hldRes.data);
        setLldTopics(lldRes.data);
      } catch (error) {
        console.error('Error fetching topic lists:', error);
        setError('Failed to load topic lists');
      }
    };

    fetchTopicLists();
  }, []);

  // Fetch detailed topic data when selection changes
  useEffect(() => {
    if (!selectedTopic) {
      setTopicData(null);
      return;
    }

    const fetchTopicData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(
          `${API_BASE_URL}/${selectedTopic.type}/${selectedTopic.slug}`
        );
        setTopicData(response.data);
      } catch (error) {
        console.error('Error fetching topic data:', error);
        setError('Failed to load topic data');
      } finally {
        setLoading(false);
      }
    };

    fetchTopicData();
  }, [selectedTopic]);

  const handleTopicSelect = (type, slug) => {
    setSelectedTopic({ type, slug });
  };

  return (
    <div className="app-container">
      {/* Left Panel - LeetCode Problems */}
      <div className="left-panel">
        <TopicPanel
          title="LeetCode Blind 75"
          topics={leetcodeTopics}
          onTopicSelect={(slug) => handleTopicSelect('leetcode', slug)}
          activeTopicSlug={selectedTopic?.type === 'leetcode' ? selectedTopic.slug : null}
        />
      </div>

      {/* Content Display */}
      <div className="content-display">
        <ContentDisplay
          topicData={topicData}
          loading={loading}
          error={error}
        />
      </div>

      {/* Right Panel - HLD Topics */}
      <div className="right-panel">
        <TopicPanel
          title="High-Level Design"
          topics={hldTopics}
          onTopicSelect={(slug) => handleTopicSelect('hld', slug)}
          activeTopicSlug={selectedTopic?.type === 'hld' ? selectedTopic.slug : null}
        />
      </div>

      {/* Bottom Panel - LLD Topics */}
      <div className="bottom-panel">
        <TopicPanel
          title="Low-Level Design"
          topics={lldTopics}
          onTopicSelect={(slug) => handleTopicSelect('lld', slug)}
          activeTopicSlug={selectedTopic?.type === 'lld' ? selectedTopic.slug : null}
        />
      </div>
    </div>
  );
}

export default App;
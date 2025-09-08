import React from 'react';
import LeetCodeView from './LeetCodeView';
import HLDView from './HLDView';
import LLDView from './LLDView';

const ContentDisplay = ({ topicData, loading, error }) => {
  if (loading) {
    return (
      <div className="loading">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <div>⚠️ Error</div>
        <div>{error}</div>
      </div>
    );
  }

  if (!topicData) {
    return (
      <div className="welcome">
        <h2>Welcome to Interview Prep Platform</h2>
        <p>
          Select a topic from the panels to get started with your interview preparation.
          Choose from LeetCode problems, High-Level Design concepts, or Low-Level Design patterns.
        </p>
      </div>
    );
  }

  // Determine the view type based on the data structure
  const getViewType = (data) => {
    if (data.difficulty) {
      return 'leetcode';
    } else if (data.coreConcepts) {
      return 'hld';
    } else if (data.intent) {
      return 'lld';
    }
    return 'unknown';
  };

  const viewType = getViewType(topicData);

  switch (viewType) {
    case 'leetcode':
      return <LeetCodeView data={topicData} />;
    case 'hld':
      return <HLDView data={topicData} />;
    case 'lld':
      return <LLDView data={topicData} />;
    default:
      return (
        <div className="error">
          <div>⚠️ Unknown Content Type</div>
          <div>Unable to display this content</div>
        </div>
      );
  }
};

export default ContentDisplay;


import React from 'react';

const TopicPanel = ({ title, topics, onTopicSelect, activeTopicSlug }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="panel-header">
        {title}
      </div>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.slug} className="topic-item">
            <button
              className={`topic-button ${
                activeTopicSlug === topic.slug ? 'active' : ''
              }`}
              onClick={() => onTopicSelect(topic.slug)}
            >
              <div className="topic-title">{topic.title}</div>
              <div className="topic-meta">
                {topic.category && (
                  <span className="content-category">{topic.category}</span>
                )}
                {topic.difficulty && (
                  <span className={`difficulty-badge ${getDifficultyClass(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicPanel;

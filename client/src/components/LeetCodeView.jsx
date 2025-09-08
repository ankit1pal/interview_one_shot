import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LeetCodeView = ({ data }) => {
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
      {/* Header */}
      <div className="content-header">
        <h1 className="content-title">{data.title}</h1>
        <div className="content-meta">
          <span className="content-category">{data.category}</span>
          <span className={`difficulty-badge ${getDifficultyClass(data.difficulty)}`}>
            {data.difficulty}
          </span>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="content-section">
        <h2 className="section-title">Problem Statement</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.problemStatement}</ReactMarkdown>
        </div>
      </div>

      {/* Example */}
      <div className="content-section">
        <h2 className="section-title">Example</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.example}</ReactMarkdown>
        </div>
      </div>

      {/* Constraints */}
      <div className="content-section">
        <h2 className="section-title">Constraints</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.constraints}</ReactMarkdown>
        </div>
      </div>

      {/* Solution */}
      <div className="content-section">
        <h2 className="section-title">Solution</h2>
        
        {/* C++ Code */}
        <div className="code-block">
          <SyntaxHighlighter
            language="cpp"
            style={vscDarkPlus}
            showLineNumbers={true}
            wrapLines={true}
          >
            {data.solution.cppCode}
          </SyntaxHighlighter>
        </div>

        {/* Explanation */}
        <div className="markdown-content">
          <ReactMarkdown>{data.solution.explanation}</ReactMarkdown>
        </div>

        {/* Complexity Analysis */}
        <div className="content-section">
          <h3 className="section-title">Complexity Analysis</h3>
          <div className="markdown-content">
            <p>
              <strong>Time Complexity:</strong> {data.solution.timeComplexity}
            </p>
            <p>
              <strong>Space Complexity:</strong> {data.solution.spaceComplexity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeView;


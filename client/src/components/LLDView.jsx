import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LLDView = ({ data }) => {
  return (
    <div>
      {/* Header */}
      <div className="content-header">
        <h1 className="content-title">{data.title}</h1>
        <div className="content-meta">
          <span className="content-category">{data.category}</span>
        </div>
      </div>

      {/* Intent */}
      <div className="content-section">
        <h2 className="section-title">Intent & Purpose</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.intent}</ReactMarkdown>
        </div>
      </div>

      {/* Structure */}
      <div className="content-section">
        <h2 className="section-title">Structure & Design</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.structure}</ReactMarkdown>
        </div>
      </div>

      {/* Use Cases */}
      <div className="content-section">
        <h2 className="section-title">Use Cases & Applications</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.useCases}</ReactMarkdown>
        </div>
      </div>

      {/* C++ Example */}
      <div className="content-section">
        <h2 className="section-title">C++ Implementation</h2>
        <div className="code-block">
          <SyntaxHighlighter
            language="cpp"
            style={vscDarkPlus}
            showLineNumbers={true}
            wrapLines={true}
          >
            {data.cppExample}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default LLDView;



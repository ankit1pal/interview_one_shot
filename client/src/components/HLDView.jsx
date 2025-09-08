import React from 'react';
import ReactMarkdown from 'react-markdown';

const HLDView = ({ data }) => {
  return (
    <div>
      {/* Header */}
      <div className="content-header">
        <h1 className="content-title">{data.title}</h1>
        <div className="content-meta">
          <span className="content-category">{data.category}</span>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="content-section">
        <h2 className="section-title">Core Concepts</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.coreConcepts}</ReactMarkdown>
        </div>
      </div>

      {/* Architecture Diagram */}
      {data.architectureDiagram && data.architectureDiagram.url && (
        <div className="content-section">
          <h2 className="section-title">Architecture Diagram</h2>
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <img
              src={data.architectureDiagram.url}
              alt={data.architectureDiagram.alt || 'Architecture Diagram'}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0'
              }}
            />
            {data.architectureDiagram.alt && (
              <p style={{ 
                marginTop: '0.5rem', 
                color: '#64748b', 
                fontSize: '0.875rem',
                fontStyle: 'italic'
              }}>
                {data.architectureDiagram.alt}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Tradeoffs */}
      <div className="content-section">
        <h2 className="section-title">Tradeoffs & Considerations</h2>
        <div className="markdown-content">
          <ReactMarkdown>{data.tradeoffs}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default HLDView;



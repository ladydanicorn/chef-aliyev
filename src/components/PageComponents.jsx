import React from 'react';
import './PageComponent.css';

export default function PageComponent({ title, children }) {
  return (
    <div className="page-container">
      <h1 className="page-title">{title}</h1>
      <div className="content-section">
        {children}
      </div>
    </div>
  );
}
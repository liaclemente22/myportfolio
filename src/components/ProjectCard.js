import React from 'react';
import './ProjectCard.css';  // Import styling

const ProjectCard = ({ title, description, link, downloadLink, scriptPreview }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <pre className="code-preview">{scriptPreview}</pre>
      </div>
      <div className="card-footer">
        <a href={link} target="_blank" rel="noopener noreferrer" className="view-btn">
          View Project
        </a>
        <a href={downloadLink} download className="download-btn">
          Download Script
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

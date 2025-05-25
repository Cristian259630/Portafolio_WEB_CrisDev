import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './LearningBadge.css'; 

const LearningBadge = ({ learningTopic }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    
      className={`learning-badge-container ${isHovered ? 'learning-badge-container-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <span className="learning-badge-dot"></span>
      <FaGraduationCap className="learning-badge-icon" />
      <span className="learning-badge-text">Actualmente aprendiendo: {learningTopic || 'AWS Web Services'}</span>
    </div>
  );
};

export default LearningBadge;
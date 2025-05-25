import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';
import './LanguageBadge.css'; 

const LanguageBadge = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      
      className={`language-badge-container ${isHovered ? 'language-badge-container-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <span className="language-badge-dot"></span>
      <FaLanguage className="language-badge-icon" />
      <div className="language-badge-text-container">
        <span className="language-badge-title-text">Idiomas</span>
        <span className="language-badge-main-text">Ingles - Nivel actual: A2</span>
        <span className="language-badge-sub-text">Actualmente practicando para alcanzar un nivel B2.</span>
        <img
          src="https://tuaulavirtual.educatic.unam.mx/pluginfile.php/2878407/course/overviewfiles/a7d14fe4-b6da-45b7-8b0d-321c131e83ef_900_900.gif"
          alt="Learning English"
          className="language-badge-image"
        />
      </div>
    </div>
  );
};

export default LanguageBadge;
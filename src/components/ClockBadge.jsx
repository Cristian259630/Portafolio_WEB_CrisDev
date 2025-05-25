import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import './ClockBadge.css';

const ClockBadge = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }) + ' ' + currentDateTime.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div
      className={`live-clock-badge-container ${isHovered ? 'live-clock-badge-container-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="live-clock-badge-dot"></span>
      <FaClock className="live-clock-badge-icon" />
      <span className="live-clock-badge-text">{formattedDateTime}</span>
    </div>
  );
};

export default ClockBadge;
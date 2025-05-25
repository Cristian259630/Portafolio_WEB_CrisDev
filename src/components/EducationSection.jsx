import React, { useState } from 'react';



const EducationSection = ({ education }) => {
  
  const fixedEducation = [
    {
      institution: "Universidad Autónoma de Querétaro",
      logo: "https://www.uaq.mx/informatica/img/soft.png", 
      degree: "Licenciatura  en Ingenieria de Software",
      status: "Graduado (2023)", 
      description: "Enfocado en desarrollo de software, bases de datos y redes."
    },
   
  ];

  // Usa los datos pasados por prop o los fijos
  const currentEducation = education && education.length > 0 ? education : fixedEducation;

  // --- Estilos CSS en línea ---
  const styles = {
    cardStyle: {
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
      backgroundColor: '#222',
      maxWidth: '48rem',
      margin: '0 auto', 
      boxSizing: 'border-box',
      border: '3px solid blue',
      transition: 'all 0.3s ease-in-out',
      marginBottom: '2rem', 
    },
    contentPaddingStyle: {
      padding: '1.5rem', 
    },
    titleStyle: {
      fontSize: '1.5rem', 
      fontWeight: '600',
      marginBottom: '1.5rem', 
      fontFamily: 'Inter, sans-serif',
      textAlign: 'center',
      color: 'yellow'
    },
    educationListContainerStyle: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem', // Espacio entre las tarjetas de educación
      justifyContent: 'center', 
    },

 
    educationItemStyle: {
      backgroundColor: '#333', 
      borderRadius: '0.75rem', 
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)', 
      padding: '1.25rem', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      border: '1px solid #555', 
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    },
    educationItemHoverStyle: {
      backgroundColor: '#444', 
      border: '3pdx solid lightblue',
      transform: 'translateY(-5px) scale(1.02)', 
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)', 
     
    },
    institutionLogoStyle: {
      width: '80px', 
      height: '80px',
      objectFit: 'contain', 
      marginBottom: '1rem', 
      borderRadius: '50%', 
      border: '2px solid #666', 
    },
    degreeStyle: {
      fontSize: '1.15rem', 
      fontWeight: '600', 
      color: 'lightblue', // Color para el título de la carrera
      marginBottom: '0.5rem', 
    },
    institutionNameStyle: {
      fontSize: '0.95rem', 
      fontWeight: '500',
      color: '#ccc', 
      marginBottom: '0.25rem', 
    },
    statusStyle: {
      fontSize: '0.85rem', 
      fontWeight: 'bold',
      color: '#999', 
      textTransform: 'uppercase',
      letterSpacing: '0.05em', 
      marginBottom: '0.75rem',
    },
    descriptionStyle: {
      fontSize: '0.9rem',
      color: '#bbb',
      lineHeight: '1.4',
    },
    noEducationTextStyle: {
      color: '#6b7280', 
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
    },
  };

  return (
    <div style={styles.cardStyle}>
      <div style={styles.contentPaddingStyle}>
        <h2 style={styles.titleStyle}>Mi Educación</h2>
        {currentEducation.length > 0 ? (
          <div style={styles.educationListContainerStyle}>
            {currentEducation.map((edu, index) => (
              <EducationItem key={index} education={edu} styles={styles} />
            ))}
          </div>
        ) : (
          <p style={styles.noEducationTextStyle}>No hay información de educación disponible.</p>
        )}
      </div>
    </div>
  );
};

// --- Sub-componente para cada elemento educativo (similar a una "badge") ---
const EducationItem = ({ education, styles }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={isHovered ? { ...styles.educationItemStyle, ...styles.educationItemHoverStyle } : styles.educationItemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {education.logo && (
        <img
          src={education.logo}
          alt={`Logo de ${education.institution}`}
          style={styles.institutionLogoStyle}
        />
      )}
      <h3 style={styles.degreeStyle}>{education.degree}</h3>
      <p style={styles.institutionNameStyle}>{education.institution}</p>
      <p style={styles.statusStyle}>{education.status}</p>
      {education.description && (
        <p style={styles.descriptionStyle}>{education.description}</p>
      )}
    </div>
  );
};

export default EducationSection;
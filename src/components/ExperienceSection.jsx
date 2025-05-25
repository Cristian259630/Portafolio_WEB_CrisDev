import React, { useState } from 'react';


const ExperienceSection = ({ experiences }) => {
  const [isHovered, setIsHovered] = useState(false);

 
  const fixedExperiences = [
    {
      role: "Desarrollador Full Stack",
      company: "Secretaria Innovación y Emprendimiento de la UAQ",
      period: "Enero 2023 - Presente",
      description: "Desarrollo y mantenimiento de interfaces de usuario utilizando React y Next.js. Colaboración en el diseño de nuevas funcionalidades y optimización de componentes existentes, dar mantenimiento al sitio web de la secretaria en Joomla y creación de paginas simples con HTML, CSS y JS",
      logo: "https://portalinformatica.uaq.mx/congreso2018/public/images/UAQ.png" 
    },
    {
      role: "Desarrollador",
      company: "Centro de Desarrollo - Facultad de Informatica de la UAQ",
      period: "Julio 2021 - Diciembre 2022",
      description: "Desarrollo de APIs RESTful con Node.js y Express.js, gestión de bases de datos PostgreSQL y optimización de consultas.",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQG6WX1Xg9rJKw/company-logo_200_200/company-logo_200_200/0/1673558657803?e=1753315200&v=beta&t=nqvPBSs2wjh-7UpOWwr618mj1tjMVNASS-pi9lPAo5I" 
    }
   
  ];

  // Usa las experiencias pasadas por prop o las fijas
  const currentExperiences = experiences && experiences.length > 0 ? experiences : fixedExperiences;

  const styles = {
    cardStyle: {
      borderRadius: '1rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
      backgroundColor: '#222',
      maxWidth: '48rem',
      margin: '0 auto', 
      boxSizing: 'border-box',
      border: '3px solid blue',
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',  
    },
    cardStyleHover: {
      backgroundColor: '#2b2b2b', 
      border: '3px solid lightblue', 
      transform: 'scale(1.01) translateY(-3px)', 
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)', 
    },
    contentPaddingStyle: {
      padding: '1.5rem', 
    },
    titleStyle: {
      fontSize: '1.5rem', 
      fontWeight: '600',
      marginBottom: '1rem', 
      fontFamily: 'Inter, sans-serif', 
      textAlign: 'center', 
      color: 'yellow'
    },
    experienceItemContainer: { 
      display: 'flex',
      alignItems: 'flex-start', 
      gap: '1rem', // Espacio entre el logo y el texto
      marginBottom: '1.5rem', // Espacio entre cada experiencia
      paddingBottom: '1rem', 
      borderBottom: '1px solid #444', 
      transition: 'background-color 0.3s ease, transform 0.3s ease', // Transición para el hover del item
    },
    experienceItemHover: { // Estilo hover para cada item de experiencia
        backgroundColor: '#333', // Ligeramente más claro al pasar el mouse
        transform: 'scale(1.01)', 
    },
    companyLogoStyle: { 
      width: '60px',
      height: '60px',
      borderRadius: '50%', 
      objectFit: 'cover', // Asegura que la imagen cubra el área sin distorsionarse
      flexShrink: 0, // Evita que la imagen se encoja
      border: '2px solid #555', 
    },
    textContainerStyle: { 
      flexGrow: 1, 
    },
    roleCompanyStyle: {
      fontSize: '1.25rem', 
      fontWeight: '500', 
      fontFamily: 'Inter, sans-serif',
      color: 'lightblue',
      marginBottom: '0.25rem', 
    },
    periodStyle: {
      fontSize: '0.875rem', 
      color: 'white', 
      fontFamily: 'Inter, sans-serif',
      display: 'block',
      marginBottom: '0.5rem', 
    },
    descriptionStyle: {
      color: 'white', 
      marginTop: '0.5rem', 
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem', 
      lineHeight: '1.5'
    }
  };

  return (
    <div
      style={isHovered ? { ...styles.cardStyle, ...styles.cardStyleHover } : styles.cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.contentPaddingStyle}>
        <h2 style={styles.titleStyle}>Resumen de Experiencia</h2>
        {currentExperiences.map((exp, i) => (
          <ExperienceItem key={i} experience={exp} styles={styles} /> 
        ))}
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience, styles }) => {
  const [isItemHovered, setIsItemHovered] = useState(false); // Estado para el hover del item individual

  return (
    <div
      style={isItemHovered ? { ...styles.experienceItemContainer, ...styles.experienceItemHover } : styles.experienceItemContainer}
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
    >
      {experience.logo && (
        <img
          src={experience.logo}
          alt={`Logo de ${experience.company}`}
          style={styles.companyLogoStyle}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/555555/FFFFFF?text=Logo"; }} 
        />
      )}
      <div style={styles.textContainerStyle}>
        <h3 style={styles.roleCompanyStyle}>{experience.role} - {experience.company}</h3>
        <span style={styles.periodStyle}>{experience.period}</span>
        <p style={styles.descriptionStyle}>{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
import React, { useState } from 'react'; 

const SkillsSection = ({ skills }) => {
  // Datos de habilidades fijos con niveles de dominio.
  const fixedSkills = [
    { name: "React", level: "avanzado" },
    { name: "Node.js", level: "medio" },
    { name: "Tailwind CSS", level: "avanzado" },
    { name: "Firebase", level: "medio" },
    { name: "Python", level: "basico" },
    { name: "SQL", level: "medio" },
    { name: "JavaScript", level: "avanzado" },
    { name: "HTML5", level: "avanzado" },
    { name: "CSS3", level: "avanzado" },
    { name: "Joomla", level: "avanzado" },
    { name: "Odoo", level: "avanzado" }
  ];

  // Usa las habilidades pasadas por prop o las fijas
  const currentSkills = skills && skills.length > 0 ? skills : fixedSkills;

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
      transition: 'all 0.3s ease-in-out', // Transición para el efecto hover si se aplica a la tarjeta principal
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
      color: 'lightblue'
    },

    // Estilo para el contenedor de la lista de habilidades (vertical)
    skillsListContainerStyle: {
      display: 'flex',
      flexDirection: 'column', // Para que los elementos se apilen verticalmente
      gap: '0.75rem',
      
    },
    skillItemStyle: {
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0.5rem 0.75rem', 
      borderRadius: '0.5rem', 
      backgroundColor: '#333', 
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', 
      fontFamily: 'Inter, sans-serif',
      width: '100%', 
      boxSizing: 'border-box',
      border: '1px solid #555', 
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease', 
    },
    
    skillItemHoverStyle: {
      backgroundColor: '#444', 
      borderColor: '#007FFF', 
      transform: 'scale(1.02)', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
    },
    skillNameStyle: {
      fontSize: '1rem', 
      fontWeight: '500', 
      color: 'lightblue', 
      flexGrow: 1, 
      textAlign: 'left',
    },
    levelIndicatorContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem', 
      marginLeft: '1rem', 
    },
    levelLineStyle: (level) => {
      let backgroundColor;
      switch (level.toLowerCase()) {
        case 'basico':
          backgroundColor = '#ef4444'; 
          break;
        case 'medio':
          backgroundColor = '#facc15'; // Amarillo (Tailwind bg-yellow-400)
          break;
        case 'avanzado':
          backgroundColor = '#22c55e'; // Verde (Tailwind bg-green-500)
          break;
        default:
          backgroundColor = '#9ca3af'; // Gris (Tailwind bg-gray-400)
      }
      return {
        width: '30rem', 
        height: '0.25rem',
        borderRadius: '9999px',
        backgroundColor: backgroundColor,
      };
    },
    levelTextStyle: {
      fontSize: '0.75rem', 
      fontWeight: '600',
      color: 'lightblue', 
      textTransform: 'capitalize', // Primera letra en mayúscula
      minWidth: '50px', // Ancho mínimo para el texto del nivel
      textAlign: 'right', // Alinea el texto del nivel a la derecha
    },
    noSkillsTextStyle: {
      color: '#6b7280', 
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
    },
  };

  return (
    <div style={styles.cardStyle}>
      <div style={styles.contentPaddingStyle}>
        <h2 style={styles.titleStyle}>Habilidades</h2>
        {currentSkills.length > 0 ? (
          <div style={styles.skillsListContainerStyle}>
            {currentSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} styles={styles} />
            ))}
          </div>
        ) : (
          <p style={styles.noSkillsTextStyle}>No hay habilidades disponibles.</p>
        )}
      </div>
    </div>
  );
};

// --- Nuevo sub-componente para cada habilidad ---
const SkillItem = ({ skill, styles }) => {
  const [isSkillHovered, setIsSkillHovered] = useState(false);

  return (
    <div
      style={isSkillHovered ? { ...styles.skillItemStyle, ...styles.skillItemHoverStyle } : styles.skillItemStyle}
      onMouseEnter={() => setIsSkillHovered(true)}
      onMouseLeave={() => setIsSkillHovered(false)}
    >
      <span style={styles.skillNameStyle}>{skill.name}</span>
      <div style={styles.levelIndicatorContainerStyle}>
        <div style={styles.levelLineStyle(skill.level)}></div>
        <span style={styles.levelTextStyle}>{skill.level}</span>
      </div>
    </div>
  );
};

export default SkillsSection;
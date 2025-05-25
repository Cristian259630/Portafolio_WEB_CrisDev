import React, { useState } from 'react';

const ProjectsSection = ({ projects, projectIndex = 0, prevProject, nextProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  const fixedProjects = [
    {
      name: "App de predicción de podios F1",
      description:
        "Una app con backend en Python y frontend en React, desplegada en Clever Cloud. Permite a los usuarios predecir los resultados de las carreras de Fórmula 1.",
      image: "https://placehold.co/400x192/ddeeff/000000?text=F1+Predictor",
      techs: ["React", "Python", "Flask", "Tailwind CSS", "GCP"],
      url: "https://f1-predictor.cleverapps.io/" // Usamos 'url' para el enlace directo
    },
    {
      name: "Trello Clone",
      description: "Organizador de tareas colaborativo con funcionalidades de arrastrar y soltar, autenticación de usuarios y persistencia de datos en tiempo real.",
      image: "https://placehold.co/400x192/ccffee/000000?text=Trello+Clone",
      techs: ["React", "Firebase", "Redux", "Material-UI"],
      url: "https://github.com/tu-usuario/trello-clone-repo" // Si es un repo, que sea el enlace de github
    },
    {
      name: "Sitio Web Portfolio Personal",
      description: "Mi sitio web personal diseñado para mostrar mis habilidades, proyectos y experiencia. Incluye un diseño responsivo y animaciones sutiles.",
      image: "https://placehold.co/400x192/ffddcc/000000?text=My+Portfolio",
      techs: ["React", "HTML5", "CSS3", "JavaScript", "Netlify"],
      url: "https://your-portfolio-live.netlify.app/"
    }
  ];

  const currentProjects = Array.isArray(projects) && projects.length > 0 ? projects : fixedProjects;
  const validatedProjectIndex = currentProjects.length > 0 ? Math.min(Math.max(0, projectIndex), currentProjects.length - 1) : 0;
  const displayProject = currentProjects[validatedProjectIndex];

  const styles = {
    cardStyle: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: '#222',
      maxWidth: '48rem',
      maxHeight: '98rem',
      margin: '0 auto',
      boxSizing: 'border-box',
      position: 'relative',
      fontFamily: 'Inter, sans-serif',
      borderRadius: '1rem',
      border: '3px solid #0000FF',
      transform: 'rotateY(5deg)',
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      marginTop: '-30px'
    },
    cardStyleHover: {
      backgroundColor: '#444',
      border: '3px solid lightblue',
      transform: 'scale(1.02)',
    },
    contentPaddingStyle: {
      padding: '1.5rem',
      position: 'relative'
    },
    titleStyle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      textAlign: 'center',
      color: 'yellow'
    },
    buttonStyle: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#e5e7eb',
      padding: '0.5rem',
      borderRadius: '9999px',
      cursor: 'pointer',
      zIndex: '10',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2.5rem',
      height: '2.5rem',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#374151',
      transition: 'background-color 0.2s ease-in-out'
    },
    buttonHoverStyle: {
      backgroundColor: '#d1d5db'
    },
    projectImageStyle: {
      width: '100%',
      height: '30rem',
      objectFit: 'cover',
      borderRadius: '0.375rem',
      marginBottom: '1rem',
      cursor: 'pointer', // CAMBIO: Indica que la imagen es clickeable
      display: 'block', // Asegura que el enlace no tenga espacio extra abajo
    },
    projectNameStyle: {
      fontSize: '1.25rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
      color: 'lightblue'
    },
    projectDescriptionStyle: {
      color: 'lightblue',
      marginBottom: '1rem',
      fontSize: '1rem',
      lineHeight: '1.5'
    },
    techsContainerStyle: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    techBadgeStyle: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '9999px',
      border: '1px solid #d1d5db',
      backgroundColor: '#222',
      paddingLeft: '0.625rem',
      paddingRight: '0.625rem',
      paddingTop: '0.125rem',
      paddingBottom: '0.125rem',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: 'lightblue',
    },
    noProjectsTextStyle: {
      color: '#6b7280',
      textAlign: 'center',
    },
    // CAMBIO: Estos estilos ya no son necesarios si se eliminan los botones de repositorio/demo
    // repoButtonsContainerStyle: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   gap: '1rem',
    //   marginTop: '1.5rem',
    // },
    // repoButtonStyle: {
    //   backgroundColor: '#007bff',
    //   color: 'white',
    //   padding: '0.75rem 1.5rem',
    //   borderRadius: '0.5rem',
    //   textDecoration: 'none',
    //   fontWeight: 'bold',
    //   transition: 'background-color 0.2s ease-in-out',
    //   border: 'none',
    //   cursor: 'pointer',
    //   fontSize: '0.9em',
    // },
    // repoButtonHoverStyle: {
    //   backgroundColor: '#0056b3',
    // },
  };

  if (!displayProject || currentProjects.length === 0) {
    return (
      <div style={isHovered ? { ...styles.cardStyle, ...styles.cardStyleHover } : styles.cardStyle}>
        <div style={styles.contentPaddingStyle}>
          <h2 style={styles.titleStyle}>Proyectos</h2>
          <p style={styles.noProjectsTextStyle}>No hay proyectos disponibles para mostrar.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={isHovered ? { ...styles.cardStyle, ...styles.cardStyleHover } : styles.cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.contentPaddingStyle}>
        <h2 style={styles.titleStyle}>Proyectos</h2>
       
        {currentProjects.length > 1 && (
          <>
            <button
              onClick={prevProject}
              style={{ ...styles.buttonStyle, left: '1rem' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.buttonStyle.backgroundColor}
            >
              ←
            </button>
            <button
              onClick={nextProject}
              style={{ ...styles.buttonStyle, right: '1rem' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.buttonStyle.backgroundColor}
            >
              →
            </button>
          </>
        )}
        {/* CAMBIO: Envuelve la imagen en un <a> tag para hacerla clickeable */}
        {displayProject.url ? ( // Solo si existe una URL
          <a
            href={displayProject.url}
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
            style={{ textDecoration: 'none' }} // Elimina el subrayado por defecto del enlace
          >
            <img src={displayProject.image} alt={`Imagen de ${displayProject.name}`} style={styles.projectImageStyle} />
          </a>
        ) : ( // Si no hay URL, solo muestra la imagen sin enlace
          <img src={displayProject.image} alt={`Imagen de ${displayProject.name}`} style={styles.projectImageStyle} />
        )}

        <h3 style={styles.projectNameStyle}>{displayProject.name}</h3>
        <p style={styles.projectDescriptionStyle}>{displayProject.description}</p>
        <div style={styles.techsContainerStyle}>
          {displayProject.techs && displayProject.techs.map((tech, idx) => (
            <span key={idx} style={styles.techBadgeStyle}>
              {tech}
            </span>
          ))}
        </div>
        {/* CAMBIO: Se elimina la sección de botones de repositorio/demo aquí */}
      </div>
    </div>
  );
};

export default ProjectsSection;
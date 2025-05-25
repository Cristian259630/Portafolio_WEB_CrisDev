import React, { useState } from 'react'; 
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './ProfileSection.css'; //estilos

const Repositories = () => {


  const projects = [
    {
      name: "AutoApp",
      description: "Una pequeña pagina con un listado de 5 modelos de coches, los cuales son traidos de una base de datos creada y que se muestran detalles de cada uno de ellos al dar click en la imagen del coche, la base de datos esta alojada en Clever Cloud y parte del frontend fue hecho React.",
      frontendRepo: "https://github.com/Cristian259630/AutoApp-Frontend", 
      backendRepo: "https://github.com/Cristian259630/AutoApp-Backend",  
      liveDemo: "https://api-cars-bycris.netlify.app"           
    },
    {
      name: "Educalia",
      description: "Un pequeño proyecto con el fin de hacer la vista frontend de una pagina que conectara a maestros y alumnos, ya sea para asesorarse o para asesorar a alguien mas, un proyecto hecho con Vue en su totalidad.",
      frontendRepo: "https://github.com/Cristian259630/Educalia",
      liveDemo: "https://educalia.netlify.app"
    },
    {
      name: "Gestor de Tareas",
      description: "Este es el Proyecto 3, enfocado en la visualización de datos con una interfaz interactiva.",
      frontendRepo: "https://github.com/Cristian259630/ListTrackerFrontend",
      backendRepo: "https://github.com/Cristian259630/ListTrackerBackend",
      liveDemo: "https://gestor-tareasbycristian.netlify.app"
    }
  ];

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  // estilos
  const styles = {
    repositoriesContainer: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: '#222', 
      color: 'white', 
      padding: '40px',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '680px', 
      margin: '40px auto',
      border: '3px solid #0000FF', 
      transition: 'all 0.3s ease-in-out', 
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      color: 'yellow'
    },
    projectCard: {
      backgroundColor: '#333', 
      padding: '25px',
      borderRadius: '8px',
      marginBottom: '25px',
      border: '1px solid #555',
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', 
    },
    
    projectCardHover: {
      backgroundColor: '#444',
      borderColor: '#007FFF', 
      transform: 'translateY(-5px)', 
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)', 
    },
    projectName: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: 'lightblue', 
    },
    projectDescription: {
      fontSize: '1.1em',
      lineHeight: '1.5',
      marginBottom: '20px',
      color: '#ccc', 
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
    },
    button: {
      backgroundColor: '#444',
      color: 'white',
      border: '1px solid #666',
      padding: '10px 20px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.95em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease, border-color 0.3s ease', 
    },
   
    buttonHover: {
        backgroundColor: '#555',
        borderColor: '#007FFF', 
    },
    icon: {
      marginRight: '8px',
      fontSize: '1.1em',
    },
  };

  return (
    <section style={styles.repositoriesContainer}>
      <h1 style={styles.title}>Repositorios </h1>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          styles={styles} 
          handleLinkClick={handleLinkClick} 
        />
      ))}
    </section>
  );
};

// Sub-component to manage its own hover state for better reusability and isolation
const ProjectCard = ({ project, styles, handleLinkClick }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);
  const [isButton3Hovered, setIsButton3Hovered] = useState(false);


  return (
    <div
      style={isCardHovered ? { ...styles.projectCard, ...styles.projectCardHover } : styles.projectCard}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <h2 style={styles.projectName}>{project.name}</h2>
      <p style={styles.projectDescription}>{project.description}</p>
      <div style={styles.buttonContainer}>
        {project.frontendRepo && (
          <button
            style={isButton1Hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onClick={() => handleLinkClick(project.frontendRepo)}
            onMouseEnter={() => setIsButton1Hovered(true)}
            onMouseLeave={() => setIsButton1Hovered(false)}
          >
            <FaGithub style={styles.icon} /> Frontend Repo
          </button>
        )}
        {project.backendRepo && (
          <button
            style={isButton2Hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onClick={() => handleLinkClick(project.backendRepo)}
            onMouseEnter={() => setIsButton2Hovered(true)}
            onMouseLeave={() => setIsButton2Hovered(false)}
          >
            <FaGithub style={styles.icon} /> Backend Repo
          </button>
        )}
        {project.liveDemo && (
          <button
            style={isButton3Hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onClick={() => handleLinkClick(project.liveDemo)}
            onMouseEnter={() => setIsButton3Hovered(true)}
            onMouseLeave={() => setIsButton3Hovered(false)}
          >
            <FaGlobe style={styles.icon} /> Demo en Vivo
          </button>
        )}
      </div>
    </div>
  );
};

export default Repositories;
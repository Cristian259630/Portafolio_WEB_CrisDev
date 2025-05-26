import React, { useState } from 'react'; 
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaGlobe } from 'react-icons/fa'; 
import './ProfileSection.css'


 

  
const ProfileSection = () => {

  const [isHovered, setIsHovered] = useState(false);
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/cristian-fernando-developer/', '_blank'); 
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Cristian259630', '_blank'); 
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:TU_CORREO@EJEMPLO.COM'; 
  };

  const handleCvClick = () => {
    window.open('https://www.canva.com/design/DAGoZZTDxUs/nPXTdYw5K2rqNjLDzOHYPg/view?utm_content=DAGoZZTDxUs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h605882193a', '_blank'); 
  };

  const handleWebsiteClick = () => {
    window.open('TU_LINK_A_TU_SITIO_WEB.com', '_blank'); 
  };

  return (
    <section style={isHovered ? { ...styles.profileContainer, ...styles.profileContainerHover} : styles.profileContainer}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div style={styles.header}>
        <img src="https://i.ibb.co/0p4fSRYt/FOTO-DE-MI.png" alt="Cristia" style={styles.profileImage} /> 
        <h1 style={styles.name}>Hey, soy Cristian</h1>
        <span style={styles.availableBadge}>Disponible para trabajar</span>
      </div>

      <p style={styles.description}>
        <span style={{color: 'lightblue'}}>2 años de Experiencia.</span> <span style={{color: 'yellow'}}>Estudiante de Ingeniería de Software en la Universidad Autónoma de Queretaro.</span> <span style={{color: 'yellowgreen'}}>México MX</span>  | Frontend Developer (HTML, CSS, JS, Vue, React) | WebDeveloper
      </p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleLinkedInClick}>
          <FaLinkedin style={styles.icon} /> LinkedIn
        </button>
        <button style={styles.button} onClick={handleGitHubClick}>
          <FaGithub style={styles.icon} /> GitHub
        </button>
        <button style={styles.button} onClick={handleEmailClick}>
          <FaEnvelope style={styles.icon} /> Email
        </button>
        <button style={styles.button} onClick={handleCvClick}>
          <FaFileAlt style={styles.icon} /> Cv Físico
        </button>
        <button style={styles.button} onClick={handleWebsiteClick}>
          <FaGlobe style={styles.icon} /> Sitio Web Personal
        </button>
      </div>
    </section>
  );
};

const styles = {
  
  profileContainer: {
    backgroundColor: '#222', // Fondo oscuro como en la imagen
    color: 'white', // Color de texto claro
    padding: '40px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '680px',
    margin: '40px auto',
    border: '3px solid blue',
    
  },

  profileContainerHover:{
    backgroundColor: '#444', // Ligeramente más claro al pasar el mouse
    border: '3px solid lightblue', // Cambia el color del borde al pasar el mouse
    transform: 'scale(1.02)', 
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    marginRight: '20px',
    
  },
  name: {
    fontSize: '3em',
    fontWeight: 'bold',
    margin: '0',
    marginRight: '20px',
    color: 'white'
  },
  availableBadge: {
    backgroundColor: 'blue', // Verde para "Disponible"
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.9em',
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.5',
    marginBottom: '30px',
    color: 'white', // Ligeramente más oscuro que el texto principal para la descripción
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px', // Espacio entre los botones
  },

  button: {
    backgroundColor: '#333', // Fondo de botón oscuro
    color: 'white',
    border: '1px solid #555', // Borde ligero para los botones
    padding: '12px 25px',
    borderRadius: '25px', // Bordes redondeados como en la imagen
    cursor: 'pointer',
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    border: '3px solid blue'
  },

  
   
  icon: {
    marginRight: '8px',
    fontSize: '1.2em',
  },
};

export default ProfileSection;

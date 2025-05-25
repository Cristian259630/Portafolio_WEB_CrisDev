import React, { useState, useEffect } from 'react';

const ConstanciasSection = ({ constancias }) => { 
  const [isHovered, setIsHovered] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  
  const fixedConstancias = [ 
    {
      title: "Proyectate 2023 - UAQ", 
      description: "Constancia de participación en la feria de proyectos de la Universidad donde presentamos un programa de reconocimiento facial ", 
      image: "https://i.ibb.co/YF3ZrzFf/Screenshot-3.png", 
      url: "https://i.ibb.co/YF3ZrzFf/Screenshot-3.png"
    },
    {
      title: "Congreso Internacional de Computación y Tecnologia Educativa",
      description: "Participamos como ponentes en el primer congreso internacional de computación y tecnologia educativa, dando una conferencia acerca de los pros y contras de la educación a distancia, esto en tiempos de pandemia",
      image: "https://i.ibb.co/s9vfdshk/Screenshot-1.png", 
      url: "https://udemy.com/constancia/node" 
    }
  ];


  const currentConstancias = constancias && constancias.length > 0 ? constancias : fixedConstancias; 

  // Lógica del slider automático de las constancias
  useEffect(() => {
    if (currentConstancias.length > 0) { 
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % currentConstancias.length 
        );
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [currentConstancias.length]); 

  const displayCert = currentConstancias[currentIndex]; 

  const styles = {
    cardStyle: {
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: '#222',
      maxWidth: '48rem', 
      margin: '0 auto',
      marginTop:'25px',
      boxSizing: 'border-box',
      position: 'relative',
      border: '3px solid blue',
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      marginBottom: '2rem', 
    },
    cardStyleHover: {
      backgroundColor: '#2b2b2b',
      border: '3px solid lightblue',
      transform: 'scale(1.01) translateY(-3px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)',
    },
    contentPaddingStyle: {
      padding: '1.5rem', // 24px
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleSectionStyle: { 
      fontSize: '1.5rem', 
      fontWeight: '600',
      marginBottom: '1rem', 
      fontFamily: 'Inter',
      textAlign: 'center',
      color: 'yellow'
    },
    sliderContainer: {
      width: '100%',
      overflow: 'hidden', 
      borderRadius: '0.5rem',
      position: 'relative',
      marginBottom: '1rem',
      backgroundColor: '#1a1a1a', 
      border: '1px solid #444',
    },
    imageStyle: {
      width: '100%',
      height: 'auto', 
      maxHeight: '400px', 
      objectFit: 'contain', 
      display: 'block',
      borderRadius: '50px',
      transition: 'opacity 0.5s ease-in-out', // Transición para el cambio de imagen
    },
    certTitleStyle: { 
      fontSize: '1.25rem',
      fontWeight: '500',
      color: 'lightblue',
      marginBottom: '0.5rem',
      textAlign: 'center',
      fontFamily: 'Inter',
    },
    certDescriptionStyle: { 
      fontSize: '0.95rem',
      color: '#ccc',
      textAlign: 'center',
      lineHeight: '1.4',
      fontFamily: 'Inter',
      marginBottom: '1rem',
    },
    noCertificatesTextStyle: { 
      color: '#6b7280',
      textAlign: 'center',
      fontFamily: 'Inter',
    },
    // Estilos de los botones de navegación, recordar el top 50%
    navButtonStyle: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 0.75rem',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 10,
      fontSize: '1.5rem',
      transition: 'background-color 0.3s ease',
    },
    navButtonHoverStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  };

  return (
    <div
      style={isHovered ? { ...styles.cardStyle, ...styles.cardStyleHover } : styles.cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.contentPaddingStyle}>
        <h2 style={styles.titleSectionStyle}>Mis Constancias</h2> 

        {currentConstancias.length > 0 ? ( 
          <div style={styles.sliderContainer}>
            <a
              href={displayCert.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <img
                src={displayCert.image}
                alt={`Constancia: ${displayCert.title}`} 
                style={styles.imageStyle}
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/555555/FFFFFF?text=Constancia+No+Disponible"; }} 
              />
            </a>
            <h3 style={styles.certTitleStyle}>{displayCert.title}</h3>
            <p style={styles.certDescriptionStyle}>{displayCert.description}</p>
          </div>
        ) : (
          <p style={styles.noCertificatesTextStyle}>No hay constancias disponibles para mostrar.</p> 
        )}
      </div>
    </div>
  );
};

export default ConstanciasSection;
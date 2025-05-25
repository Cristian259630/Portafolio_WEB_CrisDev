import React, { useState } from 'react';

const CertificatesSection = ({ certificates, certIndex, prevCert, nextCert }) => {

  const [isHovered, setIsHovered] = useState(false);
  
  const [isButtonHoveredLeft, setIsButtonHoveredLeft] = useState(false);
  const [isButtonHoveredRight, setIsButtonHoveredRight] = useState(false);

  // Datos fijos de ejemplo con URL (se usarán si no se pasan 'certificates' por props)
  const fixedCertificates = [
    {
      title: "Certificación en React - Platzi",
      image: "https://placehold.co/400x192/ccddeeff/000000?text=React",
      url: "https://platzi.com/certificado/react"
    },
    {
      title: "Curso de Node.js - Udemy",
      image: "https://placehold.co/400x192/ccddeeff/000000?text=Node.js",
      url: "https://udemy.com/certificado/node"
    },
    {
      title: "Certificado en Fundamentos de AWS - Coursera",
      image: "https://placehold.co/400x192/ccddeeff/000000?text=AWS",
      url: "https://coursera.org/certificado/aws"
    },
    {
      title: "Certificado en Fundamentos de AWS - Coursera",
      image: "https://placehold.co/400x192/ccddeeff/000000?text=AWS",
      url: "https://coursera.org/certificado/aws"
    },
  ];

  // Determina qué conjunto de certificados usar: los pasados por prop o los fijos
  const currentCertificates = certificates && certificates.length > 0 ? certificates : fixedCertificates;
  // Asegura que el índice actual no exceda el número de certificados disponibles
  const currentCertIndex = Math.min(certIndex, currentCertificates.length - 1);
  const displayCert = currentCertificates[currentCertIndex];

  const styles = {
    cardStyle: {
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: '#222', // Fondo oscuro
      maxWidth: '48rem', 
      margin: '0 auto',
      boxSizing: 'border-box',
      position: 'relative',
      border: '3px solid #0000FF', 
     
      transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    },
    // Definición de los estilos para el hover de la tarjeta
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
      fontFamily: 'Inter, sans-serif',
      textAlign: 'center',
      color: 'yellow'
    },

    buttonStyle: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#e5e7eb', 
      padding: '0.5rem', 
      borderRadius: '9999px', // Muy redondeado (círculo)
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
      transition: 'background-color 0.2s ease-in-out', // Transición para el hover del botón
    },

    buttonHoverStyle: {
      backgroundColor: '#d1d5db' 
    },

    imageContainerStyle: {
      textAlign: 'center'
    },

    imageStyle: {
      width: '100%',
      height: '32rem', 
      objectFit: 'contain', // Asegura que la imagen se ajuste sin recortarse
      marginBottom: '1rem' 
    },

    certificateTextStyle: {
      fontSize: '1.25rem',
      fontWeight: '500',
      marginBottom: '0.5rem', 
      fontFamily: 'Inter, sans-serif',
      color: 'lightblue', 
      textDecoration: 'none' // Quita el subrayado del enlace
    },

    noCertificatesTextStyle: {
      color: '#6b7280', 
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif'
    }
  };

  return (
    <div
      // Aplica los estilos condicionales y manejadores de evento de hover a la tarjeta principal
      style={isHovered ? { ...styles.cardStyle, ...styles.cardStyleHover } : styles.cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.contentPaddingStyle}> 
        <h2 style={styles.titleStyle}>Certificados</h2> 

       
        {currentCertificates.length > 1 && (
          <>
            <button
              onClick={prevCert}
              style={{
                ...styles.buttonStyle, 
                left: '1rem',
                backgroundColor: isButtonHoveredLeft ? styles.buttonHoverStyle.backgroundColor : styles.buttonStyle.backgroundColor
              }}
              onMouseEnter={() => setIsButtonHoveredLeft(true)}
              onMouseLeave={() => setIsButtonHoveredLeft(false)}
            >
              ←
            </button>
            <button
              onClick={nextCert}
              style={{
                ...styles.buttonStyle, 
                right: '1rem',
                backgroundColor: isButtonHoveredRight ? styles.buttonHoverStyle.backgroundColor : styles.buttonStyle.backgroundColor
              }}
              onMouseEnter={() => setIsButtonHoveredRight(true)}
              onMouseLeave={() => setIsButtonHoveredRight(false)}
            >
              →
            </button>
          </>
        )}

        <div style={styles.imageContainerStyle}> 
          {currentCertificates.length > 0 ? (
            <a
              href={displayCert.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.certificateTextStyle} 
            >
              <img src={displayCert.image} alt="Certificado" style={styles.imageStyle} /> 
              <h3 style={styles.certificateTextStyle}>{displayCert.title}</h3> 
            </a>
          ) : (
            <>
             
              <img src="https://via.placeholder.com/600x400/555555/FFFFFF?text=No+Certificados" alt="Sin certificados" style={styles.imageStyle} /> 
              <p style={styles.noCertificatesTextStyle}>No hay certificados disponibles.</p> 
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
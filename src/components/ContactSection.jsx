import React, { useState } from 'react'; 

const ContactSection = ({ content }) => {
  
  const fixedContent = {
    email: "ctellez18@alumnos.uaq.mx", 
    phone: "+52 4481273822",    
    linkedin: "https://www.linkedin.com/in/cristian-fernando-developer/" 
  };

  
  function parseContactString(str) {
    const emailMatch = str.match(/Correo:\s*([^\s|]+)/);
    const phoneMatch = str.match(/Tel:\s*([^\s|]+)/);
    const linkedinMatch = str.match(/LinkedIn:\s*([^\s|]+)/);

    return {
      email: emailMatch ? emailMatch[1].trim() : undefined,
      phone: phoneMatch ? phoneMatch[1].trim() : undefined,
      linkedin: linkedinMatch ? linkedinMatch[1].trim() : undefined
    };
  }

  // Se usa el contenido fijo si la prop 'content' no se pasa o no es un objeto.
  const parsedContent = typeof content === 'string' ? parseContactString(content) : content;
  const currentContent = parsedContent && (parsedContent.email || parsedContent.phone || parsedContent.linkedin)
    ? parsedContent
    : fixedContent;


  const styles = { 
    cardStyle: {
      borderRadius: '1rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
      backgroundColor: '#222',
      maxWidth: '48rem', 
      margin: '0 auto',
      boxSizing: 'border-box',
      border: '3px solid blue',
      transition: 'all 0.3s ease-in-out', 
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
    contactListStyle: {
      display: 'flex',
      flexDirection: 'column', 
      gap: '0.75rem', 
      alignItems: 'center', 
    },
    contactItemStyle: {
      display: 'flex',
      alignItems: 'center', 
      gap: '0.75rem', 
      fontSize: '1rem', 
      color: 'lightblue', 
      fontFamily: 'Inter, sans-serif',
      textDecoration: 'none', 
      fontWeight: '500', 
      padding: '0.5rem 1rem', 
      borderRadius: '0.5rem',
      transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease', // Transición para el hover
      width: 'fit-content', // Ajusta el ancho al contenido
      
    },
    
    contactItemHoverStyle: {
      backgroundColor: '#333', 
      color: '#007FFF', 
      transform: 'translateY(-2px) scale(1.02)', 
      
    },
    iconStyle: {
      width: '1.5rem',
      height: '1.5rem', 
      fill: 'currentColor', // Usará el color del texto del contactItemStyle
      transition: 'fill 0.3s ease',
    },
    iconHoverStyle: {
        fill: '#007FFF', 
    },
    noContactTextStyle: {
      color: '#6b7280', 
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
    },
  };

  return (
    <div style={styles.cardStyle}>
      <div style={styles.contentPaddingStyle}>
        <h2 style={styles.titleStyle}>Contacto</h2>
        {currentContent && (currentContent.email || currentContent.phone || currentContent.linkedin) ? (
          <div style={styles.contactListStyle}>
            {currentContent.email && (
              <ContactItem
                href={`mailto:${currentContent.email}`}
                text={currentContent.email}
                iconPath="M2.003 5.884L10 9.882l-7.997 4.004V5.884zM12 11.882L20.003 7.884V18.116L12 14.118v-2.236zM20.003 5.884L12 9.882l8.003-4V5.884zM22 6.884L12 12.882 2 6.884V5.884L12 1.882l10 4V6.884z"
                styles={styles}
              />
            )}
            {currentContent.phone && (
              <ContactItem
                href={`tel:${currentContent.phone}`}
                text={currentContent.phone}
                iconPath="M22 16.929V19c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM18 16.929V19c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM14 16.929V19c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM10 16.929V19c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM6 16.929V19c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM22 10.929V13c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM18 10.929V13c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM14 10.929V13c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM10 10.929V13c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM6 10.929V13c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM22 4.929V7c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM18 4.929V7c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM14 4.929V7c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM10 4.929V7c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2zM6 4.929V7c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2z"
                styles={styles}
              />
            )}
            {currentContent.linkedin && (
              <ContactItem
                href={currentContent.linkedin}
                text={currentContent.linkedin.replace(/(https?:\/\/)?(www\.)?linkedin\.com\/in\//, '')}
                iconPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                isExternal={true}
                styles={styles}
              />
            )}
          </div>
        ) : (
          <p style={styles.noContactTextStyle}>No hay información de contacto disponible.</p>
        )}
      </div>
    </div>
  );
};

const ContactItem = ({ href, text, iconPath, isExternal, styles }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={isHovered ? { ...styles.contactItemStyle, ...styles.contactItemHoverStyle } : styles.contactItemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        style={isHovered ? { ...styles.iconStyle, ...styles.iconHoverStyle } : styles.iconStyle}
        viewBox="0 0 24 24"
      >
        <path d={iconPath} />
      </svg>
      {text}
    </a>
  );
};

export default ContactSection;
import React, { useState, useEffect } from 'react';
import './HobbiesBadge.css'; 

const HobbiesBadge = ({ hobbies }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fixedHobbies = [
    {
      name: "Lucha Libre",
      image: "https://pa1.aminoapps.com/6553/3845fbe51175cdde67de882f89002d5148277f74_00.gif"
    },
    {
      name: "Videojuegos",
      image: "https://media.tenor.com/NJ78WdYz348AAAAM/gameboy-inception.gif"
    },
    {
      name: "Cars",
      image: "https://media.tenor.com/QQreqUtZvZMAAAAM/mcqueen.gif"
    },
    {
      name: "Formula 1",
      image: "https://media.tenor.com/O3N16MbyHLkAAAAM/yes-baby-yes.gif"
    },
    {
      name: "futbol",
      image: "https://i.gifer.com/QwMf.gif"
    },
    {
      name: "Dragon Ball",
      image: "https://i.pinimg.com/originals/f0/66/57/f06657ea7a56f1b397a340a2c789a19f.gif"
    }
  ];

  const currentHobbies = hobbies && hobbies.length > 0 ? hobbies : fixedHobbies;

  useEffect(() => {
    if (currentHobbies.length > 0 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % currentHobbies.length
        );
      }, 5000); // cambia de imagen cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [currentHobbies, isHovered]);

  const currentHobby = currentHobbies[currentIndex];

  return (
    <div
      
      className={`hobbies-badge-container ${isHovered ? 'hobbies-badge-container-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="hobbies-badge-title">Mis Aficiones</span>
      {currentHobbies.length > 0 ? (
        <div className="hobbies-badge-slider">
          <img src={currentHobby.image} alt={currentHobby.name} className="hobbies-badge-image" />
          <span className="hobbies-badge-name">{currentHobby.name}</span>
        </div>
      ) : (
        <p className="hobbies-badge-no-hobbies-text">No hay aficiones para mostrar.</p>
      )}
    </div>
  );
};

export default HobbiesBadge;
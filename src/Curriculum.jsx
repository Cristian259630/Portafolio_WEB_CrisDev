import React, { useState } from 'react';

import './Curriculum.css'; // Opcional: si vas a añadir estilos específicos
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Repositories from './components/Repositories';
import LearningBadge from './components/LearningBadge';
import EducationSection from './components/EducationSection';
import HobbiesBadge from './components/HobbiesBadge';
import ConstanciasSection from './components/ConstanciasSection';
import ClockBadge from './components/ClockBadge';
import LanguageBadge from './components/LanguageBadge';




const Curriculum = () => {

  const [certIndex, setCertIndex] = useState(0);


  const certificates = [
  {
    title: "Responsive Web Design - FreeCodeCamp",
    image: "https://i.ibb.co/72wpGbC/free-Codecamp.png",
    url: "https://www.freecodecamp.org/certification/Cris18_Developer/responsive-web-design"
    
  },
  {
    title: "College Algebra with Python - FreeCodeCamp",
    image: "https://i.ibb.co/DPLcQfFN/College-Algebra-cert.png",
    url:"https://www.freecodecamp.org/certification/Cris18_Developer/college-algebra-with-python-v8"
  },
  {
    title: "JavaScript - SoloLearn",
    image: "https://i.ibb.co/CVG898T/1730293137989.jpg",
    url: "https://i.ibb.co/CVG898T/1730293137989.jpg"
  },
  {
    title: "Selenium Webdriver - UAQ",
    image: "https://i.ibb.co/tdhr0pt/selenium.png"
  }

];


  const prevCert = () => {
    setCertIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const nextCert = () => {
    setCertIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => {
  setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
  setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };




const projects = [
  {
      name: "Simulador FIFA Club World Cup",
      description:
        "Una app diseñada para simular el torneo de clubes que se realizara este año",
      image: "https://images.mlssoccer.com/image/private/t_q-best/mls/s9msikvatngfsqngtkrz.jpg",
      techs: ["React","Vercel", "Github"],
      url:"https://api-cars-bycris.netlify.app"
  
    },
   {
      name: "AutoApp",
      description:
        "Una app con backend en Python y frontend en React, desplegada en Clever Cloud.",
      image: "https://i.ibb.co/RTbc6D1M/Apicars.png",
      techs: ["React","Express JS", "Tailwind", "Netlify", "Github"],
      url:"https://api-cars-bycris.netlify.app"
  
    },
    {
      name: "Educalia",
      description:
        "Una app con backend en Python y frontend en React, desplegada en Clever Cloud.",
      image: "https://i.ibb.co/hLPxgZW/Educalia.png",
      techs: ["React", "Tailwind", "Netlify", "Github"],
      url: "https://educalia.netlify.app"
    },
    {
      name: "Gestor de Tareas",
      description:
        "Organizador de tareas con funcionalidades de arrastrar y soltar.",
      image: "https://i.ibb.co/PZBBc2mS/Gestordetareas.png",
      techs: ["Python", "React", "Html", "CSS", "JavaScript", "CleverCloud", "Render", "Github" ],
      url:"https://gestor-tareasbycristian.netlify.app"
    },
    
  ];


  

 

   
  

return (
  <div className="curriculum-container">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

    <ClockBadge />
    <LanguageBadge />
    <LearningBadge />
    <div></div>
    <HobbiesBadge />
    <ProfileSection />
    <EducationSection />
    <ExperienceSection />
    <div className='espacio' style={{ height: 38 }}></div>
    <CertificatesSection
      certificates={certificates}
      certIndex={certIndex}
      prevCert={prevCert}
      nextCert={nextCert}
    />
    <ConstanciasSection />
    <div className='espacio' style={{ height: 38 }}></div>
     <ProjectsSection
        projects={projects}
        projectIndex={projectIndex}
        prevProject={prevProject}
        nextProject={nextProject}
     />
    
    <Repositories/>
    <SkillsSection />
    <div className='espacio' style={{ height: 25 }}></div>
    <ContactSection />
  </div>
);
}



export default Curriculum;

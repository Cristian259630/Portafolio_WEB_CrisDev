import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
        <ProfileSection/>
      <div className='espacio' style={{height:25}}></div>
      <ExperienceSection/>
      <div className='espacio' style={{height:25}}></div>
      <CertificatesSection/>
      <div className='espacio' style={{height:25}}></div>
      <ProjectsSection/>
      <div className='espacio' style={{height:25}}></div>
      
      </div> 

      <div></div>

      
    </>
  )
}

export default App

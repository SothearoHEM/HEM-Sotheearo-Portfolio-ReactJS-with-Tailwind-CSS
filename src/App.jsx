import React from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Volunteer from './components/Volunteer.jsx' 
import Courses from './components/Courses.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className='font-sans'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Volunteer />
      <Courses />
      <Contact />
    </div>
  )
}

export default App

import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import CareerObjective from './components/CareerObjective'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import PersonalInfo from './components/PersonalInfo'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <CareerObjective />
        <Skills />
        <Projects />
        <Education />
        <PersonalInfo />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

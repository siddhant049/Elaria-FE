import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import AboutTeam from './components/AboutTeam'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Home from './components/homepage'


function App() {
  return (
    <div className="app">
      <Home />
      {/* <Hero /> */}
      {/* <main id="main-content">
        <Services />
        <AboutTeam />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer /> */}
    </div>
  )
}

export default App

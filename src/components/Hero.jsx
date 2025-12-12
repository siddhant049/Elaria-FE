import React, { useState } from 'react'

export default function Hero() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="site-header">
        <div className="site-inner header-inner">
          <div className="logo-placeholder" aria-label="Elaria logo placeholder">Elaria</div>
          <button
            className="nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <nav id="primary-navigation" className={`nav ${open ? 'open' : ''}`}>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="site-inner">
          <div className="hero-inner">
            <h1 className="brand">Elaria Esthetique</h1>
            <p className="tagline">Be Beautiful. Be Elaria</p>
            <p className="lead">Aesthetic center offering personalised skin, hair and wellness treatments tailored to your needs.</p>
            <div className="hero-cta">
              <a className="btn primary" href="#services">Explore Services</a>
              <a className="btn ghost" href="#contact">Book a Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

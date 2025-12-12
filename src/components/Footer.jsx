import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-inner footer-inner">
        <div className="footer-col">
          <h4>Elaria Esthetique</h4>
          <p className="muted">Be Beautiful. Be Elaria</p>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <p className="muted">Email: hello@elaria.example</p>
          <p className="muted">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="site-inner copyright">© {new Date().getFullYear()} Elaria Esthetique</div>
    </footer>
  )
}

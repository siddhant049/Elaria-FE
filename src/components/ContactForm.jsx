import React, { useState } from 'react'
import { IconMail } from './Icons'

export default function ContactForm(){
  const [status, setStatus] = useState(null)

  // NOTE: replace the action URL with your Formspree endpoint (e.g. https://formspree.io/f/your-id)
  const FORM_ACTION = 'https://formspree.io/f/YOUR_FORM_ID'

  return (
    <section aria-labelledby="contact-title" className="contact">
      <div className="site-inner">
        <h2 id="contact-title">Get in touch / Book</h2>

        <div className="contact-grid">
          <form className="contact-form" action={FORM_ACTION} method="POST" onSubmit={() => setStatus('sending')}>
            <label>Full name<input name="name" type="text" required /></label>
            <label>Email address<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" type="tel" /></label>
            <label>Message<textarea name="message" rows="4" required></textarea></label>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button className="btn primary" type="submit">Send message</button>
              <div className="muted">Or email us directly at <a href="mailto:hello@elaria.example">hello@elaria.example</a></div>
            </div>
            {status && <div className="muted">{status}</div>}
          </form>

          <aside className="contact-info">
            <div className="contact-card">
              <div className="contact-icon"><IconMail/></div>
              <div>
                <strong>Email</strong>
                <div className="muted">hello@elaria.example</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div>
                <strong>Phone</strong>
                <div className="muted">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Location</strong>
                <div className="muted">City, State — Clinic address</div>
              </div>
            </div>

            <div className="map-embed-wrapper" aria-hidden>
              <iframe
                className="map-embed"
                title="Elaria Esthetique location"
                src="https://maps.google.com/maps?q=Elaria%20Esthetique&amp;z=15&amp;output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

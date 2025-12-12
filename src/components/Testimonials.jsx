import React from 'react'
import { IconQuote } from './Icons'

const TESTIMONIALS = [
  { id: 1, name: 'Anita Kapoor', text: 'Elaria transformed my skin — the team is professional and caring.' },
  { id: 2, name: 'Rahul Mehta', text: 'Highly recommended. Visible results and great aftercare.' },
  { id: 3, name: 'Priya Sharma', text: 'Comfortable clinic and expert practitioners. Loved my experience.' },
]

export default function Testimonials(){
  return (
    <section aria-labelledby="testimonials-title" className="testimonials">
      <div className="site-inner">
        <h2 id="testimonials-title">What our clients say</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <blockquote key={t.id} className="testimonial-card">
              <div className="quote-icon"><IconQuote/></div>
              <p className="testimonial-text">{t.text}</p>
              <footer className="testimonial-author">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

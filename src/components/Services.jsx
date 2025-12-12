import React from 'react'

const SERVICES = [
  {
    id: 'skin',
    title: 'Skin Treatments',
    desc: 'Advanced facials, peels and skin rejuvenation to restore glow and texture.',
    icon: 'skin',
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    desc: 'Nourishing therapies and clinical treatments for hair strength and shine.',
    icon: 'hair',
  },
  {
    id: 'laser',
    title: 'Laser',
    desc: 'Precision laser treatments for pigmentation, resurfacing and more.',
    icon: 'laser',
  },
  {
    id: 'ayurveda',
    title: 'Ayurveda',
    desc: 'Holistic Ayurvedic therapies and consultations for balance and wellness.',
    icon: 'ayurveda',
  },
  {
    id: 'transplant',
    title: 'Hair Transplant',
    desc: 'State-of-the-art hair transplant procedures with natural results.',
    icon: 'transplant',
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Removal',
    desc: 'Long-lasting hair reduction using safe, effective laser systems.',
    icon: 'laser-hair',
  },
  {
    id: 'slimming',
    title: 'Slimming',
    desc: 'Body contouring and slimming programs tailored to your goals.',
    icon: 'slimming',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="site-inner">
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">Tailored treatments to bring out your best self.</p>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.id} aria-labelledby={s.id}>
              <div className="service-icon" aria-hidden>
                {s.icon === 'skin' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9 2 4 4 4 9c0 5 8 11 8 11s8-6 8-11c0-5-5-7-8-7z" stroke="#001b3d" strokeWidth="1.2" fill="white"/></svg>
                )}
                {s.icon === 'hair' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12c0-4 4-8 8-8s8 4 8 8" stroke="#001b3d" strokeWidth="1.2" fill="white"/></svg>
                )}
                {s.icon === 'laser' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="#001b3d" strokeWidth="1.2" fill="white"/></svg>
                )}
                {s.icon === 'ayurveda' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2s6 3 6 8-6 12-6 12S6 13 6 10 12 2 12 2z" stroke="#001b3d" strokeWidth="1.2" fill="white"/></svg>
                )}
                {s.icon === 'transplant' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#001b3d" strokeWidth="1.2" fill="white"/></svg>
                )}
                {s.icon === 'laser-hair' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#001b3d" strokeWidth="1.2" strokeLinecap="round"/></svg>
                )}
                {s.icon === 'slimming' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c2 4 6 6 6 10s-4 6-6 10c-2-4-6-6-6-10s4-6 6-10z" stroke="#001b3d" strokeWidth="1.2" fill="white"/></svg>
                )}
              </div>
              <div>
                <h3 id={s.id}>{s.title}</h3>
                <p>{s.desc}</p>
                <div style={{marginTop:8}}>
                  <a className="btn ghost" href={`#${s.id}`}>Learn more</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

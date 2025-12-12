import React from 'react'
import { IconUser } from './Icons'

const TEAM = [
  { id: 't1', name: 'Dr. S. Kapoor', role: 'Lead Aesthetician' },
  { id: 't2', name: 'Dr. A. Rao', role: 'Hair Specialist' },
  { id: 't3', name: 'Dr. M. Iyer', role: 'Ayurveda Consultant' },
]

export default function AboutTeam(){
  return (
    <section aria-labelledby="about-title" className="about-team">
      <div className="site-inner">
        <div className="about-grid">
          <div>
            <h2 id="about-title">About Elaria Esthetique</h2>
            <p className="muted">Elaria Esthetique provides clinically proven and personalised aesthetic treatments delivered with care. Our team combines medical expertise with a holistic approach to wellness.</p>
          </div>

          <div className="team-grid">
            {TEAM.map(member => (
              <div className="team-card" key={member.id}>
                <div className="team-avatar"><IconUser/></div>
                <div>
                  <strong>{member.name}</strong>
                  <div className="muted">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

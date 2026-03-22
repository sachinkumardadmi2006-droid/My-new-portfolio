import { about, personal } from '../data'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="tag">About me</span>
          <h2 className="about__title">Developer.<br />Problem solver.<br />Lifelong learner.</h2>
          {about.bio.split('\n\n').map((p, i) => (
            <p key={i} className="about__para">{p}</p>
          ))}
          <a className="about__link" href={`mailto:${personal.email}`}>{personal.email} →</a>
        </div>
        <div className="about__right">
          <div className="about__avatar">
            <div className="about__avatar-inner">
              <span>{personal.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="about__avatar-ring" />
          </div>
          <div className="about__stats">
            {about.highlights.map((h) => (
              <div key={h.label} className="about__stat">
                <span className="about__stat-val">{h.value}</span>
                <span className="about__stat-lbl">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
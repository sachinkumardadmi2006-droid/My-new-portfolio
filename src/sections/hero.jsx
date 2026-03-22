import { personal } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__badge anim-fade-up">
          {personal.availableForWork && <span className="hero__dot" />}
          {personal.availableForWork ? 'Available for work' : 'Not available right now'}
        </div>
        <h1 className="hero__title anim-fade-up d1">
          Hi, I'm <em>{personal.name.split(' ')[0]}</em>.<br />
          {personal.role}.
        </h1>
        <p className="hero__sub anim-fade-up d2">{personal.tagline}</p>
        <div className="hero__actions anim-fade-up d3">
          <button className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            See my work
          </button>
          <button className="hero__btn hero__btn--outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in touch →
          </button>
        </div>
        <div className="hero__socials anim-fade-up d4">
          <a href={personal.github} target="_blank" rel="noreferrer" className="hero__social-link">GitHub</a>
          <span className="hero__social-sep">·</span>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero__social-link">LinkedIn</a>
          <span className="hero__social-sep">·</span>
          <a href={personal.twitter} target="_blank" rel="noreferrer" className="hero__social-link">Twitter</a>
          <span className="hero__social-sep">·</span>
          <span className="hero__location">{personal.location}</span>
        </div>
      </div>
      <div className="hero__blob" aria-hidden />
      <div className="hero__scroll anim-fade-in d5">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
import { projects } from '../data'
import './Projects.css'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <span className="tag">Work</span>
        <h2 className="projects__title">Selected Projects</h2>
        <p className="projects__sub">Things I've built that I'm proud of.</p>
        <div className="projects__featured">
          {featured.map((p) => (
            <div key={p.id} className="proj-card proj-card--featured" style={{ '--c': p.color }}>
              <div className="proj-card__top">
                <div className="proj-card__year">{p.year}</div>
                <div className="proj-card__links">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                </div>
              </div>
              <h3 className="proj-card__title">{p.title}</h3>
              <p className="proj-card__desc">{p.description}</p>
              <div className="proj-card__tags">
                {p.tags.map(t => <span key={t} className="proj-card__tag">{t}</span>)}
              </div>
              <div className="proj-card__accent" />
            </div>
          ))}
        </div>
        {rest.length > 0 && (
          <>
            <h3 className="projects__other-title">Other projects</h3>
            <div className="projects__grid">
              {rest.map((p) => (
                <div key={p.id} className="proj-card" style={{ '--c': p.color }}>
                  <div className="proj-card__top">
                    <div className="proj-card__year">{p.year}</div>
                    <div className="proj-card__links">
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer">↗</a>}
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                    </div>
                  </div>
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__desc">{p.description}</p>
                  <div className="proj-card__tags">
                    {p.tags.map(t => <span key={t} className="proj-card__tag">{t}</span>)}
                  </div>
                  <div className="proj-card__accent" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
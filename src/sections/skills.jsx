import { skills } from '../data'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <span className="tag">Skills</span>
        <h2 className="skills__title">What I work with</h2>
        <p className="skills__sub">Technologies and tools I use to bring ideas to life.</p>
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__cat">{group.category}</h3>
              <div className="skills__items">
                {group.items.map((skill) => (
                  <span key={skill} className="skills__item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
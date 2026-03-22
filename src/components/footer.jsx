import { personal } from '../data'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">{personal.name.split(' ')[0]}<span>.</span></div>
        <p className="footer__copy">© {year} {personal.name} · Built with React + Vite</p>
        <div className="footer__links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
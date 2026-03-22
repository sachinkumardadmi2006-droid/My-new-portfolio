import { useState, useEffect } from 'react'
import { personal } from '../data'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a className="navbar__logo" href="/">
          {personal.name.split(' ')[0]}<span>.</span>
        </a>
        <ul className="navbar__links">
          {links.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
        </ul>
        <a className="navbar__cta" href={personal.resumeUrl} target="_blank" rel="noreferrer">
          Resume ↗
        </a>
        <button className={`navbar__burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)}>{l}</button>
        ))}
      </div>
    </nav>
  )
}
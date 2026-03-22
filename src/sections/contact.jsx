import { useState } from 'react'
import { personal } from '../data'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // Connect Formspree: change action to https://formspree.io/f/YOUR_ID
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <span className="tag">Contact</span>
          <h2 className="contact__title">Let's build something great together.</h2>
          <p className="contact__sub">I'm open to freelance projects, full-time roles, and exciting collaborations. Drop me a message and I'll get back within 24 hours.</p>
          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="contact__link-row">
              <span className="contact__link-icon">✉</span><span>{personal.email}</span>
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="contact__link-row">
              <span className="contact__link-icon">⌥</span><span>github.com/yourname</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact__link-row">
              <span className="contact__link-icon">in</span><span>linkedin.com/in/yourname</span>
            </a>
          </div>
        </div>
        <div className="contact__right">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll reply within 24 hours.</p>
              <button onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handle} required />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} required />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handle} required />
              </div>
              <button type="submit" className="contact__submit">Send message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
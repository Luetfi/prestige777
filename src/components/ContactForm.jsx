import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactForm.css'

const WEB3FORMS_ACCESS_KEY = '59b237bd-3a57-4971-b575-326ee11d10a4'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Bitte geben Sie einen Betreff ein'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein'
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const body = new FormData()
      body.append('access_key', WEB3FORMS_ACCESS_KEY)
      body.append('from_name', 'Prestige 777 Kontaktformular')
      body.append('subject', `Kontaktformular: ${formData.subject}`)
      body.append('name', formData.name)
      body.append('email', formData.email)
      body.append('message', formData.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '', privacy: false })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setSubmitError(data.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      }
    } catch {
      setSubmitError('Verbindungsfehler. Bitte versuchen Sie es später erneut.')
    }

    setIsSubmitting(false)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {isSubmitted && (
        <div className="form-success">
          Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.
        </div>
      )}

      {submitError && (
        <div className="form-error-message">
          {submitError}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
          placeholder="Ihr Name"
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">E-Mail *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder="ihre@email.de"
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="subject">Betreff *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? 'error' : ''}
          placeholder="Betreff Ihrer Nachricht"
        />
        {errors.subject && <span className="form-error">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Nachricht *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          placeholder="Ihre Nachricht an uns..."
          rows="5"
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <div className={`form-group form-group--checkbox${errors.privacy ? ' has-error' : ''}`}>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className={errors.privacy ? 'error' : ''}
          />
          <span className="checkbox-custom" />
          <span className="checkbox-text">
            Ich habe die <Link to="/datenschutz" target="_blank">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zu. *
          </span>
        </label>
        {errors.privacy && <span className="form-error">{errors.privacy}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  )
}

export default ContactForm

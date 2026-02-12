import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import FloatingElements from '../components/FloatingElements'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import { useCookieConsentContext } from '../hooks/CookieConsentContext'
import './Contact.css'

function Contact() {
  const heroRef = useScrollReveal()
  const infoRef = useStaggerReveal({ staggerMs: 120 })
  const formRef = useScrollReveal()
  const mapRef = useScrollReveal()
  const { hasConsent, saveConsent } = useCookieConsentContext()

  return (
    <div className="contact-page">
      <SEO
        title="Kontakt & Anfahrt – Shisha Bar Remseck"
        description="Kontaktiere die Prestige 777 Shisha Bar in Remseck am Neckar bei Ludwigsburg. Adresse: Neckaraue 5, 71686 Remseck. Telefon: 07146 9928729. Kostenlose Parkplätze vor Ort."
        path="/kontakt"
      />
      <section ref={heroRef} className="contact-hero scroll-reveal reveal-fade-in">
        <div className="container">
          <h1 className="contact-title">
            <span className="glow">Kontakt</span>
          </h1>
          <p className="contact-subtitle">
            Hast du Fragen oder planst eine Veranstaltung? Wir sind für dich da!
          </p>
        </div>
      </section>

      <section className="contact-content">
        <FloatingElements preset="oriental" />
        <div className="container">
          <div className="contact-grid">
            <div ref={infoRef} className="contact-info">
              <div className="info-card scroll-reveal reveal-fade-left">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Telefon</h3>
                  <a href="tel:+4971469928729">07146 9928729</a>
                  <p>Reservierungen telefonisch</p>
                </div>
              </div>

              <div className="info-card scroll-reveal reveal-fade-left">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>E-Mail</h3>
                  <a href="mailto:info@prestige777.de">info@prestige777.de</a>
                  <p>Wir antworten schnellstmöglich</p>
                </div>
              </div>

              <div className="info-card scroll-reveal reveal-fade-left">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Adresse</h3>
                  <p>Neckaraue 5</p>
                  <p>71686 Remseck am Neckar</p>
                </div>
              </div>

              <div className="info-card info-card--parking scroll-reveal reveal-fade-left">
                <div className="info-icon info-icon--parking">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Kostenlose Parkplätze</h3>
                  <p>Direkt vor der Tür verfügbar</p>
                  <p className="parking-hint">Bequem & kostenfrei parken</p>
                </div>
              </div>

              <div className="info-card scroll-reveal reveal-fade-left">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Öffnungszeiten</h3>
                  <ul className="hours-list-compact">
                    <li><span className="hours-c-day">Mo, Di</span><span className="hours-c-time">16:00 — 00:00</span></li>
                    <li><span className="hours-c-day">Mittwoch</span><span className="hours-c-time">16:30 — 00:00</span></li>
                    <li><span className="hours-c-day">Donnerstag</span><span className="hours-c-time">16:00 — 00:00</span></li>
                    <li><span className="hours-c-day">Fr — Sa</span><span className="hours-c-time">16:00 — 03:00</span></li>
                    <li><span className="hours-c-day">Sonntag</span><span className="hours-c-time">16:00 — 00:00</span></li>
                  </ul>
                </div>
              </div>

              <div className="social-links scroll-reveal reveal-fade-left">
                <h3>Folge uns</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/prestige__777/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div ref={formRef} className="contact-form-section scroll-reveal reveal-fade-right">
              <h2>Schreib uns eine Nachricht</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="map-title">So findest du uns</h2>
          <div ref={mapRef} className="map-container scroll-reveal reveal-fade-up">
            {hasConsent('external_media') ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8847689458!2d9.265894!3d48.8644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d5c9c14a3b9d%3A0x8b8b8b8b8b8b8b8b!2sNeckaraue%205%2C%2071686%20Remseck%20am%20Neckar!5e0!3m2!1sde!2sde!4v1699999999999!5m2!1sde!2sde"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prestige 777 Standort"
              ></iframe>
            ) : (
              <div className="map-consent-placeholder">
                <div className="map-consent-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="map-consent-title">Google Maps</p>
                <p className="map-consent-text">
                  Zum Anzeigen der Karte wird eine Verbindung zu Google-Servern hergestellt.
                  Dabei können Daten an Google (auch in die USA) übertragen werden.
                </p>
                <button
                  className="btn btn-primary map-consent-btn"
                  onClick={() => saveConsent({ necessary: true, external_media: true })}
                >
                  Karte laden
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

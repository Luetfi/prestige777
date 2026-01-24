import { Link } from 'react-router-dom'
import EntertainmentCard from '../components/EntertainmentCard'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-text">Prestige</span>
            <span className="hero-title-number glow">777</span>
          </h1>
          <p className="hero-subtitle">
            Deine Premium Shisha Bar mit einzigartiger Atmosphäre
          </p>
          <div className="hero-cta">
            <a href="tel:+4971469928729" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Jetzt Reservieren
            </a>
            <Link to="/menu" className="btn btn-secondary">
              Unsere Karte
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">
            Willkommen bei <span>Prestige 777</span>
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Erlebe die perfekte Kombination aus exquisitem Shisha-Genuss und
                erstklassiger Unterhaltung. Unsere Bar bietet dir eine einzigartige
                Atmosphäre zum Entspannen und Genießen mit Freunden.
              </p>
              <p>
                Bei uns findest du eine große Auswahl an Premium-Shishas, erfrischenden
                Getränken und spannender Entertainment-Möglichkeiten. Egal ob gemütlicher
                Abend oder aufregende Spielnacht - bei Prestige 777 bist du richtig.
              </p>
            </div>
            <div className="about-hours">
              <h3>Öffnungszeiten</h3>
              <ul className="hours-list">
                <li><span>Montag - Donnerstag:</span> 16:00 - 00:00</li>
                <li><span>Freitag - Samstag:</span> 16:00 - 03:00</li>
                <li><span>Sonntag:</span> 16:00 - 00:00</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="section entertainment">
        <div className="container">
          <h2 className="section-title">
            Entertainment & <span>Spiele</span>
          </h2>
          <p className="section-subtitle">
            Mehr als nur Shisha - Erlebe unvergessliche Abende mit unseren Unterhaltungsangeboten
          </p>
          <div className="entertainment-grid">
            <EntertainmentCard
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm2 2h3v2H6V8zm5 0h7v2h-7V8zm-5 4h3v2H6v-2zm5 0h7v2h-7v-2z"/>
                </svg>
              }
              title="Spielautomaten"
              description="Versuche dein Glück an unseren zwei modernen Spielautomaten"
              count={2}
            />
            <EntertainmentCard
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 4H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12zM8 8h3v3H8V8zm0 5h3v3H8v-3zm5-5h3v3h-3V8zm0 5h3v3h-3v-3z"/>
                </svg>
              }
              title="Fun4Four Spieletische"
              description="Interaktive Touchscreen-Spieletische für bis zu 4 Spieler mit verschiedenen Spielen"
              count={2}
            />
            <EntertainmentCard
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
                </svg>
              }
              title="Gesellschaftsspiele"
              description="UNO, Pokerkarten und weitere klassische Spiele für gesellige Runden"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Bereit für einen unvergesslichen Abend?</h2>
            <p>Reserviere jetzt deinen Tisch und sichere dir den besten Platz!</p>
            <div className="cta-actions">
              <a href="tel:+4971469928729" className="btn btn-primary">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                07146 9928729
              </a>
              <Link to="/kontakt" className="btn btn-secondary">
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

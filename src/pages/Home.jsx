import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import EntertainmentCard from '../components/EntertainmentCard'
import Gallery from '../components/Gallery'
import GoogleReviews from '../components/GoogleReviews'
import SmokeEffect from '../components/SmokeEffect'
import FloatingElements from '../components/FloatingElements'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Home.css'

const heroImages = [
  '/prestige1.jpeg',
  '/prestige2.jpeg',
  '/prestige5.jpeg',
  '/prestige8.jpeg',
  '/prestige9.jpeg',
  '/prestige10.jpeg',
  '/prestige11.jpeg',
]

function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImage(prev => (prev + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 4000)
    return () => clearInterval(interval)
  }, [nextImage])
  const aboutHeaderRef = useScrollReveal()
  const aboutShowcaseRef = useScrollReveal()
  const aboutInfoRef = useScrollReveal()
  const entertainmentHeaderRef = useScrollReveal()
  const entertainmentGridRef = useStaggerReveal({ staggerMs: 150 })
  const eventsHeaderRef = useScrollReveal()
  const eventsGridRef = useStaggerReveal({ staggerMs: 120 })
  const eventsCTARef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <div className="home">
      <SEO
        title="Shisha Bar in Remseck bei Ludwigsburg & Stuttgart"
        description="Prestige 777 – Deine Premium Shisha Bar & Lounge in Remseck am Neckar bei Ludwigsburg und Stuttgart. Shisha rauchen, Cocktails, Spielautomaten, Live Sport & Events. 7 Tage geöffnet. Kostenlose Parkplätze. Die beste Hookah Bar der Region."
        path="/"
        keywords="Shisha Bar Ludwigsburg, Shisha Bar Stuttgart, Shisha Bar Remseck, Shisha Lounge, Hookah Bar, Premium Shisha, Shisha rauchen, Cocktail Bar, Shisha Bar in der Nähe, beste Shisha Bar, Prestige 777"
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`hero-slide${index === currentImage ? ' hero-slide--active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
              role="img"
              aria-label={`Prestige 777 Shisha Bar Remseck – Impression ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <SmokeEffect />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">
              <span className="hero-title-decor hero-title-decor--left"></span>
              <span className="hero-title-text">
                {'Prestige'.split('').map((letter, i) => (
                  <span key={i} className="hero-letter" style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
                    {letter}
                  </span>
                ))}
              </span>
              <span className="hero-title-decor hero-title-decor--right"></span>
            </span>
            <span className="hero-title-number-wrap">
              {'777'.split('').map((digit, i) => (
                <span key={i} className="hero-digit" style={{ '--drop-delay': `${0.9 + i * 0.12}s`, '--shimmer-offset': `${i * 0.15}s` }}>
                  {digit}
                </span>
              ))}
            </span>
            <span className="hero-slogan">Let's Make Shisha Great Again</span>
            <span className="hero-title-glow-line"></span>
          </h1>
          <p className="hero-subtitle">
            Deine Premium Shisha Bar in Remseck bei Ludwigsburg
          </p>
          <div className="hero-cta">
            <a href="tel:+4971469928729" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Jetzt Reservieren
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Neckaraue+5,+71686+Remseck+am+Neckar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Anfahrt
            </a>
          </div>
          <div className="hero-parking-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
            </svg>
            Kostenlose Parkplätze direkt vor der Tür
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Hero → About Transition */}
      <div className="section-divider section-divider--hero"></div>

      {/* About Section */}
      <section id="about" className="section about">
        <FloatingElements preset="hookah" />
        <div className="about-bg">
          <div className="about-bg-orb about-bg-orb--1"></div>
          <div className="about-bg-orb about-bg-orb--2"></div>
          <div className="about-bg-orb about-bg-orb--3"></div>
          <div className="about-bg-noise"></div>
        </div>
        <div className="container">
          {/* Decorative header */}
          <div ref={aboutHeaderRef} className="about-header scroll-reveal reveal-fade-up">
            <h2 className="about-title">
              Willkommen bei <span className="about-title-accent">Prestige 777</span> in Remseck
            </h2>
          </div>

          <div className="about-content">
            {/* Left: Image + Features */}
            <div ref={aboutShowcaseRef} className="about-showcase scroll-reveal reveal-fade-left">
              <div className="about-image">
                <img
                  src="/prestige9.jpeg"
                  alt="Prestige 777 Lounge Atmosphäre"
                />
                <div className="about-image-overlay"></div>
                <div className="about-image-frame"></div>
              </div>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                      <path d="M12 2c-1 2-3 3-3 6 0 2 1.5 3 3 3s3-1 3-3c0-3-2-4-3-6z"/>
                      <line x1="12" y1="11" x2="12" y2="16"/>
                      <ellipse cx="12" cy="16" rx="4" ry="1.5"/>
                      <line x1="12" y1="17.5" x2="12" y2="22"/>
                      <ellipse cx="12" cy="22" rx="3" ry="1"/>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">Premium Shishas</span>
                    <span className="about-feature-sub">Exquisite Auswahl</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                      <path d="M4 18v-5a2 2 0 012-2h12a2 2 0 012 2v5"/>
                      <path d="M2 18v-2a2 2 0 012-2h0v-1a4 4 0 014-4h8a4 4 0 014 4v1h0a2 2 0 012 2v2"/>
                      <line x1="2" y1="18" x2="22" y2="18"/>
                      <line x1="4" y1="18" x2="4" y2="21"/>
                      <line x1="20" y1="18" x2="20" y2="21"/>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">Gemütliches Ambiente</span>
                    <span className="about-feature-sub">Lounge-Atmosphäre</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                      <rect x="2" y="8" width="20" height="10" rx="3"/>
                      <circle cx="7" cy="13" r="2"/>
                      <path d="M15 11v4M13 13h4"/>
                      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">Entertainment & Spiele</span>
                    <span className="about-feature-sub">Spielautomaten & mehr</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <text x="12" y="16.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">Kostenlose Parkplätze</span>
                    <span className="about-feature-sub">Direkt vor der Tür</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text + Hours */}
            <div ref={aboutInfoRef} className="about-info scroll-reveal reveal-fade-right">
              <div className="about-text">
                <p className="about-text-lead">
                  Erlebe die perfekte Kombination aus exquisitem Shisha-Genuss und
                  erstklassiger Unterhaltung in Remseck am Neckar — nur wenige Minuten von Ludwigsburg entfernt.
                </p>
                <p>
                  Unsere Shisha Bar bietet dir eine einzigartige
                  Atmosphäre zum Entspannen und Genießen mit Freunden.
                  Bei uns findest du eine große Auswahl an Premium-Shishas, erfrischenden
                  Cocktails und spannende Entertainment-Möglichkeiten. Egal ob gemütlicher
                  Abend oder aufregende Spielnacht — bei Prestige 777 in Remseck bist du richtig.
                </p>
              </div>
              <div className="about-hours">
                <div className="hours-header">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <h3>Öffnungszeiten</h3>
                </div>
                <ul className="hours-list">
                  <li>
                    <span className="hours-day">Mo, Di</span>
                    <span className="hours-divider"></span>
                    <span className="hours-time">16:00 — 00:00</span>
                  </li>
                  <li>
                    <span className="hours-day">Mittwoch</span>
                    <span className="hours-divider"></span>
                    <span className="hours-time">16:30 — 00:00</span>
                  </li>
                  <li>
                    <span className="hours-day">Donnerstag</span>
                    <span className="hours-divider"></span>
                    <span className="hours-time">16:00 — 00:00</span>
                  </li>
                  <li className="hours-highlight">
                    <span className="hours-day">Fr — Sa</span>
                    <span className="hours-divider"></span>
                    <span className="hours-time">16:00 — 03:00</span>
                  </li>
                  <li>
                    <span className="hours-day">Sonntag</span>
                    <span className="hours-divider"></span>
                    <span className="hours-time">16:00 — 00:00</span>
                  </li>
                </ul>
                <div className="hours-badge">
                  <span className="hours-badge-dot"></span>
                  7 Tage die Woche geöffnet
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About → Entertainment Transition */}
      <div className="section-divider section-divider--dark"></div>

      {/* Entertainment Section */}
      <section id="entertainment" className="section entertainment">
        <FloatingElements preset="oriental" />
        <div className="entertainment-bg">
          <div className="entertainment-bg-orb entertainment-bg-orb--1"></div>
          <div className="entertainment-bg-orb entertainment-bg-orb--2"></div>
          <div className="entertainment-bg-grid"></div>
        </div>
        <div className="container">
          <div ref={entertainmentHeaderRef} className="entertainment-header scroll-reveal reveal-fade-up">
            <h2 className="section-title">
              Entertainment & <span>Spiele</span>
            </h2>
            <p className="section-subtitle">
              Erlebe unvergessliche Abende mit unseren Unterhaltungsangeboten in Remseck bei Ludwigsburg
            </p>
          </div>
          <div ref={entertainmentGridRef} className="entertainment-grid">
            <EntertainmentCard
              className="scroll-reveal reveal-fade-up"
              backgroundImage="https://images.unsplash.com/photo-1566563255308-753861417000?w=800&h=600&fit=crop&auto=format"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6z"/>
                  <rect x="7" y="6" width="3" height="4" rx="0.5"/>
                  <rect x="10.5" y="6" width="3" height="4" rx="0.5"/>
                  <rect x="14" y="6" width="3" height="4" rx="0.5"/>
                  <text x="8.5" y="9.2" textAnchor="middle" fontSize="3" fontWeight="bold" fill="var(--bg-primary, #1a1a2e)">7</text>
                  <text x="12" y="9.2" textAnchor="middle" fontSize="3" fontWeight="bold" fill="var(--bg-primary, #1a1a2e)">7</text>
                  <text x="15.5" y="9.2" textAnchor="middle" fontSize="3" fontWeight="bold" fill="var(--bg-primary, #1a1a2e)">7</text>
                  <rect x="9" y="13" width="6" height="3" rx="1.5" opacity="0.7"/>
                  <path d="M7 18h10" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                </svg>
              }
              title="Spielautomaten"
              description="Versuche dein Glück an unseren modernen Spielautomaten — für spannende Momente zwischen den Zügen"
              count={2}
            />
            <EntertainmentCard
              className="scroll-reveal reveal-fade-up"
              backgroundImage="/spieletisch.jpeg"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="6" width="18" height="12" rx="2"/>
                  <rect x="5" y="8" width="14" height="8" rx="1" fill="var(--bg-primary, #1a1a2e)"/>
                  <circle cx="8" cy="12" r="1.2" opacity="0.7"/>
                  <circle cx="12" cy="9.5" r="1.2" opacity="0.7"/>
                  <circle cx="16" cy="12" r="1.2" opacity="0.7"/>
                  <circle cx="12" cy="14.5" r="1.2" opacity="0.7"/>
                  <line x1="6" y1="20" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="20" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="6" y1="6" x2="6" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="6" x2="18" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              }
              title="Fun4Four Spieletische"
              description="Interaktive Touchscreen-Spieletische für bis zu 4 Spieler — von Quiz bis Racing ist alles dabei"
              count={2}
            />
            <EntertainmentCard
              className="scroll-reveal reveal-fade-up"
              backgroundImage="https://images.unsplash.com/photo-1638057628438-4b42313f19e3?w=800&h=600&fit=crop&auto=format"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="3" width="11" height="15" rx="1.5" transform="rotate(-8 7.5 10.5)"/>
                  <rect x="3.5" y="4.5" width="8" height="12" rx="0.5" fill="var(--bg-primary, #1a1a2e)" transform="rotate(-8 7.5 10.5)"/>
                  <text x="5.5" y="9" fontSize="5" fontWeight="bold" transform="rotate(-8 7.5 10.5)">A</text>
                  <text x="6" y="14.5" fontSize="3" transform="rotate(-8 7.5 10.5)">♠</text>
                  <rect x="11" y="3" width="11" height="15" rx="1.5" transform="rotate(8 16.5 10.5)" opacity="0.75"/>
                  <rect x="12.5" y="4.5" width="8" height="12" rx="0.5" fill="var(--bg-primary, #1a1a2e)" transform="rotate(8 16.5 10.5)"/>
                  <text x="14.5" y="9" fontSize="5" fontWeight="bold" fill="currentColor" transform="rotate(8 16.5 10.5)">K</text>
                  <text x="15" y="14.5" fontSize="3" fill="currentColor" transform="rotate(8 16.5 10.5)">♥</text>
                </svg>
              }
              title="Gesellschaftsspiele"
              description="UNO, Pokerkarten und weitere Klassiker — perfekt für gesellige Runden mit Freunden"
            />
            <EntertainmentCard
              className="scroll-reveal reveal-fade-up"
              backgroundImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop&auto=format"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                  <circle cx="12" cy="10.5" r="4" fill="var(--bg-primary, #1a1a2e)"/>
                  <path d="M12 6.5l.9 2.1 2.3.2-1.7 1.5.5 2.2L12 11.3l-2 1.2.5-2.2-1.7-1.5 2.3-.2z" opacity="0.6"/>
                  <path d="M9.2 8.3l-.8-1.1M14.8 8.3l.8-1.1M8 11.5H6.5M16 11.5h1.5M9.5 14l-.7 1.2M14.5 14l.7 1.2" stroke="currentColor" strokeWidth="0.7" fill="none"/>
                </svg>
              }
              title="Live Sport & Fußball"
              description="Erlebe die besten Fußballspiele und Sport-Highlights live auf unseren Bildschirmen — wann wir welches Spiel zeigen, posten wir immer auf Instagram"
            />
          </div>
        </div>
      </section>

      {/* Entertainment → Gallery Transition */}
      <div className="section-divider section-divider--dark"></div>

      {/* Gallery Section */}
      <Gallery />

      {/* Gallery → Events Transition */}
      <div className="section-divider section-divider--secondary"></div>

      {/* Events & Veranstaltungen Section */}
      <section id="events" className="section events">
        <FloatingElements preset="stars" />
        <div className="events-bg">
          <div className="events-bg-collage">
            <div className="events-bg-img" style={{ backgroundImage: 'url(/galerie1.jpeg)' }}></div>
            <div className="events-bg-img" style={{ backgroundImage: 'url(/galerie3.jpeg)' }}></div>
            <div className="events-bg-img" style={{ backgroundImage: 'url(/galerie2.jpeg)' }}></div>
            <div className="events-bg-img" style={{ backgroundImage: 'url(/galerie9.jpeg)' }}></div>
            <div className="events-bg-img" style={{ backgroundImage: 'url(/galerie4.jpeg)' }}></div>
            <div className="events-bg-img" style={{ backgroundImage: 'url(/galerie5.jpeg)' }}></div>
          </div>
          <div className="events-bg-overlay"></div>
        </div>
        <div className="container">
          <div ref={eventsHeaderRef} className="events-header scroll-reveal reveal-fade-up">
            <h2 className="section-title">
              Dein Event bei <span>Prestige 777</span>
            </h2>
            <p className="section-subtitle">
              Feiere deinen besonderen Anlass in unserer Shisha Bar in Remseck — wir machen deinen Abend unvergesslich
            </p>
          </div>

          <div ref={eventsGridRef} className="events-grid">
            <div className="event-card scroll-reveal reveal-fade-up">
              <div className="event-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M12 6c-1.66 0-3 .93-3 2.1 0 .63.3 1.2.8 1.65l1.7 1.4c.3.25.5.6.5 1v.85h-1v2h2v-2h.03c.02-.08.07-.16.07-.24v-1.11c0-.55.22-1.08.6-1.47L15.17 9c.39-.38.58-.87.58-1.4C15.75 6.17 14.08 5.25 12 5.25c-2.08 0-3.75.92-3.75 2.25h1.5c0-.42.75-.75 2.25-.75s2.25.33 2.25.75-.75.75-2.25.75z" opacity="0"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" opacity="0.15"/>
                  <path d="M9 22h6v-2.18c1.17-.48 2.2-1.22 3.02-2.15L20.69 19l1-1.73-2.63-1.52c.37-.97.6-2.01.6-3.1 0-.34-.02-.67-.06-1h3.04l.01-2h-3.05c-.17-.72-.44-1.4-.78-2.03L21.44 6l-1-1.73-2.6 1.5C16.73 4.32 15.09 3.38 13.24 3.08V0h-2v3.08c-1.85.3-3.49 1.24-4.6 2.69L4.04 4.27l-1 1.73 2.62 1.52c-.34.63-.6 1.31-.78 2.03H1.84v2h3.04c-.04.33-.06.66-.06 1 0 1.09.23 2.13.6 3.1L2.79 17.27l1 1.73 2.67-1.54c.82.93 1.85 1.67 3.02 2.15V22h-.48zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  <circle cx="12" cy="12" r="2.5"/>
                </svg>
              </div>
              <h3 className="event-card-title">Geburtstage</h3>
              <p className="event-card-desc">
                Feiere deinen Geburtstag mit Shisha, Drinks und bester Stimmung — wir kümmern uns um alles
              </p>
              <div className="event-card-shine"></div>
            </div>

            <div className="event-card scroll-reveal reveal-fade-up">
              <div className="event-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <h3 className="event-card-title">Firmenfeiern</h3>
              <p className="event-card-desc">
                Teambuilding, Weihnachtsfeier oder After-Work — das ideale Ambiente für dein Firmenevent
              </p>
              <div className="event-card-shine"></div>
            </div>

            <div className="event-card scroll-reveal reveal-fade-up">
              <div className="event-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
              </div>
              <h3 className="event-card-title">JGA & Feiern</h3>
              <p className="event-card-desc">
                Junggesellenabschied oder besonderer Anlass — feiere mit deiner Crew in exklusivem Rahmen
              </p>
              <div className="event-card-shine"></div>
            </div>

            <div className="event-card scroll-reveal reveal-fade-up">
              <div className="event-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                </svg>
              </div>
              <h3 className="event-card-title">Private Events</h3>
              <p className="event-card-desc">
                Individuelle Veranstaltungen ganz nach deinen Wünschen — sprich uns einfach an
              </p>
              <div className="event-card-shine"></div>
            </div>
          </div>

          <div ref={eventsCTARef} className="events-cta scroll-reveal reveal-fade-up">
            <div className="events-cta-inner">
              <div className="events-cta-text">
                <h3>Interesse? Lass uns deinen Abend planen!</h3>
                <p>Kontaktiere uns für eine unverbindliche Beratung und ein individuelles Angebot.</p>
              </div>
              <div className="events-cta-actions">
                <a href="tel:+4971469928729" className="btn btn-primary">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  07146 9928729
                </a>
                <Link to="/kontakt" className="btn btn-secondary">
                  Anfrage senden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events → Reviews Transition */}
      <div className="section-divider section-divider--blend-to-dark"></div>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Reviews → CTA Transition */}
      <div className="section-divider section-divider--secondary"></div>

      {/* CTA Section */}
      <section id="kontakt" className="section cta-section">
        <div className="cta-section-bg"></div>
        <div className="smoke-container smoke-purple smoke-ambient">
          <div className="smoke smoke-1"></div>
          <div className="smoke smoke-3"></div>
          <div className="smoke smoke-5"></div>
        </div>
        <div className="container">
          <div ref={ctaRef} className="cta-card scroll-reveal reveal-fade-up reveal-luxury">
            <h2>Bereit für einen unvergesslichen Abend?</h2>
            <p>Reservierungen sind ausschließlich telefonisch möglich — ruf uns einfach an!</p>
            <div className="cta-actions">
              <a href="tel:+4971469928729" className="btn btn-primary">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Jetzt anrufen: 07146 9928729
              </a>
            </div>
            <p className="cta-hint">Für besondere Feiern, Veranstaltungen oder allgemeine Anfragen kannst du auch unser <Link to="/kontakt">Kontaktformular</Link> nutzen.</p>
            <p className="cta-slogan">Let's Make Shisha Great Again</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

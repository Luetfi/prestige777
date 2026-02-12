import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CookieBanner.css'

function CookieBanner({ showBanner, acceptAll, acceptNecessary, saveConsent, consent }) {
  const [showDetails, setShowDetails] = useState(false)
  const [externalMedia, setExternalMedia] = useState(consent?.external_media ?? false)

  if (!showBanner) return null

  const handleSaveSettings = () => {
    saveConsent({ necessary: true, external_media: externalMedia })
  }

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <div className="cookie-banner-glow"></div>

        <div className="cookie-banner-header">
          <svg className="cookie-icon" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.11.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
          </svg>
          <h3>Cookie-Einstellungen</h3>
        </div>

        <p className="cookie-banner-text">
          Wir nutzen Cookies und externe Dienste, um dir die bestmögliche Erfahrung auf unserer
          Website zu bieten. Einige sind technisch notwendig, andere helfen uns, die Seite zu
          verbessern. Mehr dazu in unserer{' '}
          <Link to="/datenschutz">Datenschutzerklärung</Link>.
        </p>

        {showDetails && (
          <div className="cookie-details">
            <div className="cookie-category">
              <div className="cookie-category-header">
                <div className="cookie-category-info">
                  <span className="cookie-category-name">Notwendig</span>
                  <span className="cookie-category-desc">
                    Technisch erforderliche Cookies für den Betrieb der Website.
                  </span>
                </div>
                <label className="cookie-toggle cookie-toggle--disabled">
                  <input type="checkbox" checked disabled />
                  <span className="cookie-toggle-slider"></span>
                  <span className="cookie-toggle-label">Immer aktiv</span>
                </label>
              </div>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <div className="cookie-category-info">
                  <span className="cookie-category-name">Externe Medien</span>
                  <span className="cookie-category-desc">
                    Inhalte von externen Diensten wie Google Maps werden erst nach Zustimmung geladen.
                    Dabei können Daten an Drittanbieter (auch in die USA) übertragen werden.
                  </span>
                </div>
                <label className="cookie-toggle">
                  <input
                    type="checkbox"
                    checked={externalMedia}
                    onChange={(e) => setExternalMedia(e.target.checked)}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn--accept" onClick={acceptAll}>
            Alle akzeptieren
          </button>
          <button className="cookie-btn cookie-btn--necessary" onClick={acceptNecessary}>
            Nur notwendige
          </button>
          {showDetails ? (
            <button className="cookie-btn cookie-btn--settings" onClick={handleSaveSettings}>
              Auswahl speichern
            </button>
          ) : (
            <button className="cookie-btn cookie-btn--settings" onClick={() => setShowDetails(true)}>
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

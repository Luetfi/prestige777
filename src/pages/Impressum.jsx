import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './LegalPage.css'

function Impressum() {
  return (
    <div className="legal-page">
      <SEO
        title="Impressum"
        description="Impressum der Prestige 777 Shisha Bar in Remseck am Neckar. Angaben gemäß § 5 DDG."
        path="/impressum"
        noindex
      />
      <section className="legal-hero">
        <div className="container">
          <h1 className="legal-title">
            <span className="glow">Impressum</span>
          </h1>
          <p className="legal-subtitle">Angaben gemäß § 5 DDG</p>
        </div>
      </section>

      <div className="legal-content">
        <section className="legal-section">
          <h2>Anbieter</h2>
          <div className="legal-card">
            <p>
              <strong>Prestige 777</strong><br />
              Inhaber: Yunus Alkol<br />
              Neckaraue 5<br />
              71686 Remseck am Neckar
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Kontakt</h2>
          <div className="legal-card">
            <p>
              <strong>Telefon:</strong> <a href="tel:+4971469928729">07146 9928729</a><br />
              <strong>E-Mail:</strong> <a href="mailto:info@prestige777.de">info@prestige777.de</a>
            </p>
          </div>
        </section>

<section className="legal-section">
          <h2>Zuständige Aufsichtsbehörde</h2>
          <p>
            Stadt Remseck am Neckar<br />
            Ordnungsamt<br />
            Fellbacher Straße 2<br />
            71686 Remseck am Neckar
          </p>
        </section>

        <section className="legal-section">
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Yunus Alkol<br />
            Neckaraue 5<br />
            71686 Remseck am Neckar
          </p>
        </section>

        <section className="legal-section">
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="legal-section">
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </section>

        <section className="legal-section">
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
        </section>

        <section className="legal-section">
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <div className="legal-back">
          <Link to="/">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Impressum

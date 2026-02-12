import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './LegalPage.css'

function Datenschutz() {
  return (
    <div className="legal-page">
      <SEO
        title="Datenschutz"
        description="Datenschutzerklärung der Prestige 777 Shisha Bar in Remseck am Neckar gemäß DSGVO."
        path="/datenschutz"
        noindex
      />
      <section className="legal-hero">
        <div className="container">
          <h1 className="legal-title">
            <span className="glow">Datenschutz</span>
          </h1>
          <p className="legal-subtitle">Datenschutzerklärung gemäß DSGVO</p>
        </div>
      </section>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten
            werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Verantwortlicher</h2>
          <div className="legal-card">
            <p>
              <strong>Prestige 777</strong><br />
              Inhaber: Yunus Alkol<br />
              Neckaraue 5<br />
              71686 Remseck am Neckar<br /><br />
              Telefon: <a href="tel:+4971469928729">07146 9928729</a><br />
              E-Mail: <a href="mailto:info@prestige777.de">info@prestige777.de</a>
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>3. Hosting</h2>
          <p>
            Diese Website wird bei dem folgenden Anbieter gehostet:
          </p>
          <div className="legal-card">
            <p>
              <strong>IONOS SE</strong><br />
              Elgendorfer Str. 57<br />
              56410 Montabaur<br /><br />
              Weitere Informationen finden Sie in der Datenschutzerklärung von IONOS:{' '}
              <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer">
                https://www.ionos.de/terms-gtc/datenschutzerklaerung/
              </a>
            </p>
          </div>
          <p>
            Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
            ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO mit dem
            o.g. Anbieter geschlossen, der sicherstellt, dass personenbezogene Daten unserer
            Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
            SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in
            Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
            übermitteln, nicht von Dritten mitgelesen werden.
          </p>

          <h3>Widerrufsrecht bei Einwilligungen</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3>Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h3>
          <p>
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
            gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Die jeweilige
            Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung.
          </p>

          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
            Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <div className="legal-card">
            <p>
              <strong>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</strong><br />
              Lautenschlagerstraße 20<br />
              70173 Stuttgart<br /><br />
              Telefon: 0711/615541-0<br />
              E-Mail: poststelle@lfdi.bwl.de<br />
              Website:{' '}
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
                https://www.baden-wuerttemberg.datenschutz.de
              </a>
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)</li>
            <li>Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
            <li>Der Datenverarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Datenerfassung auf dieser Website</h2>

          <h3>Cookies</h3>
          <p>
            Unsere Website verwendet sogenannte „Cookies". Cookies sind kleine Datenpakete und richten
            auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer
            Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
          <p>
            Wir verwenden auf dieser Website folgende Arten von Cookies:
          </p>
          <ul>
            <li>
              <strong>Technisch notwendige Cookies:</strong> Diese sind erforderlich, um die Grundfunktionen
              der Website sicherzustellen (z.B. Speicherung Ihrer Cookie-Einstellungen). Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </li>
          </ul>
          <p>
            Cookies von Drittanbietern (z.B. Google Maps) werden erst nach Ihrer ausdrücklichen Einwilligung
            gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit über unseren
            Cookie-Banner widerrufen.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden
            und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder
            generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers
            aktivieren.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            <strong>Speicherdauer:</strong> Die Server-Log-Dateien werden nach spätestens 30 Tagen
            automatisch gelöscht.
          </p>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            <strong>Speicherdauer:</strong> Die von Ihnen im Kontaktformular eingegebenen Daten
            verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
            widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener
            Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Externe Dienste und Drittanbieter</h2>

          <h3>Google Maps</h3>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
            („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Google Maps wird erst nach Ihrer ausdrücklichen Einwilligung geladen (2-Klick-Lösung).
            Vor der Einwilligung werden keine Daten an Google übertragen.
          </p>
          <p>
            Nach Erteilung der Einwilligung ist es notwendig, Ihre IP-Adresse zu speichern.
            Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen
            und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
            Datenübertragung.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
            lit. a DSGVO. Sie können Ihre Einwilligung jederzeit über den Cookie-Banner widerrufen.
          </p>
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
            von Google:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Datenübermittlung in Drittländer</h2>
          <p>
            Soweit wir Dienste einsetzen, die Daten in die USA oder andere Drittländer übertragen
            (z.B. Google Maps), geschieht dies auf Grundlage des EU-US Data Privacy Framework (DPF)
            gemäß Art. 45 DSGVO, sofern der Drittanbieter unter dem DPF zertifiziert ist, oder auf
            Grundlage von Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.
          </p>
          <p>
            Die Übermittlung erfolgt nur, wenn Sie zuvor Ihre Einwilligung über unseren Cookie-Banner
            erteilt haben (Art. 6 Abs. 1 lit. a DSGVO, Art. 49 Abs. 1 lit. a DSGVO).
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Änderung dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
            aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
            in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
          </p>
          <p>
            <strong>Stand:</strong> Februar 2026
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

export default Datenschutz

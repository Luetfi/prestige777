import SEO from '../components/SEO'
import Gallery from '../components/Gallery'
import FloatingElements from '../components/FloatingElements'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Galerie.css'

function Galerie() {
  const heroRef = useScrollReveal()

  return (
    <div className="galerie-page">
      <SEO
        title="Galerie – Bilder & Fotos unserer Shisha Lounge"
        description="Bilder und Fotos aus der Prestige 777 Shisha Bar & Lounge in Remseck bei Ludwigsburg und Stuttgart. Erlebe unsere einzigartige Atmosphäre, den Lounge-Bereich, Cocktails und Events in unserer Shisha Bar."
        path="/galerie"
        keywords="Shisha Bar Bilder, Shisha Lounge Fotos, Prestige 777 Galerie, Shisha Bar Remseck Bilder, Hookah Bar Fotos Ludwigsburg"
      />
      <section ref={heroRef} className="galerie-hero scroll-reveal reveal-fade-in">
        <div className="container">
          <h1 className="galerie-title">
            <span className="glow">Galerie</span>
          </h1>
          <p className="galerie-subtitle">
            Einblicke in unsere einzigartige Shisha Bar Atmosphäre und unvergessliche Momente
          </p>
        </div>
      </section>

      <div className="galerie-gallery-wrap">
        <FloatingElements preset="gallery" />
        <Gallery mode="grid" />
      </div>
    </div>
  )
}

export default Galerie

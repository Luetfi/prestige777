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
        title="Galerie – Bilder aus unserer Shisha Bar"
        description="Bilder und Eindrücke aus der Prestige 777 Shisha Bar in Remseck bei Ludwigsburg. Erlebe unsere einzigartige Atmosphäre, Lounge-Bereich und Events."
        path="/galerie"
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

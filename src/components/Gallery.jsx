import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from './Lightbox'
import FloatingElements from './FloatingElements'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Gallery.css'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&h=600&fit=crop',
    alt: 'Premium Shisha',
    caption: 'Unsere Premium Shishas'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop',
    alt: 'Lounge Bereich',
    caption: 'Gemütliche Lounge Atmosphäre'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=800&h=600&fit=crop',
    alt: 'Shisha Rauch',
    caption: 'Aromatischer Shisha-Genuss'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop',
    alt: 'Bar Bereich',
    caption: 'Stylischer Bar Bereich'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
    alt: 'Lounge Ambiente',
    caption: 'Entspannte Atmosphäre'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=800&h=600&fit=crop',
    alt: 'Shisha Kopf',
    caption: 'Handgefertigte Shisha-Köpfe'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    alt: 'Event Nacht',
    caption: 'Unvergessliche Event Nächte'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&h=600&fit=crop',
    alt: 'Getränke',
    caption: 'Erfrischende Cocktails & Drinks'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    alt: 'DJ Nacht',
    caption: 'DJ Nights am Wochenende'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    alt: 'Snacks',
    caption: 'Leckere Snacks & Mezze'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    alt: 'Party Stimmung',
    caption: 'Ausgelassene Stimmung'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=600&fit=crop',
    alt: 'Neon Lights',
    caption: 'Stimmungsvolle Beleuchtung'
  }
]

const AUTO_PLAY_INTERVAL = 2500

function Gallery({ mode = 'carousel' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const headerRef = useScrollReveal()
  const showcaseRef = useScrollReveal()
  const timerRef = useRef(null)
  const thumbStripRef = useRef(null)

  const totalSlides = galleryImages.length

  const goToSlide = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return
    setPrevIndex(currentIndex)
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => {
      setPrevIndex(null)
      setIsTransitioning(false)
    }, 700)
  }, [currentIndex, isTransitioning])

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % totalSlides
    goToSlide(next)
  }, [currentIndex, totalSlides, goToSlide])

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + totalSlides) % totalSlides
    goToSlide(prev)
  }, [currentIndex, totalSlides, goToSlide])

  // Auto-play for carousel
  useEffect(() => {
    if (mode !== 'carousel') return
    timerRef.current = setInterval(goNext, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [goNext, mode])

  // Scroll active thumbnail into view
  useEffect(() => {
    if (mode !== 'carousel' || !thumbStripRef.current) return
    const strip = thumbStripRef.current
    const activeThumb = strip.children[currentIndex]
    if (!activeThumb) return
    const stripRect = strip.getBoundingClientRect()
    const thumbRect = activeThumb.getBoundingClientRect()
    const scrollLeft = activeThumb.offsetLeft - strip.offsetWidth / 2 + activeThumb.offsetWidth / 2
    strip.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [currentIndex, mode])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const lightboxPrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const lightboxNext = () => {
    setLightboxIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const currentImage = galleryImages[currentIndex]
  const prevImage = prevIndex !== null ? galleryImages[prevIndex] : null

  // Grid mode refs (keep as before)
  const gridRef = useStaggerReveal({ staggerMs: 80 })

  return (
    <section id="gallery" className={`section gallery-section ${mode === 'carousel' ? 'gallery-section--showcase' : ''}`}>
      {mode === 'carousel' && (
        <>
          <FloatingElements preset="gallery" />
          <div className="gallery-bg">
            <div className="gallery-bg-orb gallery-bg-orb--1"></div>
            <div className="gallery-bg-orb gallery-bg-orb--2"></div>
            <div className="gallery-bg-orb gallery-bg-orb--3"></div>
          </div>
        </>
      )}

      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="gallery-header scroll-reveal reveal-fade-up">
          <h2 className="section-title">
            Unsere <span>Galerie</span>
          </h2>
          <p className="section-subtitle">
            Einblicke in unsere einzigartige Atmosphäre und unvergessliche Momente
          </p>
        </div>

        {/* ═══ Carousel / Showcase Mode ═══ */}
        {mode === 'carousel' && (
          <div
            ref={showcaseRef}
            className="gallery-showcase scroll-reveal reveal-fade-up"
          >
            {/* Featured Image */}
            <div className="showcase-hero">
              {/* Previous image (fading out) */}
              {prevImage && (
                <div className="showcase-hero-slide showcase-hero-slide--out" key={`out-${prevIndex}`}>
                  <img src={prevImage.src} alt={prevImage.alt} />
                </div>
              )}
              {/* Current image (fading in) */}
              <div
                className={`showcase-hero-slide showcase-hero-slide--in ${isTransitioning ? 'transitioning' : ''}`}
                key={`in-${currentIndex}`}
                onClick={() => openLightbox(currentIndex)}
              >
                <img src={currentImage.src} alt={currentImage.alt} />
              </div>

              {/* Overlays */}
              <div className="showcase-hero-gradient"></div>
              <div className="showcase-hero-frame"></div>
              <div className="showcase-hero-vignette"></div>

              {/* Counter */}
              <div className="showcase-counter">
                <span className="showcase-counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="showcase-counter-sep">/</span>
                <span className="showcase-counter-total">{String(totalSlides).padStart(2, '0')}</span>
              </div>

              {/* Arrows */}
              <button className="showcase-arrow showcase-arrow--prev" onClick={goPrev} aria-label="Vorheriges Bild">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="showcase-arrow showcase-arrow--next" onClick={goNext} aria-label="Nächstes Bild">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Progress */}
              <div className="showcase-progress">
                <div
                  className="showcase-progress-bar"
                  key={`progress-${currentIndex}`}
                  style={{ animationDuration: `${AUTO_PLAY_INTERVAL}ms` }}
                />
              </div>

              {/* Click hint */}
              <div className="showcase-hero-hint">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
                Vollbild
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="showcase-thumbstrip-wrapper">
              <div className="showcase-thumbstrip" ref={thumbStripRef}>
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    className={`showcase-thumb ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={image.caption}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className="showcase-thumb-overlay"></div>
                    {index === currentIndex && <div className="showcase-thumb-glow"></div>}
                  </button>
                ))}
              </div>
              <div className="showcase-thumbstrip-fade showcase-thumbstrip-fade--left"></div>
              <div className="showcase-thumbstrip-fade showcase-thumbstrip-fade--right"></div>
            </div>

            {/* CTA to full gallery */}
            <div className="gallery-cta">
              <Link to="/galerie" className="gallery-cta-link">
                <span>Alle Bilder entdecken</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* ═══ Grid Mode (Galerie Page) — unchanged ═══ */}
        {mode === 'grid' && (
          <div ref={gridRef} className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-grid-item scroll-reveal reveal-fade-up"
                onClick={() => openLightbox(index)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </section>
  )
}

export default Gallery

import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from './Lightbox'
import FloatingElements from './FloatingElements'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Gallery.css'

const galleryImages = [
  // Durchgemischt: Lounge, Shisha, Cocktail, Food, Exterior wechseln sich ab
  { id: 45, src: '/prestige1.jpeg', alt: 'Prestige 777 Lounge', caption: 'Prestige 777' },
  { id: 9, src: '/galerie9.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 1, src: '/galerie1.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 17, src: '/galerie17.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 27, src: '/galerie27.jpeg', alt: 'Prestige 777 Cocktails', caption: 'Prestige 777' },
  { id: 46, src: '/prestige2.jpeg', alt: 'Prestige 777 Lounge', caption: 'Prestige 777' },
  { id: 8, src: '/galerie8.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 4, src: '/galerie4.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 13, src: '/galerie13.jpeg', alt: 'Prestige 777 Food', caption: 'Prestige 777' },
  { id: 15, src: '/galerie15.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 33, src: '/galerie33.jpeg', alt: 'Prestige 777 Cocktails', caption: 'Prestige 777' },
  { id: 49, src: '/prestige9.jpeg', alt: 'Prestige 777 Lounge', caption: 'Prestige 777' },
  { id: 22, src: '/galerie22.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 21, src: '/galerie21.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 28, src: '/galerie28.jpeg', alt: 'Prestige 777 Obstplatte', caption: 'Prestige 777' },
  { id: 47, src: '/prestige5.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 42, src: '/galerie42.jpeg', alt: 'Prestige 777 Cocktails', caption: 'Prestige 777' },
  { id: 23, src: '/galerie23.jpeg', alt: 'Prestige 777 Terrasse', caption: 'Prestige 777' },
  { id: 12, src: '/galerie12.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 2, src: '/galerie2.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 50, src: '/prestige10.jpeg', alt: 'Prestige 777 Lounge', caption: 'Prestige 777' },
  { id: 29, src: '/galerie29.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 30, src: '/galerie30.jpeg', alt: 'Prestige 777 Cocktails', caption: 'Prestige 777' },
  { id: 14, src: '/galerie14.jpeg', alt: 'Prestige 777 Food', caption: 'Prestige 777' },
  { id: 18, src: '/galerie18.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 3, src: '/galerie3.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 51, src: '/prestige11.jpeg', alt: 'Prestige 777 Lounge', caption: 'Prestige 777' },
  { id: 32, src: '/galerie32.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 16, src: '/galerie16.jpeg', alt: 'Prestige 777 Cocktails & Snacks', caption: 'Prestige 777' },
  { id: 44, src: '/galerie44.jpeg', alt: 'Prestige 777 Lounge', caption: 'Prestige 777' },
  { id: 48, src: '/prestige8.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 40, src: '/galerie40.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 10, src: '/galerie10.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 5, src: '/galerie5.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 19, src: '/galerie19.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 31, src: '/galerie31.jpeg', alt: 'Prestige 777 Cocktails', caption: 'Prestige 777' },
  { id: 34, src: '/galerie34.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 6, src: '/galerie6.jpeg', alt: 'Prestige 777 Getränke', caption: 'Prestige 777' },
  { id: 20, src: '/galerie20.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 26, src: '/galerie26.jpeg', alt: 'Prestige 777 Cocktail', caption: 'Prestige 777' },
  { id: 35, src: '/galerie35.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 43, src: '/galerie43.jpeg', alt: 'Prestige 777 Cocktails', caption: 'Prestige 777' },
  { id: 36, src: '/galerie36.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 7, src: '/galerie7.jpeg', alt: 'Prestige 777 Getränke', caption: 'Prestige 777' },
  { id: 37, src: '/galerie37.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 41, src: '/galerie41.jpeg', alt: 'Prestige 777 Snacks', caption: 'Prestige 777' },
  { id: 38, src: '/galerie38.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
  { id: 24, src: '/galerie24.jpeg', alt: 'Prestige 777 Terrasse', caption: 'Prestige 777' },
  { id: 39, src: '/galerie39.jpeg', alt: 'Prestige 777 Shisha', caption: 'Prestige 777' },
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
  const touchStartRef = useRef(null)

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

  // Touch swipe handlers for mobile
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (!touchStartRef.current) return
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y
    touchStartRef.current = null
    // Only swipe if horizontal movement is dominant and exceeds threshold
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext()
      else goPrev()
    }
  }, [goNext, goPrev])

  // Auto-play for carousel (pause when lightbox is open)
  useEffect(() => {
    if (mode !== 'carousel' || lightboxOpen) return
    timerRef.current = setInterval(goNext, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [goNext, mode, lightboxOpen])

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
            <div className="showcase-hero" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
                className="gallery-grid-item"
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

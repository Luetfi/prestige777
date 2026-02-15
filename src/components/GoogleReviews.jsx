import { useState, useEffect, useRef, useCallback } from 'react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './GoogleReviews.css'

const reviews = [
  {
    name: 'Simon Erdelyi',
    rating: 5,
    text: 'Shisha ist super schon lange nicht mehr so eine gut shisha geraucht (TM) kann ich nur weiter empfehlen das Ambiente ist auch wirklich super',
    time: 'vor 3 Monaten',
    avatar: 'S',
  },
  {
    name: 'Hasan Bilgin',
    rating: 5,
    text: 'Prestige 777 Shishabar – Ein echtes Highlight in der Region! Ich war mittlerweile mehrfach im Prestige 777 und bin jedes Mal absolut begeistert. Das Ambiente ist modern, stilvoll und perfekt für einen entspannten Abend mit Freunden. Die Shishas sind top große Auswahl an Sorten, sauber zubereitet, mit intensiven Aromen und perfektem Rauchverhalten.',
    time: 'vor 6 Monaten',
    avatar: 'H',
  },
  {
    name: 'Cihat Balci',
    rating: 5,
    text: 'Sehr angenehme Atmosphäre. Die Bedienung ist professionell und die Location ist gut belüftet. Gut für Gruppen und auch für zwei. Alles in allem sehr gut. Shisha hat mir sehr geschmeckt, da die Bar eine sehr professionelle Shisha Kultur hat.',
    time: 'vor 9 Monaten',
    avatar: 'C',
  },
  {
    name: 'Marko Tucic',
    rating: 5,
    text: 'Sehr entspannt und coole Mitarbeiter! Super Service! Musik ist nicht zu laut. Man muss sich nicht anschreien um sich zu unterhalten. Preis-Leistung top. Shisha schmeckt und ist nicht verbrannt! Cooler Vibe!',
    time: 'vor 2 Jahren',
    avatar: 'M',
  },
  {
    name: 'Michael Moor',
    rating: 5,
    text: 'Ich war mit meinem besten Kumpel zur Eröffnung dort und kann nur 5 von 5 Sternen geben. Super Service, tolle Location, das Personal super freundlich und die Auswahl einer traditionellen Shisha als auch die modernen sind heutzutage ein Alleinstellungsmerkmal was das Prestige 777 bietet. Einfach top',
    time: 'vor einem Jahr',
    avatar: 'M',
  },
  {
    name: 'Rosalba TAT',
    rating: 5,
    text: 'Mega gemütliche Atmosphäre und super Service richtig schön.',
    time: 'vor 5 Monaten',
    avatar: 'R',
  },
]

const overallRating = 4.6
const totalReviews = 160

function StarRating({ rating, size = 16 }) {
  return (
    <div className="review-stars" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={`review-star ${star <= rating ? 'review-star--filled' : 'review-star--empty'}`}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="google-icon">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function ReviewCard({ review, index }) {
  return (
    <div className="review-card scroll-reveal reveal-fade-up" style={{ '--card-index': index }}>
      <div className="review-card-glow"></div>
      <div className="review-card-inner">
        <div className="review-card-header">
          <div className="review-avatar" style={{ '--avatar-hue': 260 + index * 15 }}>
            {review.avatar}
          </div>
          <div className="review-meta">
            <span className="review-name">{review.name}</span>
            <span className="review-time">{review.time}</span>
          </div>
          <GoogleIcon size={18} />
        </div>
        <StarRating rating={review.rating} />
        <p className="review-text">{review.text}</p>
        <div className="review-card-shine"></div>
      </div>
    </div>
  )
}

function GoogleReviews() {
  const headerRef = useScrollReveal()
  const gridRef = useStaggerReveal({ staggerMs: 120 })
  const ctaRef = useScrollReveal()
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartRef = useRef(null)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % reviews.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  // Auto-play on mobile
  useEffect(() => {
    if (!isMobile) return
    autoPlayRef.current = setInterval(nextSlide, 5000)
    return () => clearInterval(autoPlayRef.current)
  }, [isMobile, nextSlide])

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX
    clearInterval(autoPlayRef.current)
  }

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return
    const diff = touchStartRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
    touchStartRef.current = null
    if (isMobile) {
      autoPlayRef.current = setInterval(nextSlide, 5000)
    }
  }

  return (
    <section id="reviews" className="section reviews">
      <div className="reviews-bg">
        <div className="reviews-bg-orb reviews-bg-orb--1"></div>
        <div className="reviews-bg-orb reviews-bg-orb--2"></div>
        <div className="reviews-bg-noise"></div>
        <div className="reviews-bg-lines"></div>
      </div>
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="reviews-header scroll-reveal reveal-fade-up">
          <h2 className="reviews-title">
            Was unsere <span className="reviews-title-accent">Gäste</span> sagen
          </h2>

          {/* Overall rating badge */}
          <div className="reviews-overall">
            <div className="reviews-overall-score">
              <GoogleIcon size={24} />
              <span className="reviews-overall-number">{overallRating}</span>
              <StarRating rating={Math.round(overallRating)} size={18} />
            </div>
            <span className="reviews-overall-count">
              Basierend auf {totalReviews} Bewertungen
            </span>
          </div>
        </div>

        {/* Desktop grid */}
        {!isMobile && (
          <div ref={gridRef} className="reviews-grid">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} index={i} />
            ))}
          </div>
        )}

        {/* Mobile carousel */}
        {isMobile && (
          <div
            className="reviews-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="reviews-carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="reviews-carousel-slide">
                  <ReviewCard review={review} index={i} />
                </div>
              ))}
            </div>
            <div className="reviews-carousel-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`reviews-dot ${i === activeSlide ? 'reviews-dot--active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Bewertung ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Google CTA */}
        <div ref={ctaRef} className="reviews-cta scroll-reveal reveal-fade-up">
          <a
            href="https://www.google.com/maps/search/Prestige+777+Shisha+Bar"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-google-btn"
          >
            <GoogleIcon size={20} />
            <span>Alle Bewertungen auf Google ansehen</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="reviews-arrow">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews

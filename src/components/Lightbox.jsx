import { useEffect, useCallback } from 'react'
import './Lightbox.css'

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        onPrev()
        break
      case 'ArrowRight':
        onNext()
        break
      default:
        break
    }
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const currentImage = images[currentIndex]

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Schließen">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Vorheriges Bild">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox-image"
        />

        <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Nächstes Bild">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>

      </div>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default Lightbox

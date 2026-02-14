import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

function PageTransition({ children }) {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [barState, setBarState] = useState('idle') // idle | loading | finishing
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      setDisplayChildren(children)
      return
    }

    // Start transition out
    setIsTransitioning(true)
    setBarState('loading')

    const fadeOutTimer = setTimeout(() => {
      // Swap content and start fade in
      setDisplayChildren(children)
      setBarState('finishing')

      const fadeInTimer = setTimeout(() => {
        setIsTransitioning(false)
      }, 50)

      const barDoneTimer = setTimeout(() => {
        setBarState('idle')
      }, 500)

      return () => {
        clearTimeout(fadeInTimer)
        clearTimeout(barDoneTimer)
      }
    }, 300)

    return () => clearTimeout(fadeOutTimer)
  }, [location.pathname])

  return (
    <>
      <div className={`page-loader-bar ${barState}`}>
        <div className="page-loader-bar-inner" />
      </div>
      <div className={`page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {displayChildren}
      </div>
    </>
  )
}

export default PageTransition

import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { useCookieConsentContext } from './hooks/CookieConsentContext'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const { showBanner, acceptAll, acceptNecessary, saveConsent, consent } = useCookieConsentContext()

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner
        showBanner={showBanner}
        acceptAll={acceptAll}
        acceptNecessary={acceptNecessary}
        saveConsent={saveConsent}
        consent={consent}
      />
    </div>
  )
}

export default App

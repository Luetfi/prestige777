import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={handleLogoClick}>
          <span className="logo-text">Prestige</span>
          <span className="logo-number">777</span>
        </NavLink>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar-overlay ${isOpen ? 'active' : ''}`}
          onClick={closeMenu}
        />

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li style={{ '--item-index': 0 }}>
            <NavLink to="/menu" onClick={closeMenu}>
              Menü
            </NavLink>
          </li>
          <li style={{ '--item-index': 1 }}>
            <NavLink to="/galerie" onClick={closeMenu}>
              Galerie
            </NavLink>
          </li>
          <li style={{ '--item-index': 2 }}>
            <NavLink to="/kontakt" onClick={closeMenu}>
              Kontakt
            </NavLink>
          </li>
          <li className="navbar-cta" style={{ '--item-index': 3 }}>
            <a href="tel:+4971469928729" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Reservieren
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

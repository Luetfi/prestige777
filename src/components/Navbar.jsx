import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
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

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={closeMenu}>
              Karte
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" onClick={closeMenu}>
              Kontakt
            </NavLink>
          </li>
          <li className="navbar-cta">
            <a href="tel:+4971469928729" className="btn btn-primary">
              Reservieren
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

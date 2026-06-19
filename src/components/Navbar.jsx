import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="मुख्य नेव्हिगेशन">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => { navigate('/'); closeMobileMenu(); }} role="button" tabIndex="0" aria-label="मुख्यपृष्ठवर जा">
          <div className="logo-icon-portrait">
            <img src="/images/shivaji-maharaj.jpg.png" alt="छत्रपती शिवाजी महाराज" />
          </div>
          <div className="logo-text">
            <h3>श्री छत्रपती शिवाजी विद्यालय</h3>
            <p>दारफळ, उत्तर सोलापूर</p>
          </div>
        </div>
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} role="button" tabIndex="0" aria-label="मेनू तोडा" aria-expanded={mobileMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} role="menubar">
          <li role="none"><Link to="/" className={isActive('/')} onClick={closeMobileMenu} role="menuitem">मुख्यपृष्ठ</Link></li>
          <li role="none"><Link to="/about" className={isActive('/about')} onClick={closeMobileMenu} role="menuitem">आमच्या विषयी</Link></li>
          <li role="none"><Link to="/academics" className={isActive('/academics')} onClick={closeMobileMenu} role="menuitem">शैक्षणिक</Link></li>
          <li role="none"><Link to="/activities" className={isActive('/activities')} onClick={closeMobileMenu} role="menuitem">उपक्रम</Link></li>
          <li role="none"><Link to="/gallery" className={isActive('/gallery')} onClick={closeMobileMenu} role="menuitem">छायाचित्र दालन</Link></li>
          <li role="none"><Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu} role="menuitem">संपर्क</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
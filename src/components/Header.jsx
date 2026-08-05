import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Brand } from './Brand.jsx'

const contactHref =
  'mailto:hola@coraldatalab.com?subject=Quiero%20hablar%20con%20Coral%20Data%20Lab'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navigateToSection = (event) => {
    const sectionId = event.currentTarget.hash.slice(1)
    const section = document.getElementById(sectionId)

    if (!section) return

    event.preventDefault()
    setMenuOpen(false)

    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`)
    }

    window.requestAnimationFrame(() => {
      section.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <header className="site-head">
      <div className="container site-head__row">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          className={`nav${menuOpen ? ' nav--open' : ''}`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          <a href="#productos" onClick={navigateToSection}>Productos</a>
          <a href="#enfoque" onClick={navigateToSection}>Enfoque</a>
          <a href="#principios" onClick={navigateToSection}>Principios</a>
          <a className="btn btn--ghost btn--sm" href={contactHref} onClick={closeMenu}>
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  )
}

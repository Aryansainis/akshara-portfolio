import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { useBodyScrollLock, useScrolled, useScrollProgress } from '../hooks/useScroll'

/**
 * Sticky site header.
 *
 * Desktop: inline navigation with a hover underline.
 * Mobile: a full-screen drawer with staggered links, focus handling,
 * Escape-to-close and body scroll lock.
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const progress = useScrollProgress()
  const location = useLocation()
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  useBodyScrollLock(open)

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Escape closes the drawer and returns focus to the toggle.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    // Move focus into the drawer so keyboard users are not stranded.
    const firstLink = drawerRef.current?.querySelector('a, button')
    firstLink?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <Link to="/" className="brand" aria-label={`${site.name} — home`}>
            <span className="brand__mark" aria-hidden="true">
              A
            </span>
            <span>
              {site.name}
              <span className="brand__sub"> / {site.role}</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="nav-desktop__link"
                aria-current={location.pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`drawer ${open ? 'drawer--open' : ''}`}
        hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="drawer__top">
          <span className="eyebrow eyebrow--light">Menu</span>
          <button type="button" className="drawer__close" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>

        <nav className="drawer__nav">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="drawer__link"
              aria-current={location.pathname === item.to ? 'page' : undefined}
            >
              <span className="drawer__index">{item.index}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="drawer__footer">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
        </div>
      </div>
    </>
  )
}

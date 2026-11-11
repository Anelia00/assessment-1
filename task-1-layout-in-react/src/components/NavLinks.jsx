import { navLinks } from '../data/content'
import './NavLinks.css'

/**
 * Navigation Links Component
 *
 * Displays the website's main navigation links.
 * Uses a separate component to keep the navigation
 * organised and reusable throughout the application.
 */
function NavLinks({ className = '' }) {
  return (
    <nav className={`nav-links ${className}`} aria-label="Site">
      {navLinks.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default NavLinks

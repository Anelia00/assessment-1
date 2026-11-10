import { navLinks } from '../data/content'
import './NavLinks.css'

/**
 * Navigation links used in both the header and footer.
 * className lets each section have its own colours and spacing.
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

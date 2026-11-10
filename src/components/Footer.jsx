import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { copyright } from '../data/content'
import './Footer.css'

/**
 * Footer Component
 *
 * Displays the bottom section of the website.
 * Includes footer navigation, social media links,
 * and copyright information.
 *
 * Keeps the footer separate from the main content
 * for better code organisation and reusability.
 */
function Footer() {
  return (
    <footer className="footer">
      <NavLinks />
      <p className="footer__copyright">{copyright}</p>
      <SocialIcons direction="row" />
    </footer>
  )
}

export default Footer

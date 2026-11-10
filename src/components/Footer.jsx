import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { copyright } from '../data/content'
import './Footer.css'

/* Dark footer across the full page with links, copyright text and social icons */
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

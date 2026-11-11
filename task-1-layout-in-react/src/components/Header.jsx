import NavLinks from './NavLinks';
import './Header.css';

/**
 * Header component
 *
 * Displays the Erased Tapes logo and main navigation.
 * Navigation links are managed by a separate reusable
 * React component.
 */
function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="/images/logo.svg"
        alt="Erased Tapes logo"
      />
      <NavLinks />
    </header>
  );
}

export default Header;

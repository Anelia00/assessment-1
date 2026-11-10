import NavLinks from './NavLinks';
import './Header.css';

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

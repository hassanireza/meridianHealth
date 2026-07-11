import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Symptom Checker', href: '#' },
  { label: 'Conditions Library', href: '#' },
  { label: 'Find a Specialist', href: '#' },
  { label: 'Clinical Research', href: '#' },
];

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LogoMark() {
  return (
    <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="#B8965A" strokeWidth="1.2" />
      <path d="M16 6 L16 26 M6 16 L26 16" stroke="#B8965A" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="3.5" stroke="#0A1628" strokeWidth="1.2" />
      <circle cx="16" cy="6" r="1.5" fill="#B8965A" />
      <circle cx="16" cy="26" r="1.5" fill="#B8965A" />
      <circle cx="6" cy="16" r="1.5" fill="#B8965A" />
      <circle cx="26" cy="16" r="1.5" fill="#B8965A" />
    </svg>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll while the mobile menu is open, and allow Escape to close it.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <nav role="navigation" aria-label="Primary navigation">
      <a href="#" className="nav-logo" aria-label="Meridian Health home">
        <LogoMark />
        <span className="nav-logo-text">
          Meridian <span>Health</span>
        </span>
      </a>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-cta">
        <a href="#" className="btn-ghost">
          Sign In
        </a>
        <button className="btn-primary">Consult a Physician</button>
      </div>

      <button
        type="button"
        className="nav-menu-btn"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <a href="#" className="btn-ghost" onClick={() => setMenuOpen(false)}>
            Sign In
          </a>
          <button className="btn-primary" onClick={() => setMenuOpen(false)}>
            Consult a Physician
          </button>
        </div>
      </div>
    </nav>
  );
}

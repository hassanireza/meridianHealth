export function Nav() {
  return (
    <nav role="navigation" aria-label="Primary navigation">
      <a href="#" className="nav-logo" aria-label="Meridian Health home">
        <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="14" stroke="#B8965A" strokeWidth="1.2" />
          <path d="M16 6 L16 26 M6 16 L26 16" stroke="#B8965A" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="3.5" stroke="#0A1628" strokeWidth="1.2" />
          <circle cx="16" cy="6" r="1.5" fill="#B8965A" />
          <circle cx="16" cy="26" r="1.5" fill="#B8965A" />
          <circle cx="6" cy="16" r="1.5" fill="#B8965A" />
          <circle cx="26" cy="16" r="1.5" fill="#B8965A" />
        </svg>
        <span className="nav-logo-text">
          Meridian <span>Health</span>
        </span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#">Symptom Checker</a>
        </li>
        <li>
          <a href="#">Conditions Library</a>
        </li>
        <li>
          <a href="#">Find a Specialist</a>
        </li>
        <li>
          <a href="#">Clinical Research</a>
        </li>
      </ul>

      <div className="nav-cta">
        <a href="#" className="btn-ghost">
          Sign In
        </a>
        <button className="btn-primary">Consult a Physician</button>
      </div>
    </nav>
  );
}

import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Before Hiring Me", href: "#before-hiring-me" },
    { label: "Proof Of Work",    href: "#proof-of-work" },
    { label: "Why Steven?",     href: "#why-steve" },
    { label: "Contact",          href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav-container">
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "0.82rem",
          letterSpacing: "0.15em",
        }}>
          AAK × CASE STUDY
        </span>

        {/* Desktop Nav Links */}
        <div className="nav-links" style={{ display: "flex", gap: "0.25rem" }}>
          {menuItems.map(item => (
            <a key={item.label} href={item.href} className="nav-link" style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.63rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              padding: "0.4rem 0.75rem",
              border: "var(--border)",
              cursor: "pointer",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "inherit",
            }}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        {menuItems.map(item => (
          <a key={item.label} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

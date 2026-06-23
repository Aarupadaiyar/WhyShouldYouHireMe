export default function Nav() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.25rem 2.5rem",
      borderBottom: "var(--border)",
      background: "var(--bg)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "0.82rem",
        letterSpacing: "0.15em",
      }}>
        AAK × CASE STUDY
      </span>

      <div className="nav-links" style={{ display: "flex", gap: "0.25rem" }}>
        {[
          { label: "Before Hiring Me", href: "#before-hiring-me" },
          { label: "Proof Of Work", href: "#proof-of-work" },
          { label: "Why Karthik?", href: "#why-karthik" },
          { label: "Contact", href: "#contact" }
        ].map(item => (
          <a key={item.label} href={item.href} className="nav-link" style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            padding: "0.4rem 0.75rem",
            border: "var(--border)",
            cursor: "pointer",
            textTransform: "uppercase",
          }}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

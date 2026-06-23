export default function Nav() {
  return (
    <nav className="nav-container">
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "0.82rem",
        letterSpacing: "0.15em",
      }}>
        AAK × CASE STUDY
      </span>

      <div className="nav-links" style={{ display: "flex", gap: "0.25rem" }}>
        {["COST ANALYSIS", "PROOF OF WORK", "CONTACT"].map(item => (
          <span key={item} style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            padding: "0.4rem 0.75rem",
            border: "var(--border)",
            cursor: "pointer",
          }}>
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
}

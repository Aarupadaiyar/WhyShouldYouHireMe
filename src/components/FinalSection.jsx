export default function FinalSection() {
  return (
    <section style={{ padding: "6rem 2.5rem", borderBottom: "var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 8vw, 7rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          marginBottom: "3rem",
        }}>
          IF NOTHING ELSE,<br />
          <span style={{ color: "var(--accent)" }}>THIS WAS MORE FUN</span><br />
          THAN WRITING<br />
          A GENERIC COVER LETTER.
        </h2>

        <div
          className="cta-group"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <button
            className="cta-primary"
            onClick={() => window.open("#", "_blank")}
            style={{
              border: "2px solid var(--text)",
              background: "var(--text)",
              color: "var(--bg)",
              padding: "1rem 2.5rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            VIEW RESUME →
          </button>

          <button
            className="cta-secondary"
            onClick={() => window.open("mailto:your@email.com", "_blank")}
            style={{
              border: "2px solid var(--text)",
              background: "transparent",
              color: "var(--text)",
              padding: "1rem 2.5rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            HIRE AT YOUR OWN RISK →
          </button>
        </div>

      </div>
    </section>
  );
}

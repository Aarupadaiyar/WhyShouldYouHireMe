export default function Hero() {
  return (
    <section className="section-container hero-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Case Study Label */}
        <div className="hero-label">
          CASE STUDY — TRAFY AI INTERNSHIP — JUNE 2026
        </div>

        {/* Hero Title — each line is a block so no orphan characters ever appear */}
        <h1 className="hero-title">
          <span className="hero-line">HIRING</span>
          <span className="hero-line hero-accent">AARUPADAIYAR</span>
          <span className="hero-line">@ TRAFY</span>
        </h1>

        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}>
          <div>
            {/* Subtitle */}
            <p style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "1.05rem",
              fontWeight: 500,
              maxWidth: "460px",
              lineHeight: 1.55,
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "1rem",
            }}>
              Most applicants send resumes.<br />
              I studied Trafy's vision, founder philosophy, and AI-first approach and built this instead.
            </p>

            {/* PS Notice */}
            <div style={{
              marginTop: "2rem",
              padding: "1.5rem",
              border: "2px solid var(--accent)",
              background: "rgba(246, 215, 107, 0.15)",
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.82rem",
              lineHeight: "1.6",
              maxWidth: "600px",
            }}>
              <p style={{ fontWeight: 800, color: "var(--accent)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <strong>PS:</strong>
              </p>
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                This page is not a redesign of Trafy.
              </p>
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                It's my interpretation of the characteristics I repeatedly noticed in Steven Bennett's writing:
              </p>
              <p style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>
                Bold.<br />
                Curious.<br />
                Experimental.<br />
                Resilient.
              </p>
              <p style={{ fontWeight: 600 }}>
                I wanted the application itself to reflect those qualities.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["BUILDER", "AI LEARNER", "PROBLEM SOLVER", "SHIPS FAST"].map(tag => (
              <span key={tag} style={{
                border: "var(--border)",
                padding: "0.4rem 0.85rem",
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontSize: "0.63rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

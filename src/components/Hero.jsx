export default function Hero() {
  return (
    <section style={{
      padding: "5rem 2.5rem 4rem",
      borderBottom: "var(--border)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{
          fontFamily: "'Inter', Helvetica, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 600,
          letterSpacing: "0.25em",
          marginBottom: "1.5rem",
          opacity: 0.45,
        }}>
          CASE STUDY — COST OPTIMIZATION — Q2 2025
        </div>

        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(3.5rem, 11vw, 9rem)",
          lineHeight: 0.92,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}>
          HIRING<br />
          <span style={{ color: "var(--accent)" }}>AARUPADAIYAR</span><br />
          KJ
        </h1>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}>
          <div>
            <p style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "1.05rem",
              fontWeight: 500,
              maxWidth: "460px",
              lineHeight: 1.55,
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "1rem",
            }}>
              A Cost Optimization Case Study
            </p>
            <p style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.82rem",
              opacity: 0.5,
              marginTop: "0.5rem",
              paddingLeft: "1rem",
            }}>
              For internal review by whoever hires interns.
            </p>
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

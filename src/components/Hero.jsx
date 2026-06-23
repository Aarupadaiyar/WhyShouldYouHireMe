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
          CASE STUDY — SCHPOT INTERNSHIP — JUNE 2026
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
          @ SCHPOT
        </h1>

        <div style={{
          display: "flex",
          alignItems: "flex-start",
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
              Most applicants send resumes.<br />
              I studied Schpot's design language and built this instead.
            </p>

            <div style={{
              marginTop: "2rem",
              padding: "1.5rem",
              border: "2px solid var(--accent)",
              background: "rgba(214, 26, 26, 0.04)",
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.82rem",
              lineHeight: "1.6",
              maxWidth: "600px",
            }}>
              <p style={{ fontWeight: 800, color: "var(--accent)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                PS: THIS PAGE WAS BUILT SPECIFICALLY UNDER THE STYLING INFLUENCE OF SCHPOT'S OFFICIAL WEBSITE
              </p>
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                I intentionally tried to recreate elements from Schpot's public website and branding.
              </p>
              <p style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                THIS IS NOT SCHPOT'S OFFICIAL WEBSITE.<br />
                IT IS A FAN-MADE APPLICATION CREATED FOR THIS INTERNSHIP.
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

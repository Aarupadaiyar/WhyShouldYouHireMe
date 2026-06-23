const CHECKS = [
  "Learns fast",
  "Ships fast",
  "Documents everything",
  "Comfortable wearing multiple hats",
  "Doesn't wait for permission to start",
];

export default function AfterSection() {
  return (
    <section style={{
      padding: "5rem 2.5rem",
      borderBottom: "var(--border)",
      background: "var(--text)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "var(--bg)",
            opacity: 0.38,
            marginBottom: "0.75rem",
          }}>
            PROPOSED STATE
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--bg)",
          }}>
            AFTER<br />HIRING ME
          </h2>
        </div>

        {/* Premium card */}
        <div style={{
          border: "1px solid var(--bg)",
          padding: "3rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Red left stripe */}
          <div style={{
            position: "absolute",
            top: 0, left: 0,
            width: "6px",
            height: "100%",
            background: "var(--accent)",
          }} />

          <div style={{ paddingLeft: "1.5rem" }}>
            <div style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.63rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "var(--bg)",
              opacity: 0.38,
              marginBottom: "1rem",
            }}>
              CANDIDATE #001 — ALL-IN-ONE
            </div>

            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--bg)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}>
              AARUPADAIYAR KJ
            </h3>

            <p style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.88rem",
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "2.5rem",
              letterSpacing: "0.03em",
            }}>
              Builder / AI Learner / Content Creator / Professional Problem Collector
            </p>

            {/* Checklist */}
            <div style={{
              borderTop: "1px solid rgba(245,242,235,0.15)",
              paddingTop: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}>
              {CHECKS.map((item, i) => (
                <div key={i} style={{
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontSize: "0.95rem",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}>
                  <span style={{
                    color: "var(--accent)",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Cost + ROI row */}
            <div style={{
              borderTop: "1px solid rgba(245,242,235,0.15)",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}>
              <div>
                <div style={{
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "var(--bg)",
                  opacity: 0.38,
                  marginBottom: "0.4rem",
                }}>
                  COST
                </div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.6rem",
                  color: "var(--accent)",
                }}>
                  One intern stipend.
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontSize: "0.82rem",
                  color: "var(--bg)",
                  opacity: 0.55,
                  lineHeight: 1.75,
                }}>
                  ROI: Unknown.<br />
                  Confidence: Unreasonably high.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

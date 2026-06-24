export default function FinalSection() {
  return (
    <section id="contact" className="section-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{
          fontFamily: "'Inter', Helvetica, sans-serif",
          fontSize: "0.63rem",
          fontWeight: 700,
          letterSpacing: "0.25em",
          opacity: 0.38,
          marginBottom: "0.75rem",
        }}>
          GET IN TOUCH
        </div>

        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          marginBottom: "2rem",
          textTransform: "uppercase",
        }}>
          LET'S TALK.
        </h2>

        <div className="contact-grid" style={{ marginBottom: "3rem" }}>
          <div>
            <p style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "1.25rem",
              lineHeight: 1.6,
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}>
              If nothing else,<br />
              I hope this page was more entertaining than another PDF resume.
            </p>

            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 800,
              marginTop: "2.5rem",
            }}>
              Email:<br />
              <a href="mailto:aarupadaiyarjeyapal@gmail.com" style={{
                color: "var(--accent)",
                textDecoration: "underline",
                wordBreak: "break-all",
              }}>
                aarupadaiyarjeyapal@gmail.com
              </a>
            </p>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}>
            {/* Primary CTA */}
            <div>
              <button
                className="cta-primary"
                onClick={() => window.open("mailto:aarupadaiyarjeyapal@gmail.com", "_blank")}
                aria-label="Email me: Schpot already cost me a weekend"
                style={{
                  width: "100%",
                  border: "2px solid var(--text)",
                  background: "var(--text)",
                  color: "var(--bg)",
                  padding: "1.25rem 2rem",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                  borderRadius: 0,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                SCHPOT ALREADY COST ME A WEEKEND. →
              </button>
              <p style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                opacity: 0.5,
                marginTop: "0.5rem",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                Worth it.
              </p>
            </div>

            {/* Secondary Buttons Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "0.75rem",
            }}>
              {[
                { label: "Portfolio",  href: "https://aarupadaiyar.vercel.app" },
                { label: "GitHub",     href: "https://github.com/Aarupadaiyar" },
                { label: "LinkedIn",   href: "https://www.linkedin.com/in/aarupadaiyarkj/" },
                { label: "Email",      href: "mailto:aarupadaiyarjeyapal@gmail.com" },
              ].map(btn => (
                <button
                  key={btn.label}
                  className="cta-secondary"
                  onClick={() => window.open(btn.href, "_blank")}
                  aria-label={`Visit my ${btn.label}`}
                  style={{
                    border: "2px solid var(--text)",
                    background: "transparent",
                    color: "var(--text)",
                    padding: "0.85rem 1rem",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    borderRadius: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

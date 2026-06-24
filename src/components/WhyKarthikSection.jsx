export default function WhyKarthikSection() {
  return (
    <section id="why-karthik" className="section-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Label and Title */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            opacity: 0.38,
            marginBottom: "0.75rem",
          }}>
            PERSPECTIVE
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}>
            WHY STEVEN BENNETT MIGHT BE<br />
            <span style={{ color: "var(--accent)" }}>MY BEST BOSS</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="why-karthik-grid">
          
          {/* Left Column: The Philosophy */}
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontWeight: 500,
          }}>
            <p style={{ marginBottom: "1.75rem" }}>
              Most people look for internships.
            </p>
            <p style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              lineHeight: 1.3,
              marginBottom: "2.5rem",
              borderLeft: "4px solid var(--accent)",
              paddingLeft: "1.5rem",
            }}>
              I'm looking for an environment.
            </p>

            <p style={{ marginBottom: "1.75rem", opacity: 0.8 }}>
              You openly talk about building, experimenting, validating, and shipping.
            </p>
            <p style={{ marginBottom: "1.75rem", opacity: 0.8 }}>
              Those are the skills I want to develop.
            </p>
            <p style={{ marginBottom: "2.5rem", opacity: 0.8 }}>
              The goal isn't simply getting an internship. The goal is learning how builders think when they're creating products in the real world.
            </p>

            <div style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "var(--border)",
            }}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 800,
                lineHeight: 1.4,
              }}>
                Good bosses teach.
              </p>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "var(--accent)",
                lineHeight: 1.3,
                marginTop: "0.25rem",
              }}>
                Great bosses create future builders.
              </p>
            </div>
          </div>

          {/* Right Column: The Core Values Box */}
          <div className="observed-values-box">
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              marginBottom: "2rem",
              textTransform: "uppercase",
              opacity: 0.4,
            }}>
              FROM EVERYTHING I'VE RESEARCHED, YOU SEEM TO VALUE:
            </h3>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}>
              {[
                { title: "Execution over credentials" },
                { title: "Building over talking" },
                { title: "Curiosity over certainty" },
                { title: "Learning speed over perfection" },
                { title: "Ownership over supervision" },
                { title: "Small high-impact teams" }
              ].map((value, idx) => (
                <div key={idx} style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{
                    color: "var(--accent)",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    lineHeight: 1,
                  }}>✓</span>
                  <div>
                    <h4 style={{
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      marginBottom: "0.25rem",
                    }}>{value.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontSize: "0.88rem",
              fontWeight: 500,
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "var(--border)",
              lineHeight: 1.5,
              opacity: 0.7,
            }}>
              That's exactly the kind of environment where I learn fastest.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default function BeforeSection() {
  const CARDS = [
    {
      title: "SOCIAL MEDIA MANAGER",
      items: ["Creates content.", "Tracks trends.", "Builds audience."],
      cost: "₹₹₹",
    },
    {
      title: "AI INTERN",
      items: ["Builds tools.", "Experiments with agents.", "Automates workflows."],
      cost: "₹₹₹",
    },
    {
      title: "MARKET RESEARCH",
      items: ["Studies competitors.", "Analyzes opportunities."],
      cost: "₹₹₹",
    },
    {
      title: "FOUNDER'S OFFICE",
      items: ["Research.", "Execution.", "Operations."],
      cost: "₹₹₹",
    },
    {
      title: "COMMUNITY BUILDER",
      items: ["Feedback.", "Growth.", "Partnerships."],
      cost: "₹₹₹",
    },
    {
      title: "PROBLEM SOLVER",
      items: ["Undefined role.", "Unexpected usefulness."],
      cost: "Also ₹₹₹",
    },
  ];

  return (
    <section id="before-hiring-me" className="section-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            opacity: 0.38,
            marginBottom: "0.75rem",
          }}>
            CURRENT STATE
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}>
            BEFORE<br />HIRING ME
          </h2>
          <p style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.88rem",
            opacity: 0.5,
            marginTop: "1rem",
          }}>
            Current operating structure.
          </p>
        </div>

        {/* Grid */}
        <div className="before-grid">
          {CARDS.map((card, i) => (
            <div key={i} className="before-grid-item">
              <div className="cost-card" style={{
                padding: "1.75rem",
                background: "var(--bg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "240px",
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    marginBottom: "1.25rem",
                    paddingBottom: "1rem",
                    borderBottom: "var(--border)",
                  }}>
                    {card.title}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {card.items.map((item, j) => (
                      <li key={j} style={{
                        fontFamily: "'Inter', Helvetica, sans-serif",
                        fontSize: "0.85rem",
                        lineHeight: 1.85,
                        opacity: 0.7,
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: "'Inter', Helvetica, sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    opacity: 0.38,
                  }}>
                    COST
                  </span>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.25rem",
                    color: "var(--accent)",
                  }}>
                    {card.cost}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div style={{
          border: "var(--border)",
          borderTop: "none",
          padding: "2rem 1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              opacity: 0.38,
              marginBottom: "0.35rem",
            }}>
              TOTAL COST
            </div>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "2.25rem",
              color: "var(--accent)",
            }}>
              ₹₹₹₹₹₹
            </div>
          </div>
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.9rem",
            opacity: 0.5,
            fontStyle: "italic",
          }}>
            "Finance team mildly concerned."
          </div>
        </div>

      </div>
    </section>
  );
}

export default function WhySection() {
  return (
    <section style={{ padding: "5rem 2.5rem", borderBottom: "var(--border)" }}>
      <div
        className="why-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: Heading */}
        <div>
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            opacity: 0.38,
            marginBottom: "0.75rem",
          }}>
            METHODOLOGY
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}>
            WHY<br />THIS PAGE<br />EXISTS
          </h2>
        </div>

        {/* Right: Body */}
        <div style={{
          fontFamily: "'Inter', Helvetica, sans-serif",
          fontSize: "1.05rem",
          lineHeight: 1.78,
          opacity: 0.82,
          borderLeft: "3px solid var(--accent)",
          paddingLeft: "2rem",
        }}>
          <p style={{ marginBottom: "1.25rem" }}>
            Most applicants explain why they're a fit.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            I wanted to answer a different question.
          </p>
          <p style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            lineHeight: 1.3,
            marginBottom: "1.5rem",
            color: "var(--text)",
          }}>
            "What would I build if I were already an intern at Schpot?"
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            So instead of sending another generic application, I spent my time:
          </p>
          <ul style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}>
            {[
              "Studying Schpot",
              "Reverse engineering the visual language",
              "Understanding the company",
              "Building something"
            ].map((item, i) => (
              <li key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontWeight: 600,
              }}>
                <span style={{ color: "var(--accent)" }}>•</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            opacity: 1,
            color: "var(--text)",
          }}>
            Nobody asked me to do this.<br />
            Curiosity got in the way.
          </p>
        </div>
      </div>
    </section>
  );
}

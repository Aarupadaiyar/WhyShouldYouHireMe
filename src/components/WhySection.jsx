export default function WhySection() {
  return (
    <section className="section-container">
      <div
        className="why-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
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
        <div className="why-body-col">
          <p style={{ marginBottom: "1.25rem" }}>
            Most applicants explain why they're a fit.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            I wanted to answer a different question.<br/>
            <strong>"What would I build if I were already contributing to Trafy?"</strong>
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            So instead of sending another generic application, I spent my time:<br/>
            • Understanding Trafy's mission<br/>
            • Studying Steven Bennett's public thinking<br/>
            • Analyzing the company<br/>
            • Building something
          </p>
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

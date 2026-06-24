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
            WHY THIS<br />LOOKS THE<br />WAY IT DOES
          </h2>
        </div>

        {/* Right: Body */}
        <div className="why-body-col">
          <p style={{ marginBottom: "1.25rem" }}>
            This page wasn't designed by studying a website.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            <strong>It was designed by studying a builder.</strong>
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            After reading Steven Bennett's posts, interviews, and public thoughts, a few themes kept appearing:<br/><br/>
            • Bold execution<br/>
            • Constant experimentation<br/>
            • Learning through action<br/>
            • Resilience after failure<br/>
            • Building despite uncertainty
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            The visual language of this page reflects those traits.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Simple.<br/>
            Direct.<br/>
            Unapologetically builder-first.
          </p>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            opacity: 1,
            color: "var(--text)",
          }}>
            If Trafy teaches people to build with AI,<br />
            I thought the application should be built the same way.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Update the href values below with your real links ──
const LINKS = [
  { label: "PORTFOLIO", sub: "SELECTED WORK",   href: "https://aarupadaiyar.vercel.app/" },
  { label: "GITHUB",    sub: "CODE",             href: "https://github.com/Aarupadaiyar" },
  { label: "LINKEDIN",  sub: "PROFESSIONAL",     href: "https://www.linkedin.com/in/aarupadaiyarkj/" },
  { label: "RESUME",    sub: "ONE PAGE · PDF",   href: "/resume.pdf" },
];

function ProofCard({ label, sub, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="proof-card"
      aria-label={`${label} — ${sub}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem",
        minHeight: "180px",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
    >
      <span className="proof-label" style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "0.62rem",
        letterSpacing: "0.2em",
        opacity: 0.38,
      }}>
        {sub}
      </span>

      <div>
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "1.5rem",
          letterSpacing: "-0.01em",
          marginBottom: "0.35rem",
        }}>
          {label}
        </div>
        <div className="proof-arrow" style={{
          fontFamily: "'Inter', Helvetica, sans-serif",
          fontSize: "0.78rem",
          color: "var(--accent)",
          fontWeight: 600,
        }}>
          VIEW →
        </div>
      </div>
    </a>
  );
}

export default function ProofSection() {
  return (
    <section id="proof-of-work" className="section-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontSize: "0.63rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            opacity: 0.38,
            marginBottom: "0.75rem",
          }}>
            EVIDENCE
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}>
            PROOF<br />OF WORK
          </h2>
        </div>

        <div className="proof-grid">
          {LINKS.map((card, i) => (
            <div key={i} className="proof-grid-item">
              <ProofCard {...card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

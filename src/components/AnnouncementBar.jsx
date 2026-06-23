const TEXT = "LIMITED TIME OFFER • 1 INTERN • MULTIPLE DEPARTMENTS • NO SUBSCRIPTION REQUIRED";

export default function AnnouncementBar() {
  const repeated = Array(10).fill(TEXT);

  return (
    <div style={{
      background: "var(--accent)",
      overflow: "hidden",
      padding: "0.65rem 0",
      borderBottom: "var(--border)",
    }}>
      <div className="marquee-inner">
        {repeated.map((t, i) => (
          <span key={i} style={{
            color: "#fff",
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontWeight: 600,
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            whiteSpace: "nowrap",
            paddingRight: "4rem",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 2.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <span style={{
        fontFamily: "'Inter', Helvetica, sans-serif",
        fontSize: "0.68rem",
        opacity: 0.38,
        letterSpacing: "0.08em",
      }}>
        © 2025 AARUPADAIYAR KJ — ALL RISKS RETAINED BY HIRER
      </span>
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "0.68rem",
        letterSpacing: "0.15em",
        color: "var(--accent)",
      }}>
        BUILT TO GET HIRED
      </span>
    </footer>
  );
}

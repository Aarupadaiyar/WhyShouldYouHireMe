import AnnouncementBar    from './components/AnnouncementBar'
import Nav                from './components/Nav'
import Hero               from './components/Hero'
import BeforeSection      from './components/BeforeSection'
import AfterSection       from './components/AfterSection'
import WhySection         from './components/WhySection'
import WhySteveSection  from './components/WhySteveSection'
import ProofSection       from './components/ProofSection'
import FinalSection       from './components/FinalSection'
import Footer             from './components/Footer'

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <BeforeSection />
      <AfterSection />
      <WhySection />
      <WhySteveSection />
      <ProofSection />
      <FinalSection />
      <Footer />

      {/* Floating Badge */}
      <div className="floating-badge">
        <span style={{ color: "var(--accent)" }}>INSPIRED BY A BUILDER.</span><br />
        <span style={{ opacity: 0.6 }}>NOT A BRAND GUIDE.</span>
      </div>
    </div>
  )
}

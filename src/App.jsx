import AnnouncementBar from './components/AnnouncementBar'
import Nav            from './components/Nav'
import Hero           from './components/Hero'
import BeforeSection  from './components/BeforeSection'
import AfterSection   from './components/AfterSection'
import WhySection     from './components/WhySection'
import ProofSection   from './components/ProofSection'
import FinalSection   from './components/FinalSection'
import Footer         from './components/Footer'

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <BeforeSection />
      <AfterSection />
      <WhySection />
      <ProofSection />
      <FinalSection />
      <Footer />
    </div>
  )
}

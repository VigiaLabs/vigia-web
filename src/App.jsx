import Nav from './components/Nav'
import Hero from './components/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import CopilotMockup from './components/mockups/CopilotMockup'
import HazardMockup from './components/mockups/HazardMockup'
import EarningsMockup from './components/mockups/EarningsMockup'
import Metrics from './components/Metrics'
import Hardware from './components/Hardware'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <ShowcaseSection
          id="copilot"
          theme="light"
          eyebrow="The copilot"
          title={<>Built for drivers.<br />Tuned for the road.</>}
          body="A natural-language driving assistant that sees the road ahead, warns before impact, and keeps your hands on the wheel — route-ahead hazards, fatigue nudges, all hands-free."
          cta={{ label: 'Explore the copilot', href: '#' }}
        >
          <CopilotMockup />
        </ShowcaseSection>

        <ShowcaseSection
          id="detect"
          theme="dark"
          eyebrow="Perception"
          title={<>See what the<br />road hides.</>}
          body="On-device AI flags potholes, hazards, and collision risk in real time — sub-100ms, no cloud round-trip. Raw video never leaves the car; only signed insights do."
          cta={{ label: 'How detection works', href: '#' }}
          reverse
        >
          <HazardMockup />
        </ShowcaseSection>

        <ShowcaseSection
          id="network"
          theme="light"
          eyebrow="The network"
          title={<>Your drive pays<br />for itself.</>}
          body="VIGIA is decentralized physical infrastructure. Drivers supply the sensing; the network supplies the rewards. Every contribution is signed on the edge — provably yours."
          cta={{ label: 'See the economics', href: '#' }}
        >
          <EarningsMockup />
        </ShowcaseSection>

        <Metrics />
        <Hardware />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

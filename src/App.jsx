import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Capabilities from './components/Capabilities'
import Stats from './components/Stats'
import ProductSection from './components/ProductSection'
import CopilotMockup from './components/mockups/CopilotMockup'
import HazardMockup from './components/mockups/HazardMockup'
import EarningsMockup from './components/mockups/EarningsMockup'
import UseCases from './components/UseCases'
import TrustFeatures from './components/TrustFeatures'
import Testimonials from './components/Testimonials'
import Hardware from './components/Hardware'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Capabilities />
        <Stats />

        <ProductSection
          id="copilot"
          index="01"
          theme="ember"
          eyebrow="The copilot"
          title={<>A second pair of eyes,<br />and a voice you can trust.</>}
          body="A natural-language driving assistant built on the same intelligence the network runs on — it sees the road ahead and keeps your hands on the wheel."
          features={[
            'Route-ahead hazard and weather warnings',
            'Profile-scaled forward-collision alerts',
            'Fatigue and drift nudges, fully hands-free',
          ]}
          cta={{ label: 'Explore the copilot', href: '#' }}
        >
          <CopilotMockup />
        </ProductSection>

        <ProductSection
          id="perception"
          index="02"
          theme="light"
          eyebrow="Edge perception"
          title={<>See what the<br />road hides.</>}
          body="On-device AI flags potholes, hazards, and collision risk in real time — sub-100ms, no cloud round-trip. Raw video stays in the car; only signed insights leave."
          features={[
            'YOLO + depth models, INT8 accelerated',
            'Sub-100ms detection, fully offline-capable',
            'Privacy-preserving — insights, never footage',
          ]}
          cta={{ label: 'How detection works', href: '#' }}
          reverse
        >
          <HazardMockup />
        </ProductSection>

        <ProductSection
          id="network"
          index="03"
          theme="light"
          eyebrow="The network"
          title={<>Your drive pays<br />for itself.</>}
          body="VIGIA is decentralized physical infrastructure. Drivers supply the sensing; the network supplies the rewards. Every contribution is signed on the edge — provably yours."
          features={[
            'Earn $VGA for verified road intelligence',
            'Rare routes and fresh hazards earn the most',
            'Withdraw to fiat or hold network credits',
          ]}
          cta={{ label: 'See the economics', href: '#' }}
        >
          <EarningsMockup />
        </ProductSection>

        <UseCases />
        <TrustFeatures />
        <Testimonials />
        <Hardware />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

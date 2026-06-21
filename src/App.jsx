import useLenis from './lib/useLenis'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StickySteps from './components/StickySteps'
import Stats from './components/Stats'
import HardwareShowcase from './components/HardwareShowcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <StickySteps />
        <Stats />
        <HardwareShowcase />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

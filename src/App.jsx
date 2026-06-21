import useLenis from './lib/useLenis'
import ScrollProgress from './components/ScrollProgress'
import AnnouncementBar from './components/AnnouncementBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import FeatureTabs from './components/FeatureTabs'
import Stats from './components/Stats'
import PartnerGrid from './components/PartnerGrid'
import HardwareShowcase from './components/HardwareShowcase'
import AiShowcase from './components/AiShowcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <FeatureTabs />
        <Stats />
        <PartnerGrid />
        <HardwareShowcase />
        <AiShowcase />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

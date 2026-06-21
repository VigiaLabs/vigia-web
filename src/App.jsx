import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Metrics from './components/Metrics'
import Earnings from './components/Earnings'
import Hardware from './components/Hardware'
import UseCases from './components/UseCases'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <Metrics />
        <Earnings />
        <Hardware />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

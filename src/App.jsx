import AnnouncementBar from './components/AnnouncementBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import SolutionCards from './components/SolutionCards';
import FeatureSpotlight from './components/FeatureSpotlight';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <LogoSection />
      <SolutionCards />
      <FeatureSpotlight
        eyebrow="Hazard Detection"
        heading="Spot every pothole, crack, and hazard — automatically."
        body="VIGIA's edge AI runs on-device, processing road data in under 50ms. No cloud dependency. No latency. Just instant, accurate detection."
        bg="#fff"
      />
      <FeatureSpotlight
        eyebrow="Driver Copilot"
        heading="Real-time alerts before you reach the danger."
        body="BLE broadcast alerts reach drivers up to 300m ahead of a hazard. VIGIA integrates with your existing navigation to keep every journey safe."
        flip={true}
        bg="#F5F5F5"
      />
      <FeatureSpotlight
        eyebrow="Community Earnings"
        heading="Turn your road data into real income."
        body="Host a VIGIA node and earn credits for every kilometer of road data you contribute. A new model for civic participation."
        bg="#fff"
      />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

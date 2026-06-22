import AnnouncementBar from './components/AnnouncementBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import SolutionCards from './components/SolutionCards';
import FeatureSpotlight from './components/FeatureSpotlight';
import VoiceSection from './components/VoiceSection';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HazardMockup from './components/mockups/HazardMockup';
import CopilotMockup from './components/mockups/CopilotMockup';
import EarningsMockup from './components/mockups/EarningsMockup';

/* Wraps dark-theme mockups in a self-contained dark context so they
   render correctly inside the light-mode page, the same way Intercom
   shows their dark app UI on white sections. */
function DarkFrame({ children }) {
  return (
    <div style={{
      background: '#09090B',
      borderRadius: 25,
      overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
      /* reset Tailwind custom-property equivalents for dark-themed children */
      '--tw-shadow-color': 'rgba(0,0,0,0.5)',
    }}
      className="dark-frame"
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <LogoSection />
      <SolutionCards />
      <FeatureSpotlight
        heading="AI-powered hazard detection on every road."
        body="VIGIA's edge AI runs on-device, processing road data in under 50 ms. No cloud dependency. No latency. Just instant, accurate detection that keeps drivers safe."
        image={<DarkFrame><HazardMockup /></DarkFrame>}
        bg="#F5F5F5"
        cardBgImage="/cloud-bg.jpg"
        secondaryImage="/sec-road.jpg"
      />
      <FeatureSpotlight
        heading="Real-time alerts before you reach the danger."
        body="The VIGIA voice copilot broadcasts hazard alerts over BLE to drivers up to 300 m ahead. Conversational, context-aware, and always on — even without internet."
        image={<DarkFrame><CopilotMockup /></DarkFrame>}
        flip={true}
        bg="#F5F5F5"
        secondaryImage="/sec-alert.jpg"
      />
      <FeatureSpotlight
        heading="Turn your daily drive into real income."
        body="Host a VIGIA node and earn $VGA credits for every kilometre of verified road data you contribute. A new model for civic participation — and a new revenue stream for drivers."
        image={<DarkFrame><EarningsMockup /></DarkFrame>}
        bg="#F5F5F5"
        secondaryImage="/sec-earn.jpg"
      />
      <VoiceSection />
      <Testimonial />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

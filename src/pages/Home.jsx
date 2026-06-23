import Hero from '../components/Hero';
import LogoSection from '../components/LogoSection';
import BlogCarousel from '../components/BlogCarousel';
import PlatformSection from '../components/PlatformSection';
import VoiceSection from '../components/VoiceSection';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

/* Vertical-bar divider — three evenly spaced 1px rules inside the column */
function Divider() {
  return (
    <div aria-hidden style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      height: 48,
      borderTop: '2px solid #D4D4D4',
      borderBottom: '2px solid #D4D4D4',
    }}>
      <div style={{ borderRight: '2px solid #D4D4D4' }} />
      <div style={{ borderRight: '2px solid #D4D4D4' }} />
      <div />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <LogoSection />
      <Divider />
      <BlogCarousel />
      <Divider />
      <PlatformSection />
      <Divider />
      <VoiceSection />
      <Divider />
      <Testimonial />
      <Divider />
      <Pricing />
      <Divider />
      <CTA />
    </>
  );
}

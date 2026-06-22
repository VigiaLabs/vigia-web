import Hero from '../components/Hero';
import LogoSection from '../components/LogoSection';
import BlogCarousel from '../components/BlogCarousel';
import PlatformSection from '../components/PlatformSection';
import VoiceSection from '../components/VoiceSection';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoSection />
      <BlogCarousel />
      <PlatformSection />
      <VoiceSection />
      <Testimonial />
      <Pricing />
      <CTA />
    </>
  );
}

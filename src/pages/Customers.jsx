import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Section, SectionHead, LogoGrid, GRAPHIK, MONO } from '../components/sections';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const logos = ['Bharat Logistics', 'MetroCity', 'SafeFleet', 'RoadGuard', 'UrbanGov', 'TransCargo', 'DriveCo', 'CivicWorks'];

const stories = [
  { category: 'FLEET', title: 'Bharat Logistics cut rear-end incidents 34%', excerpt: 'A 200-truck pilot put VIGIA voice alerts in every cab — and changed how drivers respond to the road.', img: '/sec-road.jpg' },
  { category: 'CITY', title: 'MetroCity maps 12,000 potholes in a month', excerpt: 'Crowd-sourced edge detection gave public works a live, verified hazard map without a single survey crew.', img: '/cloud-bg.jpg' },
  { category: 'DRIVERS', title: 'How RoadGuard drivers earn while they commute', excerpt: 'Verified road data turned a daily drive into a $VGA revenue stream for thousands of individual contributors.', img: '/sec-earn.jpg' },
  { category: 'GOVERNMENT', title: 'UrbanGov pilots VIGIA on its bus network', excerpt: 'On-vehicle nodes turn a public transit fleet into a continuous, signed road-condition sensor grid.', img: '/shaders/road.webp' },
];

function StoryCard({ s }) {
  return (
    <Link to="/contact-sales" style={{
      position: 'relative', borderRadius: 18, overflow: 'hidden', textDecoration: 'none',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 320, background: '#111',
    }}>
      <img src={s.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.8) 100%)' }} />
      <span style={{ position: 'absolute', top: 22, left: 22, zIndex: 2, background: '#fff', color: '#111', fontFamily: MONO, fontSize: 11, letterSpacing: '0.08em', fontWeight: 500, padding: '6px 11px', borderRadius: 7 }}>{s.category}</span>
      <div style={{ position: 'relative', zIndex: 2, padding: 26 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.18, letterSpacing: '-0.02em', margin: '0 0 10px' }}>{s.title}</h3>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, margin: '0 0 16px' }}>{s.excerpt}</p>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Read story →</span>
      </div>
    </Link>
  );
}

export default function Customers() {
  return (
    <div style={{ fontFamily: GRAPHIK }}>
      <PageHeader
        eyebrow="Customers"
        title={<>Built with <span style={{ color: '#326BFF' }}>VIGIA.</span></>}
        subtitle="Fleets, cities, and drivers use VIGIA to make every road safer — and to turn the data they generate into shared value."
      />

      <Section pad="80px 7%">
        <p style={{ textAlign: 'center', fontSize: 13, color: '#A0A0A0', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 32px' }}>
          Trusted by teams across logistics, transit & government
        </p>
        <LogoGrid names={logos} />
      </Section>

      {/* Featured story */}
      <Section bg="#F5F5F5" border pad="80px 7%">
        <div style={{ border: '1px solid #E7E7E7', borderRadius: 18, background: '#fff', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr' }}>
          <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#326BFF', margin: '0 0 16px' }}>Featured story</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 700, color: '#111', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
              How Bharat Logistics rolled VIGIA across 200 trucks
            </h2>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65, margin: '0 0 28px', maxWidth: 440 }}>
              In a three-month pilot, the fleet equipped every cab with VIGIA edge nodes and the voice copilot. Rear-end incidents dropped 34%, and drivers stopped reaching for their phones.
            </p>
            <div>
              <Link to="/contact-sales" className="btn-primary">Read the full story</Link>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 360 }}>
            <img src="/sec-road.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </Section>

      {/* Story card grid */}
      <Section pad="100px 7%">
        <SectionHead eyebrow="Customer stories" title="Real roads, real results" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }}>
          {stories.map(s => <StoryCard key={s.title} s={s} />)}
        </div>
      </Section>

      <Testimonial />
      <CTA />
    </div>
  );
}

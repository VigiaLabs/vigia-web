import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Section, SectionHead, BoxedTabs, CardGrid, GRAPHIK } from '../components/sections';
import { RaspiSketch, BlackboxSketch, MobileSketch, CameraSketch, NetworkSketch } from '../components/DeviceSketches';
import FeatureSpotlight from '../components/FeatureSpotlight';
import DarkFrame from '../components/DarkFrame';
import CopilotMockup from '../components/mockups/CopilotMockup';
import CTA from '../components/CTA';

const surfaceTabs = [
  { tab: 'Edge Node', category: 'Raspberry Pi node', title: 'On-device perception', desc: 'YOLO + depth inference run on the Pi in under 50 ms — hazard detection, distance estimation, and TTC, entirely offline.', points: ['Real-time object + pothole detection', 'On-device depth & TTC', 'No cloud round-trip'], Sketch: RaspiSketch },
  { tab: 'Blackbox', category: 'In-vehicle blackbox', title: 'Always-on road recorder', desc: 'A rugged enclosure that captures, signs, and streams verified road telemetry — the trust layer of the VIGIA network.', points: ['Tamper-evident, ECDSA-signed events', 'LTE fallback uplink', 'Anti-death snapshot buffer'], Sketch: BlackboxSketch },
  { tab: 'Mobile App', category: 'Driver companion', title: 'Voice copilot in your pocket', desc: 'BLE-paired alerts and a conversational copilot that warns drivers of hazards up to 300 m ahead — hands-free.', points: ['Live BLE hazard alerts', 'Conversational voice copilot', 'Earnings & $VGA wallet'], Sketch: MobileSketch },
];

const pillarTabs = [
  { tab: 'Detect', category: 'Perception engine', title: 'See every hazard', desc: 'A multi-task perception stack runs object detection, depth, and time-to-collision on the edge in one pass — no GPU, no cloud.', points: ['Potholes, debris, stopped vehicles, pedestrians', 'Monocular depth + TTC estimation', 'Forward collision warning on-device'], Sketch: CameraSketch },
  { tab: 'Protect', category: 'Alert network', title: 'Warn before the danger', desc: 'Verified hazards broadcast over BLE to nearby drivers and sync to the community map, so the next driver is ready.', points: ['BLE broadcast up to 300 m ahead', 'Conversational voice copilot', 'Live community hazard map'], Sketch: MobileSketch },
  { tab: 'Earn', category: 'Road-intelligence DePIN', title: 'Get paid to drive', desc: 'Every kilometre of verified data you contribute earns $VGA. A DePIN that turns the road into shared, ownable infrastructure.', points: ['$VGA on verified contributions', 'Cryptographically signed events', 'Transparent on-chain rewards'], Sketch: NetworkSketch },
];

export default function Product() {
  return (
    <div style={{ fontFamily: GRAPHIK }}>
      <PageHeader
        eyebrow="The platform"
        title={<>One platform, <span style={{ color: '#326BFF' }}>every surface.</span></>}
        subtitle="VIGIA is an edge-AI road-safety platform that detects hazards on-device, protects every driver in range, and pays you back for the data you contribute."
        actions={
          <>
            <Link to="/signup" className="btn-primary">Start free trial</Link>
            <Link to="/demo" className="btn-outline">View demo</Link>
          </>
        }
      />

      {/* Three pillars: Detect / Protect / Earn */}
      <Section pad="100px 7%">
        <SectionHead eyebrow="How it works" title="Detect. Protect. Earn." subtitle="Three capabilities, one continuous loop — running at the edge on hardware you already drive with." />
        <BoxedTabs tabs={pillarTabs} />
      </Section>

      {/* Three surfaces */}
      <Section bg="#F5F5F5" border pad="100px 7%">
        <BoxedTabs heading={<>Built for<br /><span style={{ color: '#326BFF' }}>every surface.</span></>} tabs={surfaceTabs} />
      </Section>

      {/* Capability cards */}
      <Section pad="100px 7%">
        <SectionHead eyebrow="Under the hood" title="Engineered for the edge" />
        <CardGrid cards={[
          { eyebrow: 'Latency', title: 'Sub-50 ms inference', body: 'A quantised perception stack runs the full detect–depth–TTC pipeline in a single pass on a Raspberry Pi.' },
          { eyebrow: 'Offline', title: 'No cloud dependency', body: 'Detection, alerts, and warnings all work with zero connectivity. The network is a bonus, not a requirement.' },
          { eyebrow: 'Range', title: '300 m BLE alerts', body: 'Verified hazards broadcast over Bluetooth Low Energy to every VIGIA driver in range — no infrastructure needed.' },
          { eyebrow: 'Trust', title: 'Signed road events', body: 'Each event is ECDSA-signed at the blackbox, making contributed data tamper-evident and reward-eligible.' },
          { eyebrow: 'Rewards', title: '$VGA on every km', body: 'A DePIN incentive layer pays drivers for verified contributions, turning roads into shared infrastructure.' },
          { eyebrow: 'Open', title: 'APIs & protocols', body: 'REST, MQTT, and a documented BLE spec let fleets and cities build directly on the VIGIA network.' },
        ]} />
      </Section>

      {/* Editorial spotlight (reuses FeatureSpotlight) */}
      <FeatureSpotlight
        heading="A copilot that talks you through the road."
        body="The VIGIA voice copilot is conversational, context-aware, and always on — surfacing hazards, rerouting around danger, and keeping drivers' eyes on the road instead of a screen."
        image={<DarkFrame><CopilotMockup /></DarkFrame>}
        flip
        bg="#F5F5F5"
        secondaryImage="/sec-alert.jpg"
      />

      <CTA />
    </div>
  );
}

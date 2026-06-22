import { Link } from 'react-router-dom';
import FormPage from '../components/FormPage';

export default function ContactSales() {
  return (
    <FormPage
      eyebrow="Talk to us"
      title="Contact sales"
      subtitle="We'll help you roll VIGIA out across your fleet or city. Tell us about your use case and we'll be in touch shortly."
      submitLabel="Get in touch"
      success="Thanks — a member of our team will reach out within one business day."
      columns={2}
      wave
      fields={[
        { name: 'first', label: 'First name', placeholder: 'Asha', required: true },
        { name: 'last', label: 'Last name', placeholder: 'Rao', required: true },
        { name: 'email', label: 'Work email', type: 'email', placeholder: 'you@company.com', required: true },
        { name: 'company', label: 'Company', placeholder: 'Bharat Logistics', required: true },
        { name: 'fleet', label: 'Fleet / deployment size', type: 'select', placeholder: 'Select size', options: ['1–10 vehicles', '11–100 vehicles', '101–1,000 vehicles', '1,000+ vehicles', 'City-wide'], full: true },
        { name: 'message', label: 'Tell us about your use case', type: 'textarea', placeholder: 'What are you trying to achieve with VIGIA?', rows: 4, full: true },
      ]}
      footer={
        <p style={{ margin: 0 }}>
          Just exploring? <Link to="/demo" style={{ color: '#326BFF', textDecoration: 'none', fontWeight: 600 }}>Watch a demo →</Link>
        </p>
      }
    />
  );
}

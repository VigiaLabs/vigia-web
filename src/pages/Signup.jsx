import { Link } from 'react-router-dom';
import FormPage from '../components/FormPage';

export default function Signup() {
  return (
    <FormPage
      eyebrow="Start free trial"
      title="Create your account"
      subtitle="No credit card required. Get real-time hazard alerts and start earning $VGA on every drive."
      submitLabel="Create account"
      success="Account created — check your inbox to verify your email."
      columns={2}
      wave
      fields={[
        { name: 'first', label: 'First name', placeholder: 'Asha', required: true },
        { name: 'last', label: 'Last name', placeholder: 'Rao', required: true },
        { name: 'email', label: 'Work email', type: 'email', placeholder: 'you@example.com', required: true, full: true },
        { name: 'password', label: 'Password', type: 'password', placeholder: 'At least 8 characters', required: true, full: true },
        { name: 'use', label: 'I am a…', type: 'select', placeholder: 'Choose one', options: ['Individual driver', 'Fleet operator', 'City / government', 'Developer', 'Researcher'], full: true },
      ]}
      footer={
        <p style={{ margin: 0 }}>
          Already have an account? <Link to="/login" style={{ color: '#326BFF', textDecoration: 'none', fontWeight: 600 }}>Log in →</Link>
        </p>
      }
    />
  );
}

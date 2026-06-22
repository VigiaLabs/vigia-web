import { Link } from 'react-router-dom';
import FormPage from '../components/FormPage';

export default function Login() {
  return (
    <FormPage
      eyebrow="Welcome back"
      title="Log in to VIGIA"
      subtitle="Access your hazard map, $VGA wallet, and node dashboard."
      submitLabel="Log in"
      success="Signed in — redirecting to your dashboard…"
      fields={[
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
        { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••', required: true },
      ]}
      footer={
        <>
          <p style={{ margin: '0 0 8px' }}>
            <Link to="/login" style={{ color: '#326BFF', textDecoration: 'none' }}>Forgot your password?</Link>
          </p>
          <p style={{ margin: 0 }}>
            New to VIGIA? <Link to="/signup" style={{ color: '#326BFF', textDecoration: 'none', fontWeight: 600 }}>Start free trial →</Link>
          </p>
        </>
      }
    />
  );
}

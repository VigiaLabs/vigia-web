import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShaderWave from './ShaderWave';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const inputStyle = {
  width: '100%', boxSizing: 'border-box',
  border: '1px solid #E7E7E7', borderRadius: 6,
  padding: '13px 16px', fontSize: 15,
  fontFamily: GRAPHIK, color: '#000', background: '#fff',
  outline: 'none', transition: 'border-color 0.15s',
};

function Field({ field }) {
  const common = {
    id: field.name, name: field.name, required: field.required,
    placeholder: field.placeholder, style: inputStyle,
    onFocus: e => (e.target.style.borderColor = '#326BFF'),
    onBlur: e => (e.target.style.borderColor = '#E7E7E7'),
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <label htmlFor={field.name} style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>
        {field.label}{field.required && <span style={{ color: '#326BFF' }}> *</span>}
      </label>
      {field.type === 'textarea' ? (
        <textarea {...common} rows={field.rows || 4} style={{ ...inputStyle, resize: 'vertical' }} />
      ) : field.type === 'select' ? (
        <select {...common} defaultValue="">
          <option value="" disabled>{field.placeholder || 'Select…'}</option>
          {field.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={field.type || 'text'} {...common} />
      )}
    </div>
  );
}

/* Clean centred form page — reuses the CTA.jsx input/button language.
   Used by Login, Signup, Contact sales, and Demo. Non-functional submit. */
export default function FormPage({
  eyebrow, title, subtitle, fields, submitLabel,
  footer, columns = 1, success = "Thanks — we'll be in touch shortly.",
  wave = false,
}) {
  const [done, setDone] = useState(false);

  return (
    <div style={{ fontFamily: GRAPHIK, background: '#fff' }}>
      <section style={{ padding: '80px 7% 100px', display: 'grid', placeItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: columns === 2 ? 640 : 460 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            {eyebrow && (
              <p style={{ fontFamily: MONO, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', margin: '0 0 16px' }}>{eyebrow}</p>
            )}
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#000', letterSpacing: '-0.03em', lineHeight: 1.08, margin: 0 }}>{title}</h1>
            {subtitle && <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, margin: '16px auto 0', maxWidth: 440 }}>{subtitle}</p>}
          </div>

          {done ? (
            <div style={{
              border: '1px solid #E7E7E7', borderRadius: 10, background: '#F5F5F5',
              padding: '48px 32px', textAlign: 'center',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#326BFF', display: 'grid', placeItems: 'center', margin: '0 auto 18px' }}>
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <p style={{ fontSize: 17, fontWeight: 600, color: '#111', margin: 0 }}>{success}</p>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setDone(true); }}
              style={{
                border: '1px solid #E7E7E7', borderRadius: 12, background: '#fff',
                padding: '32px', display: 'grid',
                gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr', gap: 18,
              }}
            >
              {fields.map(f => (
                <div key={f.name} style={{ gridColumn: f.full && columns === 2 ? '1 / -1' : 'auto' }}>
                  <Field field={f} />
                </div>
              ))}
              <button type="submit" style={{
                gridColumn: '1 / -1',
                background: '#000', color: '#fff', border: 'none', cursor: 'pointer',
                borderRadius: 6, padding: '14px 24px', fontSize: 15, fontWeight: 600,
                fontFamily: GRAPHIK, marginTop: 4, transition: 'background 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#333')}
                onMouseLeave={e => (e.currentTarget.style.background = '#000')}
              >{submitLabel}</button>
            </form>
          )}

          {footer && <div style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: '#6B6B6B' }}>{footer}</div>}
        </div>
      </section>

      {wave && (
        <div style={{ position: 'relative', height: 200, width: '100%', overflow: 'hidden', background: '#09090B' }}>
          <ShaderWave />
        </div>
      )}
    </div>
  );
}

export { Link };

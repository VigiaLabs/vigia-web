import ShaderWave from './ShaderWave';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

/* Shared hero header for inner pages — eyebrow + two-tone heading + subcopy,
   optionally followed by an animated ShaderWave accent strip (reused from the
   homepage hero). Matches the homepage hero's centred-square + spacing system. */
export default function PageHeader({
  eyebrow,
  title,          // string or JSX (use <span style={{color:'#326BFF'}}> for the two-tone accent)
  subtitle,
  actions,        // optional JSX (buttons)
  wave = true,    // show the animated shader accent strip
  align = 'left',
}) {
  return (
    <section style={{ background: '#fff', overflow: 'hidden', fontFamily: GRAPHIK }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '88px 7% 64px',
        textAlign: align,
        display: 'flex', flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
      }}>
        {eyebrow && (
          <p style={{
            fontFamily: MONO, fontSize: 12, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#888', margin: '0 0 20px',
          }}>{eyebrow}</p>
        )}
        <h1 style={{
          fontSize: 'clamp(2.6rem, 5.4vw, 4.4rem)', fontWeight: 800,
          color: '#000', lineHeight: 1.05, letterSpacing: '-0.03em',
          margin: 0, maxWidth: 820,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: 19, color: '#555', lineHeight: 1.6,
            margin: '24px 0 0', maxWidth: 600,
          }}>
            {subtitle}
          </p>
        )}
        {actions && <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>{actions}</div>}
      </div>

      {wave && (
        <div style={{ position: 'relative', height: 280, width: '100%', overflow: 'hidden', background: '#09090B' }}>
          <ShaderWave />
        </div>
      )}
    </section>
  );
}

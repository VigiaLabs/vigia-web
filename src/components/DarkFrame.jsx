/* Wraps dark-theme mockups in a self-contained dark context so they
   render correctly inside the light-mode page, the same way Intercom
   shows their dark app UI on white sections. */
export default function DarkFrame({ children }) {
  return (
    <div style={{
      background: '#09090B',
      borderRadius: 25,
      overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
      '--tw-shadow-color': 'rgba(0,0,0,0.5)',
    }}
      className="dark-frame"
    >
      {children}
    </div>
  );
}

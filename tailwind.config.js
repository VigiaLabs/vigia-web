/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        'ink-2': '#141416',
        'ink-3': '#1C1C1F',
        paper: '#F2F1ED',
        'paper-2': '#E7E5DE',
        accent: '#EA4E32',
        'accent-soft': '#F6A593',
        'on-ink': '#F7F6F3',
        'muted-ink': '#9C9C97',
        'on-paper': '#0A0A0B',
        'muted-paper': '#6B6B64',
        'line-dark': 'rgba(255,255,255,0.10)',
        'line-light': 'rgba(10,10,11,0.12)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.25' } },
      },
      animation: {
        'spin-slow': 'spinSlow 90s linear infinite',
        orbit: 'orbit 24s linear infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

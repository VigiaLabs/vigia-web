/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral, institutional dark (x.ai register)
        bg: '#09090B',
        'bg-2': '#0E0E11',
        surface: '#131316',
        'surface-2': '#1A1A1F',
        ink: '#F5F5F7',
        muted: '#9A9AA3',
        'muted-2': '#67676F',
        line: 'rgba(255,255,255,0.08)',
        'line-2': 'rgba(255,255,255,0.15)',
        // Single restrained accent — soft professional blue
        accent: '#6E9BFF',
        'accent-soft': '#A9C0FF',
        // Semantic only (used sparingly): money/warning + success
        amber: '#E0B24C',
        success: '#5FBF86',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { content: '1200px' },
      letterSpacing: { tightest: '-0.03em' },
      borderRadius: { '4xl': '2rem' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spinSlow 16s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

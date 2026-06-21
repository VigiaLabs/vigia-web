/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm Horizon — Porcelain (light)
        porcelain: '#F6F3EC',
        cream: '#FBF9F4',
        surface: '#FFFFFF',
        peach: '#FAE6CF',
        // Ember (dark)
        ember: '#141210',
        'ember-2': '#1D1A17',
        'ember-3': '#282420',
        // Ink / text
        ink: '#1B1A17',
        muted: '#565049',
        'muted-2': '#8A8378',
        'on-ember': '#EFE9E1',
        'muted-ember': '#B5ACA0',
        // Lines
        line: '#E2DBCF',
        'line-strong': '#C7BFB1',
        'line-ember': 'rgba(255,255,255,0.10)',
        // Brand
        blue: '#3A5BD9',
        'blue-ink': '#15336E',
        violet: '#6A57C7',
        // Orb rims
        'orb-pink': '#FF3D8F',
        'orb-violet': '#8F6CF6',
        'orb-blue': '#4CC2FF',
        'orb-core': '#2E2450',
        'orb-edge': '#0A0716',
        // Token + states
        gold: '#D97706',
        'gold-soft': '#FBBF24',
        success: '#1E8E4E',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spinSlow 14s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark "Ember Night" base
        bg: '#0C0A09',
        'bg-2': '#15110E',
        surface: '#1A1512',
        'surface-2': '#221C18',
        ink: '#F4EFE9',
        muted: '#A39B90',
        'muted-2': '#6F665C',
        line: 'rgba(244,239,233,0.09)',
        'line-2': 'rgba(244,239,233,0.16)',
        // Electric accent (orb-blue / cyan)
        cyan: '#4CC2FF',
        // Orb gradient stops
        pink: '#FF3D8F',
        violet: '#8F6CF6',
        blue: '#4CC2FF',
        // $VGA token
        gold: '#FBBF24',
        success: '#6FCF8E',
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
        'spin-slow': 'spinSlow 14s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

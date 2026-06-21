/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060809',
        surface: '#0D1117',
        'surface-2': '#141A21',
        primary: '#22D3EE',
        earn: '#34E5B0',
        alert: '#F5A623',
        text: '#E6EDF3',
        muted: '#8B98A5',
        hairline: '#1C2530',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['"Exo 2"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34, 211, 238, 0.45)',
        'glow-earn': '0 0 40px -10px rgba(52, 229, 176, 0.45)',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        radar: 'radar 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

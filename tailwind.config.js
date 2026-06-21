/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-2': '#F5F5F5',
        surface: '#F5F5F5',
        ink: '#000000',
        muted: '#6B6B6B',
        'muted-2': '#A0A0A0',
        accent: '#326BFF',
        line: '#E7E7E7',
        'line-2': '#D0D0D0',
        success: '#00A862',
        amber: '#F5A623',
      },
      fontFamily: {
        display: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: { content: '1290px' },
    },
  },
  plugins: [],
}

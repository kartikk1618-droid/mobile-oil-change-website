/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EAF0F6',
          100: '#C9D8E8',
          200: '#9AB4CE',
          300: '#6B8FB4',
          400: '#3F6A95',
          500: '#1A4A75',
          600: '#103A60',
          700: '#0A2540',
          800: '#071A30',
          900: '#04101F',
        },
        orange: {
          50: '#FFF3E8',
          100: '#FFE0C4',
          200: '#FFC088',
          300: '#FFA14D',
          400: '#FF8520',
          500: '#FF6B00',
          600: '#E55F00',
          700: '#B84A00',
          800: '#8A3800',
          900: '#5C2500',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(10, 37, 64, 0.08)',
        card: '0 8px 30px -6px rgba(10, 37, 64, 0.12)',
        glow: '0 0 30px -5px rgba(255, 107, 0, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};

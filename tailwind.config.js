/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deepgram Color Palette
        deepgram: {
          dark: {
            DEFAULT: '#101014',
            lighter: '#18181D',
            darker: '#0B0B0C',
          },
          border: {
            DEFAULT: '#2C2C33',
            light: '#3A3A42',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#EDEDF2',
            muted: '#A9A9AD',
            light: '#CECED2',
          },
          accent: {
            blue: '#149AFB',
            teal: '#13EF95',
            cyan: '#00E5FF',
          },
        },
        // Keep logo colors for brand consistency
        brand: {
          cyan: '#16BDCA',
          teal: '#0EA5E9',
          'cyan-bright': '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Roobert', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'deepgram-gradient': 'linear-gradient(90deg, #149AFB 0%, #13EF95 100%)',
        'deepgram-gradient-hover': 'linear-gradient(90deg, #1AA8FF 0%, #1FFFA0 100%)',
        'starry-sky': 'radial-gradient(ellipse at top, rgba(20, 154, 251, 0.15), transparent 50%), radial-gradient(ellipse at bottom, rgba(19, 239, 149, 0.15), transparent 50%)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'background-move': 'background-move 5s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'background-move': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      boxShadow: {
        'deepgram': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'deepgram-hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'deepgram-glow': '0 0 20px rgba(20, 154, 251, 0.3), 0 0 40px rgba(19, 239, 149, 0.2)',
        'deepgram-glow-strong': '0 0 30px rgba(20, 154, 251, 0.5), 0 0 60px rgba(19, 239, 149, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


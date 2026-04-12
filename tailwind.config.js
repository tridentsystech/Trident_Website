/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B2335',
        'primary-dark': '#7A1B2A',
        'primary-light': '#B83A4D',
        'primary-subtle': '#F5E6E8',
        accent: '#C4573A',
        'accent-warm': '#D4855C',
        'accent-amber': '#E8A858',
        dark: '#1A1A2E',
        'dark-light': '#2D2D44',
        'dark-muted': '#3D3D55',
        'gray-text': '#5C5C72',
        'gray-light': '#8E8EA0',
        'gray-border': '#E2E2EC',
        'gray-bg': '#F4F4F8',
        'gray-bg-light': '#FAFAFE',
        'surface': '#ffffff',
        'warm-bg': '#FDF8F6',
        'warm-bg-light': '#FEFCFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-loading': 'bounce 1s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #FEFCFB 0%, #FDF8F6 25%, #F5E6E8 50%, #FEFCFB 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(155, 35, 53, 0.12)',
        'glow-lg': '0 0 60px rgba(155, 35, 53, 0.18)',
        'card': '0 4px 24px rgba(26, 26, 46, 0.06)',
        'card-hover': '0 20px 50px rgba(155, 35, 53, 0.12)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Standard Tailwind dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        odoo: { DEFAULT: "#714B67" },
        jewel: {
          DEFAULT: '#3A1F3C',
          gold: '#D4AF37',
          pearl: '#F8F6F2',
        },
        accent: {
          teal: '#20C997',
          cyan: '#17A2B8',
          orange: '#FF6F00',
          pink: '#EC4899',
          purple: '#A855F7',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      backgroundColor: {
        'light': '#FFFFFF',
        'dark': '#000000',
        'light-secondary': '#F3F4F6',
        'dark-secondary': '#1F2937',
      },
      textColor: {
        'light': '#111111',
        'dark': '#F5F4F2',
        'light-secondary': '#6B7280',
        'dark-secondary': '#D1D5DB',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        '3xl': '64px',
      },
      boxShadow: {
        'glossy-orange': '0 20px 40px -15px rgba(255, 111, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        'glossy-blue': '0 20px 40px -15px rgba(23, 162, 184, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        'glossy-emerald': '0 20px 40px -15px rgba(16, 185, 129, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
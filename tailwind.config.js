/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        odoo: {
          DEFAULT: "#714B67",
        },
      },
      keyframes: {
        pulseSoft: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.95' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
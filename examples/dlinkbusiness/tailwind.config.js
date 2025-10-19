/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0051ff',
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8190ff',
          500: '#0051ff',
          600: '#0047e6',
          700: '#003dcc',
          800: '#0033b3',
          900: '#002999',
        },
        accent: {
          DEFAULT: '#ffd700',
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff7c7',
          300: '#fff2a5',
          400: '#ffed81',
          500: '#ffd700',
          600: '#e6c200',
          700: '#ccad00',
          800: '#b39800',
          900: '#998300',
        },
        'primary-hover': '#0047e6',
        'accent-hover': '#e6c200',
        light: '#f8f9fa',
        'light-hover': '#e9ecef',
        'secondary-foreground': '#6c757d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

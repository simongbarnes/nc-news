/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '600px',
      lg: '976px',
      xl: '1400px',
    },
    container: {
      center: true,
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'monospace']
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


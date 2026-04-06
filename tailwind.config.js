/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'float-updown': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-leftright': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(15px)' },
        },
      },
      animation: {
        'float-ud': 'float-updown 3s ease-in-out infinite',
        'float-lr': 'float-leftright 3s ease-in-out infinite',
      },
      fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      josefin: ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
}
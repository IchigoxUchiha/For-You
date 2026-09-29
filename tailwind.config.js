/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#fbf7f0',
          200: '#f6eee3',
          300: '#eddccb',
        },
        blush: {
          50: '#fdf6f5',
          100: '#fbece9',
          200: '#f7dad4',
          300: '#f4d3ce',
        },
        lavender: {
          50: '#faf7fc',
          100: '#f3eef8',
          200: '#e7ddf2',
        },
        butter: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
        },
        amberGold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}

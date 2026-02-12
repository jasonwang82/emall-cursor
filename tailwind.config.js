/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#1a1a1a',
          gray: '#6b6b6b',
          lightgray: '#e5e5e5',
          white: '#ffffff',
          beige: '#f5f1ed',
          navy: '#2c3e50'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

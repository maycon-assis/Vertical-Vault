/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./server/public/index.html', './client/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        dm: "'DM Mono', monospace",
      },
    },
  },
  plugins: [],
}

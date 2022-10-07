/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosans: ["Noto Sans JP"],
      },
      backgroundImage: {
        'custom-background-pattern': "url('../../static/images/setting.png')",
      }
    },
  },
  plugins: [],
}

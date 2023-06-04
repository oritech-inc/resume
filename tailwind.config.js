/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: ["Roboto", "sans-serif"]
      },
      colors: {
        bodyColor: '#2f4f4f',
        greenColor: 'rgba(47, 79, 79, .5)',
        redColor: '#bd6178',
        whiteColor: '#ffffff',
        darkColor: '#000000',
        grayColor: '#1f2937',
        lightColor: 'rgba(255, 255, 255, 0.5)',
        boxBg: 'linear-gradient(145deg, #2f4f4f,#2f4f3f)',
        secondaryColor: '#6B8E23',
        colorTheme: 'light dark'
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #2f4f4f'
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}


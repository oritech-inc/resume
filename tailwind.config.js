/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        bodyColor: '#2f4f4f',
        lightColor: 'rgba(255, 255, 255, 0.87)',
        boxBg: 'linear-gradient(145deg, #2f4f4f,#2f4f3f)',
        secondaryColor: '#6B8E23',
        colorTheme: 'light dark'
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}


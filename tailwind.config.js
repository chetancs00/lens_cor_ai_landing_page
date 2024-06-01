/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(135deg, #bceedf 0%, #fff 25%, #c0e9f8 50%, #fff 75%, #fddbd7 100%), linear-gradient(225deg, #bceedf 0%, #fff 25%, #c0e9f8 50%, #fff 75%, #fce7c8 100%)',  
      },
      colors: {
        darkMode: "#000",
        'card-green': 'rgba(1, 201, 155, 0.15)',
        'card-blue': 'rgba(3, 177, 249, 0.2)',
        'card-red': 'rgba(255, 107, 102, 0.2)',
        'card-orange': 'rgba(255, 159, 49, 0.15)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        'display': ['Poppins'],
        "body": ['Poppins', "raleway"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode variant for background color
    },
  },
  plugins: [],
};

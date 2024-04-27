/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sedan: ["Sedan", "serif"], // Add this line
      },
      // If you want to apply the font only to inputs
      components: {
        input: {
          fontFamily: "sedan",
        },
      },
    },
  },
  plugins: [],
};

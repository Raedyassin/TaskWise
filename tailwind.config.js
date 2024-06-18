/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#094B4B",
        secondary: "#F69C0C",
        tertiary: "#E6E6E6",
        Gradient: "#042525",
        card: "#0B5B5B",
      },
    },
    fontFamily: {
      title: [" Poppins", "sans-serif" ],
    },
  },
  plugins: [],
};

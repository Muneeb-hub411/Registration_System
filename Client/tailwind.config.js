/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DM: ["DM Serif Text", "serif"],
      },
      backgroundImage: {
        // "custom-gradient":
        //   "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        "custom-gradient":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 55%, rgba(0,41,49,1) 100%)",
      },
    },
  },
  plugins: [],
};

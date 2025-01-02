/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/React component files
  ],
  theme: {
    extend: {
      // Add custom themes or extend Tailwind's defaults here
    },
  },
  plugins: [],
};

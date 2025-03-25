/** @type {import('tailwindcss').Config} */

const config = {
  plugins: {
    "@tailwindcss/postcss": {}
  },
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Untuk App Router (Next.js 13+)
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Untuk Page Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Untuk komponen
  ],
};

export default config;

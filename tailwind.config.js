/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Add paths to your Astro components
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#DEB349',
        'color-black': '#070707',
        'color-blue':' #50808E',
        'color-pink': '#FF3CC7',
      },
      fontFamily: { 
        'SpaceMono': ['Space Mono', 'monospace'] ,
      }
    },
  },
  plugins: [],
};

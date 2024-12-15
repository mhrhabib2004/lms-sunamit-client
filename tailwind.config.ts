import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // Enable dark mode with class toggle
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],  // Custom Poppins font
        Josefin: ["var(--font-Josefin)"],  // Custom Josefin font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // plugins: [
  //   require('daisyui'),
  // ],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      accent: "Aclonica",
      primary: "Inter",
    },
    extend: {
      content: {
        "leaf-element": "url('/assets/icons/leaf.svg')",
        "email-svg": "url('/assets/icons/email_icon.svg')",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2BAE7A",
        primaryLight: "#DDFBF0",
        accent: "#D2B48C",
      },
    },
  },
  plugins: [],
};
export default config;

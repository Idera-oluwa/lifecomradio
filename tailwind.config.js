/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "explore-bg": "url('/images/explore/explore-hero-bg.svg')",
        "explore-bg2": "url('/images/explore/explore-bg2.png')",
        "explore-bg3": "url('/images/explore/explore-bg3.png')",
        "explore-bg4": "url('/images/explore/explore-bg4.png')",
        "explore-bg-2": "url('/images/explore/explore-hero-bg2.svg')",
        "bg-explore-hero-3": "url('/images/explore/bg-explore-hero-3.jpeg')",
        "podcast-bg": "url('/images/podcasts/podcast-bg.svg')",
        "onAir-bg": "url('/images/schedule/bg-default.png')",
        "onAir-bg2": "url('/images/schedule/bg-active.png')",
        "breaking-bg": "url('/images/home/breaking-news2.svg')",
        "breaking-bg2": "url('/images/home/breaking-news4.svg')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(260px, 1fr))",
      },
    },
  },
  plugins: [],
};

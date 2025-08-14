/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        grey: "var(--grey)",
        basegrey: "var(--basegrey)",
        offwhite: "var(--offwhite)",
        greyBg: "var(--greyBg)",
      },
    },
    animation: {
      textRotation: "textRotation 8s linear infinite",
    },
    keyframes: {
      textRotation: {
        to: { transform: "rotate(360deg)" },
      },
    },
    fontFamily: {
      belleza: ["Belleza", "sans-serif"],
      bendungan: ["Bendungan", "sans-serif"],
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-75%)" },
      },
      marqueeEngagementRings: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-10%)" },
      },
    },

    animation: {
      "marquee-smooth": "marquee 20s linear infinite",
      "marquee-smooth-md": "marquee 5s linear infinite",
      marquee: "marquee 20s linear infinite",

      "marquee-engagement-rings": "marqueeEngagementRings 20s linear infinite",
      "marquee-engagement-rings-md": "marqueeEngagementRings 20s linear infinite",
      marqueeEngagementRings: "marqueeEngagementRings 20s linear infinite",
    },
    screens: {
      xxs: "320px",
      xss: "400px",
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1740px",
      "5xl": "1920px",
      "6xl": "2200px",
    },
    container: {
      center: true,
      margin: "0 auto",
      padding: "1rem",
      screens: {
        xxs: "310px",
        xss: "380px",
        xs: "546px",
        sm: "620px",
        md: "718px",
        lg: "992px",
        xl: "1180px",
        "2xl": "1420px",
        "3xl": "1516px",
        "4xl": "1700px",
      },
    },
  },

  plugins: [],
};

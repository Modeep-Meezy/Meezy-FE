/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        primary: {
          50: "#FDE5D9",
          100: "#FBBB9C",
          200: "#FAAA83",
          300: "#F99564",
          400: "#F77B3D",
          500: "#F55A0D",
          600: "#C4480A",
          700: "#9D3A08",
          800: "#7E2E06",
          900: "#652505",
          1000: "#270E02",
        },

        // GRAY
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#6B6B6B",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },

        //SYSTEM
        system: {
          300: "#F96464",
          500: "#9D0808",
          800: "#F50D0D",
        },

        // W/B
        black: "#0E0E0E",
        white: "#FFFFFF",
      },

      // 폰트 설정
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },

      // 타이포그래피 설정
      fontSize: {
        // L Headline
        "L-Headline-B": ["36px", { fontWeight: "700" }],
        "L-Headline-M": ["36px", { fontWeight: "500" }],

        // Headline
        "Headline-B": ["32px", { fontWeight: "700" }],
        "Headline-M": ["32px", { fontWeight: "500" }],

        // Title
        "Title-B": ["28px", { fontWeight: "700" }],
        "Title-M": ["28px", { fontWeight: "500" }],

        // sTitle
        "sTitle-B": ["24px", { fontWeight: "700" }],
        "sTitle-M": ["24px", { fontWeight: "500" }],

        // LBody
        "LBody-B": ["20px", { fontWeight: "700" }],
        "LBody-M": ["20px", { fontWeight: "500" }],

        // Body
        "Body-B": ["16px", { fontWeight: "700" }],
        "Body-M": ["16px", { fontWeight: "500" }],

        // label
        "label-B": ["12px", { fontWeight: "700" }],
        "label-M": ["12px", { fontWeight: "500" }],

        // sLabel
        "sLabel-B": ["10px", { fontWeight: "700" }],
        "sLabel-M": ["10px", { fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};

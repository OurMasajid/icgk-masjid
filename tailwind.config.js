/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./site.js", "./events-data.js"],
  theme: {
    extend: {
      // Light, warm palette: paper and sand backgrounds, pine green for the
      // brand and actions, brass for ornament and small accents. Every text
      // pairing below clears WCAG AA on paper and surface.
      colors: {
        paper: "#FAF7F0",
        sand: { DEFAULT: "#F2EBDC", dark: "#E7DCC6" },
        surface: "#FFFFFF",
        line: { DEFAULT: "#E4D9C5", strong: "#D2C3A6" },
        ink: { DEFAULT: "#2E3A35", strong: "#13201B", muted: "#5B6761" },
        pine: {
          50: "#EEF4F0",
          100: "#DCE9E1",
          200: "#B5D0C1",
          DEFAULT: "#14513B",
          700: "#0F4030",
          800: "#0B3326",
          900: "#08261C",
        },
        brass: {
          light: "#F6ECD6",
          DEFAULT: "#B88A3B",
          dark: "#8A6420",
          bright: "#E8C67F",
        },
      },
      // Amiri sits behind each Latin face: it is already loaded for Arabic and
      // covers the ﷺ ligature and the ʿ/ʾ transliteration marks they lack.
      fontFamily: {
        sans: ["Inter", "Amiri", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Fraunces", "Amiri", "Georgia", "Times New Roman", "serif"],
        display: ["Fraunces", "Amiri", "Georgia", "Times New Roman", "serif"],
        arabic: ["Amiri", "Traditional Arabic", "serif"],
      },
      maxWidth: {
        wrap: "72rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(19,32,27,0.05), 0 8px 24px -12px rgba(19,32,27,0.18)",
        lift: "0 2px 4px rgba(19,32,27,0.04), 0 24px 48px -20px rgba(19,32,27,0.28)",
      },
    },
  },
  plugins: [],
};

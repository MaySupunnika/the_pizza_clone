/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#008556",
        "soft-green": "#ADD8C9",
        gray: "#414142",
        "blue-100": "#EAECF0",
        "blue-200": "#F9F9F9",
        "blue-300": "#DEE1E7",
        "gray-100": "#ECECEC",
      },
      dropShadow: {
        set: "0 6px 6px rgba(0, 0, 0, 0.08)",
        langbox: "0 0 6px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: "arial",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "default": "#F3F6F8",
        "white": "#ffffff",
        "gray-1": "#DFDFDF",
        "black": "#0A0A0A",
        "gray": "#627286",
        "green": "#0FB90F",
      },
    }
  },
  plugins: [],
}


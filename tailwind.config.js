module.exports = {
  purge: ["./src/**/*.jsx"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        md: "830px",
      },
      colors: {
        primary: "#EB6024",
        lightGreenBlue: "#D9F4F6",
        lightlightGreenBlue: "#eef7f9",
        secondary: {
          DEFAULT: "#2FC0CC",
          2: "#5765CE",
          3: "#64555A",
          4: "#F7F5F6",
        },
        danger: "#e3342f",
      },
      maxWidth: {
        "8xl": "108rem",
      },
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
      3: "3 3 0%",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 0 10px #b9b5b5",
      none: "none",
    },
  },
  variants: {},
  plugins: [],
};

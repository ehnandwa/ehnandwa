module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        10: "#EFF6FF",
        11: "#1E40AF",
        12: "#1D4ED8",
        20: "#DBEAFE",
        30: "#BFDBFE",
        40: "#1E3A8A",
        50: "#85d7ff",
        100: "#1fb6ff",
        200: "#009eeb",
      },
      gray: {
        1: "#111827",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    rotate: {
      "-90": "-90deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      spin_low: {
        "0%, 100%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(270deg)" },
      },
      ping: {
        "75%, 100%": { transform: ["scale(1.5)", "opacity(8)"] },
      },
      spin: {
        from: { transform: ["rotate(0deg)"] },
        to: { transform: ["rotate(360deg)"] },
      },
      bounce1: {
        "0%, 100%": { transform: ["translateY(-25%)"] },
        "50%": { transform: ["translateY(0)"] },
      },
      pulse1: {
        "0%, 100%": { opacity: 10 },
        "50%": { opacity: 0.8 },
      },
      scroll1: {
        from: { transform: ["translateX(-100%)"] },

        to: { transform: ["translateX(0)"] },
      },
      scroll12: {
        from: { transform: ["translateX(100%)"] },

        to: { transform: ["translateX(0)"] },
      },
      scroll123: {
        from: { transform: ["translateX(0)"] },

        to: { transform: ["translateX(100%)"] },
      },
    },
    extend: {
      animation: {
        spin_slow: "spin_low 20s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        ping: "ping  35s cubic-bezier(0, 0, 0.2, 1) infinite",
        spin: " spin 11s linear infinite",
        bounce1: "bounce1 3s infinite",
        pulse1: "pulse1 3s cubic-bezier(0.4, 0, 0.6, 1)  infinite",
        scroll1: "120s scroll1 alternate infinite",
        scroll12: "90s scroll12 alternate infinite",
        scroll123: "150s scroll12 alternate infinite",
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
  ],
}

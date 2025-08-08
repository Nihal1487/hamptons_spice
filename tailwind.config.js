module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#722602", // Deep heritage maroon
          50: "#FDF2F2",
          100: "#FCE8E8",
          200: "#F7C6C6",
          300: "#F19A9A",
          400: "#E86D6D",
          500: "#722602",
          600: "#C73333",
          700: "#A52A2A",
          800: "#8B0000",
          900: "#660000",
        },
        secondary: {
          DEFAULT: "#E6B800", // Turmeric gold
          50: "#FFFBF0",
          100: "#FFF7E0",
          200: "#FFEFC2",
          300: "#FFE699",
          400: "#FFDD70",
          500: "#FFD447",
          600: "#E6B800",
          700: "#CC9F00",
          800: "#B38600",
          900: "#996D00",
        },
        accent: {
          DEFAULT: "#FF8C00", // Saffron orange
          50: "#FFF8F0",
          100: "#FFF0E0",
          200: "#FFE1C2",
          300: "#FFD299",
          400: "#FFC370",
          500: "#FFB447",
          600: "#FF8C00",
          700: "#E67A00",
          800: "#CC6800",
          900: "#B35600",
        },
        background: "#FEFEFE", // Clean canvas
        surface: "#F8F6F0", // Warm cream
        redBg: "#722602",
        text: {
          primary: "#2C2C2C", // Professional charcoal
          secondary: "#666666", // Clear hierarchy
        },
        success: {
          DEFAULT: "#228B22", // Natural green
          50: "#F0FFF0",
          100: "#E0FFE0",
          200: "#C2FFC2",
          300: "#99FF99",
          400: "#70FF70",
          500: "#47FF47",
          600: "#228B22",
          700: "#1F7A1F",
          800: "#1C691C",
          900: "#195819",
        },
        warning: {
          DEFAULT: "#DAA520", // Goldenrod
          50: "#FFFDF0",
          100: "#FFFAE0",
          200: "#FFF5C2",
          300: "#FFF099",
          400: "#FFEB70",
          500: "#FFE647",
          600: "#DAA520",
          700: "#C2941D",
          800: "#AA831A",
          900: "#927217",
        },
        error: {
          DEFAULT: "#CD5C5C", // Muted red
          50: "#FDF5F5",
          100: "#FBEAEA",
          200: "#F5D0D0",
          300: "#EFB1B1",
          400: "#E99292",
          500: "#E37373",
          600: "#CD5C5C",
          700: "#B85252",
          800: "#A34848",
          900: "#8E3E3E",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"], // Headlines
        inter: ["Inter", "sans-serif"], // Body and CTAs
        kalam: ["Kalam", "cursive"], // Accents
        sans: ["Inter", "sans-serif"], // Default sans
        serif: ["Playfair Display", "serif"], // Default serif
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        heading: ["2rem", { lineHeight: "1.3" }],
        subheading: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      boxShadow: {
        warm: "0 2px 10px rgba(139, 0, 0, 0.08)",
        subtle: "0 4px 20px rgba(139, 0, 0, 0.1)",
        deep: "0 8px 30px rgba(139, 0, 0, 0.15)",
        heritage: "0 4px 20px rgba(139, 0, 0, 0.1)",
      },
      borderColor: {
        heritage: "rgba(139, 0, 0, 0.1)",
        "heritage-medium": "rgba(139, 0, 0, 0.2)",
      },
      transitionDuration: {
        heritage: "300ms",
        "heritage-medium": "400ms",
        "heritage-slow": "600ms",
      },
      transitionTimingFunction: {
        heritage: "ease-out",
      },
      animation: {
        "spice-dust": "spice-dust 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        "spice-dust": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.8)",
          },
          "50%": {
            opacity: "0.6",
            transform: "translateY(-10px) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-30px) scale(0.8)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backdropBlur: {
        heritage: "8px",
      },
    },
  },
  plugins: [],
};

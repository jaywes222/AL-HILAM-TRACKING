/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        landingPageBg: "url('/landing-bg.png')",
        eventRSVPDesktop: "url('/event-RSVP-desktop.png')",
        eventRSVPMobile: "url('/event-RSVP-mobile.png')",
        "glow-primary": "linear-gradient(to right, transparent, rgba(96,206,85,0.4), transparent)",
        "glow-primary-soft": "linear-gradient(to right, transparent, rgba(96,206,85,0.25), transparent)",
        "grad-primary": "linear-gradient(to right, #A8E6A3, #FBE8A6)", // soft green → soft yellow
        "grad-active-bg": "linear-gradient(to right, rgba(168,230,163,0.1), rgba(251,232,166,0.1))",
        "grad-active-bg-mobile": "linear-gradient(to right, rgba(168,230,163,0.2), rgba(251,232,166,0.2))",
      },
      colors: {
        /* ─── Primary system ─── */
        primary: "#49CC90",      // swagger green base
        secondary: "#4caf50",    // slightly darker complementary

        /* ─── Green scale ─── */
        green: {
          dark: "#2E7D32",       // dark forest green
          hero: "#38B67D",       // lively forest green
          header: "#60CE55",     // main swagger green
          light: "#DFFFE1",      // minty/light green tint
          footer: "#FACC15",     // bright yellow accent stays
        },

        /* ─── Neutral greys (green-warmed) ─── */
        grey: {
          light: "#EDF7F0",      // very soft, near white
          neutral: "#7BB78A",    // olive-neutral, mid light
          mild: "#C4E6D0",       // muted sage/green
          dark: "#3D6044",       // soft dark forest
          darker: "#95C7A7",     // mid sage, lightened
        },

        text: {
          primary: "#60CE55",     // dark forest green for main text
          secondary: "#4caf50",   // slightly darker for subheadings
          muted: "#7BB78A",      // olive-neutral for less emphasis
        },


        /* ─── Status colors ─── */
        error: {
          bg: "#FEF3F2",
          text: "#B42318",
        },

        /* ─── Yellow accents ─── */
        yellow: {
          hero: "#Fcd34d",    // soft golden yellow
        },
      },
      maxWidth: {
        1440: "1440px",
        1216: "1216px",
        768: "768px",
      },
      listStyleImage: {
        checkmark: "url('/check.svg')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

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
        // Palette gradients – reusable across all components
        "glow-primary":       "linear-gradient(to right, transparent, rgba(46,125,50,0.7), transparent)",
        "glow-primary-soft":  "linear-gradient(to right, transparent, rgba(46,125,50,0.5), transparent)",
        "grad-primary":       "linear-gradient(to right, #2E7D32, #FACC15)",
        "grad-active-bg":     "linear-gradient(to right, rgba(46,125,50,0.15), rgba(202,138,4,0.15))",
        "grad-active-bg-mobile": "linear-gradient(to right, rgba(46,125,50,0.3), rgba(202,138,4,0.3))",
      },
      colors: {
        /* ─── Primary system ─── */
        primary: "#2E7D32",          // deep green  (was #1E88E5 blue)
        secondary: "#1B2E1B",       // dark forest (was #252533 dark charcoal)

        /* ─── Green scale (replaces blue scale) ─── */
        green: {
          dark: "#1A4D1A",          // dark green      (was #0D3B66)
          hero: "#14532D",          // deep forest     (was #0B2F4A)
          header: "#166534",        // mid green       (was #1F5E79)
          light: "#F0FDF4",         // mint tint       (was #EAF2FB)
          footer: "#FACC15",        // bright yellow   (was #00CFFF)
        },

        /* ─── Neutral greys (warmed toward green) ─── */
        grey: {
          light: "#E8EDE8",         // cool sage       (was #E6EDF5)
          neutral: "#4A5E4A",       // olive neutral   (was #656767)
          mild: "#C9D4C4",          // muted sage      (was #DEDADA)
          dark: "#2B3D2B",          // dark forest     (was #263238)
          darker: "#6B7D6B",        // mid sage        (was #828282)
        },

        /* ─── Status colors (kept functional) ─── */
        error: {
          bg: "#FEF3F2",
          text: "#B42318",
        },

        /* ─── Yellow accent (replaces orange) ─── */
        yellow: {
          hero: "#CA8A04",          // golden yellow   (was #FF9500)
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
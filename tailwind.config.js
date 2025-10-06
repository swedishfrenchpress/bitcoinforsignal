const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Signal/Bulma design system colors (hsl(221, 14%, X%))
      "signal-blue": "hsl(233, 100%, 63%)",
      "signal-blue-light": "hsl(233, 100%, 88%)",
      "signal-blue-dark": "hsl(233, 100%, 8%)",
      "signal-primary": "hsl(171, 100%, 41%)", // Teal accent
      "signal-text": "hsl(221, 14%, 29%)", // Main text
      "signal-text-weak": "hsl(221, 14%, 48%)", // Secondary text
      "signal-text-strong": "hsl(221, 14%, 21%)", // Headings
      "signal-text-title": "hsl(221, 14%, 14%)", // Strong headings
      "signal-bg": "hsl(221, 14%, 96%)", // Light background
      "signal-border": "hsl(221, 14%, 86%)", // Border color
      "signal-border-weak": "hsl(221, 14%, 93%)", // Lighter border
      "signal-dark": "hsl(221, 14%, 21%)", // Dark elements
      "signal-light": "hsl(221, 14%, 96%)", // Light elements
      white: "#ffffff",
      black: "#1b1b1b",
      gray: colors.gray,
      // Keep original colors for backward compatibility
      "bpr-purple": "#D264B6",
      "bpr-orange": "#FBB13C",
      "bpr-pink": "#FF499E",
      "bpr-blue": "#779BE7",
      "bpr-cyan": "#49B6FF",
      "bpr-code-gray": "#EAEAEA",
    },
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        code: ["Inconsolata", "Hack", "SF Mono", "Roboto Mono", "Source Code Pro", "Ubuntu Mono", "monospace"],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
        '7xl': '4.5rem',    // 72px
      },
      spacing: {
        'block': '1.5rem', // Bulma block spacing
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px - Bulma radius-small
        'DEFAULT': '0.375rem', // 6px - Bulma radius
        'md': '0.5rem',     // 8px - Bulma radius-medium
        'lg': '0.75rem',    // 12px - Bulma radius-large
        'full': '9999px',
      },
      transitionDuration: {
        'DEFAULT': '294ms', // Bulma duration
        'fast': '86ms',     // Bulma speed
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease-out', // Bulma easing
      },
      dropShadow: {
        qr: "0px 6.74227px 16.8557px rgba(0, 0, 0, 0.25)",
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
    },
  },
  plugins: [],
};

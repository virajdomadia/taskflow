import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10B981",
          hover: "#059669",
          active: "#047857",
          accent: "#3B82F6",
        },
        slate: {
          950: "#020617",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      spacing: {
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "80": "80px",
        "120": "120px",
        "160": "160px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(32px, 10vw, 80px)", { lineHeight: "1.1", fontWeight: "800" }],
        section: ["clamp(28px, 6vw, 48px)", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.4", fontWeight: "500" }],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "3xl": "32px",
        "2xl": "24px",
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};

export default config;

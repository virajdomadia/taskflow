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
          primary: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
        },
        gray: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      spacing: {
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "48": "48px",
        "80": "80px",
        "120": "120px",
      },
      fontSize: {
        hero: ["clamp(56px, 10vw, 72px)", { lineHeight: "1.1", fontWeight: "700" }],
        section: ["clamp(32px, 5vw, 40px)", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.4", fontWeight: "500" }],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;

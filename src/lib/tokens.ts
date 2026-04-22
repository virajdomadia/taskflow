/**
 * Design Tokens for TaskFlow
 * These are used for JS/TS logic, Framer Motion animations, 
 * and anywhere Tailwind classes aren't sufficient.
 */

export const COLORS = {
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
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
} as const;

export const SPACING = {
  base: 8,
  container: 24,
  section: {
    min: 80,
    max: 120,
  },
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.5,
  },
  easing: [0.4, 0, 0.2, 1], // ease-in-out
} as const;

export const LAYOUT = {
  maxContainerWidth: 1200,
} as const;

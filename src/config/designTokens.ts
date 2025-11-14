/**
 * Design tokens - Single source of truth for design system
 * Colors, typography, spacing, and other design constants
 */

export const COLORS = {
  // Primary colors
  primary: {
    dark: "#333333",
    medium: "#656565",
    light: "#EDE9E3",
  },
  // Accent colors
  accent: {
    rose: "#D4B2A7",
    beige: "#e7d7c9",
    pink: "#ff6b6b",
    pinkLight: "#ff8e8e",
  },
  // Semantic colors
  text: {
    primary: "#333333",
    secondary: "#666666",
    light: "#EDE9E3",
  },
  background: {
    white: "#ffffff",
    light: "#f8f9fa",
    dark: "#333333",
    gradient: {
      light: "linear-gradient(135deg, #fff5f5 0%, #fef7f0 100%)",
      pink: "linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)",
      lightPink: "linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)",
      gray: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    },
  },
  border: {
    light: "#e9ecef",
    medium: "#f8d7da",
    dark: "#333333",
  },
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    heading: "'Safira March', serif",
    body: "'Poppins', sans-serif",
    script: "'Brush Script MT', 'Pacifico', 'Comic Sans MS'",
    inter: "'Inter', sans-serif",
  },
  fontSize: {
    xs: "0.85rem",
    sm: "0.9rem",
    base: "1rem",
    lg: "1.1rem",
    xl: "1.2rem",
    "2xl": "1.4rem",
    "3xl": "1.5rem",
    "4xl": "1.8rem",
    "5xl": "2rem",
    "6xl": "2.5rem",
    "7xl": "3.5rem",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const SPACING = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
} as const;

export const BREAKPOINTS = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
} as const;

export const BORDER_RADIUS = {
  sm: "4px",
  md: "8px",
  lg: "15px",
  xl: "20px",
  full: "50%",
} as const;

export const SHADOWS = {
  sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
  md: "0 4px 8px rgba(0, 0, 0, 0.1)",
  lg: "0 8px 32px rgba(0, 0, 0, 0.1)",
  xl: "0 10px 30px rgba(0, 0, 0, 0.1)",
  pink: "0 2px 10px rgba(255, 107, 107, 0.3)",
  pinkHover: "0 4px 15px rgba(255, 107, 107, 0.4)",
} as const;

export const TRANSITIONS = {
  fast: "0.2s ease",
  base: "0.3s ease",
  slow: "0.6s ease-out",
} as const;


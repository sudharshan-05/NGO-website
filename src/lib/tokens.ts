/** Centralized design tokens — RULES.md brand system */
export const colors = {
  primary: "#2E7D32",
  primaryDark: "#1b5e20",
  secondary: "#F4B400",
  secondaryDark: "#e8a800",
  accent: "#4285F4",
  supporting: "#C8E6C9",
  background: "#FAFAF5",
  text: "#1F2937",
  textMuted: "rgba(31, 41, 55, 0.55)",
  darkBg: "#111816",
} as const;

export const layout = {
  maxWidth: "max-w-7xl",
  sectionPadding: "py-24",
  containerPadding: "px-6 md:px-10",
  gridGap: "gap-8",
  cardPadding: "p-6",
  largeCardPadding: "p-8",
} as const;

export const radius = {
  button: "rounded-full",
  card: "rounded-3xl",
  image: "rounded-2xl",
  input: "rounded-xl",
} as const;

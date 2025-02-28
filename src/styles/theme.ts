export const theme = {
  name: "light",
  palette: {
    white: "#fff",
    black: "#000",
  },
} as const;

export type ThemeType = typeof theme;

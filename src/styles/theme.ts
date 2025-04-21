export const theme = {
  name: "light",
  fontFamily: {
    title: "Didact Gothic",
    body: "Merriweather",
    code: "Fira Code",
  },
  palette: {
    white: "#fff",
    black: "#000",
  },
} as const;

export type ThemeType = typeof theme;

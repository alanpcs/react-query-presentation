export const theme = {
  name: "light",
  fontFamily: {
    title: '"Didact Gothic", sans-serif',
    body: '"Merriweather", serif',
    code: '"Fira Code", sans-serif',
    poke: '"Jersey 10", sans-serif',
  },
  palette: {
    white: "#fff",
    black: "#000",
  },
} as const;

export type ThemeType = typeof theme;

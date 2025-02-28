export const breakpoints = {
  xs: 0,
  sm: 360,
  md: 656,
  lg: 1024,
  xl: 1440,
} as const;

const mediaQueryUp = (minWidth: number) => `@media screen and (min-width: ${minWidth}px)`;
const mediaQueryDown = (maxWidth: number) => `@media screen and (max-width: ${maxWidth}px)`;
const mediaQueryOnly = (minWidth: number, maxWidth: number) =>
  `@media screen and (min-width: ${minWidth}px) and  (max-width: ${maxWidth}px)`;

export const media = {
  mobile: {
    /** min-width: 657*/
    up: mediaQueryUp(breakpoints.md + 1),
    /** width between: 361 and 656 */
    only: mediaQueryOnly(breakpoints.sm + 1, breakpoints.md),
    /** max-width: 360*/
    down: mediaQueryDown(breakpoints.sm),
  },
  tablet: {
    /** min-width: 1025*/
    up: mediaQueryUp(breakpoints.lg + 1),
    /** width between: 657 and 1024 */
    only: mediaQueryOnly(breakpoints.md + 1, breakpoints.lg),
    /** max-width: 656*/
    down: mediaQueryDown(breakpoints.md),
  },
  laptop: {
    /** min-width: 1441*/
    up: mediaQueryUp(breakpoints.xl + 1),
    /** width between: 1025 and 1440 */
    only: mediaQueryOnly(breakpoints.lg + 1, breakpoints.xl),
    /** max-width: 1024*/
    down: mediaQueryDown(breakpoints.lg),
  },
};

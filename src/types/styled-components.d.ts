import "styled-components";
import { ThemeType } from "../styles/theme";

declare module "styled-components" {
  /**
   * This adds complete theme support through the app's styled components
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}

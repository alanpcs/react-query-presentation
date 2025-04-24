import { Typography } from "../Typography/Typography";
import { StyledLoading } from "./PokeLoading.styles";

export const PokeLoading = () => {
  return (
    <StyledLoading>
      <img src="https://userstyles.org/style_screenshots/158452_after.gif" alt="Loading..." />
      <Typography variant="poke">Loading...</Typography>
    </StyledLoading>
  );
};

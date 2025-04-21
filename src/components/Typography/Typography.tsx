import styled from "styled-components";

type Variants = "title" | "body";
type Elements = "h1" | "h2" | "h3" | "span" | "p";
type Sizes = "sm" | "md" | "lg";
type TypographyProps = { variant?: Variants; element?: Elements; size?: Sizes };

export const Typography = (props: React.PropsWithChildren<TypographyProps>) => {
  const { element = "span", size = "md", variant = "body", children } = props;

  return (
    <StyledTypography as={element} $size={size} $variant={variant} $element={element}>
      {children}
    </StyledTypography>
  );
};

type FontSizeMap = {
  [V in Variants]: {
    [E in Elements]?: {
      [S in Sizes]?: string;
    };
  };
};

// Example values (you can adjust the actual sizes to fit your design)
const fontSizes: FontSizeMap = {
  title: {
    h1: {
      sm: "2rem",
      md: "2.5rem",
      lg: "3rem",
    },
    h2: {
      sm: "1.5rem",
      md: "2rem",
      lg: "2.5rem",
    },
    h3: {
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2rem",
    },
  },
  body: {
    p: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    span: {
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1rem",
    },
  },
};

const StyledTypography = styled.span<{ $size: Sizes; $variant: Variants; $element: Elements }>`
  font-family: ${({ theme, $variant }) => theme.fontFamily[$variant]};
  font-size: ${({ $variant, $element, $size }) =>
    fontSizes[$variant]?.[$element]?.[$size] || "1em"};
`;

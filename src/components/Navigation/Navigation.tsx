import { Link, useMatchRoute } from "@tanstack/react-router";
import { StyledLinks } from "./Navigation.styles";

const slides = [
  { route: "/", name: "Intro" },
  { route: "/about", name: "About" },
] as const satisfies { route: string; name: string }[];

export const Navigation = () => {
  const matchRoute = useMatchRoute();
  const currentSlideIndex = slides.findIndex((slide, index) => {
    return matchRoute({ to: slide.route });
  });
  const currentSlide = slides[currentSlideIndex];

  const hasPrevious = currentSlideIndex > 0;
  const hasNext = currentSlideIndex < slides.length - 1;
  const nextRoute = slides[hasNext ? currentSlideIndex + 1 : currentSlideIndex].route;
  const previousRoute = slides[hasPrevious ? currentSlideIndex - 1 : 0].route;

  return (
    <StyledLinks>
      {
        <Link to={previousRoute} disabled={!hasPrevious}>
          {"<"}
        </Link>
      }
      {slides.map((slide) => (
        <Link to={slide.route} key={slide.name}>
          {slide.name}
        </Link>
      ))}
      {
        <Link to={nextRoute} disabled={!hasNext}>
          {">"}
        </Link>
      }
    </StyledLinks>
  );
};

import { Link, useMatchRoute, useNavigate } from "@tanstack/react-router";
import { StyledLinks } from "./Navigation.styles";
import { useKeyUp } from "../../hooks/useKeyUp";
import { Typography } from "../Typography/Typography";
import { useState } from "react";

const slides = [
  { route: "/", name: "Oi" },
  { route: "/intro", name: "Intro" },
  { route: "/frontend-states", name: "Estados do frontend" },
  { route: "/demo-time", name: "Demo time" },
  { route: "/tanstack-query", name: "TanStack Query" },
  { route: "/pokedex-demo", name: "Demo" },
  { route: "/learn-more", name: "Mais conteúdos" },
  { route: "/questions", name: "Perguntas?" },
  { route: "/about-me", name: "Sobre" },
] as const satisfies { route: string; name: string }[];

export const Navigation = () => {
  const matchRoute = useMatchRoute();
  const navigate = useNavigate();
  const [isExtended, setIsExtended] = useState(true);
  const currentSlideIndex = slides.findIndex((slide) => {
    return matchRoute({ to: slide.route });
  });

  const hasPrevious = currentSlideIndex > 0;
  const hasNext = currentSlideIndex < slides.length - 1;
  const nextRoute = slides[hasNext ? currentSlideIndex + 1 : currentSlideIndex].route;
  const previousRoute = slides[hasPrevious ? currentSlideIndex - 1 : 0].route;

  useKeyUp("ArrowRight", () => navigate({ to: nextRoute }));
  useKeyUp("ArrowLeft", () => navigate({ to: previousRoute }));
  useKeyUp("ArrowDown", () => setIsExtended(true));
  useKeyUp("ArrowUp", () => setIsExtended(false));

  return (
    <StyledLinks $extended={isExtended}>
      {
        <Link to={previousRoute} disabled={!hasPrevious}>
          {"<"}
        </Link>
      }
      {slides.map((slide) => (
        <Link to={slide.route} key={slide.name}>
          <Typography>{isExtended ? slide.name : ""}</Typography>
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

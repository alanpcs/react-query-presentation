import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import styled from "styled-components";

export const Route = createFileRoute("/learn-more")({
  component: RouteComponent,
});

const moreInfo = [
  {
    title: "📘 Documentação oficial",
    link: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  {
    title: "🧪 Exemplos oficiais",
    link: "https://tanstack.com/query/latest/docs/framework/react/examples/basic",
  },
  {
    title: "🎥 [EN] 89m Primeiro vídeo / live que vi | Jason + Tan",
    link: "https://youtu.be/DocXo3gqGdI?si=3VrqLrNxbXo98aBg&t=755",
  },
  {
    title: "🎥 [EN] 11m Um recap | Theo - t3",
    link: "https://www.youtube.com/watch?v=vxkbf5QMA2g",
  },
  {
    title: "🎥 [EN] 18m As partes ruins do React Query | Dominik",
    link: "https://www.youtube.com/watch?v=8-RTNnn9GR8",
  },
];

function RouteComponent() {
  return (
    <CenteredTemplate header="Mais sobre React Query">
      <StyledLinkList>
        <ul>
          {moreInfo.map(({ link, title }) => (
            <li key={title}>
              <a href={link}>
                {title}: {link}
              </a>
            </li>
          ))}
        </ul>
      </StyledLinkList>
    </CenteredTemplate>
  );
}

const StyledLinkList = styled.nav`
  text-align: left;
  li {
    padding: 0.5rem;
  }
`;

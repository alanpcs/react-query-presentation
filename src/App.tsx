import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  StyledApp,
  LogoContainer,
  StyledButton,
  StyledCard,
  StyledText,
  GlobalStyles,
} from "./App.styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <GlobalStyles />
      <LogoContainer>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} alt="React logo" />
        </a>
      </LogoContainer>
      <h1>Vite + React</h1>
      <StyledCard>
        <StyledButton onClick={() => setCount((count) => count + 1)}>Count is {count}</StyledButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledCard>
      <StyledText>Click on the Vite and React logos to learn more</StyledText>
    </StyledApp>
  );
}

export default App;

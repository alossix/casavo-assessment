import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { StyledInnerContainer, StyledSection } from "./App.styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledSection>
        <StyledInnerContainer>
          <Header step={1} />
          <Main />
          <Footer />
        </StyledInnerContainer>
      </StyledSection>
    </ThemeProvider>
  );
};

export default App;

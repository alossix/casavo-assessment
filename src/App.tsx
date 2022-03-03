import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { StyledOuterContainer, StyledInnerContainer } from "./App.styles";

const cars = [
  {
    id: 1,
    title: "BMW i3",
    img: "https://codyhouse.co/demo/product-builder/img/product01_col01.jpg",
    price: 42400,
  },
  {
    id: 2,
    title: "BMW i8",
    img: "https://codyhouse.co/demo/product-builder/img/product02_col01.jpg",
    price: 140700,
  },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledOuterContainer>
        <StyledInnerContainer>
          <Header />
          <Main cars={cars} />
        </StyledInnerContainer>
        <Footer />
      </StyledOuterContainer>
    </ThemeProvider>
  );
};

export default App;

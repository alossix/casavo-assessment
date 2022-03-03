import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { StyledOuterContainer, StyledInnerContainer } from "./App.styles";

export type IOptionsProps = {
  id: number;
  title: string;
  img: string;
  colorCode: string;
  price: number;
};

export type ICarProps = {
  id: number;
  title: string;
  price: number;
  options: IOptionsProps[];
};

const cars: ICarProps[] = [
  {
    id: 1,
    title: "BMW i3",
    price: 42400,
    options: [
      {
        id: 1,
        title: "white",
        img: "https://codyhouse.co/demo/product-builder/img/product01_col01.jpg",
        colorCode: "#ffffff",
        price: 0,
      },
      {
        id: 2,
        title: "mineral grey",
        img: "https://codyhouse.co/demo/product-builder/img/product01_col02.jpg",
        colorCode: "#303539",
        price: 550,
      },
      {
        id: 3,
        title: "orange metallic",
        img: "https://codyhouse.co/demo/product-builder/img/product01_col03.jpg",
        colorCode: "#cf5a16",
        price: 550,
      },
    ],
  },
  {
    id: 2,
    title: "BMW i8",
    price: 140700,
    options: [
      {
        id: 1,
        title: "grey metallic",
        img: "https://codyhouse.co/demo/product-builder/img/product02_col01.jpg",
        colorCode: "#303539",
        price: 0,
      },
      {
        id: 2,
        title: "white perl metallic",
        img: "https://codyhouse.co/demo/product-builder/img/product02_col02.jpg",
        colorCode: "#d1d1d1",
        price: 1800,
      },
    ],
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

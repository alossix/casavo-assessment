import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { StyledOuterContainer, StyledInnerContainer } from "./App.styles";

export interface OptionsProps {
  id: number;
  title: string;
  img: string;
  colorCode: string;
  price: number;
}

export interface CarProps {
  id: number;
  title: string;
  price: number;
  options: OptionsProps[];
  accessories: AccessoriesProps[];
  description: string;
}

export interface AccessoriesProps {
  id: number;
  title: string;
  price: number;
}

const accessories: AccessoriesProps[] = [
  {
    id: 1,
    title: "BMW Laserlight",
    price: 6300,
  },
  {
    id: 2,
    title: "BMW Charging Station",
    price: 1080,
  },
  { id: 3, title: "BMW Maintenance Program Upgrade", price: 1895 },
  { id: 4, title: "1 Year BMW Maintenance Program Upgrade", price: 975 },
];

const cars: CarProps[] = [
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
    accessories: [accessories[1], accessories[2], accessories[3]],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
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
    accessories: [
      accessories[0],
      accessories[1],
      accessories[2],
      accessories[3],
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
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

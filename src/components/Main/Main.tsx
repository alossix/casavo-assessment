import DisplayShowcase from "../DisplayShowcase";
import { StyledMainContainer } from "./Main.styles";

type IMainProps = {
  cars: {
    id: number;
    title: string;
    img: string;
    price: number;
  }[];
};

const Main = ({ cars }: IMainProps) => {
  return (
    <StyledMainContainer>
      {cars.map((car) => (
        <DisplayShowcase
          key={car.id}
          h1Text={car.title}
          img={car.img}
          price={car.price}
        />
      ))}
    </StyledMainContainer>
  );
};
export default Main;

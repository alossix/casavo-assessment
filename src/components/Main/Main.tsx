import DisplayShowcase from "../DisplayShowcase";
import {
  StyledDisplayShowcaseContainer,
  StyledMainContainer,
} from "./Main.styles";

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
      <StyledDisplayShowcaseContainer>
        {cars.map((car) => (
          <DisplayShowcase
            key={car.id}
            h1Text={car.title}
            id={car.id}
            img={car.img}
            price={car.price}
          />
        ))}
      </StyledDisplayShowcaseContainer>
    </StyledMainContainer>
  );
};
export default Main;

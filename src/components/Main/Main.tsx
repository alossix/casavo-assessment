import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledDisplayShowcaseContainer,
  StyledMainContainer,
} from "./Main.styles";
import DisplayShowcase from "../DisplayShowcase";
import ColorSelector from "../ColorSelector";
import AccessoriesSelector from "../AccessoriesSelector";
import Summary from "../Summary";

type IMainProps = {
  cars: {
    id: number;
    title: string;
    img: string;
    price: number;
  }[];
};

const Main = ({ cars }: IMainProps) => {
  const { selectedCar, step } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();
  return (
    <StyledMainContainer>
      {step === 1 && (
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
      )}
      {step === 2 && <ColorSelector />}
      {step === 3 && <AccessoriesSelector />}
      {step === 4 && <Summary />}
    </StyledMainContainer>
  );
};
export default Main;

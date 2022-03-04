import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledDisplayShowcaseContainer,
  StyledMainContainer,
} from "./Main.styles";
import { CarProps } from "../../App";
import DisplayShowcase from "../DisplayShowcase";
import ColorSelector from "../ColorSelector";
import AccessoriesSelector from "../AccessoriesSelector";
import Summary from "../Summary";

type MainProps = {
  cars: CarProps[];
};

const Main = ({ cars }: MainProps) => {
  const { step } = useSelector((state: RootState) => state.builder);
  return (
    <StyledMainContainer>
      {step === 1 && (
        <StyledDisplayShowcaseContainer>
          {cars.map((car) => (
            <DisplayShowcase key={car.id} car={car} />
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

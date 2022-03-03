import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledDisplayShowcaseContainer,
  StyledMainContainer,
} from "./Main.styles";
import { ICarProps } from "../../App";
import DisplayShowcase from "../DisplayShowcase";
import ColorSelector from "../ColorSelector";
import AccessoriesSelector from "../AccessoriesSelector";
import Summary from "../Summary";

type IMainProps = {
  cars: ICarProps[];
};

const Main = ({ cars }: IMainProps) => {
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
      {step === 2 && <ColorSelector cars={cars} />}
      {step === 3 && <AccessoriesSelector />}
      {step === 4 && <Summary />}
    </StyledMainContainer>
  );
};
export default Main;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAlert, selectCar, selectCarReset } from "../../redux/builder";
import {
  StyledCheckButtonContainer,
  StyledCheckButton,
  StyledDisplayContainer,
  StyledDisplayContainerTitle,
  StyledImg,
  StyledPriceSpan,
} from "./DisplayShowcase.styles";
import Checkmark from "../../icons/Checkmark";
import { ICarProps } from "../../App";

type IDisplayShowcaseProps = {
  car: ICarProps;
};

const displayPriceString = (price: number) => {
  return price
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    })
    .replace(",", ".");
};

const DisplayShowcase = ({ car }: IDisplayShowcaseProps) => {
  const { id, title, price, options } = car;
  const { selectedCar, colorSelected } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();

  return (
    <StyledDisplayContainer
      checked={selectedCar.id === id}
      onClick={() => {
        selectedCar.id === id
          ? dispatch(selectCarReset())
          : dispatch(selectCar(car));
        dispatch(setAlert(false));
      }}
    >
      <StyledDisplayContainerTitle>{title}</StyledDisplayContainerTitle>
      <StyledImg
        src={colorSelected ? selectedCar.options[0].img : options[0].img}
      />
      <StyledPriceSpan>from {displayPriceString(price)}</StyledPriceSpan>
      <StyledCheckButtonContainer>
        <StyledCheckButton checked={selectedCar.id === id}>
          {selectedCar.id === id && <Checkmark />}
        </StyledCheckButton>
      </StyledCheckButtonContainer>
    </StyledDisplayContainer>
  );
};
export default DisplayShowcase;

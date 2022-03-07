import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setAlert,
  selectCar,
  selectCarReset,
  setTotalPrice,
} from "../../redux/builder";
import {
  StyledCheckButtonContainer,
  StyledCheckButton,
  StyledDisplayContainer,
  StyledDisplayContainerTitle,
  StyledImg,
  StyledPriceSpan,
} from "./DisplayShowcase.styles";
import Checkmark from "../../icons/Checkmark";
import { CarProps } from "../../App";

type DisplayShowcaseProps = {
  car: CarProps;
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

const DisplayShowcase = ({ car }: DisplayShowcaseProps) => {
  const { id, title, price } = car;
  const { selectedModel } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  const carSelectHandler = (id: number) => {
    if (selectedModel.id === id) {
      dispatch(selectCarReset());
      dispatch(setTotalPrice(0));
    } else {
      dispatch(selectCarReset());
      dispatch(selectCar(car));
      dispatch(setTotalPrice(car.price));
    }
    dispatch(setAlert(false));
  };

  return (
    <StyledDisplayContainer
      checked={selectedModel.id === id}
      onClick={() => carSelectHandler(id)}
    >
      <StyledDisplayContainerTitle>{title}</StyledDisplayContainerTitle>
      <StyledImg src={car.options[0].img} alt={car.title} />
      <StyledPriceSpan>from {displayPriceString(price)}</StyledPriceSpan>
      <StyledCheckButtonContainer>
        <StyledCheckButton
          aria-label={car.title}
          checked={selectedModel.id === id}
        >
          {selectedModel.id === id && <Checkmark />}
        </StyledCheckButton>
      </StyledCheckButtonContainer>
    </StyledDisplayContainer>
  );
};
export default DisplayShowcase;

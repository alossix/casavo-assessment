import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAlert, selectCar } from "../../redux/builder";
import {
  StyledCheckButtonContainer,
  StyledCheckButton,
  StyledDisplayContainer,
  StyledDisplayContainerTitle,
  StyledImg,
  StyledPriceSpan,
} from "./DisplayShowcase.styles";
import Checkmark from "../../icons/Checkmark";

type IDisplayShowcaseProps = {
  h1Text: string;
  id: number;
  img: string;
  price: number;
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

const DisplayShowcase = ({ h1Text, id, img, price }: IDisplayShowcaseProps) => {
  const { selectedCar } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();
  return (
    <StyledDisplayContainer
      checked={selectedCar.id === id}
      onClick={() => {
        selectedCar.id === id
          ? dispatch(selectCar({ id: 0, title: "", img: "", price: 0 }))
          : dispatch(selectCar({ id, title: h1Text, img, price }));
        dispatch(setAlert(false));
      }}
    >
      <StyledDisplayContainerTitle>{h1Text}</StyledDisplayContainerTitle>
      <StyledImg src={img} />
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

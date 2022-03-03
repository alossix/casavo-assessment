import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledSelectedCarImageContainer,
  StyledTotalPriceContainer,
  StyledTotalTitle,
  StyledTotalPrice,
  StyledTotalPriceOuterContainer,
} from "./TotalPrice.styles";

const TotalPrice = () => {
  const { selectedCar, colorSelected, totalPrice } = useSelector(
    (state: RootState) => state.builder
  );

  const [displaySrc] = selectedCar.options.filter(
    (option) => option.id === colorSelected
  );
  console.log(displaySrc);

  return (
    <StyledTotalPriceOuterContainer>
      <StyledSelectedCarImageContainer active={selectedCar.id !== 0}>
        {selectedCar.id !== 0 && (
          <img src={displaySrc.img} alt={selectedCar.title} />
        )}
      </StyledSelectedCarImageContainer>
      <StyledTotalPriceContainer>
        <StyledTotalTitle>Total</StyledTotalTitle>
        <StyledTotalPrice>
          {totalPrice
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })
            .replace(",", "")}
        </StyledTotalPrice>
      </StyledTotalPriceContainer>
    </StyledTotalPriceOuterContainer>
  );
};
export default TotalPrice;

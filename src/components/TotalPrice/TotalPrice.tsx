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
  const selectedCar = useSelector(
    (state: RootState) => state.builder.selectedCar
  );
  const totalPrice = selectedCar.price;

  return (
    <StyledTotalPriceOuterContainer>
      <StyledSelectedCarImageContainer active={selectedCar.id !== 0}>
        <img src={selectedCar.options[0].img} alt={selectedCar.title} />
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

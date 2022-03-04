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
  const { selectedAccessories, selectedModel, colorSelected, totalPrice } =
    useSelector((state: RootState) => state.builder);

  const [displaySrc] = selectedModel.options.filter(
    (option) => option.id === colorSelected || option.id === 0
  );

  const accessoriesPrices =
    selectedAccessories.length >= 1
      ? selectedAccessories
          .map((accessory) => accessory.price)
          .reduce((acc, currVal) => acc + currVal)
      : 0;

  const displayPrice = totalPrice + displaySrc?.price + accessoriesPrices;

  return (
    <StyledTotalPriceOuterContainer>
      <StyledSelectedCarImageContainer active={selectedModel.id !== 0}>
        {selectedModel.id !== 0 && (
          <img src={displaySrc.img} alt={selectedModel.title} />
        )}
      </StyledSelectedCarImageContainer>
      <StyledTotalPriceContainer>
        <StyledTotalTitle>Total</StyledTotalTitle>
        <StyledTotalPrice>
          {displayPrice
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

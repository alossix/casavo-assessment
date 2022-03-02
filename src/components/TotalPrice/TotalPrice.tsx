import {
  StyledTotalPriceContainer,
  StyledTotalTitle,
  StyledTotalPrice,
} from "./TotalPrice.styles";
type ITotalPriceProps = {
  totalPrice: number | undefined;
};
const TotalPrice = ({ totalPrice }: ITotalPriceProps) => {
  return (
    <StyledTotalPriceContainer>
      <StyledTotalTitle>Total</StyledTotalTitle>
      <StyledTotalPrice>
        {!totalPrice
          ? `$0`
          : totalPrice
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })
              .replace(",", ".")}
      </StyledTotalPrice>
    </StyledTotalPriceContainer>
  );
};
export default TotalPrice;

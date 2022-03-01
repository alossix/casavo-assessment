import { useState } from "react";
import {
  StyledCheckButton,
  StyledDisplayContainer,
  StyledDisplayContainerTitle,
  StyledImg,
  StyledPriceSpan,
} from "./DisplayShowcase.styles";

type IDisplayShowcaseProps = {
  h1Text: string;
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

const DisplayShowcase = ({ h1Text, img, price }: IDisplayShowcaseProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <StyledDisplayContainer>
      <StyledDisplayContainerTitle>{h1Text}</StyledDisplayContainerTitle>
      <StyledImg src={img} />
      <StyledPriceSpan>from {displayPriceString(price)}</StyledPriceSpan>
      <StyledCheckButton
        onClick={() => setChecked(!checked)}
        checked={checked}
      ></StyledCheckButton>
    </StyledDisplayContainer>
  );
};
export default DisplayShowcase;

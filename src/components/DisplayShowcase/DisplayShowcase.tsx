import { StyledDisplayContainer, StyledImg } from "./DisplayShowcase.styles";

type IDisplayShowcaseProps = {
  h1Text: string;
  img: string;
  price: number;
};

const DisplayShowcase = ({ h1Text, img, price }: IDisplayShowcaseProps) => {
  return (
    <StyledDisplayContainer>
      <h1>{h1Text}</h1>
      <StyledImg src={img} />
      <p>from {price}</p>
    </StyledDisplayContainer>
  );
};
export default DisplayShowcase;

import ButtonPrimary from "../ButtonPrimary";
import { StyledHeaderContainer, StyledH1 } from "./Header.styles";

type IHeaderProps = {
  step: number;
};

const Header = ({ step }: IHeaderProps) => {
  return (
    <>
      <StyledHeaderContainer>
        <StyledH1>Select Model</StyledH1>
        <p>Step {step} of 4</p>
      </StyledHeaderContainer>
      <ButtonPrimary>Article & Download</ButtonPrimary>
    </>
  );
};
export default Header;

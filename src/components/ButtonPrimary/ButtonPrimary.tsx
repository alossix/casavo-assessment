import { ReactNode } from "react";
import {
  StyledArrow,
  StyledButtonPrimary,
  StyledButtonTextContainer,
} from "./ButtonPrimary.styles";

type ButtonPrimaryProps = {
  children: ReactNode;
};

const ButtonPrimary = ({ children }: ButtonPrimaryProps) => {
  return (
    <StyledButtonPrimary>
      <StyledArrow />
      <StyledButtonTextContainer>{children}</StyledButtonTextContainer>
    </StyledButtonPrimary>
  );
};
export default ButtonPrimary;

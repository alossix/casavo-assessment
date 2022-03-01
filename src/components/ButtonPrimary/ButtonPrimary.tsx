import { ReactNode } from "react";
import {
  StyledArrow,
  StyledButtonPrimary,
  StyledButtonTextContainer,
} from "./ButtonPrimary.styles";

type IButtonPrimaryProps = {
  children: ReactNode;
};

const ButtonPrimary = ({ children }: IButtonPrimaryProps) => {
  return (
    <StyledButtonPrimary>
      <StyledArrow />
      <StyledButtonTextContainer>{children}</StyledButtonTextContainer>
    </StyledButtonPrimary>
  );
};
export default ButtonPrimary;

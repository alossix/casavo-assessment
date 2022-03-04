import { ReactNode } from "react";
import { StyledAlertBoxContainer, StyledAlertBox } from "./AlertBox.styles";

type AlertBoxProps = {
  children: ReactNode;
};

const AlertBox = ({ children }: AlertBoxProps) => {
  return (
    <StyledAlertBoxContainer>
      <StyledAlertBox>{children}</StyledAlertBox>
    </StyledAlertBoxContainer>
  );
};
export default AlertBox;

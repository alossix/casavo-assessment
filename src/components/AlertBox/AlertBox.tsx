import { ReactNode } from "react";
import { StyledAlertBoxContainer, StyledAlertBox } from "./AlertBox.styles";

type IAlertBoxProps = {
  children: ReactNode;
};

const AlertBox = ({ children }: IAlertBoxProps) => {
  return (
    <StyledAlertBoxContainer>
      <StyledAlertBox>{children}</StyledAlertBox>
    </StyledAlertBoxContainer>
  );
};
export default AlertBox;

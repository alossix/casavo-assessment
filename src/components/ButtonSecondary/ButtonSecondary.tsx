import { ReactNode } from "react";
import Arrow from "../../icons/Arrow";
import { StyledButtonSecondary } from "./ButtonSecondary.styles";

type IButtonSecondaryProps = {
  children: ReactNode;
};

const ButtonSecondary = ({ children }: IButtonSecondaryProps) => {
  return (
    <StyledButtonSecondary>
      {children}
      <Arrow />
    </StyledButtonSecondary>
  );
};
export default ButtonSecondary;

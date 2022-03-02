import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Arrow from "../../icons/Arrow";
import { StyledButtonSecondary } from "./ButtonSecondary.styles";

type IButtonSecondaryProps = {
  children: ReactNode;
};

const ButtonSecondary = ({ children }: IButtonSecondaryProps) => {
  const selectedCar = useSelector(
    (state: RootState) => state.builder.selectedCar
  );
  return (
    <StyledButtonSecondary disabled={selectedCar.id === 0}>
      {children}
      <Arrow />
    </StyledButtonSecondary>
  );
};
export default ButtonSecondary;

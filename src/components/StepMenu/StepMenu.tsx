import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledStepContainer,
  StyledStepMenuHeader,
  StyledStepTitle,
} from "./StepMenu.styles";

type IStepMenuProps = {
  step: number;
};

const StepMenu = ({ step }: IStepMenuProps) => {
  const selectedCar = useSelector(
    (state: RootState) => state.builder.selectedCar
  );
  const disabled = selectedCar.id === 0;

  return (
    <StyledStepMenuHeader>
      <StyledStepContainer highlighted={step === 1}>
        <StyledStepTitle>Models</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer highlighted={step === 2}>
        <StyledStepTitle disabled={disabled}>Colors</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer highlighted={step === 3}>
        <StyledStepTitle disabled={disabled}>Accessories</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer highlighted={step === 4}>
        <StyledStepTitle disabled={disabled}>Summary</StyledStepTitle>
      </StyledStepContainer>
    </StyledStepMenuHeader>
  );
};
export default StepMenu;

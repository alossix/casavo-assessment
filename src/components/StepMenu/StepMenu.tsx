import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setStep } from "../../redux/builder";
import {
  StyledStepContainer,
  StyledStepMenuHeader,
  StyledStepTitle,
} from "./StepMenu.styles";

const StepMenu = () => {
  const { selectedCar, step } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();

  const disabled = selectedCar.id === 0;

  const handleStepMenuClick = (stepNum: number) => {
    if (disabled) {
      console.log(`click, no model chosen`);
    } else {
      dispatch(setStep(stepNum));
      console.log(`click, new step`);
    }
  };

  return (
    <StyledStepMenuHeader>
      <StyledStepContainer
        onClick={() => handleStepMenuClick(1)}
        highlighted={step === 1}
      >
        <StyledStepTitle>Models</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer
        onClick={() => handleStepMenuClick(2)}
        highlighted={step === 2}
      >
        <StyledStepTitle disabled={disabled}>Colors</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer
        onClick={() => handleStepMenuClick(3)}
        highlighted={step === 3}
      >
        <StyledStepTitle disabled={disabled}>Accessories</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer
        onClick={() => handleStepMenuClick(3)}
        highlighted={step === 4}
      >
        <StyledStepTitle disabled={disabled}>Summary</StyledStepTitle>
      </StyledStepContainer>
    </StyledStepMenuHeader>
  );
};
export default StepMenu;

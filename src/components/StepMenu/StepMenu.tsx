import {
  StyledStepContainer,
  StyledStepMenuHeader,
  StyledStepTitle,
} from "./StepMenu.styles";

type IStepMenuProps = {
  step: number;
};

const StepMenu = ({ step }: IStepMenuProps) => {
  return (
    <StyledStepMenuHeader>
      <StyledStepContainer highlighted={step === 1}>
        <StyledStepTitle>Models</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer highlighted={step === 2}>
        <StyledStepTitle>Colors</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer highlighted={step === 3}>
        <StyledStepTitle>Accessories</StyledStepTitle>
      </StyledStepContainer>
      <StyledStepContainer highlighted={step === 4}>
        <StyledStepTitle>Summary</StyledStepTitle>
      </StyledStepContainer>
    </StyledStepMenuHeader>
  );
};
export default StepMenu;

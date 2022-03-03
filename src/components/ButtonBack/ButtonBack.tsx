import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setStep } from "../../redux/builder";
import Arrow from "../../icons/Arrow";
import { StyledButtonBack, StyledButtonBackText } from "./ButtonBack.styles";

const ButtonBack = () => {
  const { step } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  const handleButtonSecondaryClick = () => {
    if (step > 1) {
      dispatch(setStep(step - 1));
    }
  };
  return (
    <StyledButtonBack onClick={() => handleButtonSecondaryClick()}>
      <Arrow />
      <StyledButtonBackText>
        {step === 2 && "Models"}
        {step === 3 && "Colors"}
        {step === 4 && "Accessories"}
      </StyledButtonBackText>
    </StyledButtonBack>
  );
};
export default ButtonBack;

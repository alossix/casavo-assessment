import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setAlert, setStep } from "../../redux/builder";
import Arrow from "../../icons/Arrow";
import { StyledButtonSecondary } from "./ButtonSecondary.styles";

const ButtonSecondary = (): JSX.Element => {
  const { selectedModel, step } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();

  const handleButtonSecondaryClick = () => {
    if (selectedModel.id === 0) {
      dispatch(setAlert(true));
    } else {
      if (step <= 3) {
        dispatch(setStep(step + 1));
      }
    }
  };
  return (
    <StyledButtonSecondary
      onClick={() => handleButtonSecondaryClick()}
      disabledColor={selectedModel.id === 0}
    >
      {step === 1 && "Colors"}
      {step === 2 && "Accessories"}
      {step === 3 && "Summary"}
      {step === 4 && "Buy Now"}
      <Arrow />
    </StyledButtonSecondary>
  );
};
export default ButtonSecondary;

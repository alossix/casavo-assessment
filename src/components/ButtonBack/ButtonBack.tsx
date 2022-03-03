import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setStep } from "../../redux/builder";
import Arrow from "../../icons/Arrow";
import { StyledButtonBack } from "./ButtonBack.styles";

const ButtonBack = () => {
  const { step } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  const handleButtonSecondaryClick = () => {
    console.log(`back button click`);
    if (step > 1) {
      dispatch(setStep(step - 1));
    }
  };
  return (
    <StyledButtonBack onClick={() => handleButtonSecondaryClick()}>
      <Arrow />
    </StyledButtonBack>
  );
};
export default ButtonBack;

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { setTotalPrice } from "../../redux/builder";
import { AccessoriesProps } from "../../App";
import Checkmark from "../../icons/Checkmark";
import {
  StyledAccessoryContainer,
  StyledAccessorySubContainer,
  StyledCheckButtonContainer,
  StyledCheckButton,
} from "./AccessoriesSelector.styles";

type AccessoryOptionProps = {
  accessory: AccessoriesProps;
};

const AccessoryOption = ({ accessory }: AccessoryOptionProps) => {
  const [checked, setChecked] = useState(false);
  const { totalPrice } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  const checkButtonClickHandler = () => {
    if (checked) {
      setChecked(() => false);
      dispatch(setTotalPrice(totalPrice - accessory.price));
    } else {
      setChecked(() => true);
      dispatch(setTotalPrice(totalPrice + accessory.price));
    }
  };
  return (
    <StyledAccessoryContainer
      checked={checked}
      onClick={() => checkButtonClickHandler()}
    >
      {accessory.title}
      <StyledAccessorySubContainer>
        {accessory.price
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })
          .replace(",", ".")}
        <StyledCheckButtonContainer>
          <StyledCheckButton checked={checked}>
            {checked && <Checkmark />}
          </StyledCheckButton>
        </StyledCheckButtonContainer>
      </StyledAccessorySubContainer>
    </StyledAccessoryContainer>
  );
};
export default AccessoryOption;

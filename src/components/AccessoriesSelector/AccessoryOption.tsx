import { useState } from "react";
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
  const checkButtonClickHandler = () => {
    setChecked(() => !checked);
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

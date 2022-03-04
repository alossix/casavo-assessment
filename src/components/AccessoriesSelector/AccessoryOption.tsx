import { useState } from "react";
import { AccessoriesProps } from "../../App";
import { StyledCheckButton } from "../DisplayShowcase/DisplayShowcase.styles";
import {
  StyledAccessoryContainer,
  StyledAccessorySubContainer,
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
        <StyledCheckButton checked={checked} />
      </StyledAccessorySubContainer>
    </StyledAccessoryContainer>
  );
};
export default AccessoryOption;

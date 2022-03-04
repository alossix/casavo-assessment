import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setColorSelected } from "../../redux/builder";
import { OptionsProps } from "../../App";
import {
  StyledColorButtonContainer,
  StyledColorButton,
} from "./ButtonColorSelector.styles";
import InfoBubble from "../InfoBubble";

type ButtonColorSelectorProps = {
  option: OptionsProps;
};

const ButtonColorSelector = ({
  option,
}: ButtonColorSelectorProps): JSX.Element => {
  const [infoBubbleVisible, setInfoBubbleVisible] = useState(false);
  const { colorSelected } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  const handleColorSelect = (option: OptionsProps) => {
    dispatch(setColorSelected(option.id));
  };

  return (
    <StyledColorButtonContainer>
      <StyledColorButton
        key={option.id}
        highlighted={colorSelected === option.id}
        colorCode={option.colorCode}
        onClick={() => handleColorSelect(option)}
        onMouseEnter={() => setInfoBubbleVisible(() => true)}
        onMouseLeave={() => setInfoBubbleVisible(() => false)}
      ></StyledColorButton>
      <InfoBubble visible={infoBubbleVisible} option={option} />
    </StyledColorButtonContainer>
  );
};
export default ButtonColorSelector;

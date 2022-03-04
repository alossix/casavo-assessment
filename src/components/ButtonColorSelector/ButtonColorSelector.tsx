import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setColorSelected } from "../../redux/builder";
import { OptionsProps } from "../../App";
import { StyledColorButton } from "./ButtonColorSelector.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import InfoBubble from "../InfoBubble";

type ButtonColorSelectorProps = {
  option: OptionsProps;
};

const ButtonColorSelector = ({
  option,
}: ButtonColorSelectorProps): JSX.Element => {
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const [infoBubbleVisible, setInfoBubbleVisible] = useState(false);
  const { colorSelected } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  const handleColorSelect = (option: OptionsProps) => {
    dispatch(setColorSelected(option.id));
    setInfoBubbleVisible(() => !infoBubbleVisible);
  };

  const clickOutsideHandler = () => {
    setInfoBubbleVisible(() => false);
  };

  useOnClickOutside(bubbleRef, clickOutsideHandler);

  return (
    <>
      <StyledColorButton
        key={option.id}
        highlighted={colorSelected === option.id}
        colorCode={option.colorCode}
        onClick={() => handleColorSelect(option)}
        ref={bubbleRef}
      >
        <InfoBubble visible={infoBubbleVisible} option={option} />
      </StyledColorButton>
    </>
  );
};
export default ButtonColorSelector;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setColorSelected } from "../../redux/builder";
import {
  StyledColorSelectorContainer,
  StyledColorSelectorImgContainer,
  StyledColorButtonContainer,
  StyledColorButton,
} from "./ColorSelector.styles";
import { OptionsProps } from "../../App";

const ColorSelector = () => {
  const { selectedCar, colorSelected } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();

  const [displaySrc] = selectedCar.options.filter(
    (option) => option.id === colorSelected
  );

  const handleColorSelect = (option: OptionsProps) => {
    dispatch(setColorSelected(option.id));
  };

  return (
    <StyledColorSelectorContainer>
      <StyledColorSelectorImgContainer>
        <img src={displaySrc.img} alt={displaySrc.title} />
      </StyledColorSelectorImgContainer>
      <StyledColorButtonContainer>
        {selectedCar.options.map((option) => (
          <StyledColorButton
            key={option.id}
            highlighted={colorSelected === option.id}
            colorCode={option.colorCode}
            onClick={() => handleColorSelect(option)}
          />
        ))}
      </StyledColorButtonContainer>
    </StyledColorSelectorContainer>
  );
};
export default ColorSelector;

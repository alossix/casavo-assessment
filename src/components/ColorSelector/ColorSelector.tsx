import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setColorSelected, setTotalPrice } from "../../redux/builder";
import {
  StyledColorSelectorContainer,
  StyledColorSelectorImgContainer,
  StyledColorButtonContainer,
  StyledColorButton,
} from "./ColorSelector.styles";
import { IOptionsProps } from "../../App";

const ColorSelector = () => {
  const { selectedCar, colorSelected, totalPrice } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();

  const [displaySrc] = selectedCar.options.filter(
    (option) => option.id === colorSelected
  );

  const handleColorSelect = (option: IOptionsProps) => {
    dispatch(setColorSelected(option.id));
    dispatch(setTotalPrice(totalPrice + option.price));
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

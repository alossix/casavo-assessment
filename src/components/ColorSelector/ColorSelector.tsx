import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setColorSelected } from "../../redux/builder";
import {
  StyledColorSelectorContainer,
  StyledColorSelectorImgContainer,
  StyledColorButtonContainer,
  StyledColorButton,
} from "./ColorSelector.styles";
import { ICarProps, IOptionsProps } from "../../App";

type IColorSelectorProps = {
  cars: ICarProps[];
};

const ColorSelector = ({ cars }: IColorSelectorProps) => {
  const { selectedCar, colorSelected } = useSelector(
    (state: RootState) => state.builder
  );
  const dispatch = useDispatch();

  const handleColorSelect = (option: IOptionsProps) => {
    dispatch(setColorSelected(option.id));
  };
  return (
    <StyledColorSelectorContainer>
      <StyledColorSelectorImgContainer>
        <img
          src={selectedCar.options[0].img}
          alt={selectedCar.options[0].title}
        />
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

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledColorSelectorContainer,
  StyledColorSelectorImgContainer,
  StyledColorButtonContainer,
} from "./ColorSelector.styles";
import ButtonColorSelector from "../ButtonColorSelector";

const ColorSelector = () => {
  const { selectedCar, colorSelected } = useSelector(
    (state: RootState) => state.builder
  );

  const [displaySrc] = selectedCar.options.filter(
    (option) => option.id === colorSelected
  );

  return (
    <StyledColorSelectorContainer>
      <StyledColorSelectorImgContainer>
        <img src={displaySrc.img} alt={displaySrc.title} />
      </StyledColorSelectorImgContainer>
      <StyledColorButtonContainer>
        {selectedCar.options.map((option) => (
          <ButtonColorSelector option={option} />
        ))}
      </StyledColorButtonContainer>
    </StyledColorSelectorContainer>
  );
};
export default ColorSelector;

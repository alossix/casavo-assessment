import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledColorSelectorContainer,
  StyledColorSelectorImgContainer,
  StyledColorButtonContainer,
} from "./ColorSelector.styles";
import ButtonColorSelector from "../ButtonColorSelector";

const ColorSelector = () => {
  const { selectedModel, colorSelected } = useSelector(
    (state: RootState) => state.builder
  );

  const [displaySrc] = selectedModel.options.filter(
    (option) => option.id === colorSelected
  );

  return (
    <StyledColorSelectorContainer>
      <StyledColorSelectorImgContainer>
        <img src={displaySrc.img} alt={displaySrc.title} />
      </StyledColorSelectorImgContainer>
      <StyledColorButtonContainer>
        {selectedModel.options.map((option) => (
          <ButtonColorSelector key={option.id} option={option} />
        ))}
      </StyledColorButtonContainer>
    </StyledColorSelectorContainer>
  );
};
export default ColorSelector;

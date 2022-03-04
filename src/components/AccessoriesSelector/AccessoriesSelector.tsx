import { useSelector } from "react-redux";
import { AccessoryOption } from ".";
import { RootState } from "../../redux/store";
import { StyledAccessoriesContainer } from "./AccessoriesSelector.styles";

const AccessoriesSelector = () => {
  const { selectedModel } = useSelector((state: RootState) => state.builder);

  return (
    <StyledAccessoriesContainer>
      {selectedModel.accessories.map((accessory) => (
        <AccessoryOption key={accessory.id} accessory={accessory} />
      ))}
    </StyledAccessoriesContainer>
  );
};
export default AccessoriesSelector;

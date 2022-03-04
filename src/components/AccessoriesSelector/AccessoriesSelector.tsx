import { useSelector } from "react-redux";
import { AccessoryOption } from ".";
import { RootState } from "../../redux/store";
import { StyledAccessoriesContainer } from "./AccessoriesSelector.styles";

const AccessoriesSelector = () => {
  const { selectedCar } = useSelector((state: RootState) => state.builder);

  return (
    <StyledAccessoriesContainer>
      {selectedCar.accessories.map((accessory) => (
        <AccessoryOption key={accessory.id} accessory={accessory} />
      ))}
    </StyledAccessoriesContainer>
  );
};
export default AccessoriesSelector;

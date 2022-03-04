import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledSummaryContainer,
  StyledSection,
  StyledSectionDivider,
  StyledSectionTitle,
  StyledSummaryImgContainer,
  StyledModelTitle,
  StyledModelDescription,
  StyledColorButtonContainer,
  StyledColorButton,
  StyledColorButtonDescription,
  StyledAccessoriesContainer,
} from "./Summary.styles";

const Summary = () => {
  const { selectedAccessories, selectedModel, colorSelected } = useSelector(
    (state: RootState) => state.builder
  );

  const [displaySrc] = selectedModel.options.filter(
    (option) => option.id === colorSelected
  );
  console.log(selectedAccessories);
  return (
    <StyledSummaryContainer>
      <StyledSection id="summary-model">
        <StyledSectionDivider />
        <StyledSectionTitle>Model</StyledSectionTitle>
        <StyledSummaryImgContainer>
          <img src={displaySrc.img} alt={selectedModel.title} />
        </StyledSummaryImgContainer>
        <StyledModelTitle>{selectedModel.title}</StyledModelTitle>
        <StyledModelDescription>
          {selectedModel.description}
        </StyledModelDescription>
      </StyledSection>
      <StyledSection id="summary-color">
        <StyledSectionDivider />
        <StyledSectionTitle>Color</StyledSectionTitle>
        <StyledColorButtonContainer>
          <StyledColorButton colorCode={displaySrc.colorCode} />
          <StyledColorButtonDescription>
            {displaySrc.title}
            {" - "}
            {displaySrc.price
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })
              .replace(",", ".")}
          </StyledColorButtonDescription>
        </StyledColorButtonContainer>
      </StyledSection>
      <StyledSection id="summary-accessories">
        <StyledSectionDivider />
        <StyledSectionTitle>Accessories</StyledSectionTitle>
        <StyledAccessoriesContainer>
          {selectedAccessories.length === 0 ? (
            <li>No Accessories selected;</li>
          ) : (
            <>
              {selectedAccessories.map((selectedAccessory) => (
                <li key={selectedAccessory.id}>{selectedAccessory.title}</li>
              ))}
            </>
          )}
        </StyledAccessoriesContainer>
      </StyledSection>
    </StyledSummaryContainer>
  );
};
export default Summary;

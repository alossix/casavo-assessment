import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useWindowSize from "../../hooks/useWindowSize";
import ButtonPrimary from "../ButtonPrimary";
import {
  StyledHeaderContainer,
  StyledMobileH1,
  StyledDesktopH1,
  StyledStepText,
  StyledMobileInnerContainer,
  StyledDesktopInnerContainer,
} from "./Header.styles";
import StepMenu from "../StepMenu";

const Header = () => {
  const { step } = useSelector((state: RootState) => state.builder);
  const { width } = useWindowSize();
  return (
    <>
      <StyledHeaderContainer>
        {width < 1024 && (
          <>
            <StyledMobileInnerContainer>
              <StyledMobileH1>
                {step === 1 && "Select Model"}
                {step === 2 && "Select Color"}
                {step === 3 && "Accessories"}
                {step === 4 && "Summary"}
              </StyledMobileH1>
              <StyledStepText>Step {step} of 4</StyledStepText>
            </StyledMobileInnerContainer>
            {step === 1 && <ButtonPrimary>Article & Download</ButtonPrimary>}
          </>
        )}
        {width >= 1024 && (
          <>
            <StyledDesktopInnerContainer>
              <ButtonPrimary aria-label="Article and Download">
                Article & Download
              </ButtonPrimary>
              <StyledDesktopH1>Product Builder</StyledDesktopH1>
            </StyledDesktopInnerContainer>
            <StepMenu />
          </>
        )}
      </StyledHeaderContainer>
    </>
  );
};
export default Header;

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
  const size = useWindowSize({ width: 0, height: 0 });
  return (
    <>
      <StyledHeaderContainer>
        {size.width < 1024 && (
          <>
            <StyledMobileInnerContainer>
              <StyledMobileH1>Select Model</StyledMobileH1>
              <StyledStepText>Step {step} of 4</StyledStepText>
            </StyledMobileInnerContainer>
            <ButtonPrimary>Article & Download</ButtonPrimary>
          </>
        )}
        {size.width >= 1024 && (
          <>
            <StyledDesktopInnerContainer>
              <ButtonPrimary>Article & Download</ButtonPrimary>
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

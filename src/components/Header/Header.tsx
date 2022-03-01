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

type IHeaderProps = {
  step: number;
};

const Header = ({ step }: IHeaderProps) => {
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
          <StyledDesktopInnerContainer>
            <ButtonPrimary>Article & Download</ButtonPrimary>
            <StyledDesktopH1>Product Builder</StyledDesktopH1>
          </StyledDesktopInnerContainer>
        )}
      </StyledHeaderContainer>
    </>
  );
};
export default Header;
